'use strict';

function startApp() {

  attachListeners();

  loadData();

}

function loadData() {

  // const success = animals => console.log('animals', animals);
  const success = animals => {
    displayHorns(animals);
    makedropDown(animals);
  }


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
}

function makedropDown(animals) {
  //create an array to hold keywords
  console.log(animals);
  const keywordsArray = [];
  animals.forEach((element) => {
    if(!keywordsArray.includes(element.keyword)){
      keywordsArray.push(element.keyword);
    }
  });
  keywordsArray.forEach(element => {
    $('select').append($('<option>', {value: element, text: element}));
  })
  console.log('keyword arr', keywordsArray)
}

function attachListeners() {

  $('select').on('change', event => {
    const $choice = $(event.target);
    const type = $choice.val();
    if (type === 'narwhal'){
      $('main').hide();
    }
    console.log('chin');
  })
}
    



  // pages
//   $('nav li').on('click', event => {
//     const pageNum = $(event.target).attr('data-page');

//     showCurrentPage(pageNum);
//   });
// }

$(startApp);
