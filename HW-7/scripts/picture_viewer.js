var picArray = new Array();
var randnum = Math.floor((Math.random() * 10) + 1);
var pictureurl = ['images\one.jpg', 'images\two.jpg', 'images\three.jpg', 'images\four.jpg', 'images\five.jpg', 'images\six.jpg', 'images\seven.jpg', 'images\eight.jpg', 'images\nine.jpg', 'images\ten.png'];

class Picture
{
  constructor( title, desc, author, date )
    {
      this.title = title;
      this.image = image;
      this.desc = desc;
      this.author = author;
      this.date = date;
    }

    toStringTitle()
    {
        return "Title: " + this.title;    
        
    }
	
    toStringDesc()
    {
        return "Description: " + this.desc;

    }
		   
	toStringAuthor()
    {
        return "Author: " + this.author;

    }

    toStringDate()
    {
        return "Year: " + this.date;

	}
}

function initializeArray(){
	  let one = new Picture("The Alliance", "This is a picture of the leaders of the Alliance Faction.", "Blizard Entertainment", "2018")
	  let two = new Picture("The Horde", "This is a picture of the leaders of the Horde Faction.", "Blizard Entertainment", "2018")
	  let three = new Picture("Good Vs Evil", "The load screen for the game itself featuring the two main protagonists.", "Blizard Entertainment", "2018")
	  let four = new Picture("Alliance Banner", "The Alliance banner created by an unknown artist in 2015.", "Unknown", "2015")
	  let five = new Picture ("Sylvanas Vs Anduin", "This is a picture from the cinematic featuring a clash between the leaders of both factions.", "Vanthromhre", "2018")
	  let six = new Picture("Allied Races", "The new allied races who are available for play once you unlock them.", "Foosh-ball", "2017")
	  let seven = new Picture("Sylvanas", "Lady Sylvanas Windrunner also referred to as the Dark Lady and the Banshee Queen is the Warchief of the Horde and supreme ruler of the Forsaken.", "Blizard Entertainment", "2018")
	  let eight= new Picture("Anduin", "Anduin Llane Wrynn is the King of Stormwind, High King of the Alliance, and commander of all Alliance forces since the death of his father, Varian Wrynn.", "Bubba Hoptep", "2018")
	  let nine = new Picture("Horde Banner", "The Horde banner created by an unknown artist in 2015.", "Unknown", "2015")
	  let ten = new Picture ("Battle for Azeroth Logo", "The Battle for Azeroth Logo.", "Blizard Entertainment", "2017")

	  picArray.push(one);
	  picArray.push(two);
	  picArray.push(three);
	  picArray.push(four);
	  picArray.push(five);
	  picArray.push(six);
	  picArray.push(seven);
	  picArray.push(eight);
	  picArray.push(nine);
	  picArray.push(ten);

	  console.log(one);
	  console.log(two);

}

function accessinfo()
{
    var randnum = Math.floor((Math.random() * 10) + 1);
	
	document.getElementById("picurl").src = pictureurl[randnum];
	console.log(pictureurl[randnum]);
    document.getElementById("title").innerHTML = picArray[randnum].toStringTitle();	    
    document.getElementById("desc").innerHTML = picArray[randnum].toStringDesc();
	document.getElementById("author").innerHTML = picArray[randnum].toStringAuthor();
    document.getElementById("date").innerHTML = picArray[randnum].toStringDate();
}