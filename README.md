# Portfolio Website (MERN)

A personal portfolio site built with MongoDB, Express, React and Node —
matching the reference layout you shared (Home / About / Services /
My Work / Contact, with a light & dark mode toggle).

```
portfolio-website/
├── client/     React frontend (Vite)
└── server/     Express + MongoDB API
```

## How it fits together

- The **frontend** (`client`) renders the site and calls the backend
  for two things: the list of projects shown in "My Work", and
  submitting the "Contact me" form.
- The **backend** (`server`) stores projects and contact messages in
  MongoDB, and has a simple login-protected `/admin` area so you can
  add/edit/delete projects and read messages **without editing code**.
- Everything else (your name, bio, skills, services, social links) is
  plain content, not database data — you edit it directly in one file:
  `client/src/data/portfolioData.js`.

## 1. Run it locally

**Requirements:** Node.js installed, and either a local MongoDB
running or a free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster.

### Backend
```bash
cd server
npm install
cp .env.example .env
# open .env and set MONGO_URI, JWT_SECRET, ADMIN_USERNAME, ADMIN_PASSWORD
npm run seed     # optional: adds 3 example projects so "My Work" isn't empty
npm run dev      # starts the API on http://localhost:5000
```

### Frontend
```bash
cd client
npm install
npm run dev      # starts the site on http://localhost:5173
```

Visit `http://localhost:5173`. The site will call the API at
`http://localhost:5000/api` automatically — no extra config needed
for local development.

## 2. Personalize it

| What you want to change      | Where to edit it                                |
|-------------------------------|--------------------------------------------------|
| Name, bio, role, socials      | `client/src/data/portfolioData.js`               |
| Services offered              | `client/src/data/portfolioData.js` → `services`  |
| Profile / about photo         | `portfolioData.js` → `profileImage` / `aboutImage` (swap the placeholder URL for your own image link) |
| Resume file                   | Drop a PDF into `client/public/`, name it `resume.pdf` (or update `resumeLink` in `portfolioData.js`) |
| Colors (light & dark mode)    | `client/src/index.css` → the `:root` and `[data-theme="dark"]` variables at the top |
| Projects shown in "My Work"   | Don't edit code — log in at `/admin` and add/edit/delete them there |
| Nav links                     | `portfolioData.js` → `navLinks`                  |

## 3. The admin dashboard

Go to `yoursite.com/admin/login` and sign in with the `ADMIN_USERNAME`
/ `ADMIN_PASSWORD` you set in `server/.env`. From there you can:

- Add, edit, and delete the project cards on the live site
- Read (and delete) messages people sent through the contact form

This means once it's deployed, you can update your portfolio's
projects from your phone's browser — no redeploying required.

> Note on security: the admin login is intentionally simple (a single
> username/password from `.env`) since this is a personal portfolio,
> not a multi-user app. If you want it hardened further later, the
> obvious next step is hashing the password instead of comparing it
> in plain text (see `server/controllers/authController.js`).

## 4. Deploying (free options)

- **Frontend** → [Vercel](https://vercel.com) or [Netlify](https://netlify.com): connect your GitHub repo, set the root directory to `client`, build command `npm run build`, output directory `dist`. Add an environment variable `VITE_API_URL` pointing at your deployed backend (e.g. `https://your-api.onrender.com/api`).
- **Backend** → [Render](https://render.com) or [Railway](https://railway.app): root directory `server`, start command `npm start`, and add the same environment variables from your `.env` file in their dashboard.
- **Database** → [MongoDB Atlas](https://www.mongodb.com/atlas) free tier, then use that connection string as `MONGO_URI`.

## 5. Notes on the animation & navbar

- **Scroll animations**: every section is wrapped in a small `<Reveal>` component (`client/src/components/Reveal.jsx`) that fades + slides content in the first time it scrolls into view. To change the effect, edit `.reveal` / `.reveal-visible` in `index.css`. To stop animating a section, just remove its `<Reveal>` wrapper.
- **Hero entrance**: the hero content plays a one-time fade-in on page load using the `.fade-in-up` class (also in `index.css`).
- **Navbar**: the pill of nav links plays that same load-in animation, and a highlight pill slides between links as your cursor moves over them (tracked in `Navbar.jsx`, styled via `.nav-highlight` in `Navbar.css`). If you pictured the load vs. hover states differently, this is the pair of rules to tweak.
- **Mobile menu**: below 900px width, the nav links and Contact button collapse into a hamburger icon (`Navbar.jsx` / `.navbar-burger`, `.navbar-mobile`).
- Motion respects `prefers-reduced-motion` automatically (see the media query near the bottom of `index.css`) — visitors who've asked their OS for less motion won't get any of this.

## 6. Project structure reference

```
server/
├── server.js              entry point — wires everything together
├── config/db.js           connects to MongoDB
├── models/                Project.js, Message.js (MongoDB schemas)
├── controllers/           the actual logic for each route
├── routes/                maps URLs to controller functions
└── middleware/auth.js     checks the admin login token

client/src/
├── main.jsx                app entry point
├── App.jsx                 routing ("/" site, "/admin" dashboard)
├── data/portfolioData.js   ← your content lives here
├── context/                theme (dark mode) + admin login state
├── api/api.js               all calls to the backend, in one place
├── components/             Navbar, Hero, About, Services, Work, Contact, Footer
└── pages/                  Home.jsx, AdminLogin.jsx, AdminDashboard.jsx
```
