# 🌟 Chanintorn Portfolio

Portfolio เว็บไซต์ส่วนตัวของ **Chanintorn Chalermsuk** นักพัฒนาเว็บไซต์ฟร้อนท์เอนด์จากประเทศไทย

## 🔗 ลิงก์เว็บไซต์

🌐 **[https://exoticcore.github.io/chanintorn](https://exoticcore.github.io/chanintorn)**

## 🛠️ เทคโนโลยีที่ใช้

- **React 19** - JavaScript Library สำหรับสร้าง User Interface
- **Material-UI (MUI)** - React Component Library
- **Google Fonts (Kanit)** - ฟอนต์ภาษาไทย
- **GitHub Pages** - Static Site Hosting

## 📋 ฟีเจอร์

- ✅ **Responsive Design** - รองรับทุกขนาดหน้าจอ (Mobile, Tablet, Desktop)
- ✅ **Dark Theme** - ธีมสีเข้ม
- ✅ **Smooth Scrolling** - การเลื่อนหน้าจออย่างนุ่มนวล
- ✅ **Interactive Navigation** - เมนูนำทางที่ใช้งานง่าย
- ✅ **Contact Form** - ฟอร์มติดต่อ
- ✅ **Social Media Links** - ลิงก์โซเชียลมีเดีย

## 🚀 การติดตั้งและรันโปรเจ็กต์

### ✅ ความต้องการของระบบ

- Node.js (เวอร์ชัน 14 หรือใหม่กว่า)
- npm หรือ yarn

### 📥 การติดตั้ง

1. **Clone repository:**

   ```bash
   git clone https://github.com/exoticcore/chanintorn.git
   cd chanintorn
   ```

2. **ติดตั้ง dependencies:**

   ```bash
   npm install
   ```

3. **รันในโหมด development:**

   ```bash
   npm start
   ```

4. **เปิดเบราว์เซอร์ไปที่:**
   ```
   http://localhost:3000
   ```

## 🏗️ การ Build และ Deploy

### 📦 Build สำหรับ Production

```bash
npm run build
```

### 🚀 Deploy ไปยัง GitHub Pages

```bash
npm run deploy
```

## 📁 โครงสร้างโปรเจ็กต์

```
chanintorn-portfolio/
├── public/
│   ├── index.html          # HTML template
│   ├── myprofile 1.png     # รูปโปรไฟล์ Hero section
│   ├── image 1.png         # รูปภาพ About section
│   └── ...
├── src/
│   ├── App.js              # Component หลัก
│   └── index.js            # Entry point
├── package.json            # Dependencies และ scripts
└── README.md              # เอกสารนี้
```

## 🎨 การปรับแต่ง

### เปลี่ยนสีธีม

แก้ไขใน `src/App.js` ที่ส่วน `createTheme()`:

```javascript
primary: {
    main: '#D3E97A', // สีหลัก
},
```

### เปลี่ยนฟอนต์

แก้ไขใน `public/index.html` และ `src/App.js`:

```javascript
fontFamily: '"Kanit", "Inter", "Roboto"...';
```

### เปลี่ยนข้อมูลส่วนตัว

แก้ไขข้อความใน `src/App.js` ในส่วนต่างๆ:

- Hero Section (บรรทัดที่ ~150)
- About Me Section (บรรทัดที่ ~250)
- Experience Section (บรรทัดที่ ~380)

## 📞 ติดต่อ

- **Email:** chanintorn.chalermsuk@gmail.com
- **LinkedIn:** [Chanintorn Chalermsuk](https://linkedin.com/in/chanintorn)
- **GitHub:** [exoticcore](https://github.com/exoticcore)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

**Made with ❤️ by Chanintorn Chalermsuk**
