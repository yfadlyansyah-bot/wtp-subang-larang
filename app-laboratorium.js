// ==========================================
// LABORATORIUM WTP - JAVASCRIPT
// PT Jasa Tirta Luhur - WTP Subang Larang
// ==========================================

// Konfigurasi
const CONFIG = {
    WEB_APP_URL: 'YOUR_WEB_APP_URL_HERE', // Ganti dengan URL deployment Anda
    AUTO_SAVE_INTERVAL: 30000, // 30 detik
    DRAFT_KEY: 'lab_report_draft'
};

// Data struktur parameter
const parameterData = {
    kekeruhan: [
        { name: 'Air Baku', unit: 'NTU', standard: '0.00' },
        { name: 'Air Setelah Pipa', unit: 'NTU', standard: '0.00' },
        { name: 'SCADA Air Baku', unit: 'NTU', standard: '0.00' },
        { name: 'Sedimentasi Pipa 1', unit: 'NTU', standard: '0.00-3.00' },
        { name: 'Sedimentasi Pipa 2', unit: 'NTU', standard: '0.00-2.00' },
        { name: 'Sedimentasi Pipa 3', unit: 'NTU', standard: '0.00-4.00' },
        { name: 'Sedimentasi Pipa 4', unit: 'NTU', standard: '0.00-1.50' },
        { name: 'Outlet Filter Pipa 1', unit: 'NTU', standard: '0.00-1.50' },
        { name: 'Outlet Filter Pipa 2', unit: 'NTU', standard: '0.00-1.50' },
        { name: 'Outlet Filter Pipa 3', unit: 'NTU', standard: '0.00-1.50' },
        { name: 'Outlet Filter Pipa 4', unit: 'NTU', standard: '0.00-1.50' },
        { name: 'Reservoir', unit: 'NTU', standard: '0.00-1.50' },
        { name: 'Distribusi Campuran', unit: 'NTU', standard: '0.00-1.50' },
        { name: 'SCADA Distribusi', unit: 'NTU', standard: '0.00-1.50' }
    ],
    ph: [
        { name: 'Air Baku', unit: 'pH', standard: '6.00' },
        { name: 'SCADA Air Baku', unit: 'pH', standard: '4.00-8.00' },
        { name: 'Sedimentasi Pipa 1', unit: 'pH', standard: '6.50-8.00' },
        { name: 'Sedimentasi Pipa 2', unit: 'pH', standard: '6.50-8.00' },
        { name: 'Sedimentasi Pipa 3', unit: 'pH', standard: '6.50-8.00' },
        { name: 'Sedimentasi Pipa 4', unit: 'pH', standard: '6.50-7.50' },
        { name: 'Outlet Filter Pipa 1', unit: 'pH', standard: '6.50-7.50' },
        { name: 'Outlet Filter Pipa 2', unit: 'pH', standard: '6.50-7.50' },
        { name: 'Outlet Filter Pipa 3', unit: 'pH', standard: '6.50-8.50' },
        { name: 'Outlet Filter Pipa 4', unit: 'pH', standard: '6.50-8.50' },
        { name: 'Reservoir', unit: 'pH', standard: '6.50-8.50' },
        { name: 'Distribusi Campuran', unit: 'pH', standard: '6.50-8.50' },
        { name: 'SCADA Distribusi', unit: 'pH', standard: '6.50-8.50' }
    ],
    temperature: [
        { name: 'Udara', unit: '°C', standard: '' },
        { name: 'Distribusi Campuran', unit: '°C', standard: '' },
        { name: 'Udara', unit: '°C', standard: '' }
    ],
    warna: [
        { name: 'Air Baku', unit: 'PtCo', standard: '0-60' },
        { name: 'Distribusi Campuran', unit: 'PtCo', standard: '0.00-10.00' }
    ],
    dhl: [
        { name: 'Air Baku', unit: 'µS/cm', standard: '' },
        { name: 'Distribusi Campuran', unit: 'µS/cm', standard: '' }
    ],
    ammonium: [
        { name: 'Air Baku', unit: 'mg/L', standard: '0.00-1.00' },
        { name: 'Outlet Aerasi', unit: 'mg/L', standard: '0.00-1.50' },
        { name: 'Outlet Filter Pipa 1', unit: 'mg/L', standard: '0.00-1.50' },
        { name: 'Outlet Filter Pipa 2', unit: 'mg/L', standard: '0.00-1.50' },
        { name: 'Outlet Filter Pipa 3', unit: 'mg/L', standard: '0.00-1.50' },
        { name: 'Outlet Filter Pipa 4', unit: 'mg/L', standard: '0.00-1.50' },
        { name: 'Distribusi Campuran', unit: 'mg/L', standard: '0.00-1.50' }
    ],
    mangan: [
        { name: 'Air Baku', unit: 'mg/L', standard: '0.00-0.50' },
        { name: 'Outlet Aerasi', unit: 'mg/L', standard: '0.00-0.50' },
        { name: 'Outlet Filter Pipa 1', unit: 'mg/L', standard: '0.00-0.50' },
        { name: 'Outlet Filter Pipa 2', unit: 'mg/L', standard: '0.00-0.50' },
        { name: 'Outlet Filter Pipa 3', unit: 'mg/L', standard: '0.00-0.50' },
        { name: 'Outlet Filter Pipa 4', unit: 'mg/L', standard: '0.00-0.50' },
        { name: 'Reservoir', unit: 'mg/L', standard: '0.00-0.10' },
        { name: 'Distribusi Campuran', unit: 'mg/L', standard: '0.00-0.10' }
    ],
    detergen: [
        { name: 'Air Baku', unit: 'mg/L', standard: '0.00-0.10' },
        { name: 'Air Aerasi', unit: 'mg/L', standard: '0.00-0.10' },
        { name: 'Distribusi Campuran', unit: 'mg/L', standard: '0.00-0.10' }
    ],
    do: [
        { name: 'Air Baku', unit: 'mg/L', standard: '0.00-5.00' },
        { name: 'Air Aerasi', unit: 'mg/L', standard: '3.00-7.00' },
        { name: 'Air Baku', unit: 'mg/L', standard: '0.50-2.00' }
    ],
    besi: [
        { name: 'Air Baku', unit: 'mg/L', standard: '0.00-2.00' },
        { name: 'Distribusi Campuran', unit: 'mg/L', standard: '0.00-2.00' }
    ],
    alumunium: [
        { name: 'Distribusi Campuran', unit: 'mg/L', standard: '0.00-0.30' },
        { name: 'Reservoir', unit: 'mg/L', standard: '0.30-0.50' }
    ],
    freeChlorine: [
        { name: 'Distribusi Campuran', unit: 'mg/L', standard: '0.20-0.50' },
        { name: 'SCADA Distribusi', unit: 'mg/L', standard: '0.30-0.50' }
    ],
    totalChlorine: [
        { name: 'Distribusi Campuran', unit: 'mg/L', standard: '' }
    ]
};

