# Zerocode Frontend Engineer Assignment

## Live Demo
[https://your-live-url.vercel.app](https://your-live-url.vercel.app)

##  Test Credentials
- Email: manikanta@gmail.com
- Password: 12345

---

##  Tech Stack
-  Next.js (React)
-  TypeScript
-  Tailwind CSS
- Context API
-  LocalStorage for mock JWT

---

##  Features
-  Login + Register with auth context
-  Chat UI with dummy bot replies
-  Auto-scroll + loader animation
-  Voice input via Web Speech API
-  Export chat to .txt file
-  Clean responsive UI

---

##  Setup

```bash
git clone https://github.com/<your-handle>/zerocode-fe-assignment.git
cd zerocode-fe-assignment
npm install
npm run dev



zerocode-chatbot/
├── node_modules/
├── public/                  # Static assets
├── src/
│   ├── components/          # UI components
│   │   ├── ChatBox.tsx
│   │   ├── DarkModeToggle.tsx
│   │   ├── Loader.tsx
│   │   └── MessageBubble.tsx
│   ├── context/
│   │   └── AuthContext.tsx
│   ├── hooks/
│   │   └── useChat.ts
│   ├── pages/               # Next.js pages
│   │   ├── _app.tsx
│   │   ├── chat.tsx
│   │   ├── index.tsx
│   │   ├── login.tsx
│   │   └── register.tsx
│   ├── services/            # API or utility services
│   ├── styles/
│   │   └── globals.css
│   ├── types/
│   └── utils/
├── .eslintrc.js
├── .prettierrc
├── check-tailwind.js        # Custom Tailwind debug script
├── next-env.d.ts
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md
