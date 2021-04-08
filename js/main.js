const links = [
    {label: "Week 01 Notes and Practice",
    url: "week1/"},

    {label: "Week 02 Notes and Practice",
    url: "week2/"},

    {label: "Week 03 Notes and Practice",
    url: "week3/"},

    {label: "Week 04 Notes and Practice",
    url: "week4/"},

    {label: "Week 05 Notes and Practice",
    url: "week5/"},

    {label: "To Do Application",
    url: "to-do/"},

    {label: "Week 07 Notes and Practice",
    url: "week7/"},

    {label: "Week 08 Notes and Practice",
    url: "week8/"},

    {label: "Week 09 Notes and Practice",
    url: "week9/"},

    {label: "Week 10 Notes and Practice",
    url: "week10/"},

    {label: "Final Challenge: Find a Book",
    url: "bookshelf/"}

];

const ol = document.querySelector('ol');

for (const item of links) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.setAttribute('href', item.url);
    a.textContent = item.label

    li.appendChild(a);
    ol.appendChild(li);

}