// State
let autoSaveInterval = null;

// ==========================================
// INITIALIZATION
// ==========================================
window.onload = function() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('tanggal').value = today;
    
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    document.getElementById('hari').value = days[new Date().getDay()];
    
    regenerateAllGrids();
    loadDraft();
    startAutoSave();
};

// ==========================================
// GRID GENERATION
// ==========================================
function generateGrid(containerId, parameters) {
    const container = document.getElementById(containerId);
    const selectedTimes = getSelectedTimes();
    
    if (selectedTimes.length === 0) {
        container.innerHTML = '<p style="color: #ff9800; padding: 15px; background: #fff3cd; border-radius: 4px;">⚠️ Silakan pilih waktu pemantauan terlebih dahulu</p>';
        return;
    }

    let html = '<div class="time-grid header">';
    html += '<div>Parameter</div>';
    html += '<div>Satuan</div>';
    html += '<div>Standar</div>';
    selectedTimes.forEach(time => {
        html += `<div class="time-header">${time}</div>`;
    });
    html += '</div>';

    parameters.forEach((param, idx) => {
        html += '<div class="time-grid">';
        html += `<div class="param-name">${param.name}</div>`;
        html += `<div class="param-unit">${param.unit}</div>`;
        html += `<div class="param-unit">${param.standard}</div>`;
        selectedTimes.forEach(time => {
            html += `<input type="text" class="time-input" data-param="${containerId}" data-name="${param.name}" data-time="${time}" placeholder="-">`;
        });
        html += '</div>';
    });

    container.innerHTML = html;
}

function getSelectedTimes() {
    const checkboxes = document.querySelectorAll('.time-checkbox:checked');
    return Array.from(checkboxes).map(cb => cb.value);
}

function selectAllTimes() {
    document.querySelectorAll('.time-checkbox').forEach(cb => cb.checked = true);
    regenerateAllGrids();
}

function regenerateAllGrids() {
    Object.keys(parameterData).forEach(key => {
        const gridId = key + 'Grid';
        generateGrid(gridId, parameterData[key]);
    });
}

// ==========================================
// TOGGLE SECTION
// ==========================================
function toggleSection(sectionId) {
    const content = document.getElementById(sectionId);
    const header = event.currentTarget;
    
    content.classList.toggle('collapsed');
    header.classList.toggle('collapsed');
}

// ==========================================
// AUTO-SAVE & DRAFT
// ==========================================
function startAutoSave() {
    if (autoSaveInterval) clearInterval(autoSaveInterval);
    
    autoSaveInterval = setInterval(() => {
        saveDraft(true);
    }, CONFIG.AUTO_SAVE_INTERVAL);
}

