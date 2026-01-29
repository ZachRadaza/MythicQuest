addListeners();

function addListeners(){
    const searchInput = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-btn");

    if(!searchBtn || !searchInput)
        throw new Error("#search-input of #search-btn not found");

    searchBtn.addEventListener("click", () => search(searchInput.value));

    searchInput.addEventListener("keydown", (event) => {
        if(event.key === "Enter"){
            event.preventDefault();
            search(searchInput.value);
        }
    });
}

function search(input){
    input.toLowerCase();
    input = input.replaceAll(" ", "-");

    let redirectTo = "";
    if(document.title === "Mythic Quest"){
        redirectTo = `./pages/Search.html?search=${input}`;
    } else {
        redirectTo = `Search.html?search=${input}`;
    }

    window.location.href = redirectTo;
}