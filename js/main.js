const links = [
    {label: "Week 01 Notes and Practice",
    url: "week1/"},
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