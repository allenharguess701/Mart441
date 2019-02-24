// variables ///////////////////////////////////////////////////////////////////
var cardids = ["card1", "card2", "card3", "card4"];
var cardback = "images/back.png";
var thecards = new Array();

var firstNumber = -1;
var secondNumber = -1;
// JSON declaration
var player = {"firstname":"", "lastname":""};

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

function flipcard(number)
{
    
    // make the second image appear
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
        setTimeout(imagesDisappear, 1000); // calls a method after 1 second
    }
    // check to see if the images do match
    else if(actualImages[secondNumber] == actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
    {
        firstNumber = -1;
        secondNumber = -1;
    }
      
}

function imagesDisappear()
{

    console.log(firstNumber);
    document.getElementById(imageNames[firstNumber]).src = blankImagePath;
    document.getElementById(imageNames[secondNumber]).src = blankImagePath;
    firstNumber = -1;
    secondNumber = -1;
}

// add to the JSON from the textboxes
function addToPlayer()
{
    var firstName = document.getElementById("txtFirstName").value;
    var lastName = document.getElementById("txtLastName").value;
    var playerAge = document.getElementById("txtAge").value;
    console.log(firstName);
    console.log(lastName);
    console.log(playerAge);
    player.firstname = firstName;
    player.lastName = lastName;
	player.playerAge = playerAge;
    localStorage.setItem("playerInfo", JSON.stringify(player));
    window.location = "matching_full.html";
}

// get the information out of JSON
function playerInfo()
{
    var playerInformation = localStorage.getItem("playerInfo");
    player = JSON.parse(playerInformation);
    console.log(player.first;name)
   
}