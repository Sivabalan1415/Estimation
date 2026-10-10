/**
 * A.S ELECTRICIAN - Material Estimation & Site Requisition System
 * Mobile-First Interactive Controller
 */

// Application State
const state = {
  currentCategory: "plumbing", // 'plumbing' | 'electrical'
  searchQuery: "",
  activeSubcategory: "all",
  selectedMaterials: new Map(), // key: id, value: { id, name, category, qty, unit, refQty }
  projectMeta: {
    siteName: "SINTHAMANI",
    date: "14.03.2026",
    phone: "",
    workType: "Plumbing",
    engineer: "A.S Electrician"
  }
};

// DOM Nodes Cache
let DOM = {};

document.addEventListener("DOMContentLoaded", () => {
  cacheDOM();
  loadSavedState();
  bindEvents();
  renderAll();
});

function cacheDOM() {
  DOM = {
    // Project Meta
    metaDate: document.getElementById("metaDate"),
    metaSite: document.getElementById("metaSite"),
    metaPhone: document.getElementById("metaPhone"),
    metaWork: document.getElementById("metaWork"),
    metaEngineer: document.getElementById("metaEngineer"),
    metaSummaryToggle: document.getElementById("metaSummaryToggle"),
    metaFieldsContainer: document.getElementById("metaFieldsContainer"),
    chipDateVal: document.getElementById("chipDateVal"),
    chipSiteVal: document.getElementById("chipSiteVal"),
    chipPhoneWrapper: document.getElementById("chipPhoneWrapper"),
    chipPhoneVal: document.getElementById("chipPhoneVal"),
    chipWorkVal: document.getElementById("chipWorkVal"),

    // Category Tabs
    categoryTabs: document.querySelectorAll(".category-nav__tab"),
    plumbingBadge: document.getElementById("plumbingCountBadge"),
    electricalBadge: document.getElementById("electricalCountBadge"),

    // Search & Filter
    searchInput: document.getElementById("searchInput"),
    searchClear: document.getElementById("searchClear"),
    subcatContainer: document.getElementById("subcatChips"),
    catalogList: document.getElementById("catalogList"),
    catalogCount: document.getElementById("catalogCount"),

    // Cart Panel & Drawer
    cartPanel: document.getElementById("cartPanel"),
    cartDrawerOverlay: document.getElementById("cartDrawerOverlay"),
    cartCloseBtn: document.getElementById("cartCloseBtn"),
    cartList: document.getElementById("cartList"),
    cartEmpty: document.getElementById("cartEmpty"),
    cartBadge: document.getElementById("cartBadge"),
    cartTotalItems: document.getElementById("cartTotalItems"),
    cartTotalUnits: document.getElementById("cartTotalUnits"),
    cartClearBtn: document.getElementById("cartClearBtn"),
    cartConfirmBtn: document.getElementById("cartConfirmBtn"),
    cartAddCustomBtn: document.getElementById("cartAddCustomBtn"),

    // Mobile Floating Bottom Bar
    mobileBottomBar: document.getElementById("mobileBottomBar"),
    mobileBarCount: document.getElementById("mobileBarCount"),
    mobileBarUnits: document.getElementById("mobileBarUnits"),
    mobileBarOpenBtn: document.getElementById("mobileBarOpenBtn"),

    // Estimation Modal
    estimateModal: document.getElementById("estimateModal"),
    estimateCloseBtn: document.getElementById("estimateCloseBtn"),
    estimateBackBtn: document.getElementById("estimateBackBtn"),
    estimateDownloadPdfBtn: document.getElementById("estimateDownloadPdfBtn"),
    estimateWhatsAppBtn: document.getElementById("estimateWhatsAppBtn"),
    estimateSheetContent: document.getElementById("estimateSheetContent"),

    // Custom Item Modal
    customModal: document.getElementById("customModal"),
    customModalClose: document.getElementById("customModalClose"),
    customModalCancel: document.getElementById("customModalCancel"),
    customForm: document.getElementById("customForm"),
    customName: document.getElementById("customName"),
    customCategory: document.getElementById("customCategory"),
    customQty: document.getElementById("customQty"),
    customUnit: document.getElementById("customUnit"),

    // Toast Container
    toastContainer: document.getElementById("toastContainer"),

    // Quick Actions
    resetBtn: document.getElementById("resetBtn"),
    loadRefAllBtn: document.getElementById("loadRefAllBtn"),

  };
}

