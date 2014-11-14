// Scott DiBisceglio 

// global variables

	var score = 0;
	var currloc= 0;
	var navErrorCount = 0;
	var beforeItaseYou = 5;
  
 // items
  var playerHasKey = false;
  var playerHasUniform = false;
  
function takeItem(){

}

// score variables
	
	var hasVisitedRoom10 = false;
	var hasVisitedRoom9 = false;
	var hasVisitedRoom8 = false;
	var hasVisitedRoom7 = false;
	var hasVisitedRoom6 = false;
	var hasVisitedRoom5 = false;
	var hasVisitedRoom4 = false;
	var hasVisitedRoom3 = false;
	var hasVisitedRoom2 = false;
	var hasVisitedRoom1 = false;
	var hasVisitedRoom0 = false;

function playerHelp(){
desc = "Use the directional Buttons or type North, South, " + 
	   "East, West, N, S, E or W in the command bar and press go to move \n\n " +
	   "You can take items by pressing the take button or typing take in the command bar \n\n" +
	   "You get 5 points every time that you enter a new room for the first time";	
dispMsg(desc);

}	
	
	function init(){
		look();
	}
	
	function dispMsg(message){
		var target= document.getElementById("taMain");
		target.value = message + "\n\n" + target.value;
  }
	function disScore(score){
		var output = document.GetElementByID("scoreBox");
		output.value = score;
   }
   
