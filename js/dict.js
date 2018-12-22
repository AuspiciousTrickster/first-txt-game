window.myNameSpace = window.myNameSpace || { };

// World
world = {}
world['PlayerAptRoom'] = new Room("My Apartment Room",
                                "This is my apartment.",
                                {"N" : "AptHall"})
world['AptHall'] = new Room("Apartment Hall",
                            "This is the hallway outside my apartment",
                            {"N" : "Neighbor's Apartment", "E" : "Emergency Exit", "W" : "Stairway", "S": "PlayerAptRoom"})
