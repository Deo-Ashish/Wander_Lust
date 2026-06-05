# StayNest 🏡

StayNest is a full-stack web application that enables users to discover, create, and manage property listings. The platform provides secure authentication, image uploads, reviews, and property management features through a modern and responsive user interface.

---

## ✨ Features

### 👤 User Authentication & Authorization
- User Registration and Login
- Secure Password Hashing
- Session-Based Authentication
- Protected Routes
- Listing Owner Authorization

### 🏠 Property Listings
- Create New Listings
- Edit Existing Listings
- Delete Listings
- Upload Property Images
- View Detailed Property Information

### ⭐ Reviews & Ratings
- Add Reviews and Ratings
- Delete Reviews
- Review Validation
- Community Feedback System

### 📸 Image Management
- Cloudinary Image Storage
- Multiple Property Images
- Secure Image Uploads

### 🔍 Explore Properties
- Browse All Listings
- Responsive Property Cards
- Detailed Listing Pages
- Location and Pricing Information

### 📱 Responsive Design
- Mobile-Friendly Interface
- Bootstrap-Based UI
- Clean and Modern Design

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- EJS

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- Passport.js
- Passport Local Strategy
- Express Session

### Cloud Services
- Cloudinary

### Additional Packages
- Connect Flash
- Joi Validation
- Multer
- Method Override
- dotenv

---

## 🏗️ Architecture

The application follows the MVC (Model-View-Controller) architecture:

- **Models** → Database schemas and business logic
- **Views** → EJS templates for rendering UI
- **Controllers** → Application logic and request handling
- **Routes** → URL routing and API endpoints
- **Middleware** → Authentication, validation, and error handling

---

## 📂 Project Structure

```text
StayNest/
│
├── controllers/
│
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── routes/
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
│
├── views/
│   ├── listings/
│   ├── users/
│   ├── includes/
│   └── layouts/
│
├── public/
│   ├── css/
│   ├── js/
│   └── images/
│
├── utils/
│
├── middleware.js
├── cloudConfig.js
├── app.js
├── package.json
└── .env
```

---

## ⚙️ Setup Guide

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/staynest.git
cd staynest
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create Environment Variables

Create a `.env` file in the root directory and add:

```env
ATLASDB_URL=your_mongodb_connection_string

SECRET=your_session_secret

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

---

### 4. MongoDB Setup

#### Option A: MongoDB Atlas

1. Create a MongoDB Atlas account.
2. Create a cluster.
3. Create a database user.
4. Allow your IP address.
5. Copy the connection string.
6. Paste it into:

```env
ATLASDB_URL=
```

#### Option B: Local MongoDB

```env
ATLASDB_URL=mongodb://127.0.0.1:27017/staynest
```

Start MongoDB:

```bash
mongod
```

---

### 5. Cloudinary Setup

1. Create a Cloudinary account.
2. Open Dashboard.
3. Copy:
   - Cloud Name
   - API Key
   - API Secret
4. Add them to the `.env` file.

---

### 6. Seed Database (Optional)

If your project contains sample data:

```bash
node init/index.js
```

---

### 7. Run the Application

#### Production

```bash
node app.js
```

#### Development

```bash
nodemon app.js
```

---

### 8. Open in Browser

```text
http://localhost:8080
```

---

## 🎯 Key Features

✔ Secure User Authentication

✔ Property Listing Management

✔ Cloud-Based Image Uploads

✔ Review and Rating System

✔ Session Management

✔ MVC Architecture

✔ RESTful Routing

✔ Form Validation

✔ Flash Messages

✔ Responsive Bootstrap UI

✔ MongoDB Database Integration

---

## 📸 Screenshots

### Home Page

Add screenshot here:

```text
screenshots/home.png
```

### Property Details

Add screenshot here:

```text
screenshots/property-details.png
```

### Create Listing

Add screenshot here:

```text
screenshots/create-listing.png
```

---

## 🔒 Security Features

- Password Hashing with Passport.js
- Session Authentication
- Route Protection
- Input Validation using Joi
- Environment Variables for Sensitive Data
- Authorization Middleware

---

## 🌐 Deployment

The application can be deployed on:

- Render
- Railway
- Cyclic
- VPS Hosting

### Required Environment Variables

```env
ATLASDB_URL=
SECRET=
CLOUD_NAME=
CLOUD_API_KEY=
CLOUD_API_SECRET=
```

---

## 🚀 Future Improvements

- Booking System
- Payment Gateway Integration
- Wishlist Feature
- Advanced Search Filters
- Google Authentication
- User Profiles
- Property Categories
- Interactive Maps
- Real-Time Chat
- Notifications System

---

## 📚 What I Learned

Through this project, I gained practical experience in:

- Full-Stack Web Development
- RESTful API Design
- MVC Architecture
- Authentication & Authorization
- MongoDB Data Modeling
- Cloudinary Integration
- File Upload Management
- Session Handling
- Server-Side Rendering with EJS
- Error Handling and Validation

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit changes

```bash
git commit -m "Add feature"
```

4. Push to GitHub

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## 👨‍💻 Developer

**Deo Ashish Kumar Gupta**

Passionate Full-Stack Developer focused on building scalable and user-friendly web applications.

### Connect With Me

- GitHub: https://github.com/deo-ashish
- LinkedIn: https://linkedin.com/in/deo-ashish

---

## 📄 License

This project is licensed under the MIT License.

---

⭐ If you found this project helpful, consider giving it a star on GitHub!
