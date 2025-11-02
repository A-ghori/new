# FooDo FRIES — Full‑Stack (Vite + React) + (Express + MongoDB)

_A delicious food reels app connecting Food Partners and Users seamlessly._

[![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=flat-square)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white&style=flat-square)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white&style=flat-square)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white&style=flat-square)](https://expressjs.com/)
[![Vite](https://img.shields.io/badge/Vite-C13515?logo=vite&logoColor=white&style=flat-square)](https://vitejs.dev/)

<details>
  <summary><strong>Quick start</strong></summary>

  - Backend
    - cd new/backend
    - npm install
    - create/edit [.env](new/backend/.env) with your Mongo URI, JWT secret and ImageKit keys
    - npm start
    - Default server: http://localhost:3000 (see [server.js](new/backend/server.js))

  - Frontend
    - cd new/frontend
    - npm install
    - npm run dev
    - UI served by Vite, default origin: http://localhost:5173 (configured in [new/backend/src/app.js](new/backend/src/app.js))
</details>

<details>
  <summary><strong>Environment variables (backend)</strong></summary>

  - See [new/backend/.env](new/backend/.env)
    - MONGO_URI — MongoDB connection string used by [`connectDb`](new/backend/src/db/db.js)
    - JWT_SECRET — used by auth handlers in [`auth.controller.js`](new/backend/src/controllers/auth.controller.js)
    - IMAGEKIT_PUBLIC_KEY, IMAGEKIT_PRIVATE_KEY, IMAGEKIT_URL_ENDPOINT — used by [`storage.service.uploadFile`](new/backend/src/services/storage.service.js)
</details>

<details>
  <summary><strong>Repository structure (detailed)</strong></summary>

  - **new/backend**
    - `server.js`: Application entry point; connects to MongoDB and starts the Express server.
    - `src/app.js`: Configures the Express app, sets up CORS, cookie and JSON parsing, and mounts all API routes.
    - `src/db/db.js`: Database connection helper, exports a `connectDb` function for MongoDB.
    - `src/services/storage.service.js`: Handles file uploads to ImageKit; exposes `uploadFile` for uploading video buffers.

    - **src/controllers**: Contains all controller logic for authentication, food management, and partner operations.
      - `auth.controller.js`: Handles user/partner registration, login, authentication checks, and logout.
      - `food.controller.js`: Manages creation and retrieval of food items (videos).
      - `food-partner.controller.js`: Handles partner profile lookups and food item deletion.

    - **src/routes**: Defines all API endpoints and connects them to controllers.
      - `auth.routes.js`: User and partner authentication routes.
      - `food.routes.js`: Food item upload, retrieval, and deletion routes.
      - `food-partner.routes.js`: Partner profile routes.

    - **src/middlewares**: Middleware functions for authentication and request validation.
      - `auth.middleware.js`: JWT validation for users and food partners; protects routes.

    - **src/models**: All Mongoose models for MongoDB collections.
      - `user.model.js`: User schema and model.
      - `foodPartner.model.js`: Food partner schema and model.
      - `food.model.js`: Food/video schema and model.
      - `visitResturant.js`: Restaurant visit model (not heavily used in UI).

    - **Important files**
      - `package.json`: Backend dependencies and scripts.
      - `.env`: Environment variables (should not be committed).

  - **new/frontend**
    - `vite.config.js`: Vite configuration with React plugin.
    - `index.html`: Main HTML template for the app.
    - `src/main.jsx`: React entry point, mounts the root app component.
    - `src/App.jsx`: Top-level app component, sets up the router.
    - `src/routes/AppRoutes.jsx`: Defines all frontend routes and page/component mappings.

    - **src/pages**: Main page components for user and partner flows.
      - `Welcome.jsx`: Landing page with navigation and logout.
      - `UserRegister.jsx`: User registration form.
      - `UserLogin.jsx`: User login form.
      - `FoodRegister.jsx`: Partner registration form.
      - `FoodPartnerlogin.jsx`: Partner login form.

    - **src/general**: Shared and general-purpose components.
      - `Home.jsx`: Main reels feed for users; displays food videos and "Visit Store" actions.
      - `Resturant.jsx`: Protected user dashboard page.

    - **src/food-partner**: Components specific to food partners.
      - `CreateFood.jsx`: Food upload form for partners.
      - `profile.jsx`: Partner dashboard/profile with video grid and delete actions.

    - **src/styles**: CSS files for theme and component-specific styles.
      - `theme.css`: Global CSS variables and theme.
      - `Welcome.css`: Animated landing page styling.
      - `Home.css`: Styles for the reels feed.
      - `profile.css`: Styles for the partner profile/dashboard.
      - `CreateFood.css`: Styles for the food upload form.
      - `UserRegister.css`, `UserLogin.css`, `FoodPartnerRegister.css`, `FoodPartnerLogin.css`: Shared/auth form styles.

    - `package.json`: Frontend dependencies and scripts.
</details>

Environment variables (backend)
- See [new/backend/.env](new/backend/.env)
  - MONGO_URI — MongoDB connection string used by [`connectDb`](new/backend/src/db/db.js)
  - JWT_SECRET — used by auth handlers in [`auth.controller.js`](new/backend/src/controllers/auth.controller.js)
  - IMAGEKIT_PUBLIC_KEY, IMAGEKIT_PRIVATE_KEY, IMAGEKIT_URL_ENDPOINT — used by [`storage.service.uploadFile`](new/backend/src/services/storage.service.js)

Repository structure (detailed)

- **new/backend**
  - `server.js`: Application entry point; connects to MongoDB and starts the Express server.
  - `src/app.js`: Configures the Express app, sets up CORS, cookie and JSON parsing, and mounts all API routes.
  - `src/db/db.js`: Database connection helper, exports a `connectDb` function for MongoDB.
  - `src/services/storage.service.js`: Handles file uploads to ImageKit; exposes `uploadFile` for uploading video buffers.

  - **src/controllers**: Contains all controller logic for authentication, food management, and partner operations.
    - `auth.controller.js`: Handles user/partner registration, login, authentication checks, and logout.
    - `food.controller.js`: Manages creation and retrieval of food items (videos).
    - `food-partner.controller.js`: Handles partner profile lookups and food item deletion.

  - **src/routes**: Defines all API endpoints and connects them to controllers.
    - `auth.routes.js`: User and partner authentication routes.
    - `food.routes.js`: Food item upload, retrieval, and deletion routes.
    - `food-partner.routes.js`: Partner profile routes.

  - **src/middlewares**: Middleware functions for authentication and request validation.
    - `auth.middleware.js`: JWT validation for users and food partners; protects routes.

  - **src/models**: All Mongoose models for MongoDB collections.
    - `user.model.js`: User schema and model.
    - `foodPartner.model.js`: Food partner schema and model.
    - `food.model.js`: Food/video schema and model.
    - `visitResturant.js`: Restaurant visit model (not heavily used in UI).

  - **Important files**
    - `package.json`: Backend dependencies and scripts.
    - `.env`: Environment variables (should not be committed).

- **new/frontend**
  - `vite.config.js`: Vite configuration with React plugin.
  - `index.html`: Main HTML template for the app.
  - `src/main.jsx`: React entry point, mounts the root app component.
  - `src/App.jsx`: Top-level app component, sets up the router.
  - `src/routes/AppRoutes.jsx`: Defines all frontend routes and page/component mappings.

  - **src/pages**: Main page components for user and partner flows.
    - `Welcome.jsx`: Landing page with navigation and logout.
    - `UserRegister.jsx`: User registration form.
    - `UserLogin.jsx`: User login form.
    - `FoodRegister.jsx`: Partner registration form.
    - `FoodPartnerlogin.jsx`: Partner login form.

  - **src/general**: Shared and general-purpose components.
    - `Home.jsx`: Main reels feed for users; displays food videos and "Visit Store" actions.
    - `Resturant.jsx`: Protected user dashboard page.

  - **src/food-partner**: Components specific to food partners.
    - `CreateFood.jsx`: Food upload form for partners.
    - `profile.jsx`: Partner dashboard/profile with video grid and delete actions.

  - **src/styles**: CSS files for theme and component-specific styles.
    - `theme.css`: Global CSS variables and theme.
    - `Welcome.css`: Animated landing page styling.
    - `Home.css`: Styles for the reels feed.
    - `profile.css`: Styles for the partner profile/dashboard.
    - `CreateFood.css`: Styles for the food upload form.
    - `UserRegister.css`, `UserLogin.css`, `FoodPartnerRegister.css`, `FoodPartnerLogin.css`: Shared/auth form styles.

  - `package.json`: Frontend dependencies and scripts.

API overview (important endpoints)

- Auth
  - POST /api/auth/user/register → [`registerUser`](new/backend/src/controllers/auth.controller.js)
  - POST /api/auth/user/login → [`loginUser`](new/backend/src/controllers/auth.controller.js)
  - GET /api/auth/user/logout → [`logOutUser`](new/backend/src/controllers/auth.controller.js)
  - GET /api/auth/check → [`checkUser`](new/backend/src/controllers/auth.controller.js) (protected by [`authUserMiddleware`](new/backend/src/middlewares/auth.middleware.js))
  - POST /api/auth/partner/register → [`registerFoodPartner`](new/backend/src/controllers/auth.controller.js)
  - POST /api/auth/partner/login → [`loginFoodPartner`](new/backend/src/controllers/auth.controller.js)
  - GET /api/auth/partner/logout → [`logOut`](new/backend/src/controllers/auth.controller.js)

- Food
  - POST /api/food → [`createFood`](new/backend/src/controllers/food.controller.js) (protected by [`authFoodPartnerMiddleware`](new/backend/src/middlewares/auth.middleware.js); expects multipart form field `video`)
  - GET /api/food → [`findFood`](new/backend/src/controllers/food.controller.js) (protected by [`authUserMiddleware`](new/backend/src/middlewares/auth.middleware.js))
  - DELETE /api/food/:id → [`deleteFoodItems`](new/backend/src/controllers/food-partner.controller.js) (protected by [`authFoodPartnerMiddleware`](new/backend/src/middlewares/auth.middleware.js))

Notes & tips
- Cookies: authentication uses a JWT cookie named `token`. Frontend requests that rely on cookies set `withCredentials: true` in axios (see calls in [CreateFood.jsx](new/frontend/src/food-partner/CreateFood.jsx), [Home.jsx](new/frontend/src/general/Home.jsx), [Resturant.jsx](new/frontend/src/general/Resturant.jsx), [Welcome.jsx](new/frontend/src/pages/Welcome.jsx)).
- File uploads: server uses `multer.memoryStorage()` in [food.routes.js](new/backend/src/routes/food.routes.js) so uploaded video file is available as `req.file.buffer` and uploaded to ImageKit by [`uploadFile`](new/backend/src/services/storage.service.js).
- Security: current cookie options are minimal — for production set `secure: true` and proper SameSite, use HTTPS, and do not commit `.env` with secrets.
- Video size: frontend restricts to 30 MB client‑side; ensure ImageKit and server accept needed size/timeouts.

Where to change things quickly
- Change API base / CORS origin: [new/backend/src/app.js](new/backend/src/app.js)
- Change storage provider: update [new/backend/src/services/storage.service.js](new/backend/src/services/storage.service.js)
- Adjust video size client limit: [new/frontend/src/food-partner/CreateFood.jsx](new/frontend/src/food-partner/CreateFood.jsx) (variable `MAX_VIDEO_BYTES`)
- Modify auth behaviour/cookie lifetime: [new/backend/src/controllers/auth.controller.js](new/backend/src/controllers/auth.controller.js)

If you want I can:
- Add example Postman/curl requests for each endpoint.
- Harden cookie & CORS settings for production.
- Add input validation & improved error handling on both client & server.

References (open these files in your editor)
- Backend entry: [new/backend/server.js](new/backend/server.js)
- Express app: [new/backend/src/app.js](new/backend/src/app.js)
- DB connect: [new/backend/src/db/db.js](new/backend/src/db/db.js)
- Auth controller: [`auth.controller`](new/backend/src/controllers/auth.controller.js)
- Food controller: [`food.controller`](new/backend/src/controllers/food.controller.js)
- Food‑partner controller: [`food-partner.controller`](new/backend/src/controllers/food-partner.controller.js)
- Auth middleware: [`auth.middleware`](new/backend/src/middlewares/auth.middleware.js)
- Storage service: [`storage.service.uploadFile`](new/backend/src/services/storage.service.js)
- Frontend app: [new/frontend/src/App.jsx](new/frontend/src/App.jsx)
- Frontend routes: [new/frontend/src/routes/AppRoutes.jsx](new/frontend/src/routes/AppRoutes.jsx)
- Reels UI: [new/frontend/src/general/Home.jsx](new/frontend/src/general/Home.jsx)
- Create food UI: [new/frontend/src/food-partner/CreateFood.jsx](new/frontend/src/food-partner/CreateFood.jsx)
- Partner profile: [new/frontend/src/food-partner/profile.jsx](new/frontend/src/food-partner/profile.jsx)
- Welcome/landing: [new/frontend/src/pages/Welcome.jsx](new/frontend/src/pages/Welcome.jsx)
- CSS theme: [new/frontend/src/styles/theme.css](new/frontend/src/styles/theme.css)

License & notes
- This README is generated from the workspace snapshot and lists the current files and exported handlers. Keep secrets out of version control. Review cookie/JWT lifetimes and production security settings before deploying.

📸 Screenshots

Below are screenshots of the FooDo FRIES app to illustrate the main user and partner flows:

<p align="center">
  <img src="s1.png" alt="Landing Page" width="400"/><br>
  <b>Landing Page</b> — Welcome screen with navigation for users and partners.
</p>
<p align="center">
  <img src="s2.png" alt="User Reels Feed" width="400"/><br>
  <b>User Reels Feed</b> — Main feed where users browse food videos and can visit partner stores.
</p>
<p align="center">
  <img src="s3.png" alt="User Dashboard" width="400"/><br>
  <b>User Dashboard</b> — Protected user dashboard page after login.
</p>
<p align="center">
  <img src="s4.png" alt="Partner Login" width="400"/><br>
  <b>Partner Login</b> — Food partner login form.
</p>
<p align="center">
  <img src="s5.png" alt="Partner Dashboard" width="400"/><br>
  <b>Partner Dashboard</b> — Partner profile showing uploaded food videos and management actions.
</p>
<p align="center">
  <img src="s6.png" alt="Add Food Form" width="400"/><br>
  <b>Add Food Form</b> — Video upload form for partners to add new food reels.
</p>

## Future Improvements

- Implement dark mode toggle for better user experience in low light.
- Add real-time notifications for new food reels and partner updates.
- Develop analytics dashboard for partners to track video views and engagement.
- Enhance input validation and error handling on frontend and backend.
- Integrate social sharing features for videos.
- Optimize video streaming and loading performance.

---

<sub>Licensed under MIT © 2025 Bubu Shubhayu Barua</sub>