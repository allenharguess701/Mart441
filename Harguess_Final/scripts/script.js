    function getChoice1()
    {
        var myChoice = document.getElementById("choice").value;
        var myQuestion = document.getElementById("question");
        if(myChoice === "Agree")
        {
            document.getElementById("choice").style.display="none";
            document.getElementById("btnSubmit").style.display="none";

            document.getElementById("choice2").style.display="block";
            document.getElementById("btnSubmit2").style.display="block";

            myQuestion.innerHTML = "You follow the Lady Jessica down several halls through Castle Caladan. The lengthy trip causes you to reconsider your decision.<br><br>1. Continue on to the meeting. <br>2. Turn around and return to your room. <br>3. Slip off and away from you mother down a long dark corridor. <br>";
        }
        else if(myChoice === "Stay")
        {
            document.getElementById("choice").style.display="none";
            document.getElementById("btnSubmit").style.display="none";

            document.getElementById("choice2a").style.display="block";
            document.getElementById("btnSubmit2a").style.display="block";

            myQuestion.innerHTML = "You sit alone sulking. Several hours have passed when a loud knocking sounds on your door is followed by a female voice. You do not recognize it although it sounds oddly familiar. <br><br>1. Answer the door. <br>2. Stay silent and wait for the person to go away. <br>3. Dart over to the window and make your escape, jumping to the ground below. <br>";
        }
        else if(myChoice === "Leave")
        {
            document.getElementById("choice").style.display="none";
            document.getElementById("btnSubmit").style.display="none";

            document.getElementById("choice2b").style.display="block";
            document.getElementById("btnSubmit2b").style.display="block";

            myQuestion.innerHTML = "You leave the room and dash down the corridor hoping to lose your mother in the maze of adjoining hallways. You remember three lefts and a right or was it three rights and a left. <br><br>1. Three lefts and a right ? <br>2. Three rights and a left ? <br>";
        }
        else
        {
            myQuestion.innerHTML = "Invalid answer";
        }
    }

function getChoice2()
    {
        var action1 = document.getElementById("choice2").value;
        var myQuestion = document.getElementById("question");

        if(action1 === "Continue")
        {
          document.getElementById("choice2").style.display="none";
          document.getElementById("btnSubmit2").style.display="none";

          document.getElementById("choice3").style.display="block";
          document.getElementById("btnSubmit3").style.display="block";

          myQuestion.innerHTML = "You enter a large well-lit room. In it you see a haggard very old woman standing next to a large ornate window resting her hand on a small polished black a box sitting on a table. As you approach the woman speaks to you. <br><br>come forward young Atreidies. Let me have a better look at you. <br><br>1. Do as you are told. <br>2. Refuse: Stand your ground. <br> 3. Refuse: Run away.<br>";
        }
		else if(action1 === "Turn Around")
        {
          document.getElementById("choice2").style.display="none";
          document.getElementById("btnSubmit2").style.display="none";

          document.getElementById("choice2a").style.display="block";
          document.getElementById("btnSubmit2a").style.display="block";
		  
		myQuestion.innerHTML = "You sit alone sulking. Several hours have passed when a loud knocking sounds on your door is followed by a female voice. You do not recognize it although it sounds oddly familiar. <br><br>1. Answer the door. <br>2. Stay silent and wait for the person to go away. <br>3. Dart over to the window and make your escape, jumping to the ground below. <br>";
        }
		else if(action1 === "Sneak Off")
        {
          document.getElementById("choice2").style.display="none";
          document.getElementById("btnSubmit2").style.display="none";

          myQuestion.innerHTML = "The dark of the dimly lit corridor overtakes you, so your paces slows, and you fumble around to find your way. In front of you; you hear a click, then a sharp pain hits you in the chest. You recognize the sound of the needle gun but it's too late. The poison is already taking effect. The assassin sent by house Harkonnen has completed his mission. You Died!";
        }
        else
        {
            myQuestion.innerHTML = "Invalid answer";
        }
    }

