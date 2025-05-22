<h1 align="center" id="title">Book Review API(Node.js)</h1>

<p align="center"><img src="https://socialify.git.ci/CyberDemon2001/Book-Review-API-Node.js-/image?font=Source+Code+Pro&amp;language=1&amp;name=1&amp;owner=1&amp;pattern=Circuit+Board&amp;stargazers=1&amp;theme=Light" alt="project-image"></p>

<p id="description">The Book Review API is a RESTful Node.js backend built with Express and MongoDB (Mongoose) that allows authenticated users to manage books and submit reviews. It provides secure user authentication using JWT tokens and supports features like review submission editing and average rating calculation.</p>

  
  
<h2>🧐 Features</h2>

Here're some of the project's best features:

*   🔐 User authentication with JWT (stored in HTTP-only cookies)
*   📘 Add fetch and search books
*   ✍️ Submit update and delete reviews
*   📊 Calculate and fetch average book ratings
*   🛡 Protected routes for authenticated users
*   🧾 Pagination and filtering support

<h2>🛠️ Installation Steps:</h2>

<p>1. Clone the Repository</p>

```
https://github.com/CyberDemon2001/Book-Review-API-Node.js-.git
```

<p>2. Change the Directory</p>

```
cd Backend
```

<p>3. Install Dependencies</p>

```
npm install
```

<p>4. Enviromnent Variables</p>

```
PORT = 3000 MONGO_URI = mongodb://localhost:27017/bookReviewAPI JWT_SECRET = 123456789 JWT_EXPIRATION = 1d
```

<p>5. Run the Server</p>

```
npm start
```

  
  
<h2>💻 Built with</h2>

Technologies used in the project:

*   Node.js
*   Express.js
*   MongoDB
*   JWT Token
*   Bcrypt
*   Dotenv
*   cookie-parser
