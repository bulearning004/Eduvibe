# EduVibe - AI Writing Feedback

ระบบผู้ช่วยตรวจงานเขียนอัจฉริยะสำหรับอาจารย์

## การเตรียมตัวสำหรับ GitHub และ Netlify

โปรเจกต์นี้พร้อมสำหรับการ Deploy บน Netlify ผ่าน GitHub แล้ว โดยมีขั้นตอนดังนี้:

### 1. เชื่อมต่อกับ GitHub
- ไปที่เมนู **Settings** (ไอคอนฟันเฟือง) ใน AI Studio
- เลือก **Export to GitHub**
- ทำตามขั้นตอนเพื่อสร้าง Repository ใหม่บน GitHub ของคุณ

### 2. Deploy บน Netlify
- เข้าสู่ระบบ [Netlify](https://www.netlify.com/)
- คลิก **Add new site** > **Import an existing project**
- เลือก **GitHub** และเลือก Repository ของ EduVibe
- Netlify จะตรวจพบการตั้งค่าโดยอัตโนมัติ:
  - **Build command:** `npm run build`
  - **Publish directory:** `dist`
- คลิก **Deploy site**

### 3. ตั้งค่า Environment Variables (สำคัญ)
หากคุณมีการใช้งาน Gemini API หรือ API อื่นๆ:
- ไปที่ **Site settings** > **Environment variables** ใน Netlify
- เพิ่มตัวแปรชื่อ `GEMINI_API_KEY` และใส่ค่า API Key ของคุณ
- ทำการ **Trigger deploy** ใหม่อีกครั้งเพื่อให้ค่ามีผล

## ไฟล์ที่เพิ่มเข้ามาเพื่อรองรับ Netlify
- `netlify.toml`: กำหนดค่าการ Build และการจัดการ Routing (SPA Redirects)
- `.gitignore`: ป้องกันการนำไฟล์ที่ไม่จำเป็นและไฟล์ความลับขึ้น GitHub
