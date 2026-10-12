<div align="center">

# 🎬 Movie Finder Pro

**Search any movie in seconds, powered by the OMDb API.**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![OMDb API](https://img.shields.io/badge/API-OMDb-F5C518?style=for-the-badge)

</div>

---

## 📖 About

**Movie Finder Pro** is a lightweight web app that lets you search for movies and browse their posters, titles and release years. It loads a set of featured movies on the home page, and replaces them with your results as soon as you search.

Built as a hands-on project to practice **async/await**, the **Fetch API** and **DOM manipulation** in vanilla JavaScript.

## ✨ Features

- 🔍 **Instant movie search** by title
- 🏠 **Home page showcase** with 8 featured movies on load
- 🖼️ **Poster cards** with title and year, plus a fallback image when a poster is missing
- ⏳ **Loading indicator** while data is being fetched
- ⚠️ **Friendly error handling** for empty searches, movies not found and network problems
- 📱 **Clean dark UI** with a bold yellow accent

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Page structure and search form |
| **CSS3** | Styling, layout and dark theme |
| **JavaScript (ES6+)** | Logic, async fetch and rendering |
| **OMDb API** | Movie data source |

## 📂 Project Structure

```
movie-finder/
├── movie.html    # Page markup
├── movie.css     # Styles
├── movie.js      # App logic (fetch, render, helpers)
└── README.md     # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- A free API key from [OMDb API](https://www.omdbapi.com/apikey.aspx)
- *(Optional)* [VS Code](https://code.visualstudio.com/) with the **Live Server** extension

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mayankrajbhargit/movie-finder.git
   ```
2. **Open the project folder**
   ```bash
   cd movie-finder
   ```
3. **Add your API key** in `movie.js`
   ```js
   const API_URL = "https://www.omdbapi.com/?apikey=YOUR_API_KEY&s=";
   ```
4. **Run it** by opening `movie.html` in your browser, or right-click it in VS Code and choose **Open with Live Server**.

## 🧠 How It Works

1. The user types a title and submits the form.
2. The input is validated, and an error is shown if it is empty.
3. `fetchMovies()` sends an async request to the OMDb API.
4. The JSON response is checked for errors (network failure or "Movie not found").
5. `renderMovies()` builds a card for each result and injects it into the page.

## 🔮 Future Improvements

- [ ] Movie details view (plot, rating, cast) on card click
- [ ] Pagination for more results
- [ ] Favourites list saved with `localStorage`
- [ ] Filter by year and type (movie / series)
- [ ] Fully responsive layout for mobile

## 📸 Screenshots

> Add a screenshot of your app here:
>
> `![Movie Finder Pro](screenshot.png)`

## 🤝 Contributing

Suggestions and improvements are welcome. Fork the repo, create a branch, and open a pull request.

## 👤 Author

**Mayank Raj Bhargit**
🔗 GitHub: [@Mayankrajbhargit](https://github.com/Mayankrajbhargit)

---

<div align="center">

⭐ If you like this project, give it a star!

</div>