function loadSavedState() {
  try {
    const savedMeta = localStorage.getItem("as_project_meta");
    if (savedMeta) {
      state.projectMeta = { ...state.projectMeta, ...JSON.parse(savedMeta) };
    }

    const savedCart = localStorage.getItem("as_selected_materials");
    if (savedCart) {
      const parsedArray = JSON.parse(savedCart);
      state.selectedMaterials = new Map(parsedArray.map(item => [item.id, item]));
    }
  } catch (err) {
    console.warn("Storage read error:", err);
  }

  // Populate inputs and summary chips
  if (DOM.metaDate) DOM.metaDate.value = state.projectMeta.date;
  if (DOM.metaSite) DOM.metaSite.value = state.projectMeta.siteName;
  if (DOM.metaPhone) DOM.metaPhone.value = state.projectMeta.phone || "";
  if (DOM.metaWork) DOM.metaWork.value = state.projectMeta.workType;
  if (DOM.metaEngineer) DOM.metaEngineer.value = state.projectMeta.engineer;
  updateMetaSummaryChips();
}

function saveState() {
  try {
    localStorage.setItem("as_project_meta", JSON.stringify(state.projectMeta));
    const cartArray = Array.from(state.selectedMaterials.values());
    localStorage.setItem("as_selected_materials", JSON.stringify(cartArray));
  } catch (err) {
    console.warn("Storage write error:", err);
  }
}

function updateMetaSummaryChips() {
  if (DOM.chipDateVal) DOM.chipDateVal.textContent = state.projectMeta.date;
  if (DOM.chipSiteVal) DOM.chipSiteVal.textContent = state.projectMeta.siteName;
  if (DOM.chipWorkVal) DOM.chipWorkVal.textContent = state.projectMeta.workType;
  if (DOM.chipPhoneVal && DOM.chipPhoneWrapper) {
    if (state.projectMeta.phone && state.projectMeta.phone.trim()) {
      DOM.chipPhoneVal.textContent = state.projectMeta.phone.trim();
      DOM.chipPhoneWrapper.style.display = "inline-flex";
    } else {
      DOM.chipPhoneWrapper.style.display = "none";
    }
  }
}

