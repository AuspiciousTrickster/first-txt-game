window.myNameSpace = window.myNameSpace || { };

// Class Objects
class Player
    {
        constructor(name, health,energy,inv,roomName)
            {
                this.name = name;
                this.health = health;
                this.energy = energy;
                this.inv = inv;
                this.room = world[roomName];
            };
        move(direction)
            {
                if(!(direction in this.room.links)) // equivalent to 'not in' from python
                    {
                        sysResponse.innerHTML =
                            "<p>Can't move in that direction.</p>"
                        return
                    };
                let newRoomName = this.room.links[direction];
                sysResponse.innerHTML = 
                    "<p>Moving to " + newRoomName + "</p>";
                this.room = world[newRoomName]
            };
    };

class Room
    {
        constructor(name, description, links)
            {
                this.name = name;
                this.description = description;
                this.links = links;
            };
    };