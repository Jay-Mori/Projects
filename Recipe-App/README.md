# 🍳 Recipe App Backend with JWT Auth and EJS Views

A full-featured **Recipe App backend** built with **Node.js**, **Express**, and **MongoDB**, featuring **JWT authentication** and **EJS views** for dynamic front-end rendering.
This project follows the **MVC architecture**, ensuring scalability, clarity, and clean code organization — perfect for learning or expanding into a full-stack application.

---

## 🚀 Features

* 🔐 **JWT Authentication** – Secure login and signup system
* 🧑‍🍳 **Recipe Management** – Add, edit, delete, and display recipes
* 🧠 **MVC Architecture** – Clear folder structure for scalability
* 🌐 **EJS Templates** – Dynamic pages like login, register, and dashboard
* 🗄️ **MongoDB Integration** – Efficient storage for users and recipes
* ⚙️ **Express Middleware** – Easy request handling and validation

---

## 🛠️ Tech Stack

| Category                  | Technology           |
| ------------------------- | -------------------- |
| **Backend**               | Node.js, Express.js  |
| **Database**              | MongoDB (Mongoose)   |
| **Templating**            | EJS                  |
| **Authentication**        | JSON Web Token (JWT) |
| **Environment Variables** | dotenv               |

---

## 📂 Project Structure

```
Recipe-App/
│
├── models/
│   ├── User.js
│   └── Recipe.js
│
├── routes/
│   ├── AuthRoute.js
│   └── RecipeRoute.js
│
├── views/
│   ├── login.ejs
│   ├── register.ejs
│   └── recipes.ejs
│
├── .env
├── server.js
└── package.json
```

---

## ⚙️ Installation and Setup

Follow these steps to run the project locally:

```bash
# 1️⃣ Clone the repository
git clone https://github.com/yourusername/recipe-app-backend.git

# 2️⃣ Navigate into the project directory
cd recipe-app-backend

# 3️⃣ Install dependencies
npm install

# 4️⃣ Create a .env file and add the following
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=3737

# 5️⃣ Start the server
npm start
```

> The server will run on **[http://localhost:3737](http://localhost:3737)**

---

## 🔑 Environment Variables

| Variable     | Description                       |
| ------------ | --------------------------------- |
| `MONGO_URI`  | MongoDB connection string         |
| `JWT_SECRET` | Secret key for JWT authentication |
| `PORT`       | Port number (default: 3737)       |

---

## 🧠 Core Functionalities

* **User Authentication:**

  * Signup & login using JWT tokens
  * Protected routes for logged-in users

* **Recipe Features:**

  * Create, read, update, and delete recipes
  * Display recipes dynamically via EJS views

* **Error Handling:**

  * Clean and descriptive error messages
  * Middleware-based validation

---

## 💡 Future Enhancements

* 📸 Add image upload for recipes
* ❤️ Like & comment features
* 🧾 Pagination and filtering
* 📱 REST API for frontend integration
* 👤 User profile management

---

## 🤝 Contributing

Contributions are welcome!
Feel free to **fork** the repo, make your changes, and submit a **pull request**.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🌟 Acknowledgments

Special thanks to the **Node.js**, **Express**, and **MongoDB** communities for their powerful tools and documentation.
Inspired by real-world recipe platforms and educational backend projects.

---

### 💬 Connect With Me

📧 **Email: jaymori2217x@gmail.com
💼 **LinkedIn:- https://www.linkedin.com/in/jay-mori06/
---

> “Code with purpose, build with passion — every line brings your idea to life.” ✨