function getChoice2a()
    {
        var action2 = document.getElementById("choice2a").value;
        var myQuestion = document.getElementById("question");

        if(action2 === "Answer")
        {
          document.getElementById("choice2a").style.display="none";
          document.getElementById("btnSubmit2a").style.display="none";

          document.getElementById("choice3").style.display="block";
          document.getElementById("btnSubmit3").style.display="block";

         myQuestion.innerHTML = "You answer the door. A haggard old woman dressed in long flowing black robes pushes past you. She barks at you in an angry voice as she sets a polished black box on a nearby table.come here young Atreidies. Let me have a better look at you. <br><br>1. Do as you are told <br>2. Refuse: Stand your ground <br>3. Refuse: Run away. <br>";
        }
		else if(action2 === "Stay Silent")
        {
          document.getElementById("choice2a").style.display="none";
          document.getElementById("btnSubmit2a").style.display="none";

          document.getElementById("choice3").style.display="block";
          document.getElementById("btnSubmit3").style.display="block";
		  
          myQuestion.innerHTML = "After a short while and several knocks later, the door burst open and a haggard old woman dressed in long flowing black robes glides into the room. She barks at you in an angry voice as she sets a polished black box on a nearby table. <br><br>come here young Atreides. Let me have a better look at you.<br><br>1. Do as you are told <br>2. Refuse: Stand your ground <br>3. Refuse: Run away. <br>";
        }
		else if(action2 === "Escape")
        {
          document.getElementById("choice2a").style.display="none";
          document.getElementById("btnSubmit2a").style.display="none";

          document.getElementById("choice4").style.display="block";
          document.getElementById("btnSubmit4").style.display="block";
		  
          myQuestion.innerHTML = "As you land on the hard ground a full 30ft below you hear a loud crack as your ankle buckles. It's obviously broken. Several nearby works see you hit and rush to your aid. Minutes later you're in the royal hospital being treated by doctor Wellington Yueh the Suk doctor charged with your family's care. He's not happy. Thufir Hawat, Mentat and Master of Assassins to House Atreides and your weapons master Gurney Halleck are standing nearby. <br><br>Thufir demands an explanation. <br><br>1. Tell him the truth <br>2. Lie to him and say you were just goofing off. <br>3. Stay silent. <br>";
        }
        else
        {
            myQuestion.innerHTML = "Invalid answer";
        }
    }
	
function getChoice2b()
    {
        var action3 = document.getElementById("choice2b").value;
        var myQuestion = document.getElementById("question");

        if(action3 === "Three lefts and a right")
        {
          document.getElementById("choice2b").style.display="none";
          document.getElementById("btnSubmit2b").style.display="none";

          myQuestion.innerHTML = "Story Arc number 2 will arrive soon.";
        }
		else if(action3 === "Three rights and a left")
        {
          document.getElementById("choice2").style.display="none";
          document.getElementById("btnSubmit2").style.display="none";
		  
          myQuestion.innerHTML = "Story Arc number 2 will arrive soon.";
        }
        else
        {
            myQuestion.innerHTML = "Invalid answer";
        }
    }

function getChoice3()
    {
        var action4 = document.getElementById("choice3").value;
        var myQuestion = document.getElementById("question");

        if(action4 === "Comply")
        {
          document.getElementById("choice3").style.display="none";
          document.getElementById("btnSubmit3").style.display="none";

          document.getElementById("choice5").style.display="block";
          document.getElementById("btnSubmit5").style.display="block";

         myQuestion.innerHTML = "You move forward to give her a better look. You ask the Reverend Mother why she wanted to see you. She answers in a firm but calm voice. Why to test you to see if you are human. Young Atreides. <br>She motions to you, then motions toward the strange polished black box sitting on the small table. Come and see. She gestures. <br><br>Four steps later and you are standing in front of her next to the box. The Reverend Mother standing directly behind you.  <br><br>put your hand in the box. Young Atreides. She orders. <br><br>1. Do as you are told <br>2. Refuse: Turn around to face the Reverend <br>";
        }
		else if(action4 === "Stand Your Ground")
        {
          document.getElementById("choice3").style.display="none";
          document.getElementById("btnSubmit3").style.display="none";

          document.getElementById("choice5a").style.display="block";
          document.getElementById("btnSubmit5a").style.display="block";
		  
          myQuestion.innerHTML = "You refuse but the Reverend Mother abruptly takes a several steps forward. Using The Voice she commands you once again. You feel compelled to obey. <br><br>1. Refuse: Struggle against the voice. <br>2. Refuse: Do nothing. <br>3. Give into the compelling want to obey. <br>";
        }
		else if(action4 === "Run Away")
        {
          document.getElementById("choice3").style.display="none";
          document.getElementById("btnSubmit3").style.display="none";

          document.getElementById("choice5a").style.display="block";
          document.getElementById("btnSubmit5a").style.display="block";
		  
           myQuestion.innerHTML = "You refuse but the Reverend Mother abruptly takes a several steps forward. Using The Voice she commands you once again. You feel compelled to obey. <br><br>1. Refuse: Struggle against the voice. <br>2. Refuse: Do nothing. <br>3. Give into the compelling want to obey. <br>";
        }
        else
        {
            myQuestion.innerHTML = "Invalid answer";
        }
    }
