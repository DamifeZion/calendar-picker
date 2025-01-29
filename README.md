# 📅 Date Range Picker - Nuxt 3

A simple and elegant **Date Range Picker** built with **Nuxt 3, Vue.js, TailwindCSS, and Moment.js**. This component allows users to **select a start and end date**, choose from **quick shortcuts** (e.g., Last 7 Days, Last 30 Days), and interact with a **beautiful, ShadCN-inspired UI**.

---

## ✨ Features

✔ **Select a Start & End Date**  
✔ **Predefined Shortcuts** (Last 7 Days, Last 30 Days, Last 3 Months, Last Year)  
✔ **Smooth & Responsive UI** (Tailwind + Custom Styling)  
✔ **Reactive & Optimized for Performance** (Vue + Nuxt 3)  
✔ **Uses Moment.js** for date handling  
✔ **Lightweight & Easy to Integrate**  
✔ **Built with Clean & Modular Code**

---

## 🚀 Demo

[Live Deployment Link]()

---

## 🛠️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/DamifeZion/calendar-picker.git
   cd calendar-picker
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```
   The app should now be running at http://localhost:3000.

## 🔧 Configuration

Ensure you have the following dependencies installed:

```bash
"dependencies": {
  "nuxt": "^3.0.0",
  "vue": "^3.2.0",
  "moment": "^2.29.4",
  "tailwindcss": "^3.2.4",
  "class-variance-authority": "^0.7.1"
}
```

## Tailwind Setup

Tailwind is already configured inside nuxt.config.ts:

```bash
   css: ["@/assets/css/index.css"],
   postcss: {
      plugins: {
         tailwindcss: {},
         autoprefixer: {},
      },
   },
```

## ⚡ Usage

1. Import and use the Date Range Picker anywhere in your project:

```bash
<template>
  <DatePicker />
</template>

<script setup>
   import DatePicker from "@/components/DatePicker.vue";
</script>
```

## 🚀 Deployment

To deploy the app, follow these steps:

1. Build for production

```bash
npm run build
```

2. Run production server

```bash
npm run start
```

3. Deploy to Vercel or Netlify

```bash
npm install -g vercel
vercel deploy
```
