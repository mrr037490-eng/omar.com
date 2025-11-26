// بيانات تجريبية للأفلام
const movies = [
    { title: "فيلم الحركة 1", image: "https://via.placeholder.com/300x450?text=فيلم+1" },
    { title: "فيلم الرومانسية", image: "https://via.placeholder.com/300x450?text=فيلم+2" },
    { title: "أنمي مغامرات", image: "https://via.placeholder.com/300x450?text=أنمي+1" },
    { title: "مسلسل كوميدي", image: "https://via.placeholder.com/300x450?text=مسلسل+1" },
    { title: "فيلم خيال علمي", image: "https://via.placeholder.com/300x450?text=فيلم+3" }
];

// عرض الأفلام في الصفحة
const moviesGrid = document.getElementById("movies-grid");

movies.forEach(movie => {
    const card = document.createElement("div");
    card.classList.add("movie-card");
    card.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}">
        <h3>${movie.title}</h3>
    `;
    moviesGrid.appendChild(card);
});

// وظيفة البحث
function searchMovies() {
    const query = document.querySelector(".search-bar input").value.toLowerCase();
    moviesGrid.innerHTML = "";
    const filtered = movies.filter(movie => movie.title.toLowerCase().includes(query));
    if (filtered.length === 0) {
        moviesGrid.innerHTML = "<p style='color:#fff; text-align:center;'>لم يتم العثور على نتائج</p>";
    } else {
        filtered.forEach(movie => {
            const card = document.createElement("div");
            card.classList.add("movie-card");
            card.innerHTML = `
                <img src="${movie.image}" alt="${movie.title}">
                <h3>${movie.title}</h3>
            `;
            moviesGrid.appendChild(card);
        });
    }
}