function getChoice3b()
    {
        var action4 = document.getElementById("choice3b").value;
        var myQuestion = document.getElementById("question");

        if(action4 === "Comply")
        {
          document.getElementById("choice3b").style.display="none";
          document.getElementById("btnSubmit3b").style.display="none";

          document.getElementById("choice5").style.display="block";
          document.getElementById("btnSubmit5").style.display="block";

         myQuestion.innerHTML = "You move forward to give her a better look. You ask the Reverend Mother why she wanted to see you. She answers in a firm but calm voice. Why to test you to see if you are human. Young Atreides. <br>She motions to you, then motions toward the strange polished black box sitting on the small table. Come and see. She gestures. <br><br>Four steps later and you are standing in front of her next to the box. The Reverend Mother standing directly behind you.  <br><br>put your hand in the box. Young Atreides. She orders. <br><br>1. Do as you are told <br>2. Refuse: Turn around to face the Reverend <br>";
        }
		else if(action4 === "Stand Your Ground")
        {
          document.getElementById("choice3b").style.display="none";
          document.getElementById("btnSubmit3b").style.display="none";

          document.getElementById("choice5a").style.display="block";
          document.getElementById("btnSubmit5a").style.display="block";
		  
          myQuestion.innerHTML = "You refuse but the Reverend Mother abruptly takes a several steps forward. Using The Voice she commands you once again. You feel compelled to obey. <br><br>1. Refuse: Struggle against the voice. <br>2. Refuse: Do nothing. <br>3. Give into the compelling want to obey. <br>";
        }
		else if(action4 === "Run Away")
        {
          document.getElementById("choice3b").style.display="none";
          document.getElementById("btnSubmit3b").style.display="none";

          document.getElementById("choice5a").style.display="block";
          document.getElementById("btnSubmit5a").style.display="block";
		  
           myQuestion.innerHTML = "You refuse but the Reverend Mother abruptly takes a several steps forward. Using The Voice she commands you once again. You feel compelled to obey. <br><br>1. Refuse: Struggle against the voice. <br>2. Refuse: Do nothing. <br>3. Give into the compelling want to obey. <br>";
        }
        else
        {
            myQuestion.innerHTML = "Invalid answer";
        }
    }
	
