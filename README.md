# 🔗 URL Shortener — Node.js, Express, MongoDB, EJS

An elegant, responsive **URL Shortener Web App** built with **Node.js**, **Express.js**, **MongoDB**, and **EJS view engine**.  
It accepts URLs via a user-friendly form and returns a clean, shortened version — displayed dynamically on the same page.

---

## 🚀 Features

✅ Shorten any valid URL via form input  
✅ Dynamically display the shortened link on the same page (without page reload)  
✅ Redirect to the original link via the short URL  
✅ Track and store **visit history** (timestamps for each visit)  
✅ Beautiful EJS-based frontend with CSS styling  
✅ Route-based navigation: Home, About, Contact  
✅ Designed for laptop-height screens with responsive layout

---

## 🧱 Tech Stack

- 🟩 Node.js
- ⚙️ Express.js
- 🍃 MongoDB (Local)
- 🔢 nanoid (For unique short ID generation)
- 📦 Mongoose
- 🖼️ EJS (Templating engine)
- 🎨 HTML + CSS (External, responsive)

---

## 📁 Project Structure

```
project/
├── controller/
│   └── url.js               # Core business logic
├── models/
│   └── url.js               # Mongoose schema
├── routes/
│   └── url.js               # Routes (UI + API)
├── views/
│   ├── home.ejs             # Homepage (form + link)
│   ├── about.ejs            # About page
│   ├── contact.ejs          # Contact form
│   └── partials/
│       ├── header.ejs       # Shared header
│       └── footer.ejs       # Shared footer
├── public/
│   └── css/
│       └── style.css        # All external CSS
├── index.js                 # Main server file
└── README.md
```

---

## 🛠️ Installation & Usage

### 1. Clone the repository

```bash
git clone https://github.com/Tusharvermaaa/urlShortner.git
cd urlShortner
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start MongoDB locally

Make sure MongoDB is running on your system:

```bash
mongod
```

### 4. Run the server

```bash
npm start
```

By default, the app runs at:  
📍 `http://localhost:8003`

---

## 🌐 App Pages

- **Home**: `/` – Shorten URL via form, display result below
- **About**: `/about` – Info about the project
- **Contact**: `/contact` – Contact form (EJS styled)

---

## 💡 User Instructions

### ➕ Shorten a URL

On the homepage (`/`):

- Enter any valid URL (start from `www.` or `google.com`)
- Click **Shorten**
- See your shortened link appear **just below the form**

### 🔁 Use the Short URL

Go to:

```
http://localhost:8003/<shortid>
```

It will instantly redirect to the original long URL.

---

## 📄 Backend API (if needed)

### `POST /url`

```json
{
  "incomingwebsite": "www.example.com"
}
```

Returns:

```json
{
  "shortid": "abc123",
  "shorturl": "http://localhost:8003/abc123"
}
```

### `GET /all` – Get all URLs

### `DELETE /delete/:shortid` – Delete a URL

---

## 📊 Visit Tracking

Every visit to a short URL is stored with a timestamp in the `visithistory` array in MongoDB.

---

## 🧪 Sample MongoDB Document

```json
{
  "_id": "661c1e2ef92b7b0020e3b8fa",
  "incomingwebsite": "https://www.example.com",
  "shortid": "abc123",
  "visithistory": [
    { "timestamp": 1713210495321 },
    { "timestamp": 1713210556123 }
  ],
  "createdAt": "2024-05-20T10:15:00Z"
}
```

---

## ✨ Enhancements Done

- ✅ Live UI with EJS and CSS
- ✅ Dynamically prints short URL below form
- ✅ Prevents duplicate prints on refresh
- ✅ Centralized error handling
- ✅ Externalized CSS (`public/css/style.css`)
- ✅ Organized MVC architecture
- ✅ Header and Footer with full-page height responsiveness

---

## 📦 Upcoming Improvements

- 🌍 Host frontend + backend on Render/Vercel
- ☁️ Switch to MongoDB Atlas for production
- 📈 Show click count/analytics per link
- 🔐 Add user authentication (optional)

---

## 👨‍💻 Author

Made with ❤️ by [**Tushar Verma**](https://github.com/Tusharvermaaa)  
🎓 MCA Student, **NIT Warangal**
