//JSON helper function
export function getJSON(url) {
    return fetch(url)
        .then(function(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            } else {
                return response.json();
            }
        })
        .catch(function(error) {
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
}