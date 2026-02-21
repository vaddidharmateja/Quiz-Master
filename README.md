# 🎓 CSE Quiz Master

> **Master Your Computer Science Fundamentals Through an Immersive, Data-Driven Experience.**

CSE Quiz Master is a premium, high-performance web application designed for students and professionals to sharpen their technical skills. Featuring a massive bank of 390+ questions across 6 core domains, it provides a rigorous but engaging environment to test and improve your knowledge.

---

## 🌟 Key Highlights

- **🎯 Precision Learning**: Questions are meticulously curated to cover core academic and industry-relevant topics.
- **⚡ High Performance**: Built with pure Vanilla JavaScript for near-instant transitions and zero-refresh navigation.
- **💎 Premium Aesthetics**: A state-of-the-art Glassmorphism UI that feels modern and distraction-free.
- **📱 Intelligent Responsiveness**: Crafted with mobile-first CSS Grid and Flexbox for native-app-like feel on any device.

---

## 🚀 core Features in Detail

### 1. Dynamic Quiz Engine (v2.0)
Unlike static quizzes, the CSE Quiz Master uses a **Random Sampling Algorithm (RSA)**. For every category you choose, the engine:
1.  Accesses a deep pool of **30 verified questions**.
2.  **Shuffles** the entire pool using a Fisher-Yates-inspired randomization.
3.  Serves **15 unique questions**, ensuring that no two quiz sessions are identical.

### 2. Immersive Visual & Audio Feedback
- **Real-time Scoring**: Instant visual validation (Correct/Wrong) with status icons.
- **Audio Cues**: Crisp sound effects for success and error states.
- **Interactive Timer**: A 15-second per-question countdown that adds "healthy pressure," with visual alerts (red pulse) when time is running low.

### 3. Progressive User Journey
Three distinct screens guide you through your learning path:
1.  **Dashboard**: Overview of all 6 technical domains.
2.  **Specialization Selection**: Drill down into specific sub-topics.
3.  **The Arena**: The actual quiz interface, optimized for focus.
4.  **Analytics Center**: Detailed breakdown of results, including score, percentage, and motivational badges (Excellent, Good, etc.).

### 4. Persistent Analytics
- Individual category High Scores are tracked using the browser's **LocalStorage**.
- A **Global High Score** is displayed in the navigation bar, aggregating your total mastery across all categories.
- **Theme Persistence**: The app remembers your Light/Dark mode preference even after you close the browser.

---

## 📚 Technical Domains

| Domain | Sub-Topics Covered |
| :--- | :--- |
| **Programming** | C Language, Java Core, Python, JavaScript (ES6+), SQL Basics |
| **Data Structures** | Arrays, Linked Lists, Stacks, Queues, Trees |
| **Networks** | OSI Seven-Layer Model, TCP/IP Suite, Web Protocols |
| **Operating Systems** | Process Management, CPU Scheduling, Memory Management |
| **DBMS** | Normalization (1NF, 2NF, 3NF, BCNF), Keys, Transactions |
| **OOP Concepts** | Encapsulation, Inheritance, Polymorphism, SOLID Principles |

---

## 🛠️ Technology Stack & Architecture

- **Structure**: Semantic HTML5 for SEO and accessibility.
- **Styling**: 
    - **CSS Custom Properties**: For the powerful Dark/Light theme engine.
    - **Glassmorphism**: Using `backdrop-filter: blur(10px)`.
- **Logic**: ES6+ JavaScript modules.
- **Icons**: [Font Awesome 6.0](https://fontawesome.com/)
- **Typography**: [Inter](https://fonts.google.com/specimen/Inter) for readability and [Orbitron](https://fonts.google.com/specimen/Orbitron) for that "tech-mastery" feel.
- **Persistence Layer**: Browser `localStorage` API.

---

## 📂 Project Structure

```text
/quiz-master
├── index.html          # Core SPA structure & screen manager
├── README.md           # Project documentation (You are here)
├── css/
│   └── style.css       # Design system, theme engine & utility classes
└── js/
    └── script.js       # The "Brain": RSA Logic, Question Bank & State Manager
```

---

## 🏁 Getting Started

### Prerequisites
A modern web browser (Chrome, Firefox, Safari, Edge).

### Installation
1.  Clone the repository:
    ```bash
    git clone https://github.com/vaddidharmateja/Quiz-Master.git
    ```
2.  Navigate to the project folder:
    ```bash
    cd quiz-master
    ```
3.  Open `index.html` in your browser.

---

## 🚀 Deployment

The project is optimized for static hosting. You can easily deploy it using **GitHub Pages**:
1.  Push your code to a GitHub repository.
2.  Go to **Settings > Pages**.
3.  Select the `main` branch and `/root` folder.
4.  Your quiz master is live!

---

## 🤝 Contribution

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📬 Contact & Support

Designed with ❤️ for Computer Science Excellence by **Dharma Teja**.

- **GitHub**: [@vaddidharmateja](https://github.com/vaddidharmateja)
- **LinkedIn**: [Vaddi Hemanth Sri Dharma Teja](https://linkedin.com/in/vaddihemanthsridharmateja/)
- **Project Link**: [https://github.com/vaddidharmateja/Quiz-Master](https://github.com/vaddidharmateja/Quiz-Master)

---
*© 2026 CSE Quiz Master. All technical questions verified for accuracy.*

