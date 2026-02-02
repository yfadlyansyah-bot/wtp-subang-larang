# 🔬 Sistem Laporan WTP Subang Larang

> Sistem terintegrasi untuk **Laporan Produksi Air Bersih** dan **Laporan Laboratorium** Water Treatment Plant (WTP) Subang Larang - PT Jasa Tirta Luhur.

![Status](https://img.shields.io/badge/status-production%20ready-brightgreen)
![Version](https://img.shields.io/badge/version-4.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 📋 Daftar Isi

- [Fitur Utama](#-fitur-utama)
- [Struktur Folder](#-struktur-folder)
- [File-File Penting](#-file-file-penting)
- [Quick Start](#-quick-start)
- [Dokumentasi](#-dokumentasi)
- [Technology Stack](#-technology-stack)

---

## 🎯 Fitur Utama

### 🏭 Modul Produksi Air Bersih
- ✅ Monitoring level air, flow/debit, pressure, Hz
- ✅ Pencatatan KWH meter & water meter
- ✅ Dual shift operator
- ✅ Notifikasi email otomatis
- ✅ Export format print

### 🔬 Modul Laboratorium
- ✅ **13 parameter kualitas air** (Kekeruhan, pH, Temperatur, dll)
- ✅ **62+ jenis sampel** monitoring
- ✅ **Flexible time selection** (24 jam)
- ✅ Format print sesuai standar laboratorium
- ✅ Email notification dengan detail lengkap
- ✅ **Auto-save draft** setiap 30 detik
- ✅ **Responsive design** untuk mobile & desktop

---

## 📁 Struktur Folder

```
wtp-subang-larang/
│
├── 📂 frontend/                      # Frontend Files
│   ├── 📂 css/                       # Stylesheets
│   │   ├── style-produksi.css        # CSS untuk produksi
│   │   └── style-laboratorium.css    # CSS untuk laboratorium
│   │
│   ├── 📂 js/                        # JavaScript Files
│   │   ├── app-produksi.js           # JS untuk produksi
│   │   └── app-laboratorium.js       # JS untuk laboratorium
│   │
│   ├── 📂 produksi/                  # Modul Produksi
│   │   ├── index.html                # Form produksi
│   │   └── manifest.json             # PWA manifest produksi
│   │
│   └── 📂 laboratorium/              # Modul Laboratorium
│       ├── index.html                # Form laboratorium
│       └── manifest.json             # PWA manifest laboratorium
│
├── 📂 backend/                       # Backend Files (Google Apps Script)
│   ├── code_complete.gs              # ✅ Backend lengkap (ALL-IN-ONE)
│   ├── code_laboratorium.gs          # Backend khusus laboratorium
│   └── export_laboratorium.gs        # Export print laboratorium
│
├── 📂 docs/                          # Dokumentasi
│   ├── QUICK_START.md                # Instalasi 10 menit
│   ├── DOKUMENTASI_LABORATORIUM.md   # Docs lengkap lab
│   └── DOKUMENTASI_PRODUKSI.md       # Docs lengkap produksi
│
├── 📂 assets/                        # Assets (Screenshots, Icons)
│   ├── screenshot-form-lab.png
│   └── screenshot-print-lab.png
│
├── 📄 server.py                      # Local development server
├── 📄 .gitignore                     # Git ignore rules
├── 📄 LICENSE                        # MIT License
└── 📄 README.md                      # 👈 This file
```

---

## 📦 File-File Penting

### Frontend Files

#### 🎨 CSS Files
| File | Size | Fungsi |
|------|------|--------|
| **css/style-produksi.css** | 11 KB | Styling untuk modul produksi |
| **css/style-laboratorium.css** | 9 KB | Styling untuk modul laboratorium |

**Kenapa Terpisah?**
- Modular dan maintainable
- Load hanya yang dibutuhkan
- Bisa dikustomisasi per modul

#### 💻 JavaScript Files
| File | Size | Fungsi |
|------|------|--------|
| **js/app-produksi.js** | 19 KB | Logic untuk produksi (login, submit, auto-save) |
| **js/app-laboratorium.js** | 13 KB | Logic untuk laboratorium (grid generation, validation) |

**Fitur JavaScript:**
- ✅ Auto-save draft (localStorage)
- ✅ Validasi input real-time
- ✅ Dynamic grid generation
- ✅ API communication
- ✅ Error handling

#### 📱 HTML Files
| File | Size | Fungsi |
|------|------|--------|
| **produksi/index.html** | 12 KB | Form input produksi |
| **laboratorium/index.html** | 8 KB | Form input laboratorium (modular dengan external CSS/JS) |

**Struktur HTML:**
- Semantic HTML5
- Accessibility support
- SEO optimized
- PWA ready

#### 📋 Manifest Files
| File | Fungsi |
|------|--------|
| **produksi/manifest.json** | PWA configuration untuk produksi |
| **laboratorium/manifest.json** | PWA configuration untuk laboratorium |

**PWA Features:**
- ✅ Install ke homescreen
- ✅ Offline capable (coming soon)
- ✅ App shortcuts
- ✅ Custom icons

### Backend Files

#### 🔧 Google Apps Script
| File | Size | Fungsi |
|------|------|--------|
| **backend/code_complete.gs** | 16 KB | ⭐ **REKOMENDASI** - Backend lengkap untuk kedua modul |
| **backend/code_laboratorium.gs** | 11 KB | Handler khusus modul laboratorium |
| **backend/export_laboratorium.gs** | 15 KB | Export print untuk laboratorium |

**Pilihan Deployment:**

**Opsi 1: All-in-One (REKOMENDASI)** ✅
```javascript
// Deploy hanya file ini:
backend/code_complete.gs
```
- Lebih simple
- Satu deployment
- Mudah maintenance

**Opsi 2: Modular**
```javascript
// Deploy 3 file ini berurutan:
1. code_gs.txt (original)
2. backend/code_laboratorium.gs
3. backend/export_laboratorium.gs
```
- Lebih terstruktur
- Bisa update per modul
- Cocok untuk tim besar

### Documentation Files

| File | Size | Target Audience |
|------|------|-----------------|
| **QUICK_START.md** | 3 KB | Instalasi cepat (10 menit) |
| **DOKUMENTASI_LABORATORIUM.md** | 9 KB | User manual lengkap modul lab |
| **DOKUMENTASI_PRODUKSI.md** | - | User manual lengkap modul produksi |

### Utility Files

| File | Fungsi |
|------|--------|
| **server.py** | Local development server (Python 3) |
| **.gitignore** | Exclude sensitive files from Git |
| **LICENSE** | MIT License |

---

## 🚀 Quick Start

### Prerequisites
- Google Account
- Browser modern
- Python 3 (untuk local development)

### Instalasi 5 Menit

**1. Clone Repository**
```bash
git clone https://github.com/username/wtp-subang-larang.git
cd wtp-subang-larang
```

**2. Setup Backend**
- Buka [Google Apps Script](https://script.google.com)
- Buat project baru
- Copy isi `backend/code_complete.gs`
- Update CONFIG (Folder ID & Email)
- Deploy as Web App
- Copy deployment URL

**3. Configure Frontend**

Edit 2 file:

**File 1: `frontend/js/app-produksi.js`**
```javascript
const API_URL = 'YOUR_DEPLOYMENT_URL_HERE';
```

**File 2: `frontend/js/app-laboratorium.js`**
```javascript
const CONFIG = {
    WEB_APP_URL: 'YOUR_DEPLOYMENT_URL_HERE'
};
```

**4. Test Local**
```bash
# Start local server
python3 server.py

# Buka browser
http://localhost:8000/frontend/produksi/
http://localhost:8000/frontend/laboratorium/
```

**5. Deploy**
- Upload ke hosting (Netlify, Vercel, GitHub Pages)
- Atau gunakan Google Drive hosting
- Atau server internal perusahaan

✅ **Done!**

---

## 📖 Dokumentasi

### Untuk Installer/Admin
📘 [**QUICK_START.md**](docs/QUICK_START.md) - Instalasi lengkap step-by-step

### Untuk User Laboratorium
📗 [**DOKUMENTASI_LABORATORIUM.md**](docs/DOKUMENTASI_LABORATORIUM.md) - Panduan lengkap modul lab
- Cara input data
- Penjelasan parameter
- Export print
- Troubleshooting

### Untuk User Produksi
📕 [**DOKUMENTASI_PRODUKSI.md**](docs/DOKUMENTASI_PRODUKSI.md) - Panduan lengkap modul produksi

---

## 🛠️ Technology Stack

### Frontend
- **HTML5** - Structure
- **CSS3** - Styling (dengan custom properties)
- **Vanilla JavaScript** - Logic (no framework, lightweight!)
- **PWA** - Progressive Web App capabilities

### Backend
- **Google Apps Script** - Backend logic
- **Google Drive API** - File storage
- **Gmail API** - Email notifications

### Storage
- **Google Sheets** - Database
- **Google Drive** - File organization
- **LocalStorage** - Draft auto-save

### Deployment
- **Google Apps Script Web App** - Backend hosting
- **Any static hosting** - Frontend (Netlify, Vercel, etc.)

---

## 📊 Parameter Laboratorium

### 13 Parameter dengan 62+ Sampel

| Parameter | Satuan | Sampel | Standar |
|-----------|--------|--------|---------|
| **Kekeruhan** | NTU | 14 | 0.00-5.00 |
| **pH** | pH | 13 | 6.5-8.5 |
| **Temperatur** | °C | 3 | - |
| **Warna** | PtCo | 2 | Max 15 |
| **DHL** | µS/cm | 2 | - |
| **Ammonium** | mg/L | 7 | Max 1.5 |
| **Mangan** | mg/L | 8 | Max 0.5 |
| **Detergen** | mg/L | 3 | Max 0.05 |
| **DO** | mg/L | 3 | - |
| **Besi** | mg/L | 2 | Max 1.0 |
| **Alumunium** | mg/L | 2 | Max 0.2 |
| **Free Chlorine** | mg/L | 2 | 0.2-0.5 |
| **Total Chlorine** | mg/L | 1 | - |

**Total: 62+ parameter monitoring per laporan**

---

## 🔧 Development

### Run Locally
```bash
# Start development server
python3 server.py

# Open browser
http://localhost:8000
```

### File Structure Best Practices
```
✅ DO:
- Gunakan code_complete.gs untuk deployment
- Simpan file CSS/JS terpisah
- Update CONFIG dengan environment variables
- Test di localhost sebelum deploy

❌ DON'T:
- Upload file dengan credentials real
- Hardcode API URLs
- Commit node_modules atau build files
- Mix production dan development code
```

---

## 📱 Kompatibilitas

| Platform | Status | Notes |
|----------|--------|-------|
| 💻 **Desktop** | ✅ Fully Supported | Chrome, Firefox, Edge, Safari |
| 📱 **Mobile** | ✅ Fully Supported | iOS Safari, Chrome Android |
| 📱 **Tablet** | ✅ Fully Supported | iPad, Android tablets |
| 🌐 **PWA** | ✅ Installable | Add to homescreen |
| 📴 **Offline** | 🚧 Coming Soon | Service worker in progress |

---

## 🤝 Contributing

Contributions welcome! Silakan:

1. Fork repository
2. Buat branch fitur (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

---

## 📝 Changelog

### Version 4.0 (2026-02-02) - LATEST
- ✨ Menambahkan modul Laboratorium WTP
- ✨ Modular CSS & JS architecture
- ✨ PWA support untuk kedua modul
- ✨ Auto-save draft functionality
- ✨ Improved mobile responsiveness
- 🔧 Code refactoring untuk better maintainability

### Version 3.0 (sebelumnya)
- ✨ Modul Laporan Produksi Air Bersih
- ✨ Google Drive auto-organized structure
- ✨ Email notifications

---

## 🐛 Known Issues & Roadmap

### Known Issues
- [ ] Export PDF langsung dari web (workaround: print to PDF)
- [ ] Service worker untuk offline mode
- [ ] Bulk import data historis

### Roadmap v5.0
- [ ] Dashboard analytics dengan grafik
- [ ] Comparison between periods
- [ ] Advanced search & filter
- [ ] Role-based access control (RBAC)
- [ ] WhatsApp notification integration
- [ ] Mobile app (React Native)

---

## 📞 Support

- 📧 **Email**: support@jasatirta.co.id
- 💬 **Issues**: [GitHub Issues](https://github.com/username/wtp-subang-larang/issues)
- 📖 **Docs**: [Documentation Folder](docs/)

---

## 👥 Team

- **Developer**: Tim IT PT Jasa Tirta Luhur
- **Maintainer**: Operator WTP Subang Larang
- **QA**: Kepala Laboratorium & Kepala Produksi

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details

---

## 🙏 Acknowledgments

- PT Jasa Tirta Luhur
- WTP Subang Larang Operations Team
- Laboratory Quality Control Team
- Google Apps Script Community

---

## 🎓 Learn More

### Tutorials
- [Google Apps Script Basics](https://developers.google.com/apps-script)
- [PWA Development](https://web.dev/progressive-web-apps/)
- [LocalStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

### Related Projects
- [Water Quality Monitoring Systems](https://github.com/topics/water-quality)
- [Laboratory Management Systems](https://github.com/topics/lims)

---

**Made with ❤️ for PT Jasa Tirta Luhur**

⭐ **Star repository ini jika bermanfaat!**

---

## 🔗 Quick Links

- [📘 Quick Start Guide](docs/QUICK_START.md)
- [📗 Dokumentasi Laboratorium](docs/DOKUMENTASI_LABORATORIUM.md)
- [🐛 Report Issues](https://github.com/username/wtp-subang-larang/issues)
- [💡 Request Features](https://github.com/username/wtp-subang-larang/issues/new)

---

**Last Updated**: February 2, 2026  
**Version**: 4.0  
**Status**: ✅ Production Ready
