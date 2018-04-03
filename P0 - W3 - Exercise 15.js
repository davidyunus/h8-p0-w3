function groupAnimals(animals) {
  // you can only write your code here!
  var kelompok = [];
  var tempKelompok = [];
  
  for(let i = 0; i < animals.length; i++) {
    
    for(let j = 0; j < animals.length; j++) {
      if(animals[i].slice(0, 1) < animals[j].slice(0, 1)) {
        var temp = animals[i];
        animals[i] = animals[j];
        animals[j] = temp;
      }
    }
  }
  
  for(let i = 0; i < animals.length; i++) {
    if(tempKelompok == '' || tempKelompok[0].slice(0,1) == animals[i][0]) {
      tempKelompok.push(animals[i]);
    } else if(tempKelompok[0].slice(0,1) != animals[i][0]){
      kelompok.push(tempKelompok);
      tempKelompok = [];
      tempKelompok.push(animals[i]);
    }
  }
  kelompok.push(tempKelompok);
  
  return kelompok;
  
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]