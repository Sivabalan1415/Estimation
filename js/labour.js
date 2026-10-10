/**
 * Labour Attendance & Machine Rent Tracker with Official Weekly A4 PDF Generator
 * Built for Tamil Nadu & Indian Construction Sites
 */

(function () {
  "use strict";

  // Days of Week with English & Tamil metadata
  const DAYS_META = [
    { key: "mon", name: "Monday", tamil: "திங்கள்", short: "Mon" },
    { key: "tue", name: "Tuesday", tamil: "செவ்வாய்", short: "Tue" },
    { key: "wed", name: "Wednesday", tamil: "புதன்", short: "Wed" },
    { key: "thu", name: "Thursday", tamil: "வியாழன்", short: "Thu" },
    { key: "fri", name: "Friday", tamil: "வெள்ளி", short: "Fri" },
    { key: "sat", name: "Saturday", tamil: "சனி", short: "Sat" },
    { key: "sun", name: "Sunday", tamil: "ஞாயிறு", short: "Sun" }
  ];

  // Helper: Get Current Week's Monday in YYYY-MM-DD
  function getDefaultMonday() {
    const now = new Date();
    const day = now.getDay(); // 0 is Sunday
    const diff = (day === 0 ? -6 : 1) - day; // adjust when day is sunday
    const monday = new Date(now);
    monday.setDate(now.getDate() + diff);
    return monday.toISOString().split("T")[0];
  }

  // Format Date DD.MM.YYYY
  function formatDateDDMMYYYY(dateObj) {
    const d = String(dateObj.getDate()).padStart(2, "0");
    const m = String(dateObj.getMonth() + 1).padStart(2, "0");
    const y = dateObj.getFullYear();
    return `${d}.${m}.${y}`;
  }

  // Helper: Format Date DD/MM
  function formatDateDDMM(dateObj) {
    const d = String(dateObj.getDate()).padStart(2, "0");
    const m = String(dateObj.getMonth() + 1).padStart(2, "0");
    return `${d}/${m}`;
  }

  // Helper: Format Indian Rupee Currency (e.g. ₹44,600)
  function formatINR(amount) {
    const num = Number(amount) || 0;
    return "₹" + num.toLocaleString("en-IN");
  }

  // Convert Integer to Indian English Words (Crores, Lakhs, Thousands, Hundreds)
  function numberToIndianWords(n) {
    const num = Math.floor(Number(n) || 0);
    if (num === 0) return "Zero Rupees Only";

    const a = [
      "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
      "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen",
      "Seventeen", "Eighteen", "Nineteen"
    ];
    const b = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

    function inWords(num) {
      if (num < 20) return a[num];
      const digit = num % 10;
      return b[Math.floor(num / 10)] + (digit ? " " + a[digit] : "");
    }

    let str = "";
    const crore = Math.floor(num / 10000000);
    let remainder = num % 10000000;

    const lakh = Math.floor(remainder / 100000);
    remainder = remainder % 100000;

    const thousand = Math.floor(remainder / 1000);
    remainder = remainder % 1000;

    const hundred = Math.floor(remainder / 100);
    const belowHundred = remainder % 100;

    if (crore > 0) {
      str += (crore < 100 ? inWords(crore) : inWords(Math.floor(crore / 100)) + " Hundred " + inWords(crore % 100)) + " Crore ";
    }
    if (lakh > 0) {
      str += inWords(lakh) + " Lakh ";
    }
    if (thousand > 0) {
      str += inWords(thousand) + " Thousand ";
    }
    if (hundred > 0) {
      str += inWords(hundred) + " Hundred ";
    }
    if (belowHundred > 0) {
      str += (str ? "and " : "") + inWords(belowHundred) + " ";
    }

    return (str.trim() + " Rupees Only");
  }

  // Machine Icon & Tamil Helpers (Supports Cutting, Drilling, JCB, Mixer, Tractor, Normal Machine)
  function getMachineIcon(type) {
    const t = (type || "").toLowerCase();
    if (t.includes("cutting") || t.includes("கட்டிங்")) return "⚙️";
    if (t.includes("drilling") || t.includes("டிரில்லிங்")) return "🔩";
    if (t.includes("jcb") || t.includes("excavator")) return "🚜";
    if (t.includes("mixer") || t.includes("மிக்சர்")) return "🔄";
    if (t.includes("tractor") || t.includes("டிராக்டர்")) return "🚜";
    return "🛠️";
  }

  function getMachineTamil(type) {
    const t = (type || "").toLowerCase();
    if (t.includes("cutting") || t.includes("கட்டிங்")) return "கட்டிங் மெஷின் வாடகை";
    if (t.includes("drilling") || t.includes("டிரில்லிங்")) return "டிரில்லிங் மெஷின் வாடகை";
    if (t.includes("jcb") || t.includes("excavator")) return "ஜேசிபி எக்ஸ்கவேட்டர் வாடகை";
    if (t.includes("mixer") || t.includes("மிக்சர்")) return "கான்கிரீட் மிக்சர் வாடகை";
    if (t.includes("tractor") || t.includes("டிராக்டர்")) return "டிராக்டர் வாடகை";
    return "இயந்திர வாடகை (கட்டிங் / டிரில்லிங் / மெஷின்)";
  }

  // Initial State Factory
  function createInitialState() {
    const mondayStr = getDefaultMonday();
    const mondayDate = new Date(mondayStr);

    const days = DAYS_META.map((meta, idx) => {
      const d = new Date(mondayDate);
      d.setDate(mondayDate.getDate() + idx);
      return {
        key: meta.key,
        name: meta.name,
        tamil: meta.tamil,
        short: meta.short,
        dateStr: formatDateDDMMYYYY(d),
        dateDisplay: formatDateDDMM(d),
        labourers: 0,
        machines: 0,
        notes: ""
      };
    });

    return {
      siteName: "SINTHAMANI - Sri Murugan Towers",
      supervisorName: "Er. A. Sathish (A.S Contractor)",
      machineType: "Machine",
      weekStartDate: mondayStr,
      defaultLabourWage: 700,
      defaultMachineRent: 1500,
      billNumber: "LMR-" + mondayStr.replace(/-/g, "").slice(2) + "-01",
      activeView: "cards", // 'cards' | 'table'
      days: days
    };
  }

  // LocalStorage Key
  const STORAGE_KEY = "as_labour_salary_system_v1";

  // Application State
  let state = loadState();

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && Array.isArray(parsed.days) && parsed.days.length >= 7) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn("Could not load labour state from localStorage", e);
    }
    return createInitialState();
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn("Could not save labour state to localStorage", e);
    }
  }

  // Recalculate Dates when weekStartDate changes
  function updateDatesFromStartDate(startDateStr) {
    const baseDate = new Date(startDateStr);
    if (isNaN(baseDate.getTime())) return;

    state.weekStartDate = startDateStr;
    state.days.forEach((day, idx) => {
      const d = new Date(baseDate);
      d.setDate(baseDate.getDate() + idx);
      day.dateStr = formatDateDDMMYYYY(d);
      day.dateDisplay = formatDateDDMM(d);
    });

    // Auto-update Bill Number if needed
    state.billNumber = "LMR-" + startDateStr.replace(/-/g, "").slice(2) + "-01";
  }

  // Calculate Totals
  function computeTotals() {
    const wageRate = Number(state.defaultLabourWage) || 0;
    const rentRate = Number(state.defaultMachineRent) || 0;

    let totalLabourers = 0;
    let totalLabourSalary = 0;
    let totalMachines = 0;
    let totalMachineRent = 0;

    const dailyBreakdown = state.days.map((day) => {
      const lCount = Math.max(0, parseInt(day.labourers, 10) || 0);
      const mCount = Math.max(0, parseInt(day.machines, 10) || 0);

      const lSub = lCount * wageRate;
      const mSub = mCount * rentRate;
      const dayTotal = lSub + mSub;

      totalLabourers += lCount;
      totalLabourSalary += lSub;
      totalMachines += mCount;
      totalMachineRent += mSub;

      return {
        ...day,
        labourers: lCount,
        machines: mCount,
        labourWage: wageRate,
        labourSubtotal: lSub,
        machineRent: rentRate,
        machineSubtotal: mSub,
        dayTotal: dayTotal
      };
    });

    const weekGrandTotal = totalLabourSalary + totalMachineRent;
    const amountInWords = numberToIndianWords(weekGrandTotal);

    return {
      dailyBreakdown,
      wageRate,
      rentRate,
      totalLabourers,
      totalLabourSalary,
      totalMachines,
      totalMachineRent,
      weekGrandTotal,
      amountInWords
    };
  }

  // DOM Elements Cache
  let labourDOM = {};

  function initLabourDOM() {
    labourDOM = {
      // Settings
      settingsCard: document.getElementById("labourSettingsCard"),
      settingsToggle: document.getElementById("labourSettingsToggle"),
      inputSiteName: document.getElementById("labourSiteName"),
      inputSupervisor: document.getElementById("labourSupervisor"),
      inputMachineType: document.getElementById("labourMachineType"),
      inputWeekStart: document.getElementById("labourWeekStart"),
      inputWage: document.getElementById("labourWageRate"),
      inputRent: document.getElementById("labourRentRate"),
      inputBillNo: document.getElementById("labourBillNo"),
      btnResetWeek: document.getElementById("labourBtnReset"),
      btnSampleData: document.getElementById("labourBtnSample"),

      // View Controls
      chipWeekPeriod: document.getElementById("labourWeekPeriodChip"),
      viewBtnCards: document.getElementById("labourViewCards"),
      viewBtnTable: document.getElementById("labourViewTable"),
      containerCards: document.getElementById("labourCardsContainer"),
      containerTable: document.getElementById("labourTableContainer"),

      // Bottom Bar Elements
      barGrandTotal: document.getElementById("labourBarGrandTotal"),
      barLabourSub: document.getElementById("labourBarLabourSub"),
      barMachineSub: document.getElementById("labourBarMachineSub"),
      btnWhatsApp: document.getElementById("labourBtnWhatsApp"),
      btnGetPdf: document.getElementById("labourBtnGetPdf"),
      btnPreview: document.getElementById("labourBtnPreview"),

      // A4 Voucher Modal
      voucherModal: document.getElementById("labourVoucherModal"),
      voucherModalClose: document.getElementById("labourVoucherClose"),
      voucherModalBackBtn: document.getElementById("labourModalBackBtn"),
      voucherSheetContent: document.getElementById("labourVoucherSheetContent"),
      voucherModalPdfBtn: document.getElementById("labourModalPdfBtn"),
      voucherModalPdfLandscapeBtn: document.getElementById("labourModalPdfLandscapeBtn"),
      voucherModalPrintBtn: document.getElementById("labourModalPrintBtn"),
      voucherModalWaBtn: document.getElementById("labourModalWaBtn")
    };
  }

  // Populate Settings Inputs from State
  function renderSettings() {
    if (!labourDOM.inputSiteName) return;
    labourDOM.inputSiteName.value = state.siteName || "";
    labourDOM.inputSupervisor.value = state.supervisorName || "";
    labourDOM.inputMachineType.value = state.machineType || "";
    labourDOM.inputWeekStart.value = state.weekStartDate || "";
    labourDOM.inputWage.value = state.defaultLabourWage;
    labourDOM.inputRent.value = state.defaultMachineRent;
    if (labourDOM.inputBillNo) labourDOM.inputBillNo.value = state.billNumber || "";

    // Sync active preset chip
    const presetChips = document.querySelectorAll("#machinePresetChips .preset-chip");
    presetChips.forEach(chip => {
      const chipMachine = chip.getAttribute("data-machine");
      if (chipMachine && chipMachine.toLowerCase() === (state.machineType || "").toLowerCase()) {
        chip.classList.add("active");
      } else {
        chip.classList.remove("active");
      }
    });

    // Week period badge
    const firstDay = state.days[0]?.dateDisplay || "";
    const lastDay = state.days[state.days.length - 1]?.dateDisplay || "";
    if (labourDOM.chipWeekPeriod) {
      labourDOM.chipWeekPeriod.innerHTML = `📅 <strong>Week:</strong> ${firstDay} — ${lastDay} (${state.siteName})`;
    }
  }

  // Render Day Cards
  function renderDayCards(calc) {
    if (!labourDOM.containerCards) return;

    let html = "";
    calc.dailyBreakdown.forEach((day, idx) => {
      const hasData = day.labourers > 0 || day.machines > 0;
      html += `
        <article class="day-card ${hasData ? "day-card--has-data" : ""}" data-index="${idx}">
          <!-- Card Header -->
          <div class="day-card__header">
            <div class="day-card__title-box">
              <span class="day-card__badge-num">${idx + 1}</span>
              <span class="day-card__day-name">${day.name}</span>
              <span class="day-card__tamil-name">${day.tamil}</span>
              <span class="day-card__date-chip">${day.dateDisplay}</span>
            </div>
            <div class="day-card__total-badge">
              <span class="day-card__total-label">Day Total (மொத்தம்)</span>
              <span class="day-card__total-val">${formatINR(day.dayTotal)}</span>
            </div>
          </div>

          <!-- Card Body: Labour & Machine Rows -->
          <div class="day-card__body">
            <!-- 1. Labourer Row -->
            <div class="entry-row entry-row--labour">
              <div class="entry-row__info">
                <span class="entry-row__label">
                  <span>👷</span> Labourers
                  <span class="entry-row__tamil-sub">தொழிலாளர்கள்</span>
                </span>
                <span class="entry-row__formula">
                  ${day.labourers} × ${formatINR(calc.wageRate)} = <strong>${formatINR(day.labourSubtotal)}</strong>
                </span>
              </div>

              <!-- Thumb Stepper -->
              <div class="touch-stepper">
                <button type="button" class="touch-stepper__btn touch-stepper__btn--minus" data-action="dec-labour" data-index="${idx}" aria-label="Decrease labourer count">−</button>
                <input 
                  type="text" 
                  class="touch-stepper__input" 
                  data-action="input-labour" 
                  data-index="${idx}" 
                  value="${day.labourers}" 
                  inputmode="numeric" 
                  pattern="[0-9]*" 
                  aria-label="Labourer count for ${day.name}"
                />
                <button type="button" class="touch-stepper__btn touch-stepper__btn--plus" data-action="inc-labour" data-index="${idx}" aria-label="Increase labourer count">+</button>
              </div>
            </div>

            <!-- 2. Machine Row (Dynamic: Cutting, Drilling, JCB, Mixer, Normal Machine) -->
            <div class="entry-row entry-row--machine">
              <div class="entry-row__info">
                <span class="entry-row__label">
                  <span>${getMachineIcon(state.machineType)}</span> ${escapeHtml(state.machineType || "Machine")}
                  <span class="entry-row__tamil-sub">${getMachineTamil(state.machineType)}</span>
                </span>
                <span class="entry-row__formula">
                  ${day.machines} × ${formatINR(calc.rentRate)} = <strong>${formatINR(day.machineSubtotal)}</strong>
                </span>
              </div>

              <!-- Thumb Stepper -->
              <div class="touch-stepper">
                <button type="button" class="touch-stepper__btn touch-stepper__btn--minus" data-action="dec-machine" data-index="${idx}" aria-label="Decrease machine count">−</button>
                <input 
                  type="text" 
                  class="touch-stepper__input" 
                  data-action="input-machine" 
                  data-index="${idx}" 
                  value="${day.machines}" 
                  inputmode="numeric" 
                  pattern="[0-9]*" 
                  aria-label="Machine count for ${day.name}"
                />
                <button type="button" class="touch-stepper__btn touch-stepper__btn--plus" data-action="inc-machine" data-index="${idx}" aria-label="Increase machine count">+</button>
              </div>
            </div>

            <!-- 3. Site Remarks Note -->
            <div class="day-card__notes">
              <input 
                type="text" 
                class="day-card__notes-input" 
                data-action="input-notes" 
                data-index="${idx}" 
                value="${escapeHtml(day.notes || "")}" 
                placeholder="📝 Site Remarks / குறிப்பு (e.g. Overtime, Excavation, Concrete slab...)" 
              />
            </div>
          </div>
        </article>
      `;
    });

    labourDOM.containerCards.innerHTML = html;
  }

  // Render Table View (Spreadsheet view)
  function renderTableView(calc) {
    if (!labourDOM.containerTable) return;

    let html = `
      <table class="labour-table">
        <thead>
          <tr>
            <th style="width: 45px;">S.No</th>
            <th>Day &amp; Date</th>
            <th>Labourers</th>
            <th>Wage Rate</th>
            <th>Labour Subtotal</th>
            <th>Machine (${escapeHtml(state.machineType)})</th>
            <th>Rent Rate</th>
            <th>Machine Subtotal</th>
            <th>Day Total</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
    `;

    calc.dailyBreakdown.forEach((day, idx) => {
      html += `
        <tr>
          <td style="font-family: var(--font-mono); font-weight: 800; color: #94a3b8;">${idx + 1}</td>
          <td>
            <strong>${day.name}</strong> <span style="font-family:var(--font-tamil); color:#60a5fa; font-size:0.75rem;">${day.tamil}</span><br/>
            <small style="color: #64748b; font-family: var(--font-mono);">${day.dateDisplay}</small>
          </td>
          <td>
            <div class="table-stepper">
              <button type="button" data-action="dec-labour" data-index="${idx}">−</button>
              <input type="text" data-action="input-labour" data-index="${idx}" value="${day.labourers}" inputmode="numeric" />
              <button type="button" data-action="inc-labour" data-index="${idx}">+</button>
            </div>
          </td>
          <td style="font-family: var(--font-mono);">${formatINR(calc.wageRate)}</td>
          <td style="font-family: var(--font-mono); font-weight: 800; color: #93c5fd;">${formatINR(day.labourSubtotal)}</td>
          <td>
            <div class="table-stepper">
              <button type="button" data-action="dec-machine" data-index="${idx}">−</button>
              <input type="text" data-action="input-machine" data-index="${idx}" value="${day.machines}" inputmode="numeric" />
              <button type="button" data-action="inc-machine" data-index="${idx}">+</button>
            </div>
          </td>
          <td style="font-family: var(--font-mono);">${formatINR(calc.rentRate)}</td>
          <td style="font-family: var(--font-mono); font-weight: 800; color: #fdba74;">${formatINR(day.machineSubtotal)}</td>
          <td style="font-family: var(--font-mono); font-weight: 900; color: #10b981; font-size: 0.95rem;">${formatINR(day.dayTotal)}</td>
          <td>
            <input 
              type="text" 
              class="day-card__notes-input" 
              style="min-width: 130px;" 
              data-action="input-notes" 
              data-index="${idx}" 
              value="${escapeHtml(day.notes || "")}" 
              placeholder="Remarks..." 
            />
          </td>
        </tr>
      `;
    });

    html += `
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2" style="text-align: right; text-transform: uppercase;">WEEK GRAND TOTAL:</td>
            <td style="font-family: var(--font-mono);">${calc.totalLabourers} Workers</td>
            <td>—</td>
            <td style="font-family: var(--font-mono); color: #60a5fa;">${formatINR(calc.totalLabourSalary)}</td>
            <td style="font-family: var(--font-mono);">${calc.totalMachines} Days</td>
            <td>—</td>
            <td style="font-family: var(--font-mono); color: #f97316;">${formatINR(calc.totalMachineRent)}</td>
            <td style="font-family: var(--font-mono); font-size: 1.15rem; color: #10b981;">${formatINR(calc.weekGrandTotal)}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    `;

    labourDOM.containerTable.innerHTML = html;
  }

  // Update Sticky Bottom Bar
  function renderBottomBar(calc) {
    if (labourDOM.barGrandTotal) {
      labourDOM.barGrandTotal.textContent = formatINR(calc.weekGrandTotal);
    }
    if (labourDOM.barLabourSub) {
      labourDOM.barLabourSub.textContent = `👷 ${calc.totalLabourers} wkr • ${formatINR(calc.totalLabourSalary)}`;
    }
    if (labourDOM.barMachineSub) {
      labourDOM.barMachineSub.textContent = `🚜 ${calc.totalMachines} mch • ${formatINR(calc.totalMachineRent)}`;
    }
  }

  // Generate Official A4 Invoice Document HTML
  function generateVoucherHTML(calc) {
    const firstDate = state.days[0]?.dateStr || "";
    const lastDate = state.days[state.days.length - 1]?.dateStr || "";
    const todayDate = formatDateDDMMYYYY(new Date());

    let rowsHTML = "";
    calc.dailyBreakdown.forEach((day, idx) => {
      rowsHTML += `
        <tr>
          <td>${idx + 1}</td>
          <td class="text-left">
            <strong>${day.name}</strong> <span style="font-family:var(--font-tamil); font-size:0.75rem; color:#475569;">(${day.tamil})</span>
          </td>
          <td>${day.dateStr}</td>
          <td>${day.labourers}</td>
          <td class="text-right">${formatINR(calc.wageRate)}</td>
          <td class="text-right">${formatINR(day.labourSubtotal)}</td>
          <td>${day.machines}</td>
          <td class="text-right">${formatINR(calc.rentRate)}</td>
          <td class="text-right">${formatINR(day.machineSubtotal)}</td>
          <td class="text-right" style="font-weight:900; color:#1e3a8a;">${formatINR(day.dayTotal)}</td>
          <td class="text-left" style="font-size:0.7rem; color:#475569;">${escapeHtml(day.notes || "—")}</td>
        </tr>
      `;
    });

    return `
      <div class="official-voucher-sheet" id="officialVoucherPrintDoc">
        <!-- Top Invoice Header -->
        <div class="ovs-header">
          <div class="ovs-header__top">
            <div>
              <h1 class="ovs-header__brand-title">${escapeHtml(state.siteName)}</h1>
              <div class="ovs-header__brand-sub">Contractor &amp; Construction Site Management • Daily Attendance &amp; Plant Log</div>
            </div>
            <div class="ovs-header__badge-box">
              <span class="ovs-badge-official">OFFICIAL SETTLEMENT STATEMENT</span>
              <div class="ovs-bill-num">BILL NO: ${escapeHtml(state.billNumber)}</div>
              <div style="font-size:0.72rem; color:#64748b; margin-top:2px;">Date: ${todayDate}</div>
            </div>
          </div>
          <div class="ovs-doc-title">WEEKLY LABOUR SALARY &amp; MACHINE RENT VOUCHER</div>
          <div class="ovs-doc-tamil">வாராந்திர தொழிலாளர் சம்பளம் மற்றும் இயந்திர வாடகை பற்றுச் சீட்டு</div>
        </div>

        <!-- Project Metadata Strip -->
        <div class="ovs-meta-strip">
          <div class="ovs-meta-item">
            <strong>PROJECT / SITE NAME:</strong>
            <span>${escapeHtml(state.siteName)}</span>
          </div>
          <div class="ovs-meta-item">
            <strong>SUPERVISOR / CONTRACTOR:</strong>
            <span>${escapeHtml(state.supervisorName)}</span>
          </div>
          <div class="ovs-meta-item">
            <strong>SETTLEMENT PERIOD:</strong>
            <span>${firstDate} to ${lastDate}</span>
          </div>
          <div class="ovs-meta-item">
            <strong>PLANT / MACHINE TYPE:</strong>
            <span>${escapeHtml(state.machineType)}</span>
          </div>
          <div class="ovs-meta-item">
            <strong>STANDARD LABOUR RATE:</strong>
            <span>${formatINR(calc.wageRate)} / Person / Day</span>
          </div>
          <div class="ovs-meta-item">
            <strong>MACHINE RENT RATE:</strong>
            <span>${formatINR(calc.rentRate)} / Day</span>
          </div>
        </div>

        <!-- Attendance & Rent Data Table -->
        <table class="ovs-table">
          <thead>
            <tr>
              <th style="width: 4.5%;">S.No<small>வ.எண்</small></th>
              <th style="width: 11%;">Day<small>கிழமை</small></th>
              <th style="width: 10%;">Date<small>தேதி</small></th>
              <th style="width: 5.8%;">Lab<small>ஆட்கள்</small></th>
              <th style="width: 7.5%;">Rate<small>கூலி</small></th>
              <th style="width: 9.8%;">Labour Sub<small>கூலி தொகை</small></th>
              <th style="width: 5.8%;">Mch<small>இயந்திரம்</small></th>
              <th style="width: 8.2%;">Rent<small>வாடகை</small></th>
              <th style="width: 9.8%;">Machine Sub<small>வாடகை தொகை</small></th>
              <th style="width: 11%;">Day Total<small>மொத்தத் தொகை</small></th>
              <th style="width: 16.6%;">Remarks<small>குறிப்பு</small></th>
            </tr>
          </thead>
          <tbody>
            ${rowsHTML}
            <tr class="ovs-row-total">
              <td colspan="3" style="text-align:right; font-weight:900;">WEEK TOTALS (வார மொத்தம்):</td>
              <td><strong>${calc.totalLabourers}</strong></td>
              <td>—</td>
              <td class="text-right"><strong>${formatINR(calc.totalLabourSalary)}</strong></td>
              <td><strong>${calc.totalMachines}</strong></td>
              <td>—</td>
              <td class="text-right"><strong>${formatINR(calc.totalMachineRent)}</strong></td>
              <td class="text-right" style="font-size:0.9rem; color:#1e3a8a;"><strong>${formatINR(calc.weekGrandTotal)}</strong></td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <!-- Amount In Words and Summary Block -->
        <div class="ovs-summary-box">
          <div class="ovs-words-col">
            <div class="ovs-words-label">AMOUNT IN WORDS (தொகை எழுத்தால்):</div>
            <div class="ovs-words-val">${calc.amountInWords}</div>
            <div style="font-size:0.7rem; color:#64748b; margin-top:6px;">
              Certified that the above worker attendance and machine deployment records are checked and verified on site.
            </div>
          </div>
          <div class="ovs-totals-col">
            <div class="ovs-tot-line">
              <span>Total Labour Wage:</span>
              <strong>${formatINR(calc.totalLabourSalary)}</strong>
            </div>
            <div class="ovs-tot-line">
              <span>Total Machine Rent:</span>
              <strong>${formatINR(calc.totalMachineRent)}</strong>
            </div>
            <div class="ovs-tot-grand">
              <span>GRAND TOTAL:</span>
              <span>${formatINR(calc.weekGrandTotal)}</span>
            </div>
          </div>
        </div>

        <!-- Signatures Block -->
        <div class="ovs-signatures">
          <div class="ovs-sig-block">
            <div class="ovs-sig-line"></div>
            <div class="ovs-sig-role">Prepared By (Site Supervisor)</div>
            <div class="ovs-sig-tamil">தயாரித்தவர் (தள மேற்பார்வையாளர்)</div>
          </div>
          <div class="ovs-sig-block">
            <div class="ovs-sig-line"></div>
            <div class="ovs-sig-role">Checked &amp; Verified (Timekeeper)</div>
            <div class="ovs-sig-tamil">சரிபார்த்தவர் (கணக்காளர்)</div>
          </div>
          <div class="ovs-sig-block">
            <div class="ovs-sig-line"></div>
            <div class="ovs-sig-role">Authorized Signatory (Owner/Manager)</div>
            <div class="ovs-sig-tamil">ஒப்புதல் அளித்தவர் (உரிமையாளர்)</div>
          </div>
        </div>

        <!-- Footer -->
        <div class="ovs-footer-note">
          Official Site Management Voucher • Generated automatically via A.S Construction &amp; Estimation Portal • Page 1 of 1
        </div>
      </div>
    `;
  }

  // Render Everything Reactive
  function renderAll() {
    const calc = computeTotals();
    renderSettings();
    renderDayCards(calc);
    renderTableView(calc);
    renderBottomBar(calc);

    // Toggle active view container
    if (state.activeView === "table") {
      if (labourDOM.containerCards) labourDOM.containerCards.style.display = "none";
      if (labourDOM.containerTable) labourDOM.containerTable.style.display = "block";
      if (labourDOM.viewBtnTable) labourDOM.viewBtnTable.classList.add("active");
      if (labourDOM.viewBtnCards) labourDOM.viewBtnCards.classList.remove("active");
    } else {
      if (labourDOM.containerCards) labourDOM.containerCards.style.display = "flex";
      if (labourDOM.containerTable) labourDOM.containerTable.style.display = "none";
      if (labourDOM.viewBtnCards) labourDOM.viewBtnCards.classList.add("active");
      if (labourDOM.viewBtnTable) labourDOM.viewBtnTable.classList.remove("active");
    }
  }

  // Stepper & Direct Input Event Delegation
  function handleContainerClick(e) {
    const target = e.target.closest("[data-action]");
    if (!target) return;

    const action = target.getAttribute("data-action");
    const idx = parseInt(target.getAttribute("data-index"), 10);
    if (isNaN(idx) || idx < 0 || idx >= state.days.length) return;

    const day = state.days[idx];

    if (action === "inc-labour") {
      day.labourers = (parseInt(day.labourers, 10) || 0) + 1;
    } else if (action === "dec-labour") {
      day.labourers = Math.max(0, (parseInt(day.labourers, 10) || 0) - 1);
    } else if (action === "inc-machine") {
      day.machines = (parseInt(day.machines, 10) || 0) + 1;
    } else if (action === "dec-machine") {
      day.machines = Math.max(0, (parseInt(day.machines, 10) || 0) - 1);
    } else {
      return;
    }

    saveState();
    renderAll();

    // Micro-animation: pop effect on day badge and grand total
    const currentCard = document.querySelector(`.day-card[data-index="${idx}"]`);
    if (currentCard) {
      const badge = currentCard.querySelector(".day-card__total-badge");
      if (badge) {
        badge.classList.remove("animate-pop");
        void badge.offsetWidth;
        badge.classList.add("animate-pop");
      }
    }
    if (labourDOM.barGrandTotal) {
      labourDOM.barGrandTotal.classList.remove("animate-pop");
      void labourDOM.barGrandTotal.offsetWidth;
      labourDOM.barGrandTotal.classList.add("animate-pop");
    }
  }

  function handleContainerInput(e) {
    const target = e.target;
    const action = target.getAttribute("data-action");
    const idx = parseInt(target.getAttribute("data-index"), 10);
    if (isNaN(idx) || idx < 0 || idx >= state.days.length) return;

    const day = state.days[idx];

    if (action === "input-labour") {
      const val = parseInt(target.value.replace(/\D/g, ""), 10);
      day.labourers = isNaN(val) ? 0 : val;
      saveState();
      renderAll();
    } else if (action === "input-machine") {
      const val = parseInt(target.value.replace(/\D/g, ""), 10);
      day.machines = isNaN(val) ? 0 : val;
      saveState();
      renderAll();
    } else if (action === "input-notes") {
      day.notes = target.value;
      saveState();
      // Only re-save, no need to redraw entire tree while user is typing
    }
  }

  // Settings Handlers
  function bindSettingsEvents() {
    if (labourDOM.settingsToggle) {
      labourDOM.settingsToggle.addEventListener("click", () => {
        labourDOM.settingsCard.classList.toggle("open");
      });
    }

    if (labourDOM.inputSiteName) {
      labourDOM.inputSiteName.addEventListener("input", (e) => {
        state.siteName = e.target.value;
        saveState();
        renderAll();
      });
    }

    if (labourDOM.inputSupervisor) {
      labourDOM.inputSupervisor.addEventListener("input", (e) => {
        state.supervisorName = e.target.value;
        saveState();
      });
    }

    if (labourDOM.inputMachineType) {
      labourDOM.inputMachineType.addEventListener("input", (e) => {
        state.machineType = e.target.value;
        const chips = document.querySelectorAll("#machinePresetChips .preset-chip");
        chips.forEach(c => {
          const m = c.getAttribute("data-machine") || "";
          if (m.toLowerCase() === (e.target.value || "").toLowerCase()) {
            c.classList.add("active");
          } else {
            c.classList.remove("active");
          }
        });
        saveState();
        renderAll();
      });
    }

    // Machine Preset Chips Click
    const presetChips = document.querySelectorAll("#machinePresetChips .preset-chip");
    presetChips.forEach(chip => {
      chip.addEventListener("click", () => {
        const machine = chip.getAttribute("data-machine");
        state.machineType = machine;
        if (labourDOM.inputMachineType) {
          labourDOM.inputMachineType.value = machine;
        }
        presetChips.forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        saveState();
        renderAll();
        showLabourToast(`Machine: ${machine}`, "success");
      });
    });

    if (labourDOM.inputWage) {
      labourDOM.inputWage.addEventListener("input", (e) => {
        state.defaultLabourWage = parseInt(e.target.value, 10) || 0;
        saveState();
        renderAll();
      });
    }

    if (labourDOM.inputRent) {
      labourDOM.inputRent.addEventListener("input", (e) => {
        state.defaultMachineRent = parseInt(e.target.value, 10) || 0;
        saveState();
        renderAll();
      });
    }

    if (labourDOM.inputBillNo) {
      labourDOM.inputBillNo.addEventListener("input", (e) => {
        state.billNumber = e.target.value;
        saveState();
      });
    }

    if (labourDOM.inputWeekStart) {
      labourDOM.inputWeekStart.addEventListener("change", (e) => {
        updateDatesFromStartDate(e.target.value);
        saveState();
        renderAll();
      });
    }

    // Reset Week
    if (labourDOM.btnResetWeek) {
      labourDOM.btnResetWeek.addEventListener("click", () => {
        if (confirm("Reset all counts for this week to 0? (இந்த வார பதிவுகளை 0 ஆக்கவா?)")) {
          state.days.forEach((d) => {
            d.labourers = 0;
            d.machines = 0;
            d.notes = "";
          });
          saveState();
          renderAll();
          showLabourToast("All weekly counts reset to 0", "info");
        }
      });
    }

    // Sample Data
    if (labourDOM.btnSampleData) {
      labourDOM.btnSampleData.addEventListener("click", () => {
        // Sample realistic week on Indian construction site
        const sampleCounts = [
          { l: 6, m: 2, n: "Foundation excavation & column footing" },
          { l: 8, m: 2, n: "Basement belt concrete pouring" },
          { l: 7, m: 1, n: "Brickwork brick laying & mortar mix" },
          { l: 9, m: 1, n: "Roof centering & steel binding" },
          { l: 10, m: 3, n: "Roof concrete slab casting day" },
          { l: 5, m: 1, n: "Curing & site clearing" },
          { l: 2, m: 0, n: "Sunday morning water curing" }
        ];

        state.days.forEach((d, idx) => {
          if (sampleCounts[idx]) {
            d.labourers = sampleCounts[idx].l;
            d.machines = sampleCounts[idx].m;
            d.notes = sampleCounts[idx].n;
          }
        });

        saveState();
        renderAll();
        showLabourToast("Sample week loaded! Check total & PDF voucher.", "success");
      });
    }

    // View Switchers
    if (labourDOM.viewBtnCards) {
      labourDOM.viewBtnCards.addEventListener("click", () => {
        state.activeView = "cards";
        saveState();
        renderAll();
      });
    }

    if (labourDOM.viewBtnTable) {
      labourDOM.viewBtnTable.addEventListener("click", () => {
        state.activeView = "table";
        saveState();
        renderAll();
      });
    }
  }

  // Open Preview Modal
  function openVoucherModal() {
    const calc = computeTotals();
    const html = generateVoucherHTML(calc);
    if (labourDOM.voucherSheetContent) {
      labourDOM.voucherSheetContent.innerHTML = html;
    }
    if (labourDOM.voucherModal) {
      labourDOM.voucherModal.classList.add("modal-backdrop--open");
    }
  }

  function closeVoucherModal() {
    if (labourDOM.voucherModal) {
      labourDOM.voucherModal.classList.remove("modal-backdrop--open");
    }
  }

  // Share via WhatsApp
  function shareOnWhatsApp() {
    const calc = computeTotals();
    const firstDate = state.days[0]?.dateDisplay || "";
    const lastDate = state.days[state.days.length - 1]?.dateDisplay || "";

    let text = `*👷 WEEKLY LABOUR & MACHINE RENT STATEMENT*\n`;
    text += `*அதிகாரப்பூர்வ கூலி & வாடகை அறிக்கை*\n`;
    text += `━━━━━━━━━━━━━━━━━━━━\n`;
    text += `🏗️ *Site:* ${state.siteName}\n`;
    text += `👷 *Supervisor:* ${state.supervisorName}\n`;
    text += `📅 *Period:* ${firstDate} to ${lastDate}\n`;
    text += `🚜 *Machine:* ${state.machineType}\n`;
    text += `🏷️ *Standard Rates:* Labour: ${formatINR(calc.wageRate)}/day | Machine: ${formatINR(calc.rentRate)}/day\n`;
    text += `━━━━━━━━━━━━━━━━━━━━\n`;
    text += `*DAILY LOG / தினசரி விவரம்:*\n`;

    calc.dailyBreakdown.forEach((day, idx) => {
      text += `${idx + 1}. *${day.name} (${day.tamil})* - ${day.dateDisplay}\n`;
      text += `   • 👷 Labourers: ${day.labourers} × ${formatINR(calc.wageRate)} = ${formatINR(day.labourSubtotal)}\n`;
      text += `   • 🚜 Machine: ${day.machines} × ${formatINR(calc.rentRate)} = ${formatINR(day.machineSubtotal)}\n`;
      text += `   • 💰 *Day Total: ${formatINR(day.dayTotal)}*`;
      if (day.notes) text += ` _(${day.notes})_`;
      text += `\n`;
    });

    text += `━━━━━━━━━━━━━━━━━━━━\n`;
    text += `*WEEK GRAND SUMMARY:*\n`;
    text += `👷 *Total Labourers:* ${calc.totalLabourers} Person-Days (${formatINR(calc.totalLabourSalary)})\n`;
    text += `🚜 *Total Machine:* ${calc.totalMachines} Machine-Days (${formatINR(calc.totalMachineRent)})\n`;
    text += `💵 *WEEK GRAND TOTAL: ${formatINR(calc.weekGrandTotal)}*\n`;
    text += `📝 *In Words:* ${calc.amountInWords}\n`;
    text += `━━━━━━━━━━━━━━━━━━━━\n`;
    text += `_Bill No: ${state.billNumber} • Generated via A.S Electrician App_`;

    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  }

  // Client-Side PDF Download with Isolated Offscreen Capture (Zero Top White Space, Zero Cutoff)
  function downloadA4PDF(orientation = "portrait") {
    const isLandscape = orientation === "landscape";
    const targetWidth = isLandscape ? 1040 : 740;
    const calc = computeTotals();

    showLabourToast(`Generating ${isLandscape ? "Landscape" : "Portrait"} A4 PDF... (தயாராகிறது...)`, "info");

    // 1. Save scroll position
    const savedScrollX = window.pageXOffset || document.documentElement.scrollLeft || 0;
    const savedScrollY = window.pageYOffset || document.documentElement.scrollTop || 0;

    // 2. Temporarily scroll window to top (0, 0)
    // Mandatory on mobile browsers to prevent html2canvas adding top scroll whitespace
    window.scrollTo(0, 0);

    // 3. Create isolated capture container directly attached to document.body
    const captureWrapper = document.createElement("div");
    captureWrapper.id = "cleanA4CaptureWrapper";
    captureWrapper.style.width = targetWidth + "px";
    captureWrapper.style.minWidth = targetWidth + "px";
    captureWrapper.style.maxWidth = targetWidth + "px";

    // Inject fresh voucher HTML
    captureWrapper.innerHTML = generateVoucherHTML(calc);

    const sheet = captureWrapper.querySelector(".official-voucher-sheet");
    if (sheet) {
      sheet.style.width = targetWidth + "px";
      sheet.style.minWidth = targetWidth + "px";
      sheet.style.maxWidth = targetWidth + "px";
      sheet.style.margin = "0";
      sheet.style.padding = isLandscape ? "14px 20px" : "12px 14px";
      sheet.style.boxSizing = "border-box";
      sheet.style.border = "1.5px solid #cbd5e1";
      sheet.style.borderRadius = "4px";
      sheet.style.background = "#ffffff";
    }

    document.body.appendChild(captureWrapper);

    const sanitizedSite = (state.siteName || "Site").replace(/[^a-zA-Z0-9_-]/g, "_");
    const filename = `Labour_Salary_Bill_${sanitizedSite}_${state.weekStartDate}_${orientation}.pdf`;

    const opt = {
      margin: [4, 4, 4, 4],
      filename: filename,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        letterRendering: true,
        logging: false,
        width: targetWidth,
        windowWidth: targetWidth,
        scrollX: 0,
        scrollY: 0,
        x: 0,
        y: 0
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: isLandscape ? "landscape" : "portrait"
      },
      pagebreak: { mode: ["avoid-all", "css", "legacy"] }
    };

    const cleanup = () => {
      if (captureWrapper && captureWrapper.parentNode) {
        captureWrapper.parentNode.removeChild(captureWrapper);
      }
      window.scrollTo(savedScrollX, savedScrollY);
    };

    if (window.html2pdf) {
      window.html2pdf()
        .set(opt)
        .from(sheet || captureWrapper)
        .save()
        .then(() => {
          cleanup();
          showLabourToast("PDF Voucher downloaded successfully! ✓ (பதிவிறக்கம் முடிந்தது)", "success");
        })
        .catch((err) => {
          cleanup();
          console.error("PDF generation error:", err);
          showLabourToast("PDF download failed, please retry", "warning");
        });
    } else {
      cleanup();
      showLabourToast("PDF generator loading, please wait a moment...", "warning");
    }
  }

  // Native Print
  function printVoucherNative() {
    openVoucherModal();
    if (labourDOM.voucherModal) {
      labourDOM.voucherModal.classList.add("print-active-modal");
    }
    setTimeout(() => {
      window.print();
      if (labourDOM.voucherModal) {
        labourDOM.voucherModal.classList.remove("print-active-modal");
      }
    }, 250);
  }

  // Toast Notification
  function showLabourToast(message, type = "info") {
    const toastBox = document.getElementById("toastContainer");
    if (!toastBox) return;

    const toast = document.createElement("div");
    toast.className = "toast-msg";
    let icon = "👷";
    if (type === "success") icon = "✓";
    if (type === "warning") icon = "⚠️";

    toast.innerHTML = `<span>${icon}</span><span>${escapeHtml(message)}</span>`;
    toastBox.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(8px)";
      toast.style.transition = "all 200ms ease-in";
      setTimeout(() => toast.remove(), 220);
    }, 2800);
  }

  function escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Bind Actions
  function bindActions() {
    if (labourDOM.containerCards) {
      labourDOM.containerCards.addEventListener("click", handleContainerClick);
      labourDOM.containerCards.addEventListener("input", handleContainerInput);
    }
    if (labourDOM.containerTable) {
      labourDOM.containerTable.addEventListener("click", handleContainerClick);
      labourDOM.containerTable.addEventListener("input", handleContainerInput);
    }

    if (labourDOM.btnWhatsApp) labourDOM.btnWhatsApp.addEventListener("click", shareOnWhatsApp);
    
    // Clicking "Preview / PDF" on bottom bar opens the preview modal first (just like Estimation!)
    if (labourDOM.btnGetPdf) labourDOM.btnGetPdf.addEventListener("click", openVoucherModal);
    if (labourDOM.btnPreview) labourDOM.btnPreview.addEventListener("click", openVoucherModal);

    // Modal controls
    if (labourDOM.voucherModalClose) labourDOM.voucherModalClose.addEventListener("click", closeVoucherModal);
    if (labourDOM.voucherModalBackBtn) labourDOM.voucherModalBackBtn.addEventListener("click", closeVoucherModal);
    if (labourDOM.voucherModalPdfBtn) labourDOM.voucherModalPdfBtn.addEventListener("click", () => downloadA4PDF("portrait"));
    if (labourDOM.voucherModalPdfLandscapeBtn) labourDOM.voucherModalPdfLandscapeBtn.addEventListener("click", () => downloadA4PDF("landscape"));
    if (labourDOM.voucherModalPrintBtn) labourDOM.voucherModalPrintBtn.addEventListener("click", printVoucherNative);
    if (labourDOM.voucherModalWaBtn) labourDOM.voucherModalWaBtn.addEventListener("click", shareOnWhatsApp);

    // Close on backdrop click
    if (labourDOM.voucherModal) {
      labourDOM.voucherModal.addEventListener("click", (e) => {
        if (e.target === labourDOM.voucherModal) {
          closeVoucherModal();
        }
      });
    }

    // Escape key closes modal
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && labourDOM.voucherModal?.classList.contains("modal-backdrop--open")) {
        closeVoucherModal();
      }
    });
  }

  // Initialize Module
  document.addEventListener("DOMContentLoaded", () => {
    initLabourDOM();
    bindSettingsEvents();
    bindActions();
    renderAll();
  });

  // Expose global controller for Master Portal Switcher
  window.LabourApp = {
    renderAll,
    openVoucherModal,
    downloadA4PDF,
    shareOnWhatsApp
  };
})();
