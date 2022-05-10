document.addEventListener("DOMContentLoaded", function(){
    console.log("DOM Content has loaded");
});
console.log("My JavaScript file jvturner is recognized and read by the console");
// Deliverables
// 1) Page Load show first 50 Monsters
// 2) Create a <form> Create a 'Create Monster Button'
// 3 Fields Name: Age: Description:
// 4) Add Event Listener to "click"
// 4a) Add Monster to the List and save monster to API---i.e. Server using POST method
// 5) Show a button at the end of the list, when clicked show the next 50 monsters
// 5a) Add Event Listener to "click"

//  ----------------------API SOURCES-------> 'http://localhost:3000/monsters'--------ALL MONSTERS
// -----------------------API SOURCES------->  'http://localhost:3000/monsters/?_limit=50' --- 1 thru 50


// Name & Description must be in "Quotes"---A String, The age # does not have to be in "Quotes"
const newMonsterObjectData = {
    name: "Sloth from Da Goonies",
    age: 75,
    description: "HEEEYYYY YOOOUUUUU GUUUUUYYYYSSSSSS",
};
//  POST method to add a monster to update my server: 
// ****** New Monster Object ***** Add To the server ********
const newConfigObject = {
    method: "POST",
    headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(newMonsterObjectData)
};
fetch("http://localhost:3000/monsters/?_limit=50", newConfigObject);


const createMonster = document.getElementById('create-monster')

// Event Listener on Submit prevents refresh
const form = document.getElementsByTagName('form')[0]
console.log(form[0]);
form.addEventListener('submit', (e) => {
    e.preventDefault()    
    console.log('submitting form')
})

// Fetch Request
// Get Fetch method for monsters 1 thru 50
function getAllMonsters() {
    fetch('http://localhost:3000/monsters/?_limit=50')
        .then(response => response.json())
        .then(data => console.log(data))
}

// Intial Render
// Render Monsters to the DOM
function initialize() {
    getAllMonsters()
    console.log("Got My Monsters")
}
initialize()


