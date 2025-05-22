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
PORT = 3000
MONGO_URI = mongodb://localhost:27017/bookReviewAPI
JWT_SECRET = 123456789
JWT_EXPIRATION = 1d
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


<h2>🗄️ Database Schema</h2>

Book Collection
| Field         | Type   | Required | Unique | Trimmed | Description                     |
| ------------- | ------ | -------- | ------ | ------- | ------------------------------- |
| `title`       | String | Yes      | Yes    | Yes     | The title of the book           |
| `author`      | String | Yes      | No     | Yes     | Name of the book's author       |
| `genre`       | String | Yes      | No     | Yes     | Genre/category of the book      |
| `description` | String | Yes      | No     | No      | A brief description of the book |
| `createdAt`   | Date   | Auto     | No     | -       | Timestamp when book was created |
| `updatedAt`   | Date   | Auto     | No     | -       | Timestamp when book was updated |

User Collection
| Field       | Type   | Required | Unique | Description                     |
| ----------- | ------ | -------- | ------ | ------------------------------- |
| `name`      | String | Yes      | No     | Full name of the user           |
| `email`     | String | Yes      | Yes    | User's email address            |
| `password`  | String | Yes      | No     | Hashed password of the user     |
| `createdAt` | Date   | Auto     | No     | Timestamp when user was created |
| `updatedAt` | Date   | Auto     | No     | Timestamp when user was updated |

Review Collection
| Field       | Type                   | Required | Description                                    |
| ----------- | ---------------------- | -------- | ---------------------------------------------- |
| `user`      | ObjectId (ref: `User`) | Yes      | Reference to the user who submitted the review |
| `book`      | ObjectId (ref: `Book`) | Yes      | Reference to the book being reviewed           |
| `rating`    | Number                 | Yes      | Rating given by the user (1 to 5)              |
| `comment`   | String                 | Yes      | User's textual review of the book              |
| `createdAt` | Date                   | Auto     | Timestamp when the review was created          |
| `updatedAt` | Date                   | Auto     | Timestamp when the review was last updated     |

<h2>📘 API Documentation</h2>

Detailed Postman API collection is available here:  
👉 [Postman API Docs](https://documenter.getpostman.com/view/39779844/2sB2qahM93)
