const links = [
    {label: "Week 01 Notes and Practice",
    url: "week1/"},

    {label: "Week 02 Notes and Practice",
    url: "week2/"},

    {label: "Week 03 Notes and Practice",
    url: "week3/"},

    {label: "Week 04 Notes and Practice",
    url: "week4/"}
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