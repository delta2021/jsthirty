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
  
      const people = ['Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
  
      // Array.prototype.filteBeck, Glennr()
      // 1. Filter the list of inventors for those who were born in the 1500's
      const born_1500 = inventors.filter(el => {
          return el.year >= 1500 && el.year < 1600;
      })
      console.table(born_1500);
      // Array.prototype.map()
      // 2. Give us an array of the inventors first and last names
      const fullName = inventors.map(el => {
          return el.first + ' ' + el.last;
      })

      console.table(fullName);
      // Array.prototype.sort()
      // 3. Sort the inventors by birthdate, oldest to youngest
       inventors.sort((a, b) => {
          return a.year - b.year;
      })

      console.table(inventors); 
      // Array.prototype.reduce()
      // 4. How many years did all the inventors live all together?
      const years = inventors.reduce((prev, current) => {
            return prev + current.passed - current.year; 
      }, 0);
      console.log('years lived: ' ,  years); 
      // 5. Sort the inventors by years lived
      const sortByLifeSpan = inventors.sort((a, b)=> {
        return (b.passed - b.year) - (a.passed - a.year);
      });

      console.table(sortByLifeSpan ); 
      // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
      // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
      const cities = ["Boulevards of the Marshals", "Boulevard Auguste-Blanqui", "Boulevard Barbès", "Boulevard Beaumarchais", "Boulevard de l'Amiral-Bruix", "Boulevard Mortier", "Boulevard Poniatowski", "Boulevard Soult", "Boulevard des Capucines", "Boulevard de la Chapelle", "Boulevard de Clichy", "Boulevard du Crime", "Boulevard du Général-d'Armée-Jean-Simon", "Boulevard Haussmann", "Boulevard de l'Hôpital", "Boulevard des Italiens", "Boulevard Lefebvre", "Boulevard de la Madeleine", "Boulevard de Magenta", "Boulevard Marguerite-de-Rochechouart", "Boulevard Montmartre", "Boulevard du Montparnasse", "Boulevard Raspail", "Boulevard Richard-Lenoir", "Boulevard Saint-Germain", "Boulevard Saint-Michel", "Boulevard de Sébastopol", "Boulevard de Strasbourg", "Boulevard du Temple", "Boulevard Voltaire", "Boulevard de la Zone"]
      
      const deCities = cities.filter(el => {
        //   return el.search('de') >= 0;
        return el.includes('de');
      });

      console.table(deCities);


      // 7. sort Exercise
      // Sort the people alphabetically by last name
      people.sort((a, b) => {
          return a.match(/(?<= )[A-Z]/)[0].charCodeAt() - b.match(/(?<= )[A-Z]/)[0].charCodeAt();
      })

      console.log('sorted alphabetically', people); 
      // 8. Reduce Exercise
      // Sum up the instances of each of these
      const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];


      const sumUp = data.reduce((obj, current) => {
        obj[current] ? obj[current]++ : obj[current] = 1;
        return obj;
      }, {});
      console.table(sumUp);
    //   console.log(document.querySelector('.myText').innerText);
    //   console.log(document.querySelector('.myText').textContent);