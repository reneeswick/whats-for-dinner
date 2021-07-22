// Data Library
var sides = [
'Miso Glazed Carrots',
'Coleslaw',
'Garden Salad',
'Crispy Potatoes',
'Sweet Potato Tots',
'Coconut Rice',
'Caeser Salad',
'Shrimp Summer Rolls',
'Garlic Butter Mushrooms',
'Hush Puppies',
]

var mains = [
'Spaghetti and Meatballs',
'Pineapple Chicken',
'Shakshuka',
'Thai Yellow Curry',
'Bibimbap',
'Chicken Parmesean',
'Butternut Squash Soup',
'BBQ Chicken Burgers',
'Ramen',
'Empanadas',
'Chicken Fried Rice',
'Sheet Pan Fajitas',
'Margarita Pizza',
]

var desserts = [
'Apple Pie',
'Lemon Meringue Pie',
'Black Forest Cake',
'Banana Bread',
'Peach Cobbler',
'Cheesecake',
'Funfetti Cake',
'Baklava',
'Flan',
'Macarons',
'Macaroons',
'Chocolate Cupcakes',
'Pavlova',
'Pumpkin Pie',
'Key Lime Pie',
'Tart Tatin',
'Croissants',
'Eclairs',
]

// query selector variables
var letsCookButton = document.querySelector('.lets-cook-button');
var youShouldMake = document.querySelector('.you-should-make');
var cookpot = document.querySelector('.cookpot');
var userInput = document.getElementsByName('dish');
var formOptionSide = document.querySelector('#side');
var formOptionMain = document.querySelector('#main-dish');
var formOptionDessert = document.querySelector('#dessert');
var formOptionEntireMeal = document.querySelector('#entire-meal');
var clearBtn = document.querySelector('.clear');

// event listeners
// letsCookButton.addEventListener('click', generateDish);
//
// function generateDish(){
//   event.preventDefault();
//
//   var sideChecked = formOptionSide.checked;
//   var mainChecked = formOptionMain.checked;
//   var dessertChecked = formOptionDessert.checked;
//   var entireMealChecked = formOptionEntireMeal.checked;
//
//   var randomSide = sides[Math.floor(Math.random() * sides.length)];
//   var randomMain = mains[Math.floor(Math.random() * mains.length)];
//   var randomDessert = desserts[Math.floor(Math.random() * desserts.length)];
//
//    if(sideChecked === true){
//     youShouldMake.innerHTML =
//     `<h5 class="message">You should make:</h5>
//      <h1 class="random-dish"> ${randomSide}!</h1>
//      <button class="clear">Clear</button>`;
//     }else if (mainChecked === true){
//       youShouldMake.innerHTML =
//       `<h5 class="message">You should make:</h5>
//        <h1 class="random-dish"> ${randomMain}!</h1>
//        <button class="clear">Clear</button>`;
//     }else if(dessertChecked === true){
//       youShouldMake.innerHTML =
//       `<h5 class="message">You should make:</h5>
//        <h1 class="random-dish"> ${randomDessert}!</h1>
//        <button class="clear">Clear</button>`;
//     }else if(entireMealChecked === true){
//       youShouldMake.innerHTML =
//       `<h5 class="message">You should make:</h5>
//        <h1 class="random-dish"> ${randomSide} with a side of ${randomMain} and ${randomDessert} for dessert!</h1>
//        <button class="clear">Clear</button>`;
//     }
//   };

letsCookButton.addEventListener('click', generateDish);

function generateDish(){
  event.preventDefault();

  var sideChecked = formOptionSide.checked;
  var mainChecked = formOptionMain.checked;
  var dessertChecked = formOptionDessert.checked;
  var entireMealChecked = formOptionEntireMeal.checked;

  var randomSide = sides[Math.floor(Math.random() * sides.length)];
  var randomMain = mains[Math.floor(Math.random() * mains.length)];
  var randomDessert = desserts[Math.floor(Math.random() * desserts.length)];

   if(sideChecked === true){
    youShouldMake.innerHTML =
    `<h5 class="message">You should make:</h5>
     <h1 class="random-dish"> ${randomSide}!</h1>`;
    clearBtn.classList.remove('hidden');
    }else if (mainChecked === true){
      youShouldMake.innerHTML =
      `<h5 class="message">You should make:</h5>
       <h1 class="random-dish"> ${randomMain}!</h1>`;
      clearBtn.classList.remove('hidden');
    }else if(dessertChecked === true){
      youShouldMake.innerHTML =
      `<h5 class="message">You should make:</h5>
       <h1 class="random-dish"> ${randomDessert}!</h1>`;
      clearBtn.classList.remove('hidden');
    }else if(entireMealChecked === true){
      youShouldMake.innerHTML =
      `<h5 class="message">You should make:</h5>
       <h1 class="random-dish"> ${randomSide} with a side of ${randomMain} and ${randomDessert} for dessert!</h1>`;
      clearBtn.classList.remove('hidden');
    }
  };
