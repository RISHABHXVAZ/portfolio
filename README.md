# Rishabh Srivastava — Personal Portfolio

A minimal, professional personal portfolio website for **Rishabh Srivastava**, Computer Science and Engineering undergraduate at **Motilal Nehru National Institute of Technology Allahabad (MNNIT Allahabad)**.

## Built With
- **React 19** + **TypeScript**
- **Vite**
- **Tailwind CSS v3**
- **Lucide Icons**
- Dynamic GitHub REST API & Real-time Coding Profiles Service (LeetCode, CodeChef, GeeksforGeeks)

## Sections
1. **Navbar** — Minimal sticky navigation with active-section tracking, mobile drawer, and quick GitHub link.
2. **Hero** — Headline, introduction, action buttons (View Projects, GitHub, LinkedIn), and an elegant portrait card featuring the official photo.
3. **About** — Verified academic background (B.Tech CSE, MNNIT Allahabad, CPI: 8.91/10, Prayagraj) and core engineering focus.
4. **Projects** — Refined editorial product cards for:
   - **ProfMojo** (Dec 2025 – Jan 2026): Spring Boot, Spring Security, React.js, PostgreSQL, JWT, Docker Compose. Includes GitHub & **Watch Demo** link.
   - **Wealthify** (Mar 2026 – Apr 2026): Spring Boot, Spring Security, React.js, PostgreSQL, Groq LLM API, JWT. Includes GitHub & **Live Demo** link.
5. **GitHub Integration** — Dynamically fetches public repository stats and latest projects via GitHub REST API for `@RISHABHXVAZ`.
6. **Technical Skills** — Strictly verified stack categorized into Languages (Java), Frameworks, Databases, Developer Tools, and Core CS Coursework.
7. **Coding Profiles & Ratings** — Dual balanced metrics showing:
   - **LeetCode** (`@RishabhxSrivastava`): **1733** Max Rating & **452** dynamically fetched Problems Solved (with Easy/Medium/Hard breakdown).
   - **CodeChef** (`@rishabh2814`): **1523** Max Rating & **113** dynamically fetched Problems Solved (with current rating).
   - **GeeksForGeeks** (`@srivastavart23g`): **453** Coding Score & **122** dynamically fetched Problems Solved (with current score).
   - Dedicated client services in `src/services/` with caching (sessionStorage + memory TTL) and graceful `—` fallback if offline.
8. **Achievements** — Verified CP contest ranks (CodeChef Starters 240 Top 20% Rank 619, LeetCode Weekly 510 Rank 1074), 500+ problems solved, and 99.61%ile in JEE Mains (100%ile in Physics).
9. **Education** — Academic timeline across MNNIT Allahabad, Takshila Academy, and St. Peter's School.
10. **Contact & Footer** — Contact details (personal email, institutional email, phone, GitHub, LinkedIn) with one-click clipboard copy.

## Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
