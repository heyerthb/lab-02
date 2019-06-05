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
  console.log('animals', animals);
  animals.forEach(animal => {
    const $newAnimal = $('#photo-template').clone();
    
    $newAnimal.find('img').attr('src', animal.image_url); 
    $newAnimal.find('h2').text(animal.title); 
    
    $('main').append($newAnimal);
  });
}

$(startApp);