function getChoice3c()
    {
        var action4 = document.getElementById("choice3c").value;
        var myQuestion = document.getElementById("question");

        if(action4 === "Comply")
        {
          document.getElementById("choice3c").style.display="none";
          document.getElementById("btnSubmit3c").style.display="none";

          document.getElementById("choice5").style.display="block";
          document.getElementById("btnSubmit5").style.display="block";

         myQuestion.innerHTML = "You move forward to give her a better look. You ask the Reverend Mother why she wanted to see you. She answers in a firm but calm voice. Why to test you to see if you are human. Young Atreides. <br>She motions to you, then motions toward the strange polished black box sitting on the small table. Come and see. She gestures. <br><br>Four steps later and you are standing in front of her next to the box. The Reverend Mother standing directly behind you.  <br><br>put your hand in the box. Young Atreides. She orders. <br><br>1. Do as you are told <br>2. Refuse: Turn around to face the Reverend <br>";
        }
		else if(action4 === "Stand Your Ground")
        {
          document.getElementById("choice3c").style.display="none";
          document.getElementById("btnSubmit3c").style.display="none";

          document.getElementById("choice5a").style.display="block";
          document.getElementById("btnSubmit5a").style.display="block";
		  
          myQuestion.innerHTML = "You refuse but the Reverend Mother abruptly takes a several steps forward. Using The Voice she commands you once again. You feel compelled to obey. <br><br>1. Refuse: Struggle against the voice. <br>2. Refuse: Do nothing. <br>3. Give into the compelling want to obey. <br>";
        }
		else if(action4 === "Run Away")
        {
          document.getElementById("choice3c").style.display="none";
          document.getElementById("btnSubmit3c").style.display="none";

          document.getElementById("choice5a").style.display="block";
          document.getElementById("btnSubmit5a").style.display="block";
		  
           myQuestion.innerHTML = "You refuse but the Reverend Mother abruptly takes a several steps forward. Using The Voice she commands you once again. You feel compelled to obey. <br><br>1. Refuse: Struggle against the voice. <br>2. Refuse: Do nothing. <br>3. Give into the compelling want to obey. <br>";
        }
        else
        {
            myQuestion.innerHTML = "Invalid answer";
        }
    }
	
function getChoice4()
    {
        var action5 = document.getElementById("choice4").value;
        var myQuestion = document.getElementById("question");

        if(action5 === "Tell The Truth")
        {
          document.getElementById("choice2a").style.display="none";
          document.getElementById("btnSubmit2a").style.display="none";

         myQuestion.innerHTML = "Story Arc number 3 will arrive soon.";
        }
		else if(action5 === "Lie")
        {
          document.getElementById("choice2a").style.display="none";
          document.getElementById("btnSubmit2a").style.display="none";
		  
          myQuestion.innerHTML = "Story Arc number 3 will arrive soon.";
        }
		else if(action5 === "Stay Silent")
        {
          document.getElementById("choice2a").style.display="none";
          document.getElementById("btnSubmit2a").style.display="none";
		  
           myQuestion.innerHTML = "Story Arc number 3 will arrive soon.";
        }
        else
        {
            myQuestion.innerHTML = "Invalid answer";
        }
    }
	
function getChoice5()
    {
        var action6 = document.getElementById("choice5").value;
        var myQuestion = document.getElementById("question");

        if(action6 === "Do as you are told")
        {
          document.getElementById("choice5").style.display="none";
          document.getElementById("btnSubmit5").style.display="none";

          document.getElementById("choice7").style.display="block";
          document.getElementById("btnSubmit7").style.display="block";

         myQuestion.innerHTML = "What is in the box? You ask as you place your hand inside of it. The Bene Gesserit is quick to respond. Her low voice a velvet hum. <br><br>Pain. She whispers. <br><br>You instinctively jerk your hand away but in that same instance she reacts quickly putting her finger against your throat. A small needle protrudes from a dull the metal fingertip she is wearing. You feel its slight prick and you freeze. <br><br>Keep your hand in the box. Young Atreides, or you die. I hold against your neck the gom-ja-bar. Its poison only kills animals. <br><br>1. Keep your hand in the box. <br>2. Call her Bluff. She'd never kill a Dukes son. <br>";
        }
		else if(action6 === "Turn Around")
        {
          document.getElementById("choice2a").style.display="none";
          document.getElementById("btnSubmit2a").style.display="none";

          document.getElementById("choice7").style.display="block";
          document.getElementById("btnSubmit7").style.display="block";
		  
          myQuestion.innerHTML = "You turn to face her, but in that same instance she reacts quickly putting her finger against your throat. A small needle protrudes from a dull the metal fingertip she's wearing. You feel its slight prick and you freeze. <br><br>Put your hand in the box. Young Atreides, or you die. I hold against your neck the gom-ja-bar. Its poison only kills animals. <br><br>You freeze.  What is in the box? You ask. The Bene Gesserit is quick to respond. Her low voice a velvet hum.  Pain. She whispers. <br><br>1. Keep your hand in the box. <br>2. Call her Bluff. She'd never kill a Dukes son. <br>";
        }
        else
        {
            myQuestion.innerHTML = "Invalid answer";
        }
    }
	
