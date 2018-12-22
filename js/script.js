// Motivation!
console.log('Gonna make this "text-based" game!');

// Variables
let sysResponse = document.getElementById('sysResponse');
let pResponse = document.getElementById('pResponse');
let playerInput = document.getElementById('playerInput');

// Event Listeners
playerInput.addEventListener('submit', pInput);


//===================================================================//


// Map Layout
let mapSkelly = new Array(5);
for (var i = 0; i < mapSkelly.length; i++)
    {
        mapSkelly[i] = new Array(5)
    };

// Assign assets to the index values to create map


//===================================================================//


// Main
let player = new Player("Zen", 100, 100, [], "PlayerAptRoom");
