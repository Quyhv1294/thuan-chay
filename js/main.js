/* ==========================================================================
   THUẦN CHAY — main.js
   Vanilla JS, no build step required. Organised by feature so each block
   can be lifted out independently when the project grows.
   ========================================================================== */
(function () {
  "use strict";

  /* ---------------------------------------------------------------- */
  /* 0. Load shared header / footer partials                          */
  /* ---------------------------------------------------------------- */
  async function loadPartials() {
    const slots = document.querySelectorAll("[data-partial]");
    await Promise.all(
      Array.from(slots).map(async (slot) => {
        const name = slot.getAttribute("data-partial");
        try {
          const res = await fetch(`partials/${name}.html`);
          slot.innerHTML = await res.text();
        } catch (e) {
          console.warn(`Không tải được partials/${name}.html — hãy chạy qua local server (xem README).`, e);
        }
      })
    );
    markActiveNav();
    initHeaderInteractions();
    updateCartBadge();
  }

  function markActiveNav() {
    const page = document.body.getAttribute("data-page");
    if (!page) return;
    document.querySelectorAll(`[data-nav="${page}"]`).forEach((el) => el.classList.add("is-active"));
  }

  /* ---------------------------------------------------------------- */
  /* 1. Header: mobile drawer + dropdown a11y                         */
  /* ---------------------------------------------------------------- */
  function initHeaderInteractions() {
    const toggle = document.querySelector(".nav-toggle");
    const mobileNav = document.querySelector(".mobile-nav");
    const closeBtn = document.querySelector(".mobile-nav__close");
    if (toggle && mobileNav) {
      toggle.addEventListener("click", () => mobileNav.classList.add("is-open"));
    }
    if (closeBtn && mobileNav) {
      closeBtn.addEventListener("click", () => mobileNav.classList.remove("is-open"));
    }
    document.querySelectorAll(".cart-open").forEach((btn) => btn.addEventListener("click", openCart));
  }

  /* ---------------------------------------------------------------- */
  /* 2. Cart (persisted in localStorage — this is a real downloadable  */
  /*    project, not an inline artifact, so browser storage is fine)  */
  /* ---------------------------------------------------------------- */
  const CART_KEY = "thuanchay_cart";

  function getCart() {
    try {
      return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch (e) {
      return [];
    }
  }
  function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartBadge();
    renderCartDrawer();
  }
  function addToCart(id, qty) {
    qty = qty || 1;
    const product = PRODUCTS.find((p) => p.id === id);
    if (!product) return;
    const cart = getCart();
    const existing = cart.find((i) => i.id === id);
    if (existing) existing.qty += qty;
    else cart.push({ id, qty });
    saveCart(cart);
    showToast(`Đã thêm "${product.name}" vào giỏ hàng`);
    openCart();
  }
  function removeFromCart(id) {
    saveCart(getCart().filter((i) => i.id !== id));
  }
  function updateCartBadge() {
    const count = getCart().reduce((sum, i) => sum + i.qty, 0);
    document.querySelectorAll(".cart-count").forEach((el) => (el.textContent = count));
  }
  function cartTotal() {
    return getCart().reduce((sum, i) => {
      const p = PRODUCTS.find((pr) => pr.id === i.id);
      return p ? sum + p.price * i.qty : sum;
    }, 0);
  }
  function renderCartDrawer() {
    const list = document.querySelector(".cart-drawer__items");
    const totalEl = document.querySelector(".cart-drawer__total span:last-child");
    if (!list) return;
    const cart = getCart();
    if (!cart.length) {
      list.innerHTML = `<div class="cart-empty">Giỏ hàng đang trống.<br>Khám phá <a href="san-pham" style="color:var(--sage-dark);font-weight:700;">sản phẩm thuần chay</a> nhé!</div>`;
    } else {
      list.innerHTML = cart
        .map((item) => {
          const p = PRODUCTS.find((pr) => pr.id === item.id);
          if (!p) return "";
          return `
          <div class="cart-item">
            <img src="${p.img}" alt="${p.name}">
            <div class="cart-item__info">
              <b>${p.name}</b>
              <span>${item.qty} × ${formatVND(p.price)}</span>
            </div>
            <button class="cart-item__remove" data-remove="${p.id}">Xoá</button>
          </div>`;
        })
        .join("");
    }
    if (totalEl) totalEl.textContent = formatVND(cartTotal());
    list.querySelectorAll("[data-remove]").forEach((btn) =>
      btn.addEventListener("click", () => removeFromCart(btn.getAttribute("data-remove")))
    );
  }
  function openCart() {
    document.querySelector(".cart-drawer")?.classList.add("is-open");
    document.querySelector(".overlay")?.classList.add("is-open");
    renderCartDrawer();
  }
  function closeCart() {
    document.querySelector(".cart-drawer")?.classList.remove("is-open");
    document.querySelector(".overlay")?.classList.remove("is-open");
  }

  document.addEventListener("click", (e) => {
    if (e.target.closest(".cart-close")) closeCart();
    if (e.target.classList.contains("overlay")) closeCart();
    if (e.target.closest(".mobile-nav") && e.target.tagName === "A") {
      document.querySelector(".mobile-nav")?.classList.remove("is-open");
    }
    const addBtn = e.target.closest("[data-add-to-cart]");
    if (addBtn) {
      const id = addBtn.getAttribute("data-add-to-cart");
      const qtyInput = addBtn.closest(".pd-info, .product-card")?.querySelector(".qty-input input");
      addToCart(id, qtyInput ? parseInt(qtyInput.value, 10) : 1);
    }
    const buyBtn = e.target.closest("[data-buy-now]");
    if (buyBtn) {
      const id = buyBtn.getAttribute("data-buy-now");
      const product = PRODUCTS.find((p) => p.id === id);
      if (product && product.aff) {
        window.open(product.aff, "_blank", "noopener");
      } else {
        const qtyInput = buyBtn.closest(".pd-info")?.querySelector(".qty-input input");
        addToCart(id, qtyInput ? parseInt(qtyInput.value, 10) : 1);
        location.href = "thanh-toan";
      }
    }
  });

  /* ---------------------------------------------------------------- */
  /* 3. Toast                                                          */
  /* ---------------------------------------------------------------- */
  let toastTimer;
  function showToast(msg) {
    let toast = document.querySelector(".toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "toast";
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
  }

  /* ---------------------------------------------------------------- */
  /* 4. Product card render helper (used on home + shop pages)        */
  /* ---------------------------------------------------------------- */
  function productCardHTML(p) {
    return `
    <article class="product-card reveal">
      <a href="san-pham-chi-tiet?id=${p.id}" class="product-card__frame">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
        ${p.badge ? `<span class="product-card__badge">${p.badge}</span>` : ""}
        <span class="product-card__seal">${leafSealSVG()}</span>
      </a>
      <div class="product-card__body">
        <span class="product-card__cat">${p.category}</span>
        <a href="san-pham-chi-tiet?id=${p.id}"><h3 class="product-card__name">${p.name}</h3></a>
        <div class="product-card__foot">
          <span class="price">${p.oldPrice ? `<del>${formatVND(p.oldPrice)}</del>` : ""}${formatVND(p.price)}</span>
        </div>
        <button class="product-card__buy" data-buy-now="${p.id}" aria-label="Mua ngay ${p.name}">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2 3 14h7l-1 8 11-14h-7l1-6z"/></svg>
          Mua ngay
        </button>
      </div>
    </article>`;
  }
  function leafSealSVG() {
    return `<svg viewBox="0 0 40 40" fill="none" stroke="#6E8A63" stroke-width="1.6"><circle cx="20" cy="20" r="17" stroke-dasharray="2 3"/><path d="M20 28c0-8 4-13 9-15-1 8-4 13-9 15zm0 0c0-8-4-13-9-15 1 8 4 13 9 15z"/></svg>`;
  }

  function renderGrid(container, list) {
    if (!container) return;
    container.innerHTML = list.map(productCardHTML).join("");
    initReveal();
  }

  /* ---------------------------------------------------------------- */
  /* 5. Home page: featured products + articles                      */
  /* ---------------------------------------------------------------- */
  function initHome() {
    const featured = document.querySelector("[data-featured-products]");
    if (featured) renderGrid(featured, PRODUCTS.slice(0, 8));
    const articles = document.querySelector("[data-featured-articles]");
    if (articles) {
      articles.innerHTML = ARTICLES.slice(0, 3).map(articleCardHTML).join("");
    }
    initTestimonialNav();
  }

  function articleCardHTML(a) {
    return `
    <article class="article-card reveal">
      <a href="bai-viet?id=${a.id}" class="article-card__img"><img src="${a.img}" alt="${a.title}" loading="lazy" onerror="this.onerror=null;this.src='img/Logo/logo-thuan-chay-1.png';this.style.objectFit='contain';this.style.padding='18%';this.style.background='#fff';"></a>
      <div class="article-card__body">
        <span class="article-card__tag">${a.tag}</span>
        <a href="bai-viet?id=${a.id}"><h3>${a.title}</h3></a>
        <div class="article-card__meta"><span>${a.date}</span><span>·</span><span>${a.minutes} phút đọc</span></div>
      </div>
    </article>`;
  }

  function initTestimonialNav() {
    const track = document.querySelector(".testi-track");
    const prev = document.querySelector("[data-testi-prev]");
    const next = document.querySelector("[data-testi-next]");
    if (!track) return;
    const step = () => track.querySelector(".testi-card")?.offsetWidth + 24 || 400;
    prev?.addEventListener("click", () => track.scrollBy({ left: -step(), behavior: "smooth" }));
    next?.addEventListener("click", () => track.scrollBy({ left: step(), behavior: "smooth" }));
  }

  /* ---------------------------------------------------------------- */
  /* 6. Shop page: filter + sort                                      */
  /* ---------------------------------------------------------------- */
  function initShop() {
    const grid = document.querySelector("[data-shop-grid]");
    if (!grid) return;
    const countEl = document.querySelector("[data-shop-count]");
    const checkboxes = document.querySelectorAll("[data-cat-filter]");
    const sortSelect = document.querySelector("[data-sort]");
    const searchInput = document.querySelector("[data-search]");

    function apply() {
      const checked = Array.from(checkboxes).filter((c) => c.checked).map((c) => c.value);
      let list = PRODUCTS.filter((p) => checked.length === 0 || checked.includes(p.category));
      const q = (searchInput?.value || "").trim().toLowerCase();
      if (q) list = list.filter((p) => p.name.toLowerCase().includes(q));
      const sort = sortSelect?.value;
      if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
      if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
      if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
      renderGrid(grid, list);
      if (countEl) countEl.textContent = list.length;
    }
    checkboxes.forEach((c) => c.addEventListener("change", apply));
    sortSelect?.addEventListener("change", apply);
    searchInput?.addEventListener("input", apply);

    // preselect category from ?cat= query param
    const params = new URLSearchParams(location.search);
    const cat = params.get("cat");
    if (cat) {
      checkboxes.forEach((c) => {
        if (c.value === cat) c.checked = true;
      });
    }
    apply();
  }

  /* ---------------------------------------------------------------- */
  /* 7. Product detail page                                           */
  /* ---------------------------------------------------------------- */
  function initProductDetail() {
    const wrap = document.querySelector("[data-product-detail]");
    if (!wrap) return;
    const params = new URLSearchParams(location.search);
    const id = params.get("id") || PRODUCTS[0].id;
    const p = PRODUCTS.find((pr) => pr.id === id) || PRODUCTS[0];

    document.title = `${p.name} | Thuần Chay`;
    wrap.querySelector("[data-pd-cat]").textContent = p.category;
    wrap.querySelector("[data-pd-name]").textContent = p.name;
    wrap.querySelector("[data-pd-desc]").textContent = p.desc;
    wrap.querySelector("[data-pd-reviews]").textContent = `(${p.reviews} đánh giá)`;
    const priceEl = wrap.querySelector("[data-pd-price]");
    priceEl.innerHTML = `${p.oldPrice ? `<del>${formatVND(p.oldPrice)}</del>` : ""}${formatVND(p.price)}`;
    wrap.querySelector("[data-pd-img]").src = p.img;
    wrap.querySelector("[data-add-to-cart]")?.setAttribute("data-add-to-cart", p.id);
    wrap.querySelector("[data-buy-now]")?.setAttribute("data-buy-now", p.id);
    const bc = wrap.querySelector("[data-pd-breadcrumb]");
    if (bc) bc.textContent = p.name;

    // discount badge
    const badgeEl = wrap.querySelector("[data-pd-badge]");
    if (badgeEl) {
      if (p.oldPrice) {
        badgeEl.textContent = `-${Math.round((1 - p.price / p.oldPrice) * 100)}%`;
        badgeEl.hidden = false;
      } else {
        badgeEl.hidden = true;
      }
    }

    // zoom link opens full image
    const zoomEl = wrap.querySelector("[data-pd-zoom]");
    if (zoomEl) zoomEl.href = p.img;

    // SKU + category meta
    const skuEl = wrap.querySelector("[data-pd-sku]");
    if (skuEl) skuEl.textContent = p.id.toUpperCase();
    const catLink = wrap.querySelector("[data-pd-cat-link]");
    if (catLink) {
      catLink.textContent = p.category;
      catLink.href = `san-pham?cat=${encodeURIComponent(p.category)}`;
    }

    // review count in tab label
    const reviewCountEl = wrap.querySelector("[data-pd-review-count]");
    if (reviewCountEl) reviewCountEl.textContent = p.reviews;

    // qty stepper
    const qtyInput = wrap.querySelector(".qty-input input");
    wrap.querySelector("[data-qty-minus]")?.addEventListener("click", () => {
      qtyInput.value = Math.max(1, parseInt(qtyInput.value, 10) - 1);
    });
    wrap.querySelector("[data-qty-plus]")?.addEventListener("click", () => {
      qtyInput.value = parseInt(qtyInput.value, 10) + 1;
    });

    // tabs
    const tabBtns = wrap.querySelectorAll(".pd-tabs__nav button");
    tabBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        tabBtns.forEach((b) => b.classList.remove("active"));
        wrap.querySelectorAll(".pd-tabs__panel").forEach((pnl) => pnl.classList.remove("active"));
        btn.classList.add("active");
        wrap.querySelector(`#${btn.getAttribute("data-tab")}`)?.classList.add("active");
      });
    });

    // related products
    const related = document.querySelector("[data-related-products]");
    if (related) {
      renderGrid(related, PRODUCTS.filter((pr) => pr.category === p.category && pr.id !== p.id).slice(0, 4));
    }
  }

  /* ---------------------------------------------------------------- */
  /* 8. Blog listing + article detail                                 */
  /* ---------------------------------------------------------------- */
  function initBlogList() {
    const grid = document.querySelector("[data-articles-grid]");
    if (!grid) return;
    grid.innerHTML = ARTICLES.map(articleCardHTML).join("");
    initReveal();
  }

  function initBlogTabs() {
    const tabsWrap = document.querySelector("[data-blog-tabs]");
    const grid = document.querySelector("[data-blog-tabs-grid]");
    if (!tabsWrap || !grid) return;
    const tabs = tabsWrap.querySelectorAll(".blog-tab");
    const render = (tag) => {
      grid.innerHTML = ARTICLES.filter((a) => a.tag === tag).slice(0, 4).map(articleCardHTML).join("");
      initReveal();
    };
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("is-active"));
        tab.classList.add("is-active");
        render(tab.getAttribute("data-tag"));
      });
    });
    const activeTab = tabsWrap.querySelector(".blog-tab.is-active") || tabs[0];
    if (activeTab) render(activeTab.getAttribute("data-tag"));
  }
  function initArticleDetail() {
    const wrap = document.querySelector("[data-article-detail]");
    if (!wrap) return;
    const params = new URLSearchParams(location.search);
    const id = params.get("id") || ARTICLES[0].id;
    const a = ARTICLES.find((ar) => ar.id === id) || ARTICLES[0];
    document.title = `${a.title} | Thuần Chay`;
    wrap.querySelector("[data-a-tag]").textContent = a.tag;
    wrap.querySelector("[data-a-title]").textContent = a.title;
    document.querySelector("[data-a-img]").src = a.img;
    const bodyEl = document.querySelector("[data-a-body]");
    if (bodyEl) bodyEl.innerHTML = a.body || "";
    wrap.querySelector("[data-a-date]").textContent = a.date;
    wrap.querySelector("[data-a-minutes]").textContent = `${a.minutes} phút đọc`;
    const bc = wrap.querySelector("[data-a-breadcrumb]");
    if (bc) bc.textContent = a.title;
  }

  /* ---------------------------------------------------------------- */
  /* 9. Contact form (client-side validation demo)                    */
  /* ---------------------------------------------------------------- */
  function initContactForm() {
    const form = document.querySelector("[data-contact-form]");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      showToast("Cảm ơn bạn! Thuần Chay sẽ liên hệ lại trong 24h.");
      form.reset();
    });
  }
  function initNewsletterForm() {
    document.querySelectorAll("[data-newsletter-form]").forEach((form) => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        showToast("Đăng ký nhận tin thành công!");
        form.reset();
      });
    });
  }

  /* ---------------------------------------------------------------- */
  /* 10. Scroll reveal                                                */
  /* ---------------------------------------------------------------- */
  function initReveal() {
    const els = document.querySelectorAll(".reveal:not(.in)");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
  }

  /* ---------------------------------------------------------------- */
  /* Init                                                              */
  /* ---------------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", async () => {
    await loadPartials();
    initHome();
    initShop();
    initProductDetail();
    initBlogList();
    initBlogTabs();
    initArticleDetail();
    initContactForm();
    initNewsletterForm();
    initReveal();
  });
})();
