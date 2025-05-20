# 🔗 URL Shortener with Node.js, Express & MongoDB

A simple and functional **URL Shortener API** built using **Node.js**, **Express**, and **MongoDB (local)**.  
It allows you to create, retrieve, delete, and redirect shortened URLs easily.

---

## 🚀 Features

✅ Create short URLs from long website links  
✅ Automatically redirect to the original website using the short URL  
✅ Store visit history (timestamps of each visit)  
✅ Retrieve all shortened URLs  
✅ Delete a shortened URL  
✅ Built on **MongoDB (localhost)** for fast local development

---

## 🧱 Tech Stack

- 🟩 Node.js
- ⚙️ Express.js
- 🍃 MongoDB (Local)
- 🔢 nanoid (For unique short ID generation)
- 📦 Mongoose (ODM)

---

## 📁 Project Structure

```
project/
├── models/
│   └── urlModel.js          # Mongoose schema for URLs
├── routes/
│   └── urlRoutes.js         # Route definitions (CRUD + redirect)
├── controllers/
│   └── urlController.js     # Logic to handle requests
├── index.js                 # Main entry point
└── README.md
```

---

## 🛠️ Installation & Usage

### 1. Clone the repo

```bash
git clone https://github.com/Tusharvermaaa/url-shortener.git
cd url-shortener
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start MongoDB locally (Default Port: 27017)

Make sure MongoDB is running on your system:

```bash
mongod
```

### 4. Run the server

```bash
npm run dev
```

By default, the server will start at `http://localhost:8003/`

---

## 🔌 API Endpoints

### ➕ Create Short URL

```http
POST /url
```

**Body (JSON):**

```json
{
  "incomingwebsite": "www.example.com"
}
```

## <!-- note user does not need to include http:// part it is already taken care be me , just start with www or whatever after http://  -->

### 🔁 Redirect to Original URL

```http
GET /:shortid
```

Example:

```
http://localhost:8000/abc123
```

---

### 📄 Get All URLs

```http
GET /all
```

---

### ❌ Delete a Short URL

```http
DELETE /:shortid
```

Example:

```
DELETE http://localhost:8000/delete/abc123
```

---

## 📊 Visit History

Each time a shortened URL is accessed, a timestamp is stored in the `visithistory` array.  
You can use this to track how many times a link has been used.

---

## 📸 Sample Document (MongoDB)

```json
{
  "_id": "661c1e2ef92b7b0020e3b8fa",
  "incomingwebsite": "https://www.example.com",
  "shortid": "abc123",
  "visithistory": [
    { "timestamp": 1713210495321 },
    { "timestamp": 1713210556123 }
  ],
  "createdAt": "2024-05-20T10:15:00Z",
  "updatedAt": "2024-05-20T10:17:30Z"
}
```

---

## ✨ Future Improvements

- ✅ Host on Render (backend) and Netlify/Vercel (frontend)
- 🌐 Use MongoDB Atlas for a live database
- 👨‍🎨 Add a React UI
- 📈 Add analytics for each URL

---

## 🧠 Author

Made with ❤️ by **Tushar Verma**  
🎓 Student at **NIT Warangal**  
🐱 GitHub: [Tusharvermaaa](https://github.com/Tusharvermaaa)

---
