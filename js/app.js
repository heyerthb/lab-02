'use strict';

function startApp() {

  // attachListeners();

  loadData();
  
}

function loadData() {
 
  // const success = animals => console.log('animals', animals);
  const success = animals => displayHorns(animals);

  const failure = error => console.error(error);
 
  $.get('data/page-1.json', 'json')
    .then(success)
    .catch(failure);

}

function displayHorns(animals) {
  animals.forEach(animals => {
    const $newAnimal = $('#photo-template').clone();
    
    $newAnimal.find('img').attr('src', animals.image_url); 
    $newAnimal.find('h2').text(animals.title); 
    $newAnimal.find('p').text(animals.description);
    
    $('main').append($newAnimal);
  });
  makedropDown(animals);
}

function makedropDown(animals) {
  //create an array to hold keywords
  console.log(animals);
  const keywords = [];
  animals.forEach((element , i) => { 
    if(!keywords.includes(element.keyword)){
      keywords.push(element.keyword);
    }    
    keywords.push(animals.keyword)
  });
  console.log('keyword arr', keywords)
}

$(startApp);