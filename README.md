# Epic Wallpaper Website

Epic Wallpaper Website is a modern and visually appealing platform for discovering and downloading high-quality wallpapers. This website provides a seamless user experience with intuitive navigation, responsive design, and a vast collection of stunning wallpapers to enhance your device's aesthetics.

## Features

- **Browse Wallpapers:** Explore a wide variety of categories and themes to find the perfect wallpaper.
- **Search Functionality:** Quickly find wallpapers using keywords or tags.
- **Responsive Design:** Optimized for all screen sizes, from mobile to desktop.
- **Download Options:** Easily download wallpapers in high resolution.
- **Favorites:** Mark wallpapers as favorites for quick access later.
- **User-Friendly UI:** Clean and modern design with easy navigation.

## Technologies Used

- **Frontend:**
  - HTML5, CSS3, JavaScript
  - [React.js](https://reactjs.org/) for a dynamic and responsive UI
- **Backend:**
  - [Node.js](https://nodejs.org/) with [Express.js](https://expressjs.com/)
- **Database:**
  - MongoDB for storing user preferences and wallpaper data
- **APIs:**
  - Integration with third-party wallpaper APIs (e.g., Unsplash API) for fetching high-quality images
- **Version Control:**
  - Git and GitHub for code collaboration and version tracking

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/kovendhan5/Epic-Wallpaper-website.git
   cd Epic-Wallpaper-website
   ```

2. **Install Dependencies:**
   Navigate to the frontend and backend directories to install dependencies.

   - For frontend:
     ```bash
     cd frontend
     npm install
     ```

   - For backend:
     ```bash
     cd backend
     npm install
     ```

3. **Set Up Environment Variables:**
   Create a `.env` file in the `backend` directory with the following details:
   ```env
   PORT=5000
   MONGO_URI=<your-mongodb-connection-string>
   API_KEY=<your-unsplash-api-key>
   ```

4. **Start the Application:**
   - Run the backend server:
     ```bash
     npm start
     ```
   - Run the frontend application:
     ```bash
     cd frontend
     npm start
     ```

5. **Access the Application:**
   Open your browser and visit `http://localhost:3000`.

## Project Structure

```
Epic-Wallpaper-website/
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
├── .gitignore
├── README.md
```

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature description"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Thanks to [Unsplash](https://unsplash.com/) for providing high-quality images.
- Inspired by the passion for visually stunning wallpapers.

## Contact

For any inquiries or support, reach out to:
- **Author:** Kovendhan
- **GitHub Profile:** [kovendhan5](https://github.com/kovendhan5)

Enjoy the Epic Wallpaper Website! 🌟