function bindEvents() {
  // Toggle Project Meta Fields
  DOM.metaSummaryToggle?.addEventListener("click", () => {
    DOM.metaFieldsContainer?.classList.toggle("meta-fields-container--open");
  });

  // Project Meta Inputs
  DOM.metaDate?.addEventListener("input", (e) => {
    state.projectMeta.date = e.target.value.trim();
    updateMetaSummaryChips();
    saveState();
  });

  DOM.metaSite?.addEventListener("input", (e) => {
    state.projectMeta.siteName = e.target.value.trim();
    updateMetaSummaryChips();
    saveState();
  });

  DOM.metaPhone?.addEventListener("input", (e) => {
    state.projectMeta.phone = e.target.value.trim();
    updateMetaSummaryChips();
    saveState();
  });

  DOM.metaWork?.addEventListener("change", (e) => {
    state.projectMeta.workType = e.target.value;
    if (e.target.value === "Roof Pipe Line") {
      state.currentCategory = "electrical";
      state.activeSubcategory = "roof_pipeline";
      state.searchQuery = "";
      if (DOM.searchInput) DOM.searchInput.value = "";
      if (DOM.searchClear) DOM.searchClear.style.display = "none";
      renderCategoryTabs();
      renderSubcategoryChips();
      renderCatalog();
    } else if (e.target.value === "Showroom Work") {
      state.currentCategory = "electrical";
      state.activeSubcategory = "showroom_work";
      state.searchQuery = "";
      if (DOM.searchInput) DOM.searchInput.value = "";
      if (DOM.searchClear) DOM.searchClear.style.display = "none";
      renderCategoryTabs();
      renderSubcategoryChips();
      renderCatalog();
    }
    updateMetaSummaryChips();
    saveState();
  });

  DOM.metaEngineer?.addEventListener("input", (e) => {
    state.projectMeta.engineer = e.target.value.trim();
    saveState();
  });

  // Category Switcher
  DOM.categoryTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const cat = tab.getAttribute("data-category");
      if (cat && cat !== state.currentCategory) {
        state.currentCategory = cat;
        state.activeSubcategory = "all";
        state.searchQuery = "";
        if (DOM.searchInput) DOM.searchInput.value = "";
        if (DOM.searchClear) DOM.searchClear.style.display = "none";

        if (DOM.metaWork) {
          DOM.metaWork.value = cat === "plumbing" ? "Plumbing" : "Electrical";
          state.projectMeta.workType = DOM.metaWork.value;
          updateMetaSummaryChips();
        }

        renderCategoryTabs();
        renderSubcategoryChips();
        renderCatalog();
        saveState();
      }
    });
  });

  // Search Input
  DOM.searchInput?.addEventListener("input", (e) => {
    state.searchQuery = e.target.value.trim().toLowerCase();
    DOM.searchClear.style.display = state.searchQuery ? "flex" : "none";
    renderCatalog();
  });

  DOM.searchClear?.addEventListener("click", () => {
    state.searchQuery = "";
    DOM.searchInput.value = "";
    DOM.searchClear.style.display = "none";
    DOM.searchInput.focus();
    renderCatalog();
  });

  // Mobile Drawer Toggle
  DOM.mobileBarOpenBtn?.addEventListener("click", () => openCartDrawer());
  DOM.cartCloseBtn?.addEventListener("click", () => closeCartDrawer());
  DOM.cartDrawerOverlay?.addEventListener("click", () => closeCartDrawer());

  // Cart Clear
  DOM.cartClearBtn?.addEventListener("click", () => {
    if (state.selectedMaterials.size === 0) return;
    if (confirm("Clear all selected materials? (எல்லா பொருட்களையும் நீக்கவா?)")) {
      state.selectedMaterials.clear();
      saveState();
      renderCart();
      renderCatalog();
      showToast("Cleared all selected materials", "info");
    }
  });

  // Confirm Estimation Button
  DOM.cartConfirmBtn?.addEventListener("click", () => {
    if (state.selectedMaterials.size === 0) {
      showToast("Please add at least one material first! (குறைந்தது 1 பொருள் சேர்க்கவும்)", "warning");
      return;
    }
    closeCartDrawer();
    openEstimationModal();
  });

  // Custom Item Modal
  DOM.cartAddCustomBtn?.addEventListener("click", () => openCustomModal());
  DOM.customModalClose?.addEventListener("click", () => closeCustomModal());
  DOM.customModalCancel?.addEventListener("click", () => closeCustomModal());
  DOM.customForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    handleAddCustomItem();
  });

  // Estimation Modal Actions (Direct PDF Download & WhatsApp Share)
  DOM.estimateCloseBtn?.addEventListener("click", () => closeEstimationModal());
  DOM.estimateBackBtn?.addEventListener("click", () => closeEstimationModal());
  DOM.estimateDownloadPdfBtn?.addEventListener("click", () => downloadDirectPDF());
  DOM.estimateWhatsAppBtn?.addEventListener("click", () => shareWhatsApp());

  // Reset Button (Default 0)
  DOM.resetBtn?.addEventListener("click", () => {
    if (confirm("Reset everything to 0? (அனைத்தையும் 0 ஆக்கவா?)")) {
      localStorage.removeItem("as_project_meta");
      localStorage.removeItem("as_selected_materials");
      state.selectedMaterials.clear();
      state.projectMeta = {
        siteName: "SINTHAMANI",
        date: "14.03.2026",
        phone: "",
        workType: "Plumbing",
        engineer: "A.S Electrician"
      };
      state.currentCategory = "plumbing";
      state.activeSubcategory = "all";
      state.searchQuery = "";
      if (DOM.searchInput) DOM.searchInput.value = "";
      loadSavedState();
      renderAll();
      showToast("Reset completed (Default 0)", "info");
    }
  });

  // Load All Reference Sheet Quantities Button
  DOM.loadRefAllBtn?.addEventListener("click", () => {
    const list = state.activeSubcategory === "all" ? (PRODUCT_CATALOG[state.currentCategory] || []) : getFilteredItems();
    let count = 0;
    list.forEach(item => {
      if (item.refQty > 0) {
        state.selectedMaterials.set(item.id, {
          id: item.id,
          name: item.name,
          category: state.currentCategory,
          qty: item.refQty,
          unit: item.unit,
          refQty: item.refQty
        });
        count++;
      }
    });
    saveState();
    renderCart();
    renderCatalog();
    showToast(`Loaded reference quantities for ${count} items!`, "success");
  });

  // Escape key closes modals
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeEstimationModal();
      closeCustomModal();
      closeCartDrawer();
    }
  });
}

function renderAll() {
  renderCategoryTabs();
  renderSubcategoryChips();
  renderCatalog();
  renderCart();
}

function renderCategoryTabs() {
  DOM.categoryTabs.forEach(tab => {
    const cat = tab.getAttribute("data-category");
    if (cat === state.currentCategory) {
      tab.classList.add("category-nav__tab--active");
      tab.setAttribute("aria-selected", "true");
    } else {
      tab.classList.remove("category-nav__tab--active");
      tab.setAttribute("aria-selected", "false");
    }
  });

  if (DOM.plumbingBadge) DOM.plumbingBadge.textContent = `${PRODUCT_CATALOG.plumbing.length}`;
  if (DOM.electricalBadge) DOM.electricalBadge.textContent = `${PRODUCT_CATALOG.electrical.length}`;
}

