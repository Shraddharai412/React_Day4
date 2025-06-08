# 🚀 𝐃𝐀𝐘 𝟒 – 𝐂𝐎𝐍𝐓𝐄𝐗𝐓 𝐀𝐏𝐈 & 𝐓𝐇𝐄𝐌𝐄 𝐌𝐀𝐍𝐀𝐆𝐄𝐌𝐄𝐍𝐓 (𝐅𝐔𝐋𝐋 𝐒𝐓𝐀𝐂𝐊 𝐌𝐄𝐑𝐍 𝐓𝐑𝐀𝐈𝐍𝐈𝐍𝐆)

Day 4 of my Full Stack MERN training focused on **Context API**, where I learned to manage global state in React apps without prop drilling. Two mini-projects were built to demonstrate these concepts practically.

---

## 🧠 𝐓𝐨𝐩𝐢𝐜𝐬 𝐂𝐨𝐯𝐞𝐫𝐞𝐝

- 🔄 `createContext()` and `useContext()` hooks
- 🧪 Building custom `Context Providers`
- 🎨 Global **Theme Management** using `ThemeContext`
- 🔐 User **Authentication State Management** with `AuthContext`
- 🧩 Passing and consuming data via context across nested components
- 💡 Component-level separation and best practices

---

## 💼 𝐏𝐫𝐨𝐣𝐞𝐜𝐭𝐬 𝐁𝐮𝐢𝐥𝐭

### 🌗 𝐓𝐡𝐞𝐦𝐞 𝐓𝐨𝐠𝐠𝐥𝐞𝐫

A React project that toggles between **light** and **dark** modes using a `ThemeContext`. The state is shared across all components without prop drilling.

**Key Features:**
- Light/Dark theme toggle
- Styled using conditional class names
- Global state management using `useContext()`

**Files:**
- `ThemeContext.js` – Defines the context and toggle logic
- `Dashboard.js` – Uses the context to apply styling and toggle button

---

### 🔐 𝐀𝐮𝐭𝐡𝐞𝐧𝐭𝐢𝐜𝐚𝐭𝐢𝐨𝐧 𝐂𝐨𝐧𝐭𝐞𝐱𝐭

This module simulates a simple login/logout functionality using a global context (`AuthContext`). Users can be logged in/out without passing state manually.

**Key Features:**
- Simulated login/logout with a mock username
- Authentication state available across all components
- Custom hook `useAuth()` for easier access

**Files:**
- `AuthContext.js` – Manages user authentication state
- `Dashboard.js` – Displays user state and login/logout buttons

---

![Screenshot 2025-06-08 173125](https://github.com/user-attachments/assets/b185e92d-02bb-4e35-b24f-35c23d5cb439)
![Screenshot 2025-06-08 173112](https://github.com/user-attachments/assets/fccfd41d-732e-45c9-9c27-c4a7f282e639)
![Screenshot 2025-06-08 173102](https://github.com/user-attachments/assets/4d042f2d-106a-40a1-8835-157e99825384)
![Screenshot 2025-06-08 173051](https://github.com/user-attachments/assets/87f5302f-f439-4bea-8214-87e911ca02dd)
![Screenshot 2025-06-08 172909](https://github.com/user-attachments/assets/239f1bcd-4542-4e83-896f-8198f1118814)
![Screenshot 2025-06-08 172852](https://github.com/user-attachments/assets/39690cc0-6639-47cf-9333-a7efa9e954ec)


