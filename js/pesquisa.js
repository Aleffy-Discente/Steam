
document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("search-bar"); 
    const searchBtn = document.getElementById("search-btn"); 
    const gameContainers = document.querySelectorAll(".game-container"); 

    const searchGames = () => {
        const searchText = searchBar.value.toLowerCase().trim(); 
        
        gameContainers.forEach((container) => {
            const gameTitle = container.querySelector(".game-title").textContent.toLowerCase(); 
            
            if (gameTitle.includes(searchText)) {
                container.style.display = "block"; 
            } else {
                container.style.display = "none";
            }
        });
    };

    searchBtn.addEventListener("click", searchGames);

    searchBar.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            searchGames();
        }
    });
});
