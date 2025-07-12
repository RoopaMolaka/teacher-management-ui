# 🎓 Teacher Management UI – Frontend Assessment

A modern, responsive, and accessible **Teacher Management Interface** built with **Next.js**, **TypeScript**, and **Tailwind CSS**.  
This is a submission for the frontend assessment task assigned by **PearlThoughts**.

---

## 🚀 Live Demo

🌐 [View the deployed project](https://teacher-management-ui-alpha.vercel.app/)

---

## 📹 Loom Video Walkthrough

🎥 [Watch the full 5–10 min walkthrough](https://www.loom.com/share/e951f09b9b564d6f9de969ebbf046d27)

---

## 🛠️ Tech Stack

- ✅ [Next.js 14](https://nextjs.org/)
- ✅ [TypeScript](https://www.typescriptlang.org/)
- ✅ [Tailwind CSS](https://tailwindcss.com/)

---

## 📁 Folder Structure

teacher-management-ui/
├── app/
│ └── page.tsx # Main layout
├── components/
│ ├── TeacherHeader.tsx # Name, role, birth date
│ ├── ContactInfoCard.tsx # Email, phone, address
│ ├── QualificationTable.tsx # Private / Group qualifications
│ ├── AvailabilityGrid.tsx # Weekly schedule grid
│ └── PaymentCard.tsx # UPI payment UI with validation
├── public/
│ └── images/ # Static image assets
├── types/
│ └── teacher.ts # TypeScript interfaces
├── styles/
│ └── globals.css # Tailwind base styles
└── README.md

---

## ✨ Features

- ✅ **Responsive design** (mobile-first)
- ✅ **Clean UI** using modern design patterns
- ✅ **Reusable components** (modular structure)
- ✅ **Type-safe** development with TypeScript
- ✅ **Form validation** and error handling
- ✅ **Loading state** & success feedback
- ✅ **Micro-interactions & transitions**
- ✅ **UPI Payment interface**
- ✅ **Accessibility improvements** (semantic HTML, alt tags)

---

## 🧩 Setup & Installation Instructions

### 1. Clone the repository

```bash
git clone https://github.com/RoopaMolaka/teacher-management-ui
cd teacher-management-ui
```

### Install dependencies

npm install

### Run the development server

npm run dev
Visit http://localhost:3000 in your browser to view the project.

### Deployment

This project is deployed using Vercel.
You can deploy your own by linking the GitHub repo to https://vercel.com and selecting the root folder.

### Design Decisions

Built mobile-first with Tailwind's utility classes.
Followed atomic component structure for scalability.
Used TypeScript interfaces to define props and reduce bugs.
Focused on clean spacing, readable typography, and proper semantic layout.

### Accessibility Notes

Used semantic tags like <main>, <form>, <label>, and <button>
Included alt attributes for images.
Applied sufficient color contrast and readable font sizes.

### Assumptions Made

All teacher data is static and derived from the mock screenshot.
Payment form is simulated for UI validation — no backend used.
Schedule grid represents availability as read-only (not interactive).

### Author
Roopa Reddy
Frontend Developer
roopamolaka25@gmail.com



