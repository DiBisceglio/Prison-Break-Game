// Project 5
// navigation2.js


// global variables for movement in game
var currentLocation = 0;
var nextLocation = 0;
var north = 0;
var south = 1;
var west = 2;
var east = 3;


// intiate the game
function dispMsg(message){
		var target= document.getElementById("taMain");
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
this.item = function(){
	if(this.hasItem && locations[nextLocation]){
		return items[nextLocation].description;
	} else {
		return "";
	}
}
	this.toString = function() {
		var returnValue = "";
		returnVal = this.description + " " + this.item();
		return returnVal;
	}
}

//Item Prototype 
function Item (_id, _name, _description, _isTaken) {
	this.id = _id;
	this.name = _name;
	this.description = _description;
	this.isTaken = _isTaken;
}

//Locations 0-10
var locations_0 = new Location();
locations_0.id = 0;
locations_0.name = "Prison Yard";
locations_0.description = "You are standing in the middle of the prison yard.";
locations_0.hasItem = false;

var locations_1 = new Location();
locations_1.id = 1;
locations_1.name = "The Gym";
locations_1.description = "You have reached the gym, there are inmates working out all over.";
locations_1.hasItem = false;

var locations_2 = new Location();
locations_2.id = 2;
locations_2.name = "The Commissary";
locations_2.description = "You have reached the commissary, they are having a sale on paper clips!";
locations_2.hasItem = false;

var locations_3 = new Location();
locations_3.id = 3;
locations_3.name = "The Mail Room";
locations_3.description = "You enter the mail room, theres no mail there for you.";
locations_3.hasItem = false;

var locations_4 = new Location();
locations_4.id = 4;
locations_4.name = "Mess Hall";
locations_4.description = "You have entered the mess hall, the food smells terrible.";
locations_4.hasItem = false;

var locations_5 = new Location();
locations_5.id = 5;
locations_5.name = "Visting Room";
locations_5.description = "You have entered the visiting room, no ever comes to visit you though.";
locations_5.hasItem = false;

var locations_6 = new Location();
locations_6.id = 6;
locations_6.name = "The Laundry Room";
locations_6.description = "You have entered the laundry room, there is a guards uniform on the table."
locations_6.hasItem = true;

var locations_7 = new Location();
locations_7.id = 7;
locations_7.name = "The Warden's Office";
locations_7.description = "You have reached the Wardens Office, theres nothing here.";
locations_7.hasItem = false;

var locations_8 = new Location();
locations_8.id = 8;
locations_8.name = "The Classroom";
locations_8.description = "You have entered the class room, there is a Beyonce Contert playing on the TV.";
locations_8.hasItem = false;

var locations_9 = new Location();
locations_9.id = 7;
locations_9.name = "The Garden";
locations_9.description = "You have entered the garden, you see a shiny key behind the tomato plants.";
locations_9.hasItem = true;

var locations_10 = new Location();
locations_10.id = 10;
locations_10.name = "The Front Gate";
locations_10,description = "You have reached the front gate, you can see a light at the end that leads to freeedom.";
locations_10.hasItem = false;

//Items
var itemPrisonKey = new Item();
itemPrisonKey.id = 9;
itemPrisonKey.name = "key";
itemPrisonKey.description = "";
itemPrisonKey.isTaken = false;

var itemGuardUniform = new Item();
itemGuardUniform.id = 6;
itemGuardUniform.name = "Uniform";
itemGuardUniform.description = "";
itemGuardUniform.isTaken = false;

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
var nav = new Array(/*  0 1 2 3 */
			/* 0 */  [  1, 2, 3, 4 ],   
			/* 1 */  [  -1, 0, 9, 6],
		    /* 2 */  [ 0, 5, -1, -1],
			/* 3 */  [ -1, -1, -1, 0],
			/*  4 */ [ 6, 7, 0, 8],
			/*  5 */ [ 2, -1, -1, -1],
			/* 6  */ [ -1, 4, 1, -1],
			/* 7  */ [ 4, -1, -1, -1],
			/*  8 */ [-1, 10, 4, -1],
			/*  9 */ [-1, -1, -1, 1],
			/* 10 */ [ 8, -1, -1, -1]
			);
			