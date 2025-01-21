# Netlify Link : https://admirable-kheer-5a5596.netlify.app/

# Features
Add new users with First Name, Last Name, Email, and Department.
Edit user information.
Delete users.
The list of users is dynamically fetched and displayed from the API.
# Technologies Used
HTML: Markup for the structure of the page.
CSS: Styling of the elements.
JavaScript: Functionality for adding, editing, and deleting users, along with fetching data from the API.
Setup & Run Instructions
# Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/user-management-dashboard.git
Navigate to the project directory:

bash
Copy
Edit
cd user-management-dashboard
Open the project in a browser:

You can directly open the index.html file in any modern browser.
Alternatively, you can use a simple HTTP server if you'd like to run it locally with Node.js:

bash
Copy
Edit
npm install -g http-server
http-server
Then, open the browser and go to http://localhost:8080.

# Challenges Faced
Asynchronous nature of JavaScript: Handling asynchronous operations (like fetching user data from the API) was a bit tricky initially. The solution involved using async/await and try/catch blocks to ensure smooth error handling and data display.

Form Handling: Ensuring that the form behaves correctly for both adding and editing users required careful state management, especially for tracking the user being edited.

UI Design: Making the user interface responsive and intuitive for different screen sizes was a bit challenging but could be improved with media queries.

Improvements if Given More Time
UI/UX Enhancements: Currently, the user interface is basic and can be improved with more polished styling. Adding features like loading indicators, and better form validation would improve the user experience.

Backend Integration: While the current implementation uses a mock API (JSONPlaceholder), the app could be connected to a real backend service, allowing users to persist their data.

State Management: If the application becomes larger, implementing state management libraries (e.g., Redux for React) or using a more structured approach would make the codebase more maintainable.

Testing: Adding unit and integration tests would help ensure the stability of the project as new features are added.
