# Toy Universe

Toy Universe is a visually appealing website that allows users to explore and purchase various car toys. The website features a user-friendly interface, responsive design, and interactive components to enhance the user experience. Users can browse through different categories, add toys to their collection, and read informative blogs related to toys. The website also includes authentication functionality for user registration and login, ensuring a personalized experience for each user.

## Live Website

You can access the live version of the website [Toy Universe website link](https://toy-universe-56b72.web.app/).
## Features

- **Visually Appealing Design**: The website is designed to be visually appealing, with pleasing color contrast and proper alignment and spacing of elements. The use of custom styling enhances the overall aesthetics of the website.

- **Navbar and Footer**: The navbar and footer are present on all pages, providing easy navigation and consistent branding. The navbar includes the website logo, name, and important links such as Home, All Toys, My Toys, Add A Toy, Blogs, and User profile picture. The profile picture, Add A Toy, and My Toys options are conditionally displayed based on the user's login status.

- **Login & Registration Systems**: Users can register and login to access personalized features. The login page allows users to log in using their email and password or via Google Sign-in. The registration page includes fields for name, email, password, and photo URL.

- **Home Page**: The home page features a slider/banner section, a gallery section with attractive toy pictures, and a "Shop by Category" section with tabs for different sub-categories. Each tab showcases car toys with relevant information such as picture, name, price, rating, and a "View Details" button. If a user is not logged in and clicks on the "View Details" button, they will be redirected to the login page.

- **Blogs Page**: The blogs page allows users to read and explore informative blogs related to toys. Users can find answers to questions such as what is an access token and refresh token, the comparison between SQL and NoSQL databases, and explanations of Express.js, Nest.js, and MongoDB aggregate.

- **All Toys Page**: The all toys page displays a table/list of all the toys added by users. Each row in the table includes information such as the seller's name, toy name, sub-category, price, available quantity, and a "View Details" button. The page also includes a search system based on the toy name. Without logging in, if a user clicks on the "View Details" button, they will be redirected to the login page.

- **Single Toy Details**: After logging in and clicking on the "View Details" button, users are redirected to the toy details page. This page displays detailed information about a specific toy, including the picture, toy name, seller name, seller email, price, rating, available quantity, and a description. If possible, the details can be displayed in a modal.

- **Add A Toy Page**: The add a toy page allows logged-in users to add new toys to the marketplace. The form includes fields for the toy's picture URL, name, seller name, seller email, sub-category, price, rating, available quantity, and a detailed description.

- **My Toys Page**: The my toys page is accessible only to logged-in users. It displays a tabular form of all the toys that the user has added. Each row includes the toy's information and options to update or delete the toy. The update action allows users to modify the toy's price, available quantity, and description, while the delete action removes the toy from the list.

- **404 Page**: The 404 page is displayed when a user tries to access a non-existent page. It includes a visually interesting image or GIF and a "Back to Home" button to redirect the user to the home page.

## Technologies Used

- Frontend: React.js, React Router, AOS (Animate On Scroll) package
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: Firebase Authentication


## Installation

1. Clone the repository client side: `git clone [https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-client-side-Antor-094.git]`
1. Clone the repository server side: `https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-server-side-Antor-094]`
2. Install the dependencies:
   - For the client-side:
     ```bash
     cd client
     npm install
     ```
   - For the server-side:
     ```bash
     cd server
     npm install
     ```
3. Set up the environment variables:
   - Create a `.env.local` file in the `client` directory and add the necessary environment variables for the frontend.
   - Create a `.env` file in the `server` directory and add the necessary environment variables for the backend.
4. Start the development server:
   - For the client-side: `npm run dev` (from the `client` directory)
   - For the server-side: `npm start` (from the `server` directory)

## Contributing

Contributions are welcome! If you find any bugs or want to suggest improvements, please open an issue or submit a pull request.


## Contact

[MD.OLI ULLAH ANTOR]
- Email: [mdantor556677889@gmail.com]