function renderSubcategoryChips() {
  if (!DOM.subcatContainer) return;
  const list = SUBCATEGORIES[state.currentCategory] || [];

  DOM.subcatContainer.innerHTML = list.map(subcat => {
    const isActive = subcat.key === state.activeSubcategory;
    return `
      <button 
        type="button" 
        class="subcat-chip ${isActive ? "subcat-chip--active" : ""}" 
        data-subcat="${subcat.key}"
      >
        ${subcat.label}
      </button>
    `;
  }).join("");

  DOM.subcatContainer.querySelectorAll(".subcat-chip").forEach(btn => {
    btn.addEventListener("click", () => {
      const selectedSubcat = btn.getAttribute("data-subcat") || "all";
      state.activeSubcategory = selectedSubcat;

      // Clear search query so filtered items appear immediately without conflict
      state.searchQuery = "";
      if (DOM.searchInput) DOM.searchInput.value = "";
      if (DOM.searchClear) DOM.searchClear.style.display = "none";

      if (selectedSubcat === "roof_pipeline") {
        state.projectMeta.workType = "Roof Pipe Line";
        if (DOM.metaWork) DOM.metaWork.value = "Roof Pipe Line";
        updateMetaSummaryChips();
        saveState();
      } else if (selectedSubcat === "showroom_work") {
        state.projectMeta.workType = "Showroom Work";
        if (DOM.metaWork) DOM.metaWork.value = "Showroom Work";
        updateMetaSummaryChips();
        saveState();
      }

      renderSubcategoryChips();
      renderCatalog();
    });
  });
}

function getFilteredItems() {
  const allItems = PRODUCT_CATALOG[state.currentCategory] || [];
  return allItems.filter(item => {
    if (state.activeSubcategory !== "all") {
      if (state.activeSubcategory === "showroom_work") {
        if (!item.isShowroomWork && item.subcategory !== "showroom_work") return false;
      } else if (state.activeSubcategory === "color_wires") {
        if (!item.isColorWire) return false;
      } else if (state.activeSubcategory === "wires") {
        if (!item.isWire && item.subcategory !== "wires") return false;
      } else if (state.activeSubcategory === "accessories") {
        if (!item.isAccessory && item.subcategory !== "accessories") return false;
      } else if (state.activeSubcategory === "conduits") {
        if (!item.isConduit && item.subcategory !== "conduits") return false;
      } else if (item.subcategory !== state.activeSubcategory) {
        return false;
      }
    }
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      const matchName = item.name.toLowerCase().includes(q);
      const matchDesc = item.desc ? item.desc.toLowerCase().includes(q) : false;
      const matchColor = item.color ? item.color.toLowerCase().includes(q) : false;
      return matchName || matchDesc || matchColor;
    }
    return true;
  });
}

/**
 * Render Material Cards (Mobile-first, touch-optimized)
 */
function renderCatalog() {
  if (!DOM.catalogList) return;
  const items = getFilteredItems();

  if (DOM.catalogCount) {
    DOM.catalogCount.textContent = `Showing ${items.length} items`;
  }

  if (items.length === 0) {
    DOM.catalogList.innerHTML = `
      <div style="text-align:center; padding: 2.5rem 1rem; background:#fff; border-radius:12px; border:1px dashed #cbd5e1; grid-column:1/-1;">
        <div style="font-size:2rem; margin-bottom:0.4rem;">🔍</div>
        <div style="font-weight:800; color:#334155;">No materials found</div>
        <div style="font-size:0.8rem; color:#64748b; margin-top:0.2rem;">Try a different keyword or tap Clear</div>
      </div>
    `;
    return;
  }

  DOM.catalogList.innerHTML = items.map(item => {
    const selectedItem = state.selectedMaterials.get(item.id);
    const isSelected = !!selectedItem;
    const currentQty = isSelected ? selectedItem.qty : 0; // Default is 0!

    return `
      <div class="m-card ${isSelected ? "m-card--selected" : ""}" id="card-${item.id}">
        <div class="m-card__info">
          <div class="m-card__header-line">
            <span class="m-card__sno">#${item.sno}</span>
            <div style="display:flex; align-items:center; gap:0.35rem;">
              ${item.color ? `
                <span class="color-tag color-tag--${item.color}">
                  ● ${item.color.toUpperCase()}
                </span>
              ` : ""}
              <span class="m-card__unit">${item.unit}</span>
            </div>
          </div>

          <h3 class="m-card__title">${item.name}</h3>

          <div class="m-card__meta-line">
            <span class="m-card__ref-chip" title="Reference Sheet Quantity">
              Ref: <strong>${item.refQty} ${item.unit}</strong>
            </span>
            ${item.refQty > 0 && !isSelected ? `
              <button 
                type="button" 
                class="m-card__use-ref-btn" 
                onclick="handleUseRefQty('${item.id}', ${item.refQty})"
                title="Fill reference quantity (${item.refQty})"
              >
                +${item.refQty}
              </button>
            ` : ""}
          </div>
        </div>

        <div class="m-card__action">
          ${!isSelected ? `
            <button 
              type="button" 
              class="add-trigger-btn" 
              onclick="handleFirstAdd('${item.id}')"
              aria-label="Add ${item.name} to estimation"
            >
              <span>+</span>
              <span>ADD</span>
            </button>
          ` : `
            <div class="active-stepper">
              <button 
                type="button" 
                class="active-stepper__btn" 
                onclick="handleCardStep('${item.id}', -1)"
                title="Decrease"
                aria-label="Decrease quantity"
              >−</button>
              <input 
                type="number" 
                class="active-stepper__input" 
                value="${currentQty}" 
                min="0"
                inputmode="numeric"
                onchange="handleCardInput('${item.id}', this.value)"
                aria-label="Quantity for ${item.name}"
              />
              <button 
                type="button" 
                class="active-stepper__btn" 
                onclick="handleCardStep('${item.id}', 1)"
                title="Increase"
                aria-label="Increase quantity"
              >+</button>
            </div>
          `}
        </div>
      </div>
    `;
  }).join("");
}