function txtCommand_keyPress(keyboardEvent){
  if (keyboardEvent.which === 13) { // Enter key
      btngo_Click();
   }
 }
 
	function movenorth(){
		if(currloc === 2){
	   	    currloc = 0;	 
			look();
		} else if (currloc ===0){
			   currloc = 1;			  			
				 look();
		} else if (currloc === 5){
				  currloc = 2;
				  look();		
		} else if (currloc === 4){
				  currloc = 6;
				  look();
		} else if (currloc === 7){
				  currloc = 4;
				  look();		
		} else if (currloc === 10){
					currloc = 8;
					look();
		} else {
			navigationError();
		}
	}
				
	function movesouth(){
		if(currloc === 1){
			currloc = 0;
			look();
	    } else if (currloc === 0){		
				currloc = 2;
				look();
		} else if (currloc === 2){
				currloc = 5;
				look();
		} else if (currloc === 6){
				currloc = 4;
				look();		
		} else if (currloc === 4){
				currloc = 7;
				look();
		} else if (currloc === 8){
				currloc = 10;
				look();		
		} else {
			navigationError();
		}
	}
			
	function moveeast(){
		if (currloc === 3){		
			currloc = 0;	
			look();
		} else if (currloc === 0){			
			  currloc = 4;			  
			  look();
		} else if (currloc === 9){
			  currloc = 1;
			  look();				
		} else if (currloc === 1){
			  currloc = 6;
			  look();
		} else if (currloc === 4){
			  currloc = 8;
			  look();
		} else {
			navigationError();
		}		
	}
	
	function movewest(){
		if(currloc === 4){			
			currloc = 0;
			look();
     } else if(currloc === 0){		
			currloc = 3;
			look();					
	} else if (currloc === 1){
			currloc = 9;
			look();
	} else if (currloc === 6){
			currloc = 1;
			look();
	} else if (currloc === 8){
			currloc = 4;
			look();
	} else {
			navigationError();			
		}
	}	
	
    function btngo_Click(message) {
		var txtCommandElement = document.getElementById("txtCommand");
//		alert(txtCommandElement.value);
	  var userCommand = txtCommandElement.value;
		  userCommand = userCommand.toUpperCase();
          
     // if(message !== null){
     //       userCommand = message;
      //  }
		var targetTextArea = document.getElementById("taMain");		
	if( userCommand === "N" || userCommand === "NORTH") {
		movenorth();
		}
	else if ( userCommand === "S" || userCommand === "SOUTH" )  {
		movesouth();
		}
	else if( userCommand === "E" || userCommand === "EAST" ) {
		moveeast();
		}
	else if( userCommand === "W" || userCommand === "WEST")   {
		movewest()
	 }
	 else if (userCommand === "HELP") {
     playerHelp()
	 	 }
    else if (userCommand === "TAKE"){
        if(currloc === 9 && !playerHasKey){
            playerHasKey = true;
            dispMsg("You pick up a key");
        } else if  (currloc === 6 && !playerHasUniform) {
			playerHasUniform = true;
			dispMsg ("You pick up the Uniform");
		}
        else{
            dispMsg("There is nothing here to take.");
        }
        }
    else if (userCommand === "INVENTORY"){
    var message = "";
        if(playerHasKey){
            message += "\nkey";
            }
            //message = "Current Inventory:" + message;
            //dispMsg(message);
        
		if (playerHasUniform){
			message += "\nuniform";
			}
		if(playerHasKey === false && playerHasUniform === false){
			message += "\nInventory currently empty";
		}
			message = "Current Invetory:" + message;
			dispMsg(message)
		}
        else {
      dispMsg("Invalid Command, please enter N, S, E, W or North, South, East, West" ) ;
    }
		//targetTextArea.value = targetTextArea.value + "\n" + message;
		}
	
	function look(){
		var desc = ""
		switch(currloc){
			case 0: loc0();
			    document.getElementById("btnNorth").disabled = false;
			    document.getElementById("btnEast").disabled = false;
				document.getElementById("btnWest").disabled = false;
				document.getElementById("btnSouth").disabled = false;
				
				break;
			case 1: loc1();
				document.getElementById("btnNorth").disabled = true;
			    document.getElementById("btnEast").disabled = false;
				document.getElementById("btnWest").disabled = false;
				document.getElementById("btnSouth").disabled = false;
			   break;
			case 2: loc2();
               document.getElementById("btnNorth").disabled = false;
			   document.getElementById("btnEast").disabled = true;
			   document.getElementById("btnWest").disabled = true;
			   document.getElementById("btnSouth").disabled = false;
			   break;
			case 3: loc3();
               document.getElementById("btnNorth").disabled = true;
			   document.getElementById("btnEast").disabled = false;
			   document.getElementById("btnWest").disabled = true;
			   document.getElementById("btnSouth").disabled = true;
			   break;
			case 4: loc4();
               document.getElementById("btnNorth").disabled = false;
			   document.getElementById("btnEast").disabled = false;
		       document.getElementById("btnWest").disabled = false;
			   document.getElementById("btnSouth").disabled = false;
			   break;
			case 5: loc5();
               document.getElementById("btnNorth").disabled = false;
			   document.getElementById("btnEast").disabled = true;
			   document.getElementById("btnWest").disabled = true;
			   document.getElementById("btnSouth").disabled = true;
			   break;
			case 6: loc6();
			   document.getElementById("btnNorth").disabled = true;
			   document.getElementById("btnEast").disabled = true;
			   document.getElementById("btnWest").disabled = false;
			   document.getElementById("btnSouth").disabled = false;
				break;
			case 7: loc7();
			   document.getElementById("btnNorth").disabled = false;
			   document.getElementById("btnEast").disabled = true;
			   document.getElementById("btnWest").disabled = true;
			   document.getElementById("btnSouth").disabled = true;
				break;
			case 8: loc8();
			   document.getElementById("btnNorth").disabled = true;
			   document.getElementById("btnEast").disabled = true;
			   document.getElementById("btnWest").disabled = false;
			   document.getElementById("btnSouth").disabled = false;
				break;
			case 9: loc9();
			   document.getElementById("btnNorth").disabled = true;
			   document.getElementById("btnEast").disabled = false;
			   document.getElementById("btnWest").disabled = true;
			   document.getElementById("btnSouth").disabled = true;
				break;
			case 10: loc10();
			   document.getElementById("btnNorth").disabled = false;
			   document.getElementById("btnEast").disabled = true;
			   document.getElementById("btnWest").disabled = true;
			   document.getElementById("btnSouth").disabled = true;
				break;
			default: desc = "You cannot go that way";
			}
			checkScore();
			dispMsg(desc)
	}
	
	function loc0() {
		var desc =  "You are standing in the middle of the prison yard for your one hour of outdoor time. There are other inmates and guards in every direction you look.";
		 checkScore();
		 dispMsg(desc)
	}
	
	function loc1() {
      var desc = "You make your way to the gym, You are surronded by inmates who are much bigger than you. I recommend running before you make eye contact.";
      checkScore();
      dispMsg(desc)
	}
	
	function loc2(){
    var desc = "You have reached the commissary, however you just realized that you spent all your money last week on Twinkies";
    checkScore();
    dispMsg(desc);
	}
	
	function loc3(){
    var desc = "You have reached the mailroom, sorry to say, there's nothing here for you. You might just want to turn around.";
    checkScore();
    dispMsg(desc);
	}
	
	function loc4(){
    var desc = "You have made your way to the mess hall, the food smells terrible.";
    checkScore();
    dispMsg(desc);
	}
	
	function loc5(){
    var desc = "You have entered the visiting room. No one loves you, there's no one here today for you...or ever.";
    checkScore();
    dispMsg(desc);	
	}
	
	function loc6(){
	var desc = "You have entered the laundry room, There is a clean guards uniform laying on the table."
	if(playerHasUniform){
		desc = "You enter the laundry room, Theres nothing here";
	} else {
		desc = "You have entered the laundry room, there is a clean guards uniform laying on the table";
	}
	checkScore();
	dispMsg(desc);
	}
	
	function loc7(){
	var desc = "You have reached the Warden's office, The door is locked."
	checkScore();
	dispMsg(desc);	
	}
	
	function loc8(){
	var desc = "You enter the classroom, its empty. But there is a Beyonce concert playing on the Smartboard."
	checkScore();
	dispMsg(desc);	
	}
	
	function loc9(){
	var desc = "You enter the prisoner's garden. You see a shiny key behind the tomato plants"
    if (playerHasKey) {
      desc = "You enter the garden, there are nothing but tomato plants";
    } else { 
          desc = "You enter the prisoner's garden. You see a shiny key behind the tomato plants";
    }    
	checkScore();
	dispMsg(desc);	
	}
	
	function loc10(){
	var desc = "You have made your way to the front gate, only guards are allowed through here."
	checkScore();
	dispMsg(desc);
	}
	function navigationError(){
		navErrorCount = navErrorCount + 1
		if(navErrorCount < beforeItaseYou) {
			dispMsg("You cannot go that way");
		} else {
			dispMsg("WTF? seriously. turn around before I taze you");
		}	
	}
	
	
	function checkScore() {
		if(! hasVisitedRoom0){
			if (currloc === 0){
				score = score + 5;
				hasVisitedRoom0 = true;
			}
		} else if ( (! hasVisitedRoom1) && (currloc === 1) ){
				score = score + 5;
				hasVisitedRoom1 = true;
		} else if ( (! hasVisitedRoom2) && (currloc === 2) ) {
				score = score + 5;
				hasVisitedRoom2 = true;
		} else if ( (! hasVisitedRoom3) && (currloc === 3) ) {
				score = score + 5;
				hasVisitedRoom3 = true;
		} else if ( (!hasVisitedRoom4) && (currloc === 4) ) {
				score = score + 5;
				hasVisitedRoom4 = true;
		} else if ( (!hasVisitedRoom5) && (currloc === 5) ) {
				score = score + 5;
				hasVisitedRoom5 = true;
		} else if ( (!hasVisitedRoom6) && (currloc === 6) ) {
				score = score + 5;
				hasVisitedRoom6 = true;
		} else if ( (!hasVisitedRoom7) && (currloc === 7) ) {
				score = score + 5;
				hasVisitedRoom7 = true;
		} else if ( (!hasVisitedRoom8) && (currloc === 8) ) {
				score = score + 5;
				hasVisitedRoom8 = true;
		} else if ( (!hasVisitedRoom9) && (currloc === 9) ) {
				score = score + 5;
				hasVisitedRoom9 = true;
		} else if ( (!hasVisitedRoom10) && (currloc === 10) ) {
				score = score + 5;
				hasVisitedRoom10 = true;				
	}
		 document.getElementById("scoreBox").value = score;
		}
		
	