// Get your shorts on - this is an array workout!
        // ## Array Cardio Day 1

        // Some data we can work with

        const inventors = [
            { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
            { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
            { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
            { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
            { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
            { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
            { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
            { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
            { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
            { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
            { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
            { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
        ];

        const people = [
            'Beck, Glenn',
            'Becker, Carl',
            'Beckett, Samuel',
            'Beddoes, Mick',
            'Beecher, Henry',
            'Beethoven, Ludwig',
            'Begin, Menachem',
            'Belloc, Hilaire',
            'Bellow, Saul',
            'Benchley, Robert',
            'Benenson, Peter',
            'Ben-Gurion, David',
            'Benjamin, Walter',
            'Benn, Tony',
            'Bennington, Chester',
            'Benson, Leana',
            'Bent, Silas',
            'Bentsen, Lloyd',
            'Berger, Ric',
            'Bergman, Ingmar',
            'Berio, Luciano',
            'Berle, Milton',
            'Berlin, Irving',
            'Berne, Eric',
            'Bernhard, Sandra',
            'Berra, Yogi',
            'Berry, Halle',
            'Berry, Wendell',
            'Bethea, Erin',
            'Bevan, Aneurin',
            'Bevel, Ken',
            'Biden, Joseph',
            'Bierce, Ambrose',
            'Biko, Steve',
            'Billings, Josh',
            'Biondo, Frank',
            'Birrell, Augustine',
            'Black, Elk',
            'Blair, Robert',
            'Blair, Tony',
            'Blake, William'
        ];

        // Array.prototype.filter()
        // 1. Filter the list of inventors for those who were born in the 1500's
        const exercise1 = inventors.filter(function (item) {
            if (item.year > 1499 && item.year < 1600) {
                return item;
            }
        });
        console.log(exercise1);
        document.getElementById("exercise1").innerHTML = JSON.stringify(exercise1);

        // Array.prototype.map()
        // 2. Give us an array of the inventors' first and last names

        const exercise2 = inventors.map(function (item) {
            return item.first + " " + item.last;
        });
        console.log(exercise2);
        document.getElementById("exercise2").innerHTML = JSON.stringify(exercise2);

        // Array.prototype.sort()
        // 3. Sort the inventors by birthdate, oldest to youngest

        const exercise3 = inventors.sort(function (x, y) {
            return x.year - y.passed;
        });
        console.log(exercise3);
        document.getElementById("exercise3").innerHTML = JSON.stringify(exercise3);

        // Array.prototype.reduce()
        // 4. How many years did all the inventors live?

        const yearsAlive = inventors.map(function (item) {
            const difference = item.passed - item.year;
            return difference;
        });

        const exercise4 = yearsAlive.reduce(function (x, y) {
            return (x + y);
        });

        console.log(exercise4);
        document.getElementById("exercise4").innerHTML = JSON.stringify(exercise4);

        // 5. Sort the inventors by years lived

        const sortByYears = inventors.sort(function (x, y) {
            const oldestInventor = x.passed - x.year;
            const nextInventor = y.passed - y.year;
            return oldestInventor > nextInventor ? -1 : 1;
        });

        console.log(sortByYears);

        const exercise5 = sortByYears.map(function (item) {
            const difference = item.passed - item.year;
            return item.first + " " + item.last + ", " + difference;
        });

        console.log(exercise5);
        document.getElementById("exercise5").innerHTML = JSON.stringify(exercise5);         

        // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
        // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
        // goto the link above and open the console. Paste the following two lines in.  That will create a list of links in memory that you can reference through the console. Use that list to finish the problem.
        // const category = document.querySelector('.mw-category');
        // const links = Array.from(category.querySelectorAll('a'));
       // const exercise6 = links.map(streetLink => streetLink.textContent).filter(streetName => streetName.includes('de'));

        //console.log(exercise6);

        // 7. sort Exercise
        // Sort the people alphabetically by last name
        const exercise7 = people.sort((a, b) => a !== b ? a < b ? -1 : 1 : 0);
        console.log(exercise7);
        document.getElementById("exercise7").innerHTML = JSON.stringify(exercise7); 

        // 8. Reduce Exercise
        // Sum up the instances of each of these
        const data = [
            'car',
            'car',
            'truck',
            'truck',
            'bike',
            'walk',
            'car',
            'van',
            'bike',
            'walk',
            'car',
            'van',
            'car',
            'truck'
        ];

        const exercise8 = data.reduce(function(result, item) {
      if (!result[item]) {
        result[item] = 0;
      }
      result[item]++;
      return result;
    }, {});

    console.log(exercise8);
    document.getElementById("exercise8").innerHTML = JSON.stringify(exercise8); 