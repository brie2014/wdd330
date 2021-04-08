//helper function to fetch the data from an external source and return it in JSON format
function getJSON(url) {
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

  // model code...it is a bit redundant in this case...we could just call getJSON directly...but if our model became more complex this sets us up to accomodate that.
  function getPeople(url) {
    return getJSON(url);
  }

  //  View code
  function renderPeopleList(people, peopleListELement) {
    // I decided to use a table to display my list of people. The shipList Element is that table and it has 2 children: thead and tbody...we need to put our people into tbody...so I reference the second child.
    const list = peopleListELement.children[1];
    list.innerHTML = "";
    //loop through the people
    people.forEach(function (ship) {
      //create elements for list...tr
      let listItem = document.createElement("tr");
      listItem.innerHTML = `
          <td><a href="${ship.url}">${ship.name}</a></td>
          <td>${ship.length}</td>
          <td>${ship.crew}</td>
          `;
  
      listItem.addEventListener("click", function (event) {
        console.log('listener')
        //when clicked the default link behavior should be stopped, and the ship details function should be called...passing the value of the href attribute in
        event.preventDefault();
        getPersonDetails(ship.url);
      });
      console.log('listener added');
      //add the list item to the list
      list.appendChild(listItem);
    });
  }
  
  
  // need to write the code to render the details to HTML
  function renderPersonDetails(personData) {
    console.log(personData);
  }
  
  // controller code
  function showPeople(url = "https://swapi.dev/api/starpeople/") {
    getPeople(url).then(function (data) {
      const results = data.results;
  
      //get the list element
      const peopleListELement = document.getElementById("shiplist");
      renderPeopleList(results, peopleListELement);
  
      // enable the next and prev buttons.
      if (data.next) {
        const next = document.getElementById("next");
        // normally we would prefer the addEventListener method of adding a listener. Using something like 'element.onEvent = event_function' has the limitation of only being able to hold one listener of the type we choose. In this case that is a good thing however. Because we are not re-creating the buttons each time we load a new batch of data we could end up with several listeners attached to each button by the last page. We won't have that issue here.
        next.ontouchend = () => {
          // notice to show the next page we just re-call the showPeople function with a new URL
          showPeople(data.next);
        };
      }
      if (data.previous) {
        const prev = document.getElementById("prev");
  
        prev.ontouchend = () => {
          showPeople(data.previous);
        };
      }
    });
  }
  
  function getPersonDetails(url) {
    //call getJSON functions for the provided url
    getPeople(url).then(function (data) {
      renderPersonDetails(data);
      //with the results populate the elements in the #detailsbox
    });
  }
  showPeople();