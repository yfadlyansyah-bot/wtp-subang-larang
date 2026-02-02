# 📦 PANDUAN FILE-FILE - WTP SUBANG LARANG

## ✅ YA, ADA FILE CSS, JS, JSON, PY!

Sistem ini menggunakan **arsitektur modular** dengan file-file terpisah:

---

## 📁 STRUKTUR LENGKAP REPOSITORY

```
wtp-subang-larang/
│
├── 📂 frontend/                          # Frontend Application
│   │
│   ├── 📂 css/                           # ✅ Stylesheets (CSS)
│   │   ├── style-produksi.css            📄 11 KB - CSS untuk modul produksi
│   │   └── style-laboratorium.css        📄  9 KB - CSS untuk modul laboratorium
│   │
│   ├── 📂 js/                            # ✅ JavaScript Files
│   │   ├── app-produksi.js               📄 19 KB - Logic produksi
│   │   └── app-laboratorium.js           📄 13 KB - Logic laboratorium
│   │
│   ├── 📂 produksi/                      # Modul Produksi
│   │   ├── index.html                    📄 12 KB - Form produksi
│   │   └── manifest.json                 📄  1 KB - ✅ PWA config (JSON)
│   │
│   └── 📂 laboratorium/                  # Modul Laboratorium
│       ├── index.html                    📄  8 KB - Form laboratorium
│       └── manifest.json                 📄  1 KB - ✅ PWA config (JSON)
│
├── 📂 backend/                           # Backend (Google Apps Script)
│   ├── code_complete.gs                  📄 16 KB - Backend lengkap ⭐ REKOMENDASI
│   ├── code_laboratorium_gs.txt          📄 11 KB - Handler laboratorium
│   └── export_laboratorium_gs.txt        📄 15 KB - Export print
│
├── 📂 docs/                              # Dokumentasi
│   ├── QUICK_START.md                    📄  3 KB - Instalasi cepat
│   └── DOKUMENTASI_LABORATORIUM.md       📄  9 KB - User manual
│
├── 📄 server.py                          ✅  2 KB - Python server untuk dev
├── 📄 .gitignore                         📄  1 KB - Git ignore rules
├── 📄 LICENSE                            📄  1 KB - MIT License
└── 📄 README.md                          📄 15 KB - Dokumentasi utama

📊 TOTAL: 17 files, ~130 KB
```

---

## 🎨 FILE CSS (Stylesheets)

### 1. `frontend/css/style-produksi.css` (11 KB)

**Fungsi:**
- Styling untuk modul Laporan Produksi Air Bersih
- Design yang clean dan professional
- Responsive untuk mobile & desktop

**Fitur CSS:**
- Grid layout untuk time slots
- Card components
- Button styles dengan hover effects
- Loading indicators
- Alert messages
- Print-optimized styles

**Kenapa Terpisah dari HTML?**
✅ Modular dan reusable  
✅ Lebih mudah maintenance  
✅ Bisa di-cache oleh browser (faster loading)  
✅ Separation of concerns (HTML = structure, CSS = style)

**Contoh Isi:**
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
  background: #f5f7fa;
}

.header {
  background: linear-gradient(135deg, #1976d2 0%, #1565c0 100%);
  color: white;
  padding: 20px;
}

/* ... dan seterusnya */
```

---

### 2. `frontend/css/style-laboratorium.css` (9 KB)

**Fungsi:**
- Styling khusus untuk modul Laboratorium
- Parameter grid yang complex
- Collapsible sections
- Time selection interface

**Perbedaan dengan style-produksi.css:**
- Grid lebih kompleks (13 parameter)
- Collapsible UI components
- Different color scheme untuk lab
- Standard range indicators

**Contoh Fitur Unik:**
```css
.time-grid {
  display: grid;
  grid-template-columns: 200px repeat(auto-fit, minmax(80px, 1fr));
  gap: 10px;
}

.collapsible-content.collapsed {
  max-height: 0;
  overflow: hidden;
}

.standard-range {
  background: #fff3cd;
  color: #856404;
  padding: 2px 8px;
}
```

---

## 💻 FILE JAVASCRIPT

### 3. `frontend/js/app-produksi.js` (19 KB)

**Fungsi:**
- Logic utama untuk modul produksi
- State management
- API communication
- Auto-save functionality
- Form validation

**Fitur Utama:**
```javascript
// State management
let currentUser = null;
let selectedTimes = [];
let autoSaveInterval = null;

// Auto-save draft
function saveDraft(silent = false) {
  // Save to localStorage
  localStorage.setItem('draft', JSON.stringify(formData));
}

// Submit to Google Apps Script
async function submitReport() {
  const response = await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(data)
  });
}

