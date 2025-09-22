
const toDoArray = JSON.parse(localStorage.getItem('toDoList')) || [];
renderValues();

function displayActivity() {
  
  const activityElement = document.querySelector('.js-displayHeaderInput');
  const dateElement = document.querySelector('.js-displayDateInput');

  const activityName = activityElement.value;
  const activityDate = dateElement.value;
  
  toDoArray.push({name : activityName, date : activityDate});


  activityElement.value = '';
  dateElement.value = '';

  renderValues();
  
}

function renderValues() {
  
  const displayElement = document.querySelector('.js-displayValues');

  let htmlHolder = '';

  toDoArray.forEach( function(toDoObject, i) {

    // const toDoObject = toDoArray[i];  // removed it cuz of the forEach loop

    // const name = toDoObject.name;
    // const date = toDoObject.date;
    
    const { name,date} = toDoObject;   // destructuring

    
    htmlHolder += `
    <div class="result-grid-box">
        <div class="activity-input">${name}</div> 
        <div class="date-input">${date}</div> 
        <button class="del-btn" onClick="toDoArray.splice(${i},1); renderValues(); ">Delete</button>
        </div>`;
  });

  displayElement.innerHTML = htmlHolder;
  
  saveToStorage();
}

function saveToStorage () {
  localStorage.setItem('toDoList',JSON.stringify(toDoArray));
}

