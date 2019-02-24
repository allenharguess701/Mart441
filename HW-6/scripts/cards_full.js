// variables ///////////////////////////////////////////////////////////////////
var cardids = ["card1", "card2", "card3", "card4"];
var cardback = "images/back.png";
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

function flipcard(number) { document.getElementById(cardids[number]).src= thecards[number]; }


// add to the JSON from the textboxes
function addToPlayer()
{
    var firstName = document.getElementById("fname").value;
    //console.log(firstName);
    player.firstname = firstName;
    localStorage.setItem("playerInfo", JSON.stringify(player));
    window.location = "matching_full.html";
}

// get the information out of JSON
function playerInfo()
{
    var playerInformation = localStorage.getItem("playerInfo");
    player = JSON.parse(playerInformation);
    console.log(player.firstname);

}
