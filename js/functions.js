window.myNameSpace = window.myNameSpace || { };
function gameLoop()
{
    window.requestAnimationFrame(gameLoop)
    Game.update()
}

// Inventory 
function addToInventory(item)
    {
        inventory.append(item);
    }

// Event Listener functions
function pInput(e)
    {
        e.preventDefault();
        // get and create input value
        newInput = document.getElementById('newInput').value;
        p = document.createElement('p');
        p.setAttribute("class", "inputs");
        p.appendChild(document.createTextNode(newInput));
        
        // append input into pResponse div
        pResponse.appendChild(p);

        // reset input form
        playerInput.reset();

        gameLoop()
    }

function gameLoop()
{

    command = pResponse.lastChild.innerHTML;
    direction = ["N", "S", "E", "W"]
    // Movement
    if(pResponse.lastChild.innerHTML == "N" || "S" || "E" || "W")
        for(i = 0; i < direction.length; i++)
        {
            if(command == direction[i])
                {
                    player.move(command);
                }
        }
}

