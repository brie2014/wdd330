//JSON helper function
export function getJSON(url) {
    return fetch(url)
        .then(function (response) {
            if (!response.ok) {
                throw Error(response.statusText);
            } else {
                return response.json();
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

//Toggle Functions to show/hide content
export function toggleOptions() {
    var updateElement = document.getElementById("filter-list");
    updateElement.classList.toggle("hidden");
}

export function toggleBookList() {
    var updateElement = document.getElementById("saved");
    updateElement.classList.toggle("hidden-saved");
    let savedBtn = document.getElementById("reading-list-btn");
    if (savedBtn.innerHTML == 'Hide Saved Books') {
        savedBtn.innerHTML = "Show Saved Books"
    }
    else {
        savedBtn.innerHTML = "Hide Saved Books"
    }
};

//Function to only toggle saved books in small view
export function toggleBookListSmall() {
    let savedBtn = document.getElementById("reading-list-btn");
    const mediaQueryList = window.matchMedia('(min-width: 750px)');

    if (mediaQueryList.matches) {
        savedBtn.removeEventListener("click", toggleBookList);
        savedBtn.innerHTML = "My Saved Books";
    }
    else {
        savedBtn.innerHTML = "Show Saved Books";
        savedBtn.addEventListener("click", toggleBookList)
    }
}