/**
 * First click on "+ ADD" button (Default 0 -> 1)
 */
window.handleFirstAdd = function(itemId) {
  const itemData = findProductById(itemId);
  if (!itemData) return;

  state.selectedMaterials.set(itemId, {
    id: itemData.id,
    name: itemData.name,
    category: itemData.category || state.currentCategory,
    qty: 1,
    unit: itemData.unit,
    refQty: itemData.refQty
  });

  saveState();
  renderCart();
  renderCatalog();
  showToast(`Added "${itemData.name}" (1 ${itemData.unit})`, "success");
};

/**
 * Fill with Reference Quantity directly
 */
window.handleUseRefQty = function(itemId, refQty) {
  const itemData = findProductById(itemId);
  if (!itemData) return;

  state.selectedMaterials.set(itemId, {
    id: itemData.id,
    name: itemData.name,
    category: itemData.category || state.currentCategory,
    qty: refQty,
    unit: itemData.unit,
    refQty: itemData.refQty
  });

  saveState();
  renderCart();
  renderCatalog();
  showToast(`Added "${itemData.name}" (${refQty} ${itemData.unit})`, "success");
};

/**
 * Handle Stepper Click on Card (+1 / -1)
 */
window.handleCardStep = function(itemId, delta) {
  if (!state.selectedMaterials.has(itemId)) {
    if (delta > 0) handleFirstAdd(itemId);
    return;
  }

  const current = state.selectedMaterials.get(itemId);
  const newQty = current.qty + delta;

  if (newQty <= 0) {
    state.selectedMaterials.delete(itemId);
    showToast(`Removed "${current.name}"`, "info");
  } else {
    current.qty = newQty;
    state.selectedMaterials.set(itemId, current);
  }

  saveState();
  renderCart();
  renderCatalog();
};

/**
 * Direct Manual Input on Card
 */
window.handleCardInput = function(itemId, rawVal) {
  let val = parseInt(rawVal, 10);
  if (isNaN(val) || val <= 0) {
    if (state.selectedMaterials.has(itemId)) {
      const item = state.selectedMaterials.get(itemId);
      state.selectedMaterials.delete(itemId);
      showToast(`Removed "${item.name}"`, "info");
    }
  } else {
    if (state.selectedMaterials.has(itemId)) {
      const item = state.selectedMaterials.get(itemId);
      item.qty = val;
      state.selectedMaterials.set(itemId, item);
    } else {
      const itemData = findProductById(itemId);
      if (itemData) {
        state.selectedMaterials.set(itemId, {
          id: itemData.id,
          name: itemData.name,
          category: itemData.category || state.currentCategory,
          qty: val,
          unit: itemData.unit,
          refQty: itemData.refQty
        });
      }
    }
  }

  saveState();
  renderCart();
  renderCatalog();
};

function findProductById(id) {
  const p = PRODUCT_CATALOG.plumbing.find(item => item.id === id);
  if (p) return { ...p, category: "plumbing" };
  const e = PRODUCT_CATALOG.electrical.find(item => item.id === id);
  if (e) return { ...e, category: "electrical" };
  return null;
}

/**
 * Render Selected Materials (Cart)
 */