function saveDraft(silent = false) {
    try {
        const formData = collectFormData();
        localStorage.setItem(CONFIG.DRAFT_KEY, JSON.stringify(formData));
        
        if (!silent) {
            showAlert('success', '💾 Draft tersimpan otomatis');
        }
    } catch (error) {
        console.error('Error saving draft:', error);
    }
}

function loadDraft() {
    try {
        const draft = localStorage.getItem(CONFIG.DRAFT_KEY);
        if (!draft) return;
        
        const data = JSON.parse(draft);
        
        // Restore basic info
        if (data.hari) document.getElementById('hari').value = data.hari;
        if (data.tanggal) document.getElementById('tanggal').value = data.tanggal;
        if (data.petugas) document.getElementById('petugas').value = data.petugas;
        if (data.catatan) document.getElementById('catatan').value = data.catatan;
        
        // Restore time selections
        if (data.selectedTimes) {
            data.selectedTimes.forEach(time => {
                const checkbox = document.querySelector(`.time-checkbox[value="${time}"]`);
                if (checkbox) checkbox.checked = true;
            });
            regenerateAllGrids();
        }
        
        // Restore input values
        setTimeout(() => {
            document.querySelectorAll('.time-input').forEach(input => {
                const param = input.dataset.param;
                const name = input.dataset.name;
                const time = input.dataset.time;
                
                if (data.data && data.data[param] && data.data[param][name] && data.data[param][name][time]) {
                    input.value = data.data[param][name][time];
                }
            });
        }, 100);
        
        showAlert('success', '📂 Draft terakhir dimuat');
    } catch (error) {
        console.error('Error loading draft:', error);
    }
}

function clearDraft() {
    localStorage.removeItem(CONFIG.DRAFT_KEY);
}

// ==========================================
// FORM SUBMISSION
// ==========================================
function collectFormData() {
    const selectedTimes = getSelectedTimes();
    
    const formData = {
        action: 'saveLaboratoriumReport',
        hari: document.getElementById('hari').value,
        tanggal: document.getElementById('tanggal').value,
        petugas: document.getElementById('petugas').value,
        halaman: document.getElementById('halaman').value,
        selectedTimes: selectedTimes,
        catatan: document.getElementById('catatan').value,
        data: {}
    };

    document.querySelectorAll('.time-input').forEach(input => {
        const param = input.dataset.param;
        const name = input.dataset.name;
        const time = input.dataset.time;
        const value = input.value;

        if (!formData.data[param]) formData.data[param] = {};
        if (!formData.data[param][name]) formData.data[param][name] = {};
        formData.data[param][name][time] = value;
    });

    return formData;
}

async function submitForm() {
    const selectedTimes = getSelectedTimes();
    
    if (selectedTimes.length === 0) {
        showAlert('error', '⚠️ Silakan pilih minimal 1 waktu pemantauan');
        return;
    }

    const formData = collectFormData();

    if (!formData.hari || !formData.tanggal || !formData.petugas) {
        showAlert('error', '⚠️ Harap isi semua field yang required (Hari, Tanggal, Petugas)');
        return;
    }

    document.getElementById('loadingIndicator').classList.add('show');

    try {
        const response = await fetch(CONFIG.WEB_APP_URL, {
            method: 'POST',
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (result.success) {
            showAlert('success', '✅ ' + result.message);
            clearDraft();
            
            setTimeout(() => {
                if (confirm('Data berhasil disimpan! Reset form?')) {
                    resetForm();
                }
            }, 1500);
        } else {
            showAlert('error', '❌ ' + result.message);
        }
    } catch (error) {
        showAlert('error', '❌ Error: ' + error.message);
    } finally {
        document.getElementById('loadingIndicator').classList.remove('show');
    }
}

function showAlert(type, message) {
    const alertBox = document.getElementById('alertBox');
    alertBox.className = `alert alert-${type} show`;
    alertBox.textContent = message;
    
    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 5000);

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetForm() {
    if (confirm('Yakin ingin reset semua data?')) {
        document.querySelectorAll('input[type="text"], input[type="date"], textarea, select').forEach(el => {
            if (el.id !== 'halaman') el.value = '';
        });
        document.querySelectorAll('.time-checkbox').forEach(cb => cb.checked = false);
        clearDraft();
        regenerateAllGrids();
        showAlert('success', '✅ Form berhasil direset');
    }
}

// ==========================================
// EVENT LISTENERS
// ==========================================
document.addEventListener('change', function(e) {
    if (e.target.classList.contains('time-checkbox')) {
        regenerateAllGrids();
    }
    
    // Auto-save on any input change
    if (e.target.matches('input, select, textarea')) {
        saveDraft(true);
    }
});

// Prevent accidental page leave
window.addEventListener('beforeunload', function(e) {
    const hasData = document.querySelectorAll('.time-input').length > 0;
    if (hasData) {
        e.preventDefault();
        e.returnValue = '';
    }
});
