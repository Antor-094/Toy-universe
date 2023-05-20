# Toy Universe

This is a full-stack Toy Marketplace website focused on [insert your chosen toy category]. The website allows users to browse and purchase toys, as well as add their own toys for sale.

## Live Website

You can access the live version of the website [here](insert live website link).

## Features

- **Authentication**: Users can register, log in, and log out. Only logged-in users can add toys, view their own toys, and perform updates and deletions.
- **Homepage**: The homepage features a banner section, a gallery section showcasing relevant pictures, a "Shop by category" section with tabs and sub-categories, and two additional attractive sections.
- **All Toys Page**: Users can view all the toys added by different users in a tabular form. They can search for toys based on the toy name and click on the "View Details" button to see more information.
- **Single Toy Details**: When users click on the "View Details" button for a toy, they are redirected to a private route where they can view detailed information about the toy.
- **Add A Toy Page**: Logged-in users can add their own toys for sale by providing the required information in a form.
- **My Toys Page**: Logged-in users can view and manage the toys they have added. They can update the toy information and delete their own toys.
- **404 Page**: A custom 404 page is included with a fun image or GIF and a "Back to Home" button.
- **Responsive Design**: The website is designed to be responsive and mobile-friendly.
- **Environment Variables**: Firebase config keys and MongoDB credentials are hidden using environment variables.

## Technologies Used

- Frontend: React.js, React Router, AOS (Animate On Scroll) package
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: Firebase Authentication
- Other Libraries: [List any additional libraries or packages you have used]

## Installation

1. Clone the repository: `git clone [repository-url]`
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
   - Create a `.env` file in the `client` directory and add the necessary environment variables for the frontend.
   - Create a `.env` file in the `server` directory and add the necessary environment variables for the backend.
4. Start the development server:
   - For the client-side: `npm start` (from the `client` directory)
   - For the server-side: `npm start` (from the `server` directory)

## Contributing

Contributions are welcome! If you find any bugs or want to suggest improvements, please open an issue or submit a pull request.

## License

[Insert your license information]

## Contact

[Your Name]
- Website: [Your Website]
- Email: [Your Email]
- LinkedIn: [Your LinkedIn]
- Twitter: [Your Twitter]