function getChoice5a()
    {
        var action7 = document.getElementById("choice5a").value;
        var myQuestion = document.getElementById("question");

        if(action7 === "Refuse: Struggle")
        {
          document.getElementById("choice5a").style.display="none";
          document.getElementById("btnSubmit5a").style.display="none";

          document.getElementById("choice8").style.display="block";
          document.getElementById("btnSubmit8").style.display="block";
		  
         myQuestion.innerHTML = "Your will slowly begin to fail you as you resist her command. Slowly you inch your way forward. Every muscle in your body feels the compulsion. Do you? <br><br>1. Continue to struggle. <br>2. Give into your compulsion. <br>";
        }
		else if(action7 === "Refuse: Do nothing")
        {
          document.getElementById("choice5a").style.display="none";
          document.getElementById("btnSubmit5a").style.display="none";

          document.getElementById("choice5a").style.display="block";
          document.getElementById("btnSubmit5a").style.display="block";
		  		  
          myQuestion.innerHTML = "You are barely able to stand your ground. you feel yourself weakening.<br><br> ";
        }
		else if(action7 === "Give into your compulsion")
        {
          document.getElementById("choice5a").style.display="none";
          document.getElementById("btnSubmit5a").style.display="none";

          document.getElementById("choice5").style.display="block";
          document.getElementById("btnSubmit5").style.display="block";
		  		  
           myQuestion.innerHTML = "You move forward to give her a better look. You ask the Reverend Mother why she wanted to see you. She answers in a firm but calm voice. Why to test you to see if you are human. Young Atreides. <br>She motions to you, then motions toward the strange polished black box sitting on the small table. Come and see. She gestures. <br><br>Four steps later and you are standing in front of her next to the box. The Reverend Mother standing directly behind you.  <br><br>put your hand in the box. Young Atreides. She orders. <br><br>1. Do as you are told <br>2. Refuse: Turn around to face the Reverend <br>";
        }
        else
        {
            myQuestion.innerHTML = "Invalid answer";
        }
    }
	
function getChoice7()
    {
        var action8 = document.getElementById("choice7").value;
        var myQuestion = document.getElementById("question");

        if(action8 === "Keep your hand in the box")
        {
          document.getElementById("choice7").style.display="none";
          document.getElementById("btnSubmit7").style.display="none";

          document.getElementById("choice9").style.display="block";
          document.getElementById("btnSubmit9").style.display="block";
		  
         myQuestion.innerHTML = "First you feel a slight itch, then a tingling sensation. The tingling turns into a burn and after several seconds the burn is intense. The pain become almost unbearable. Do you? <br><br>1. Take your hand from the box. <br>2. Keep you hand in the box and continue to withstand the pain. <br>";
        }
		else if(action8 === "Call her Bluff")
        {
          document.getElementById("choice5a").style.display="none";
          document.getElementById("btnSubmit5a").style.display="none";
		  		  
          myQuestion.innerHTML = "You feel the sting of the gom-ja-bar as she drives the needle into your throat. The fast-acting poison does its job and you collapse. Darkness takes you. You died! <br>";
        }
		else
        {
            myQuestion.innerHTML = "Invalid answer";
        }
    }
	
function getChoice8()
    {
        var action9 = document.getElementById("choice8").value;
        var myQuestion = document.getElementById("question");

        if(action9 === "Continue to struggle")
        {
          document.getElementById("choice8").style.display="none";
          document.getElementById("btnSubmit8").style.display="none";

         myQuestion.innerHTML = "The continued battle of wills continues to wain on you. everything hurts. your heart feels as if it is about to explode. You feel several pricks of pain throughout you arms, legs, and torso as blood vessels begin to burst. Seconds later you heart follows suit and you collapse to the floor. You Died!";
        }
		else if(action9 === "Give into your compulsion")
        {
          document.getElementById("choice8").style.display="none";
          document.getElementById("btnSubmit8").style.display="none";

          document.getElementById("choice5").style.display="block";
          document.getElementById("btnSubmit5").style.display="block";
		  		  		  
           myQuestion.innerHTML = "You move forward to give her a better look. You ask the Reverend Mother why she wanted to see you. She answers in a firm but calm voice. Why to test you to see if you are human. Young Atreides. <br>She motions to you, then motions toward the strange polished black box sitting on the small table. Come and see. She gestures. <br><br>Four steps later and you are standing in front of her next to the box. The Reverend Mother standing directly behind you.  <br><br>put your hand in the box. Young Atreides. She orders. <br><br>1. Do as you are told <br>2. Refuse: Turn around to face the Reverend <br>";
        }
		else
        {
            myQuestion.innerHTML = "Invalid answer";
        }
    }
	
