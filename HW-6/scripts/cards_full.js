// variables ///////////////////////////////////////////////////////////////////
var cardids = ["card1", "card2", "card3", "card4"];
var cardback = "images/back.png";

var firstNumber = -1;
var secondNumber = -1;
var trysNumber = 0;
var player = {"firstname":"", "lastname":"", "age":"", "score":""};

var thecards = new Array();

// functions ///////////////////////////////////////////////////////////////////    
function cardbacks()
{
    randomcards();
    for(var i = 0; i < cardids.length; i++) { document.getElementById(cardids[i]).src= cardback; } 
}

function randomcards()
{
    var actualcards = ["images/1.png", "images/2.png"];
    var count = [0,0];
    while(thecards.length < 4)
    {
        var randomNumber = Math.floor(Math.random() * actualcards.length)
        if(count[randomNumber] < 2) { thecards.push(actualcards[randomNumber]); count[randomNumber] = count[randomNumber] + 1; }
    }  
}

function flipcard(number) { 

    if(firstNumber >= 0)
    {
        secondNumber = number;
        document.getElementById(imageNames[number]).src = actualImages[secondNumber];
        
    }
    else if(firstNumber < 0) // make the first image appear
    {
        firstNumber = number;
        document.getElementById(imageNames[firstNumber]).src= actualImages[firstNumber];
    
    }

    // check to see if the images do not match
    if(actualImages[secondNumber] != actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
    {
		//set number of trys
		
        setTimeout(imagesDisappear, 2000); // calls a method after 1 second
    }
    // check to see if the images do match
    else if(actualImages[secondNumber] == actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
    {
        //set number of trys and add to score
		
		firstNumber = -1;
        secondNumber = -1;
    }
    
}

function imagesDisappear()
{

    document.getElementById(imageNames[firstNumber]).src = blankImagePath;
    document.getElementById(imageNames[secondNumber]).src = blankImagePath;
    firstNumber = -1;
    secondNumber = -1;
}

// store player info
function addToPlayer()
{
    var firstName = document.getElementById("fname").value;
    var lastame = document.getElementById("lname").value;
    var age = document.getElementById("age").value;
	
    player.firstname = firstName;
    player.lastname = lastame;
    player.age = age;
    localStorage.setItem("playerInfo", JSON.stringify(player));
    window.location = "HWExample.html";
}

// get player information 
function playerInfo()
{
    var playerInformation = localStorage.getItem("playerInfo");
    player = JSON.parse(playerInformation);
    console.log(player.firstname);
   
}

