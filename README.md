# 🎓 Afaralmo - School Management System (Frontend)

**Afaralmo** is a comprehensive School Management System built to digitize academic activities, simplify school administration, and enhance communication between students, teachers, and administrators.

This repository contains the **frontend** application built with **React**, **TypeScript**, **Tailwind CSS**, and **Vite**.

---

## 🚀 Features

- 🔐 User Authentication (Login, Register)
- 📊 Role-based Dashboards for Admins, Teachers & Students
- 📝 Results & Report Management
- 🏫 Department Management
- ⚡ Fast, responsive, and modern UI
- 🔄 API integration with Node.js backend

---

## 🛠️ Tech Stack

- **React + TypeScript**
- **Vite**
- **Tailwind CSS**
- **React Router DOM**
- **Axios**
- **PostCSS**
- **ESLint & Prettier (recommended)**

---

## 🧩 Project Structure

afaralmo-frontend/
├── public/
├── src/
│ ├── assets/ # Images, icons, logos
│ ├── components/ # Reusable UI components (Navbar, Button, etc.)
│ ├── constants/ # Global constants and config
│ ├── hooks/ # Custom React hooks
│ ├── layouts/ # Shared layouts (AuthLayout, DashboardLayout)
│ ├── pages/ # Pages (Login, Register, Dashboard, Result, Report, etc.)
│ ├── services/ # Axios instances and API calls
│ ├── utils/ # Utility/helper functions
│ ├── App.tsx # Application root
│ └── main.tsx # Entry point
├── .env # Environment variables
├── tailwind.config.ts
├── postcss.config.js
├── index.html
└── README.md

yaml
Copy
Edit

---

## ⚙️ Setup & Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/afaralmo-frontend.git
cd afaralmo-frontend
2. Install Dependencies
bash
Copy
Edit
npm install
3. Start Development Server
bash
Copy
Edit
npm run dev
🌐 Example .env File
Create a .env file at the root of the project:

env
Copy
Edit
VITE_API_BASE_URL=https://api.afaralmo.com/api/v1
Replace the URL with your actual backend API base URL.

🔗 Deployment URLs (if available)
Frontend: https://afaralmo.vercel.app

Backend: https://api.afaralmo.com

🧪 How to Test
Login/Register as a student, teacher, or admin

Use the dashboard to navigate results, reports, and departments

Submit a result and verify it from another role

Test responsive layout on mobile and desktop

🤖 API Integration
All data is fetched using Axios from the Node.js backend

The base URL is configured in the .env file

RESTful endpoints: /login, /results, /departments, etc.

📚 Useful Commands
bash
Copy
Edit
npm install            # Install dependencies
npm run dev            # Start dev server
npm run build          # Build for production
npm run lint           # (Optional) Run linter
🧠 Additional Notes
Tailwind CSS is used for styling.

React Router DOM handles routing.

Project supports modular, scalable development with reusable components and layouts.

You can extend hooks and services for better structure and separation of concerns.

👨‍💻 Developer
ODUMO DAMILOLA PEACE
💼 Portfolio https://odumodamilola.vercel.app
🐱 GitHub https://github.com/odumodamilola
🐦 Twitter https://twitter.com/damilolaodumo
📧 damilolapeace.career@gmail.com

📃 License
This project is licensed under the MIT License – you're free to use and modify it.

❓FAQs
Q: Can I contribute to this project?
A: Yes! Feel free to fork and create a pull request.

Q: What’s next?
A: Backend documentation, authentication flow setup, and admin tools panel.