function getChoice9()
    {
        var action10 = document.getElementById("choice9").value;
        var myQuestion = document.getElementById("question");

        if(action10 === "Keep your hand in the box")
        {
          document.getElementById("choice9").style.display="none";
          document.getElementById("btnSubmit9").style.display="none";

          document.getElementById("choice11").style.display="block";
          document.getElementById("btnSubmit11").style.display="block";
		  
         myQuestion.innerHTML = "The pain worsens as your hand continues to burn. You are sure you can feel the flesh crisping, falling from your agonized hand. Do you? <br><br>1 Keep your hand in the box. <br>2. Take your hand from the box. <br>";
        }
		else if(action10 === "Take your hand from the box")
        {
          document.getElementById("choice9").style.display="none";
          document.getElementById("btnSubmit9").style.display="none";
		  		  
          myQuestion.innerHTML = "You feel the sting of the gom-ja-bar as she drives the needle into your throat. The fast-acting poison does its job and you collapse. Darkness takes you. You died! <br>";
        }
		else
        {
            myQuestion.innerHTML = "Invalid answer";
        }
    }
	
function getChoice11()
    {
        var action11 = document.getElementById("choice11").value;
        var myQuestion = document.getElementById("question");

        if(action11 === "Keep your hand in the box")
        {
          document.getElementById("choice11").style.display="none";
          document.getElementById("btnSubmit11").style.display="none";

          document.getElementById("choice12").style.display="block";
          document.getElementById("btnSubmit12").style.display="block";
		  
         myQuestion.innerHTML = "as your hand still burns, you feel the Reverend mother begin to tense and the shake. She is obviously in distress feeling pain even as you do. Do you? <br><br>1 Keep your hand in the box. <br>2. Take your hand from the box. ";
        }
		else if(action11 === "Take your hand from the box")
        {
          document.getElementById("choice11").style.display="none";
          document.getElementById("btnSubmit11").style.display="none";
		  		  
          myQuestion.innerHTML = "You feel the sting of the gom-ja-bar as she plunges the needle deep into your throat. The fast-acting poison does its job and you collapse, twitching on the floor. Darkness takes you. You died! <br>";
        }
		else
        {
            myQuestion.innerHTML = "Invalid answer";
        }
    }
	
function getChoice12()
    {
        var action12 = document.getElementById("choice12").value;
        var myQuestion = document.getElementById("question");

        if(action12 === "Keep your hand in the box")
        {
          document.getElementById("choice12").style.display="none";
          document.getElementById("btnSubmit12").style.display="none";
		  
         myQuestion.innerHTML = "Your pain intensifies but does hers. Then suddenly the ordeal is over. <br><br>Remove your hand from the box. Young Human. <br><br>She tells you as she moves from behind you. You do as you are told. She taps the top of the box and it instantly snaps shut.<br><br><br><center>END OF CHAPTER ONE</CENTER>";
        }
		else if(action11 === "Take your hand from the box")
        {
          document.getElementById("choice11").style.display="none";
          document.getElementById("btnSubmit11").style.display="none";
		  		  
          myQuestion.innerHTML = "You both collapse to the floor as you jerk your hand from the box. you hop up on to your feet but not before you feel the sting of the gom-ja-bar as she plunges the needle into your throat. The fast-acting poison does its job and you collapse. Darkness takes you. You died! <br>";
        }
		else
        {
            myQuestion.innerHTML = "Invalid answer";
        }
    }