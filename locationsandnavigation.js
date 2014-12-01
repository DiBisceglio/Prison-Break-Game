// Project 5
// navigation2.js


// global variables for movement in game
var currentLocation = 0;
var nextLocation = 0;
var north = 0;
var south = 1;
var west = 2;
var east = 3;

//location prototype
function Location(_id, _name, _description, _hasItem) {
this.id = id;
this.name = name;
this.description = description;
this.hasItem = _hasItem;
this.item = function(){
	if(this.hasItem && locations[nextLocation]){
		return items[nextLocation].description;
	} else {
		return "";
	}
}
	this.toString = function() {
		var returnValue = ";
		returnValue = this.description + " " + this.item();
		return returnValue;
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
locations_0.description = "You are standing in the middle of the prison yard";
locations_0.hasItem = false;

var locations_1 = new Location();
locations_1.id = 1;
locations_1.name = "The Gym";
locations_1.description = "You have reached the gym, there are inmates working out all over";
location_1.hasItem = false;

var locations_2 = new Location();
