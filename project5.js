// Project 5
// navigation2.js


// global variables for movement in game
var currentLocation = 0;
var nextLocation = 0;
var north = 0;
var south = 1;
var east = 2;
var west = 3;
var score = 5;

function playerHelp(){
desc = "Use the directional Buttons or type North, South, " + 
	   "East, West, N, S, E or W in the command bar and press go to move \n\n " +
	   "You can take items by pressing the take button or typing take in the command bar \n\n" +
	   "You get 5 points every time that you enter a new room for the first time";	
dispMsg(desc);
}
// intiate the game
function dispMsg(message){
		var target = document.getElementById("taMain");
		target.value = message + "\n\n" + target.value;
  }
  
function init(){
dispMsg(locations_0);
}

//location prototype
function Location(_id, _name, _description, _hasItem) {
this.id = _id;
this.name = _name;
this.description = _description;
this.hasItem = _hasItem;
this.hasVisited = false;
this.item = function(){
	if(this.hasItem){
		return items[currentLocation].description;
	} else {
		return "";
	}
}
	this.toString = function() {		
		var returnVal = this.description + " " + this.item();
		return returnVal;
	}
}

//Item Prototype 
function Item (_id, _name, _description, _isTaken) {
	this.id = _id;
	this.name = _name;
	this.description = _description;
	this.isTaken = _isTaken;
	this.toString = function() {		
		var returnVal = this.description + " " + this.item();
		return returnVal;
	}
}
	

//Locations 0-10'
var locations_0 = new Location(0, "Prison Yard", "You are standing in the middle of the prison yard.", false );
locations_0.hasVisited =true;

var locations_1 = new Location(1, "The Gym", "You have reached the gym, there are inmates working out all over.", false);

var locations_2 = new Location(2, "The Commissary", "You have reached the commissary, they are having a sale on paper clips!", false);

var locations_3 = new Location(3, "The Mail Room", "You enter the mail room, theres no mail there for you.", false );

var locations_4 = new Location(4, "Mess Hall", "You have entered the mess hall, the food smells terrible.", true);

var locations_5 = new Location(5, "Visiting Room", "You have entered the visiting room, no ever comes to visit you though.", false);

var locations_6 = new Location(6, "The Laundry Room", "You have entered the laundry room.", true);

var locations_7 = new Location(7, "The Warden's Office", "You have reached the Wardens Office, theres nothing here.", false );

var locations_8 = new Location(8, "The Classroom", "You have entered the class room.", true);

var locations_9 = new Location(9, "The Garden", "You have entered the garden, there are so many plants.", true);

var locations_10 = new Location(10, "The Front Gate", "You have reached the front gate, you can see a light at the end that leads to freeedom.", false);


//Items
var itemPrisonKey = new Item(9, "key", "There is a key here, you should probably take this, it seems important.", false);

var itemGuardUniform = new Item(6, "Uniform", "There is a uniform here sitting there for the taking.", false);

var itemKitchenKnife = new Item(4, "Kitchen Knife", "and there is a knife on the floor that you could take.", false);

var itemBeyonce = new Item(8, "Beyonce", "and Beyonce is Here; is willing to come along with you.", false);

// Items Array 
var items = new Array();
items[4] = itemKitchenKnife;
items[6] = itemGuardUniform;
items[8] = itemBeyonce;
items[9] = itemPrisonKey;

//inventory array
var inventory = new Array();

// should display inventory
function btn_displayInventory(){
var msg = "Inventory " + inventory;
dispMsg(msg);
}

function takeItem(item){
	inventory.push(items[currentLocation].name);
	dispMsg("Taken " + items[currentLocation].name + ".");
	items[currentLocation].isTaken = true;
}

//Location arrary
var locations = new Array( locations_0, 
locations_1, 
locations_2, 
locations_3,
locations_4,
locations_5,
locations_6, 
locations_7, 
locations_8, 
locations_9,
locations_10) ;
							
// navigation
var nav = new Array(/*  0  1   2  3 */
			/* 0 */  [  1, 2, 4,  3 ],   
			/* 1 */  [  -1, 0, 6,  9],
		    /* 2 */  [ 0,  5, -1, -1],
			/* 3 */  [ -1, -1, 0, -1],
			/*  4 */ [ 6,  7,  8,  0],
			/*  5 */ [ 2, -1, -1, -1],
			/* 6  */ [ -1, 4, 1,   1],
			/* 7  */ [ 4, -1, -1, -1],
			/*  8 */ [-1, 10, -1,  4],
			/*  9 */ [-1, -1, 1,  -1],
			/* 10 */ [ 8, -1, -1, -1]
			);
			
var movementButtons = new Array("btnNorth", "btnSouth", "btnEast", "btnWest");

// button disable
var movementButtons_switch = new Array(/*    0  1  2  3  */
								/*0*/     [0,  0,  0,   0],
								/*1*/     [1,  0,  0,   0],
								/*2*/     [0,  0,  1,   1],
								/*3*/     [1,  1,  0,   1],
							   /*4*/      [0,  0,  0,   0],
								/*5*/     [0,  1,  1,   1],
								/*6*/     [1,  0,  1,   0],
								/*7*/     [0,  1,  1,   1],
								/*8*/     [1,  0,  1,   0],
								/*9*/     [1,  1,  0,   1],
								/*10*/    [0,  1,  1,   1]
								);
								
								
								
								
								
								
								
function txtCommand_keyPress(keyboardEvent){
  if (keyboardEvent.which === 13) { // Enter key
      btnGo_Click();
   }
 }
 
  function btnGo_Click(message) {
		
		var txtCommandElement = document.getElementById("txtCommand");
		//alert(txtCommandElement.value);
	  var userCommand = txtCommandElement.value;
	  //command = userCommand.toUpperCase();
          
     // if(message !== null){
     //    userCommand = message;
	 btn_command(userCommand);
        }


function btn_command(command){
	
	command = command.toUpperCase();
	if (command === "N" || command === "NORTH"){
		command = north;
} 
else if (command === "S" || command === "SOUTH"){
		command = south;
}
else if (command === "E" || command === "EAST"){
		command = east;
}
else if (command === "W" || command === "WEST"){
		command = west;
}
nextLocation = nav[currentLocation][command];

if(typeof command === "number") {
    if(nextLocation >= 0){
        for (var i = 0; i < movementButtons.length; i++){
            var btnDisable = 0;
            btnDisable = movementButtons_switch[nextLocation][i];
            if (btnDisable === 1){
                document.getElementById(movementButtons[i]).disabled = true;
            } else {
                document.getElementById(movementButtons[i]).disabled = false;
                }
            }
        
currentLocation = nextLocation;
if(!locations[currentLocation].hasVisited){
	locations[currentLocation].hasVisited = true;
	score +=5;
	document.getElementById("scoreBox").value = score;
	}
        dispMsg(locations[currentLocation]);
    } else if (nextLocation === -1) {
        dispMsg("You can not go that way,");
	}
}
else if (command === "INVENTORY" || command === "I" ){
	btn_displayInventory();
}
else if (command === "H" || command === "HELP") {
	playerHelp();
}

else if (nextLocation == undefined && command === "TAKE" || command === "T"){
	if (locations[currentLocation].hasItem){
		takeItem(items[currentLocation]);
		locations[currentLocation].hasItem = false;
	}
else if (!locations[currentLocation].hasItem) {
	dispMsg("There is nothing for you to take here.");
	}
} else {
	dispMsg("That is an invalid command!. Try pressing Help.");
	}
}
