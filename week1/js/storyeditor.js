function loadStory () {
    let storyName = document.getElementById("storyName").value
    let storyHTML = localStorage.getItem(storyName)
    document.getElementById("storyEditor").value=storyHTML
}

function saveStory () {
    let storyName = document.getElementById("storyName").value
    let storyHTML = document.getElementById("storyEditor").value
    localStorage.setItem(storyName, storyHTML)
}

function displayStory () {
    let storyHTML = document.getElementById("storyEditor").value
    document.getElementById("storyDisplay").innerHTML = storyHTML
}