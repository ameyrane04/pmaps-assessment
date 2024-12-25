# Login & Dashboard Assignment
Detailed Guide on the word doc.

This project is a responsive **Login and Dashboard system** built with modern tools and technologies to ensure scalability, security, and maintainability.

---

## Features
- **Authentication**: Secure login using JSON Web Tokens (JWT).
- **Responsive UI**: Designed using Tailwind CSS for seamless experience across devices.
- **Dashboard**: Displays a personalized greeting based on the logged-in user's email.
- **Routing**: Protected routes for secured user access.
- **Technologies Used**:
  - **Frontend**: React.js with Vite
  - **Backend**: Spring Boot
  - **Database**: PostgreSQL
  - **Styling**: Tailwind CSS

---

## Screenshots

### Login Page

![Screenshot (531)](https://github.com/user-attachments/assets/925a8af6-0547-40fd-a45e-4e423a7738df)
![Screenshot (532)](https://github.com/user-attachments/assets/7660399a-03ab-4211-9780-98c7225125a5)


### Dashboard Page
![Screenshot (536)](https://github.com/user-attachments/assets/79a396d6-90b7-4990-8a7c-7ab426684e29)
![Screenshot (537)](https://github.com/user-attachments/assets/6a39677e-bb45-4eb0-b02d-9ac5b8ff174f)
![Screenshot (534)](https://github.com/user-attachments/assets/621d78c6-1232-4b35-803e-7322e8326ecf)
![Screenshot (535)](https://github.com/user-attachments/assets/19cfffd0-65d5-4323-ad28-77e012bdb980)

---

## How It Works

1. **User Authentication**: 
   - Users log in with their credentials.
   - Backend validates the login and returns a JWT token.
   - The token is stored in `localStorage`.

2. **Token Decoding**:
   - The token is decoded on the frontend to display the user's email on the dashboard.

3. **Routing**:
   - The dashboard is protected, ensuring only authenticated users can access it.
   - Users are redirected to the login page after logout.

4. **Dashboard Features**:
   - Displays a personalized greeting with the user's email.
   - Provides quick access buttons for features like "Alerts," "Camera," and "Call."
   - Includes options for managing personal information and accounts.

---

## How to Run

### Prerequisites
- Node.js and npm
- Java (for Spring Boot)
- PostgreSQL

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/ameyrane04/pmaps-assessment
   
2.Navigate to the frontend folder and install dependencies:
cd frontend
npm install

3.Start the frontend:
npm run dev

4.Set up and run the backend using Spring Boot:
Update application.properties with your PostgreSQL credentials.
Start the backend service from your IDE or CLI.

Acknowledgments
Tailwind CSS Documentation
Spring Boot Guides
PostgreSQL Setup Tutorials

---

### Explanation of What You Did
1. Built a **Login system** to authenticate users securely.
2. Integrated **JWT** for stateless authentication.
3. Designed and implemented a **responsive Dashboard**.
4. Secured **routes** to restrict unauthorized access.
5. Used **Spring Boot** for backend API development.
6. Connected to a **PostgreSQL database** for user data storage.
7. Styled the project with **Tailwind CSS** for modern design.
8. Uploaded the completed project to GitHub for public access.

---

To include screenshots:
1. Take clear screenshots of the Login and Dashboard pages.
2. Save the images in a folder (e.g., `assets/screenshots`) in your project directory.
3. Update the `README` file with the relative paths to the images (e.g., `![Login Page](assets/screenshots/login.png)`).

Let me know if you need help refining the README or handling the image paths!

