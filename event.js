let ingredientsList = [];
let menuItemsList = [];
let mainItems = [];
let ssnBtnsStatus = '0';


document.getElementById("config-item").onclick = showItemCofig;
document.getElementById("add-event").onclick = loadEventConfig;

document.getElementById("confirmevent-btn").onclick = setMealSessionData;


document.getElementById("lunch-btn").onclick = showLunchItemsForm;
document.getElementById("breakfast-btn").onclick = showBreakfastItemsForm;
document.getElementById("snacks-btn").onclick = showSnacksItemsForm;
document.getElementById("dinner-btn").onclick = showDinnerItemsForm;

function showLunchItemsForm(){
  document.getElementById("lunch-items").style.display = "block";
  document.getElementById("breakfast-items").style.display = "none";
  document.getElementById("snack-items").style.display = "none";
  document.getElementById("dinner-items").style.display = "none";

  const lbtn = document.getElementById("session-capt");
  lbtn.style.display = 'block';
  lbtn.innerHTML="ADD ITEMS FOR LUNCH";

}

function showBreakfastItemsForm(){
  document.getElementById("breakfast-items").style.display = "block";
  document.getElementById("lunch-items").style.display = "none";
  document.getElementById("snack-items").style.display = "none";
  document.getElementById("dinner-items").style.display = "none";

  const lbtn = document.getElementById("session-capt");
  lbtn.style.display = 'block';
  lbtn.innerHTML="ADD ITEMS FOR BREAKFAST";


}

function showSnacksItemsForm(){
  document.getElementById("lunch-items").style.display = "none";
  document.getElementById("breakfast-items").style.display = "none";
  document.getElementById("snack-items").style.display = "block";
  document.getElementById("dinner-items").style.display = "none";

  const lbtn = document.getElementById("session-capt");
  lbtn.style.display = 'block';
  lbtn.innerHTML="ADD ITEMS FOR SNACKS";

        
}

function showDinnerItemsForm(){
  document.getElementById("breakfast-items").style.display = "none";
  document.getElementById("lunch-items").style.display = "none";
  document.getElementById("snack-items").style.display = "none";
  document.getElementById("dinner-items").style.display = "block";

  const lbtn = document.getElementById("session-capt");
  lbtn.style.display = 'block';
  lbtn.innerHTML="ADD ITEMS FOR DINNER";

        
}



function setMealSessionData(){
  
  const eventAddForm = document.querySelector('.event-add');
  eventAddForm.style.display = 'none'; // Show the form
  

  
  const bfbtn = document.getElementById("breakfast-btn");
  bfbtn.style.display='inline';
  
  const lunchbtn = document.getElementById("lunch-btn");
  lunchbtn.style.display='inline';
  
  const snacksbtn = document.getElementById("snacks-btn");
  snacksbtn.style.display='inline';
  
  const dinnerbtn = document.getElementById("dinner-btn");
  dinnerbtn.style.display='inline';

  ssnBtnsStatus =1;
}



hideSessionMenuButtons();
function hideSessionMenuButtons(){
  
  if (ssnBtnsStatus==1) {
     setMealSessionData();
  }
  else {
  const bfbtn = document.getElementById("breakfast-btn");
  bfbtn.style.display='none';
  
  const lunchbtn = document.getElementById("lunch-btn");
  lunchbtn.style.display='none';
  
  const snacksbtn = document.getElementById("snacks-btn");
  snacksbtn.style.display='none';
  
  const dinnerbtn = document.getElementById("dinner-btn");
  dinnerbtn.style.display='none';
}

}

loadLngredientsFomJson();
loadMenuItemsFomJson();


function loadMenuItemsFomJson(){
fetch('itemList.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    menuItemsList = data;
    mainItems = Object.keys(menuItemsList);
   // console.log(data); // Use the loaded JSON data here
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
}

function loadLngredientsFomJson(){

    fetch('./ingredients.json')
    .then(res => {
       return res.json();
    })
    .then(data  => {
     data.forEach(user => {
         ingredientsList = data;
          
     });
    })
     .catch(error => console.logerror());
     
};




function showItemCofig(){
  
  const chickenBiryaniItems = menuItemsList[mainItems[0]];
  showtxt = chickenBiryaniItems[0].iid;
  alert(showtxt);
}

function setEventFormVisibility(vvalue){
  const eventAddForm = document.querySelector('.event-add');
  if(vvalue==1){
  eventAddForm.style.display = 'block'; // Show the form
  }
  else {
    eventAddForm.style.display = 'none'; // Show the form  
  }

  const formElements = document.querySelectorAll('#evnt-addform input, #evnt-addform textarea');
  formElements.forEach(element => {
      element.disabled = false; // Enable each form field
  });
  
  // Also enable the submit button
 // document.querySelector('#evnt-addform button[type="submit"]').disabled = false;

}

function loadEventConfig(){

  const eventAddForm = document.querySelector('.event-add');
  eventAddForm.style.display = 'block'; // Show the form
  
 // setEventFormVisibility(1);
   
}





