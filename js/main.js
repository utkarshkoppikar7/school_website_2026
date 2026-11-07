(() => {
  const root = document.documentElement;
  root.classList.add("js");

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Header shadow and compact mode after scroll
  const header = document.querySelector(".site-header");
  if (header) {
    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Mobile nav
  const toggle = document.querySelector(".nav-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && document.body.classList.contains("nav-open")) {
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  // Stagger children: data-stagger on a parent sets --delay on each [data-reveal] child
  document.querySelectorAll("[data-stagger]").forEach((group) => {
    const step = parseFloat(group.dataset.stagger) || 0.12;
    group.querySelectorAll("[data-reveal]").forEach((el, i) => {
      el.style.setProperty("--delay", `${i * step}s`);
    });
  });

  // Scroll reveal
  const revealEls = document.querySelectorAll("[data-reveal]");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  }

  // Count-up numbers: <span data-count="1986" data-from="1900">
  const counters = document.querySelectorAll("[data-count]");
  const runCounter = (el) => {
    const to = parseInt(el.dataset.count, 10);
    const from = parseInt(el.dataset.from || "0", 10);
    const duration = 1600;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(from + (to - from) * eased);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  if (counters.length) {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      counters.forEach((el) => (el.textContent = el.dataset.count));
    } else {
      const co = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              runCounter(entry.target);
              co.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.6 }
      );
      counters.forEach((el) => co.observe(el));
    }
  }

  // In-page section nav: highlight the link for the section in view
  const subnav = document.querySelector("[data-subnav]");
  if (subnav && "IntersectionObserver" in window) {
    const links = [...subnav.querySelectorAll('a[href^="#"]')];
    const sections = links.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
    const so = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          links.forEach((a) =>
            a.classList.toggle("is-active", a.getAttribute("href") === `#${entry.target.id}`)
          );
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => so.observe(s));
  }

  // Carousels: arrows, dots, mouse drag, and autoplay that pauses on hover, focus or when off screen
  document.querySelectorAll("[data-carousel]").forEach((carousel) => {
    const track = carousel.querySelector(".carousel__track");
    const slides = [...track.querySelectorAll(".carousel__slide")];
    const prev = carousel.querySelector("[data-prev]");
    const next = carousel.querySelector("[data-next]");
    if (!slides.length) return;

    const dots = document.createElement("div");
    dots.className = "carousel__dots";
    const dotButtons = slides.map((_, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "carousel__dot";
      b.setAttribute("aria-label", `Show photo ${i + 1} of ${slides.length}`);
      b.addEventListener("click", () => go(i));
      dots.append(b);
      return b;
    });
    track.after(dots);

    const padLeft = () => parseFloat(getComputedStyle(track).paddingLeft);
    const maxScroll = () => track.scrollWidth - track.clientWidth;
    const current = () => {
      const x = track.scrollLeft + padLeft();
      let best = 0;
      slides.forEach((s, i) => {
        if (Math.abs(s.offsetLeft - x) < Math.abs(slides[best].offsetLeft - x)) best = i;
      });
      return track.scrollLeft >= maxScroll() - 2 ? slides.length - 1 : best;
    };
    const go = (i) => {
      const target = slides[Math.max(0, Math.min(i, slides.length - 1))];
      track.scrollTo({ left: target.offsetLeft - padLeft(), behavior: reduceMotion ? "auto" : "smooth" });
    };

    const update = () => {
      const i = current();
      dotButtons.forEach((b, j) => b.classList.toggle("is-active", j === i));
      if (prev) prev.disabled = track.scrollLeft <= 2;
      if (next) next.disabled = track.scrollLeft >= maxScroll() - 2;
    };
    let ticking = false;
    track.addEventListener("scroll", () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    }, { passive: true });
    window.addEventListener("resize", update);
    if (prev) prev.addEventListener("click", () => go(current() - 1));
    if (next) next.addEventListener("click", () => go(current() + 1));
    update();

    // Mouse drag; touch already scrolls natively
    let dragX = null;
    let dragStart = 0;
    track.addEventListener("pointerdown", (e) => {
      if (e.pointerType !== "mouse") return;
      dragX = e.clientX;
      dragStart = track.scrollLeft;
      track.classList.add("is-dragging");
      track.setPointerCapture(e.pointerId);
    });
    track.addEventListener("pointermove", (e) => {
      if (dragX !== null) track.scrollLeft = dragStart - (e.clientX - dragX);
    });
    const endDrag = () => {
      if (dragX === null) return;
      dragX = null;
      track.classList.remove("is-dragging");
      go(current());
    };
    track.addEventListener("pointerup", endDrag);
    track.addEventListener("pointercancel", endDrag);

    if (reduceMotion) return;
    let paused = false;
    let visible = false;
    ["pointerenter", "focusin", "touchstart"].forEach((ev) => carousel.addEventListener(ev, () => (paused = true), { passive: true }));
    ["pointerleave", "focusout"].forEach((ev) => carousel.addEventListener(ev, () => (paused = false)));
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(([entry]) => (visible = entry.isIntersecting), { threshold: 0.3 }).observe(track);
    }
    setInterval(() => {
      if (paused || !visible || document.hidden) return;
      track.scrollLeft >= maxScroll() - 2 ? go(0) : go(current() + 1);
    }, 4500);
  });

})();
