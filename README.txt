# Login-SignUp-app
This is an app consisting of simple login and signup of users and some features like remember me and password Strength.

🚀 How to Set Up and Run the Project
Welcome to the Login & Signup with Remember Me and Password Strength application! This is a simple authentication system built with React.js and localStorage to manage user registration and login functionalities.

🛠️ Pre-requisites
Make sure you have the following software installed:

Node.js (https://nodejs.org)
npm (comes with Node.js)


📥 1. Clone the Repository

First, clone the project repository to your local machine:
git clone https://github.com/Pallela1907/Login-SignUp-app.git

📂 2. Navigate to the Project Directory
After cloning, change to the project directory:
cd Login-SignUp-app


📦 3. Install Dependencies
Install the required dependencies for the project using npm:
npm install


🛠️ 4. Start the Development Server
Run the development server to test the application locally:
npm start

The application will be accessible at:
http://localhost:3000

🔍 5. Explore the Features
✅ Login:
Enter credentials.
If the user exists, you’ll see a Login Successful alert.
If the user doesn’t exist, you’ll be redirected to the signup page.
✅ Signup:
Register a new user with email and password.
The password strength indicator will guide users on how strong their password is.
✅ Remember Me:
When logging in, check Remember Me to save credentials locally for auto-fill during future sessions.

🧩 Folder Structure
Here’s the current folder structure for easy navigation:

public 
    - index.html
src 
    components
        forms
            - LoginForm.tsx
            - SignUpForm.tsx
    routes
        - App.tsx
    utils
        - localStorageHelper.tsx
    index.tsx
.gitignore
package-lock.json
package.json




📄 Troubleshooting

1. If npm install fails:
Make sure you have the latest version of Node.js and npm. Update them if necessary.
npm install -g npm

2. If npm start doesn't work:
Check if the development server runs on a different port. Update the port if needed in package.json.
