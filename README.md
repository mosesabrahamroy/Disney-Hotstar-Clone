# Book Finder 2.0

**Book Finder 2.0** is a simple web application that allows users to search for books using the Google Books API. This project was originally [a school assignment](https://livoszlak.github.io/book-finder-api/) I worked on during my first year of web development studies, when I was just starting to learn about APIs, but I thought it would be fun to refactor what I had into utilizing a framework and some nicer styling. The previous version was basically one vanilla JS script file, one vanilla CSS file and one HTML index file. This 2.0 version is built with React and Vite.

## Dependencies

- React: ^18.3.1
- React DOM: ^18.3.1
- @emotion/react: ^11.13.3
- @emotion/styled: ^11.13.0
- @mui/material: ^6.1.1
- @mui/icons-material: ^6.1.1
- Vite: ^5.4.1

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/livoszlak/book-finder-api-2.0.git
   cd bookfinder
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Get your own Google Books API key from [Google Cloud Console](https://console.cloud.google.com/).

4. Create a `.env` file in the root of the project and add your API key:

   ```env
   VITE_GOOGLE_BOOKS_API_KEY=your_api_key_here
   ```

5. Start the development server:
   ```sh
   npm run dev
   ```

## Contributing

Contributions are welcome! Please see the [Contributing Guide](CONTRIBUTING.md) for more details.

## License

This project is licensed under the MIT License.