// Time selection management
function updateSelectedTimes() {
  // Dynamic grid generation
}
```

**Dependencies:**  
❌ No dependencies! Pure vanilla JavaScript  
✅ Lightweight & fast  
✅ No npm install required

---

### 4. `frontend/js/app-laboratorium.js` (13 KB)

**Fungsi:**
- Logic khusus modul laboratorium
- Dynamic grid generation untuk 13 parameter
- Time checkbox management
- Collapsible section toggle

**Fitur Spesial:**
```javascript
// Parameter data structure
const parameterData = {
  kekeruhan: [
    { name: 'Air Baku', unit: 'NTU', standard: '0.00' },
    // ... 14 sampel
  ],
  ph: [
    { name: 'Air Baku', unit: 'pH', standard: '6.00' },
    // ... 13 sampel
  ],
  // ... 13 parameter
};

// Generate grid dynamically
function generateGrid(containerId, parameters) {
  const selectedTimes = getSelectedTimes();
  // Build HTML grid based on selected times
}

// Toggle collapsible sections
function toggleSection(sectionId) {
  content.classList.toggle('collapsed');
}
```

---

## 📋 FILE JSON (Manifest)

### 5. `frontend/produksi/manifest.json` (1 KB)

**Fungsi:**  
PWA (Progressive Web App) configuration untuk modul produksi

**Isi File:**
```json
{
  "name": "Laporan Produksi Air Bersih - Jasa Tirta Luhur",
  "short_name": "Produksi Air",
  "description": "Aplikasi pelaporan produksi air bersih",
  "start_url": "/index.html",
  "display": "standalone",
  "background_color": "#1976d2",
  "theme_color": "#1976d2",
  "orientation": "portrait",
  "icons": [
    {
      "src": "icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
```

**Manfaat PWA:**
✅ Install ke homescreen (seperti app native)  
✅ Full screen mode  
✅ Custom splash screen  
✅ Offline capability (dengan service worker)

---

### 6. `frontend/laboratorium/manifest.json` (1 KB)

**Fungsi:**  
PWA configuration untuk modul laboratorium

**Perbedaan:**
- Different app name & description
- Custom icons untuk lab
- Categories includes "medical"

---

## 🐍 FILE PYTHON

### 7. `server.py` (2 KB)

**Fungsi:**  
Local development server untuk testing

**Isi File:**
```python
#!/usr/bin/env python3
import http.server
import socketserver

PORT = 8000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add CORS headers
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

def run_server():
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"🚀 Server running at http://localhost:{PORT}")
        httpd.serve_forever()

if __name__ == "__main__":
    run_server()
```

**Cara Pakai:**
```bash
# Start server
python3 server.py

# Akses di browser
http://localhost:8000/frontend/produksi/
http://localhost:8000/frontend/laboratorium/
```

**Kenapa Perlu Server Lokal?**
✅ Test PWA features (need localhost or HTTPS)  
✅ Test file uploads  
✅ CORS handling  
✅ Simulate production environment

---

## 📄 FILE HTML

### 8. `frontend/produksi/index.html` (12 KB)

**Struktur:**
```html
<!DOCTYPE html>
<html lang="id">
<head>
    <!-- Meta tags, PWA -->
    <link rel="stylesheet" href="../css/style-produksi.css">
</head>
<body>
    <!-- Form content -->
    <script src="../js/app-produksi.js"></script>
</body>
</html>
```

**Link ke External Files:**
- CSS: `../css/style-produksi.css`
- JS: `../js/app-produksi.js`
- Manifest: `manifest.json`

---

### 9. `frontend/laboratorium/index.html` (8 KB)

**Lebih Modular:**
```html
<!DOCTYPE html>
<html lang="id">
<head>
    <link rel="stylesheet" href="../css/style-laboratorium.css">
</head>
<body>
    <!-- Form structure -->
    <script src="../js/app-laboratorium.js"></script>
</body>
</html>
```

**Kenapa Lebih Kecil?**
- CSS di file terpisah (9 KB)
- JavaScript di file terpisah (13 KB)
- HTML hanya structure
- **Total sebenarnya: 8 + 9 + 13 = 30 KB**

---

## 🔧 FILE BACKEND (.gs)

### 10. `backend/code_complete.gs` (16 KB)

**Bahasa:** Google Apps Script (JavaScript-based)

**Fungsi:**
- Backend lengkap untuk KEDUA modul (produksi + laboratorium)
- Handle API requests
- Save data ke Google Sheets
- Send email notifications
- Organize files di Google Drive

**Struktur:**
```javascript
// Config
const CONFIG = {
  DRIVE_ROOT_FOLDER_ID: '...',
  NOTIFICATION_EMAILS: '...'
};

// Main handlers
function doPost(e) {
  switch(action) {
    case 'saveProductionReport': ...
    case 'saveLaboratoriumReport': ...
  }
}

// Production module functions
function handleSaveProductionReport(data) { ... }

// Laboratory module functions
function handleSaveLaboratoriumReport(data) { ... }
function sendLaboratoriumNotificationEmail(data) { ... }

// Shared utilities
function createResponse(success, message, data) { ... }
```

---

## 📚 KENAPA ARSITEKTUR MODULAR?

### Sebelumnya (File Tunggal)
```
❌ laboratorium-form.html (34 KB)
   - HTML + CSS + JavaScript semua jadi satu
   - Sulit maintenance
   - Tidak reusable
   - Load semua sekaligus
```

### Sekarang (Modular)
```
✅ index.html (8 KB)           - Structure
✅ style-laboratorium.css (9 KB) - Styling
✅ app-laboratorium.js (13 KB)   - Logic
✅ manifest.json (1 KB)          - PWA config
✅ server.py (2 KB)              - Dev server

TOTAL: 33 KB (hampir sama!)
```

**Keuntungan Modular:**
1. ✅ **Maintainability** - Edit CSS tanpa touch HTML/JS
2. ✅ **Reusability** - CSS bisa dipakai ulang
3. ✅ **Caching** - Browser cache CSS/JS terpisah
4. ✅ **Team Work** - Designer edit CSS, Programmer edit JS
5. ✅ **Performance** - Load on demand
6. ✅ **Best Practice** - Industry standard
7. ✅ **PWA Support** - Manifest terpisah

---

## 🎯 FILE MANA YANG WAJIB UPLOAD?

### Minimal (Production Ready)
```
✅ frontend/
   ├── css/style-laboratorium.css
   ├── js/app-laboratorium.js
   └── laboratorium/
       ├── index.html
       └── manifest.json

✅ backend/
   └── code_complete.gs

✅ docs/
   ├── QUICK_START.md
   └── DOKUMENTASI_LABORATORIUM.md

✅ server.py
✅ .gitignore
✅ LICENSE
✅ README.md
```

### Lengkap (Dengan Produksi)
Tambahkan:
```
✅ frontend/
   ├── css/style-produksi.css
   ├── js/app-produksi.js
   └── produksi/
       ├── index.html
       └── manifest.json
```

---

## 🔗 HUBUNGAN ANTAR FILE

```
index.html
  ↓ link
style.css ──→ Browser renders styling
  ↓ script
app.js ──→ Handles user interaction
  ↓ fetch
code_complete.gs ──→ Save to Google Sheets
  ↓ email
Gmail API ──→ Send notification
```

---

## 📝 KESIMPULAN

**YA, ada semua file yang lengkap:**
- ✅ **CSS** (2 files) - Styling terpisah per modul
- ✅ **JavaScript** (2 files) - Logic terpisah per modul
- ✅ **JSON** (2 files) - PWA manifest
- ✅ **Python** (1 file) - Development server
- ✅ **HTML** (2 files) - Structure
- ✅ **Google Apps Script** (3 files) - Backend
- ✅ **Markdown** (4 files) - Dokumentasi

**Total: 16 file terstruktur dengan baik!**

Arsitektur ini mengikuti **best practices** modern web development dan siap untuk production use! 🚀