function renderCart() {
  const selectedList = Array.from(state.selectedMaterials.values());
  const activeCount = selectedList.filter(item => (parseInt(item.qty, 10) || 0) > 0).length;
  const count = selectedList.length;
  const totalUnits = selectedList.reduce((sum, item) => sum + (parseInt(item.qty, 10) || 0), 0);

  // Update badges
  if (DOM.cartBadge) DOM.cartBadge.textContent = `${activeCount} items`;
  if (DOM.cartTotalItems) DOM.cartTotalItems.textContent = `${activeCount}`;
  if (DOM.cartTotalUnits) DOM.cartTotalUnits.textContent = `${totalUnits.toLocaleString("en-IN")}`;

  // Update mobile bottom bar
  if (DOM.mobileBarCount) DOM.mobileBarCount.textContent = `🛒 ${activeCount} Materials`;
  if (DOM.mobileBarUnits) DOM.mobileBarUnits.textContent = `${totalUnits} Units Selected`;

  if (DOM.cartConfirmBtn) {
    DOM.cartConfirmBtn.disabled = activeCount === 0;
  }

  // Empty state handling
  if (count === 0) {
    if (DOM.cartEmpty) DOM.cartEmpty.style.display = "block";
    if (DOM.cartList) DOM.cartList.innerHTML = "";
    return;
  }

  if (DOM.cartEmpty) DOM.cartEmpty.style.display = "none";

  if (DOM.cartList) {
    DOM.cartList.innerHTML = selectedList.map((item, idx) => {
      const isZero = (parseInt(item.qty, 10) || 0) === 0;
      return `
        <div class="cart-row ${isZero ? "cart-row--zero" : "cart-row--active"}" id="cart-item-${item.id}">
          <div class="cart-row__top">
            <div class="cart-row__desc">
              <span class="cart-row__sno">${idx + 1}</span>
              <span class="cart-row__name">${item.name}</span>
            </div>
            <button 
              type="button" 
              class="cart-row__del-btn" 
              onclick="handleRemoveFromCart('${item.id}')"
              title="Remove"
              aria-label="Remove ${item.name}"
            >
              🗑
            </button>
          </div>

          <div class="cart-row__bottom">
            <div style="display:flex; align-items:center; gap:0.45rem; flex-wrap:wrap;">
              <span class="cart-row__unit">Unit: <strong>${item.unit}</strong></span>
              ${isZero ? `<span style="font-size:0.68rem; background:#fef3c7; color:#b45309; padding:0.12rem 0.45rem; border-radius:4px; font-weight:800;">⚡ Enter Qty</span>` : `<span style="font-size:0.68rem; background:#dcfce7; color:#15803d; padding:0.12rem 0.45rem; border-radius:4px; font-weight:800;">✓ Ready</span>`}
              ${item.refQty > 0 ? `
                <button 
                  type="button" 
                  class="cart-ref-pill" 
                  onclick="handleCartSetRefQty('${item.id}', ${item.refQty})" 
                  title="Quick fill reference quantity (${item.refQty})"
                >
                  +${item.refQty} Ref
                </button>
              ` : ""}
            </div>

            <div class="cart-stepper">
              <button 
                type="button" 
                class="cart-stepper__btn" 
                onclick="handleCartStepperChange('${item.id}', -1)"
                title="Decrease"
                aria-label="Decrease quantity"
              >−</button>
              <input 
                type="number" 
                class="cart-stepper__input" 
                value="${item.qty}" 
                min="0"
                inputmode="numeric"
                pattern="[0-9]*"
                onfocus="this.select()"
                onchange="handleCartManualChange('${item.id}', this.value)"
                aria-label="Quantity for ${item.name}"
              />
              <button 
                type="button" 
                class="cart-stepper__btn" 
                onclick="handleCartStepperChange('${item.id}', 1)"
                title="Increase"
                aria-label="Increase quantity"
              >+</button>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }
}

window.handleCartStepperChange = function(itemId, delta) {
  if (!state.selectedMaterials.has(itemId)) return;
  const item = state.selectedMaterials.get(itemId);
  const newQty = (parseInt(item.qty, 10) || 0) + delta;

  if (newQty < 0) {
    handleRemoveFromCart(itemId);
  } else {
    item.qty = newQty;
    state.selectedMaterials.set(itemId, item);
    saveState();
    renderCart();
    renderCatalog();
  }
};

window.handleCartManualChange = function(itemId, rawVal) {
  let val = parseInt(rawVal, 10);
  if (isNaN(val) || val < 0) {
    val = 0;
  }
  if (state.selectedMaterials.has(itemId)) {
    const item = state.selectedMaterials.get(itemId);
    item.qty = val;
    state.selectedMaterials.set(itemId, item);
    saveState();
    renderCart();
    renderCatalog();
  }
};

window.handleRemoveFromCart = function(itemId) {
  if (!state.selectedMaterials.has(itemId)) return;
  const item = state.selectedMaterials.get(itemId);
  state.selectedMaterials.delete(itemId);
  saveState();
  renderCart();
  renderCatalog();
  showToast(`Removed "${item.name}"`, "info");
};

/**
 * Mobile Drawer Handlers
 */
function openCartDrawer() {
  DOM.cartPanel?.classList.add("cart-panel--open");
  DOM.cartDrawerOverlay?.classList.add("cart-drawer-overlay--open");
}

function closeCartDrawer() {
  DOM.cartPanel?.classList.remove("cart-panel--open");
  DOM.cartDrawerOverlay?.classList.remove("cart-drawer-overlay--open");
}

/**
 * Custom Material Modal
 */
function openCustomModal() {
  if (DOM.customCategory) DOM.customCategory.value = state.currentCategory;
  if (DOM.customName) DOM.customName.value = "";
  if (DOM.customQty) DOM.customQty.value = "1";
  if (DOM.customUnit) DOM.customUnit.value = "Nos";

  DOM.customModal?.classList.add("modal-backdrop--open");
  setTimeout(() => DOM.customName?.focus(), 150);
}

function closeCustomModal() {
  DOM.customModal?.classList.remove("modal-backdrop--open");
}

function handleAddCustomItem() {
  const name = DOM.customName?.value.trim();
  const category = DOM.customCategory?.value || state.currentCategory;
  const qty = parseInt(DOM.customQty?.value, 10) || 1;
  const unit = DOM.customUnit?.value.trim() || "Nos";

  if (!name) {
    alert("Please enter a material name.");
    return;
  }

  const customId = `custom-${Date.now()}`;
  state.selectedMaterials.set(customId, {
    id: customId,
    name: name,
    category: category,
    qty: qty,
    unit: unit,
    refQty: 0,
    isCustom: true
  });

  saveState();
  renderCart();
  renderCatalog();
  closeCustomModal();
  showToast(`Added custom material "${name}"`, "success");
}

/**
 * Official Estimation Sheet (A.S ELECTRICIAN)
 */
function openEstimationModal() {
  renderEstimateSheet();
  DOM.estimateModal?.classList.add("modal-backdrop--open");
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeEstimationModal() {
  DOM.estimateModal?.classList.remove("modal-backdrop--open");
}

function renderEstimateSheet() {
  if (!DOM.estimateSheetContent) return;

  const selectedList = Array.from(state.selectedMaterials.values()).filter(item => (parseInt(item.qty, 10) || 0) > 0);
  const totalUnits = selectedList.reduce((sum, item) => sum + (parseInt(item.qty, 10) || 0), 0);
  const siteName = state.projectMeta.siteName || "SINTHAMANI";
  const date = state.projectMeta.date || "14.03.2026";
  const phone = state.projectMeta.phone || "";
  const workType = state.projectMeta.workType || "Plumbing";
  const engineer = state.projectMeta.engineer || "A.S Electrician";

  DOM.estimateSheetContent.innerHTML = `
    <div class="as-sheet" id="officialSheetPrint">
      <div class="as-sheet__header">
        <h1 class="as-sheet__company">A.S ELECTRICIAN</h1>
        <div class="as-sheet__company-sub">Electrical &amp; Plumbing Contractor${phone ? ` • 📞 Ph: ${phone}` : ""}</div>
        <div class="as-sheet__doc-title">Material Estimation</div>
      </div>

      <div class="as-sheet__meta-box">
        <div class="as-sheet__meta-item as-sheet__meta-item--highlight">
          <span class="as-sheet__meta-label">DATE:</span>
          <span class="as-sheet__meta-val">${date}</span>
        </div>
        <div class="as-sheet__meta-item as-sheet__meta-item--highlight">
          <span class="as-sheet__meta-label">SITE NAME:</span>
          <span class="as-sheet__meta-val">${siteName}</span>
        </div>
        <div class="as-sheet__meta-item">
          <span class="as-sheet__meta-label">WORK TYPE:</span>
          <span class="as-sheet__meta-val">${workType}</span>
        </div>
        <div class="as-sheet__meta-item">
          <span class="as-sheet__meta-label">PHONE / CONTACT:</span>
          <span class="as-sheet__meta-val">${phone || "—"}</span>
        </div>
        <div class="as-sheet__meta-item as-sheet__meta-item--full">
          <span class="as-sheet__meta-label">PREPARED BY:</span>
          <span class="as-sheet__meta-val">${engineer}</span>
        </div>
      </div>

      <div class="as-sheet__table-wrap">
        <table class="as-sheet__table">
          <thead>
            <tr>
              <th>S.NO</th>
              <th>MATERIAL DESCRIPTION</th>
              <th>QTY</th>
              <th>UNIT</th>
            </tr>
          </thead>
          <tbody>
            ${selectedList.map((item, idx) => `
              <tr>
                <td>${idx + 1}</td>
                <td>${item.name}</td>
                <td><strong>${item.qty}</strong></td>
                <td>${item.unit}</td>
              </tr>
            `).join("")}
            <tr class="as-sheet__total-row">
              <td colspan="2" style="text-align: right;">TOTAL ESTIMATED:</td>
              <td style="text-align: center;">${totalUnits.toLocaleString("en-IN")}</td>
              <td style="text-align: center;">${selectedList.length} Items</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="as-sheet__signatures">
        <div class="as-sheet__sign-box">
          <div class="as-sheet__sign-line"></div>
          <div class="as-sheet__sign-name">${engineer}</div>
          <div class="as-sheet__sign-sub">Site Engineer / Electrician${phone ? ` (${phone})` : ""}</div>
        </div>

        <div class="as-sheet__sign-box">
          <div class="as-sheet__sign-line"></div>
          <div class="as-sheet__sign-name">A.S ELECTRICIAN</div>
          <div class="as-sheet__sign-sub">Authorized Signatory</div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Direct PDF Download (No print dialog - downloads actual .pdf file directly!)
 */
function downloadDirectPDF() {
  const element = document.getElementById("officialSheetPrint");
  if (!element) {
    showToast("Estimation sheet not found", "warning");
    return;
  }

  const siteName = (state.projectMeta.siteName || "SINTHAMANI").replace(/[^a-zA-Z0-9]/g, "_");
  const date = (state.projectMeta.date || "14-03-2026").replace(/[^a-zA-Z0-9]/g, "-");
  const filename = `AS_Electrician_Estimation_${siteName}_${date}.pdf`;

  showToast("Downloading PDF file... (PDF பதிவிறக்கம் செய்யப்படுகிறது)", "info");

  if (typeof html2pdf !== "undefined") {
    const opt = {
      margin: [6, 6, 6, 6],
      filename: filename,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, letterRendering: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save().then(() => {
      showToast("PDF Downloaded Successfully! ✓ (பதிவிறக்கம் முடிந்தது)", "success");
    }).catch(err => {
      console.error("html2pdf failed:", err);
      showToast("PDF download failed, retrying...", "warning");
    });
  } else {
    showToast("PDF generator initializing, please try in a moment...", "warning");
  }
}

/**
 * WhatsApp Share
 */
function shareWhatsApp() {
  const selectedList = Array.from(state.selectedMaterials.values()).filter(item => (parseInt(item.qty, 10) || 0) > 0);
  if (selectedList.length === 0) {
    showToast("Please enter quantities greater than 0 before sharing", "warning");
    return;
  }

  const siteName = state.projectMeta.siteName || "SINTHAMANI";
  const date = state.projectMeta.date || "14.03.2026";
  const phone = state.projectMeta.phone || "";
  const workType = state.projectMeta.workType || "Plumbing";
  const engineer = state.projectMeta.engineer || "A.S Electrician";

  let text = `*A.S ELECTRICIAN - MATERIAL ESTIMATION*\n`;
  text += `━━━━━━━━━━━━━━━━━━━━\n`;
  text += `📅 *Date:* ${date}\n`;
  text += `🏗️ *Site Name:* ${siteName}\n`;
  if (phone) text += `📞 *Phone:* ${phone}\n`;
  text += `🔧 *Work Type:* ${workType}\n`;
  text += `👷 *Prepared By:* ${engineer}\n\n`;
  text += `*SELECTED MATERIALS LIST:*\n`;

  selectedList.forEach((item, idx) => {
    text += `${idx + 1}. ${item.name} — *${item.qty} ${item.unit}*\n`;
  });

  const totalUnits = selectedList.reduce((sum, item) => sum + (parseInt(item.qty, 10) || 0), 0);
  text += `━━━━━━━━━━━━━━━━━━━━\n`;
  text += `*Total Items:* ${selectedList.length} | *Total Units:* ${totalUnits}\n`;
  text += `_Generated via A.S Electrician App_`;

  const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}

/**
 * Toast Alert
 */
function showToast(message, type = "info") {
  if (!DOM.toastContainer) return;

  const toast = document.createElement("div");
  toast.className = "toast-msg";

  let icon = "⚡";
  if (type === "success") icon = "✓";
  if (type === "warning") icon = "⚠️";

  toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
  DOM.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(8px)";
    toast.style.transition = "all 200ms ease-in";
    setTimeout(() => toast.remove(), 220);
  }, 2600);
}

window.handleCartSetRefQty = function(itemId, refQty) {
  if (state.selectedMaterials.has(itemId)) {
    const item = state.selectedMaterials.get(itemId);
    item.qty = refQty;
    state.selectedMaterials.set(itemId, item);
  } else {
    const p = findProductById(itemId);
    if (p) {
      state.selectedMaterials.set(itemId, {
        id: p.id,
        name: p.name,
        category: p.category || state.currentCategory,
        qty: refQty,
        unit: p.unit,
        refQty: p.refQty
      });
    }
  }
  saveState();
  renderCart();
  renderCatalog();
  showToast(`Set ${refQty} for material`, "success");
};
