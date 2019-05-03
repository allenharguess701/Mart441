

var shapeArray = new Array();

class Images {
    constructor(selector, imagePath) {
        this.selector = selector;
        this.imagePath = imagePath;
    }

    get theImageSelector() {
        return this.selector;
    }

    get theImagePath() {
        return this.imagePath;
    }
}

function setUpArray() {
    var image1 = new Images("#shape", "images/dune.jpg");
    var image2 = new Images("#shape", "images/conan.jpg");
    var image3 = new Images("#shape", "images/babymetal.png");
    var image4 = new Images("#shape", "images/warface.jpg");
    var image5 = new Images("#shape", "images/foamy.gif");
    shapeArray.push(image1);
    shapeArray.push(image2);
    shapeArray.push(image3);
    shapeArray.push(image4);
}

function getRandomIndex(){return Math.floor(Math.random() * 4);}



// Jquery
$(document).ready(function() {

    $("button").click(function(){
        $(shapeArray[getRandomIndex()].theImageSelector).attr("src", shapeArray[getRandomIndex()].theImagePath).fadeIn("slow").fadeOut("slow");
    });

});

function animateText() {
    for (var i = 0; i < 20; i++){
    $("#p1").fadeOut("slow").animate({left:600}).animate({top:10}).fadeIn("slow").animate({left:500}).animate({top:200}).animate({left:10}).animate({top:350}).animate({left:10}).animate({top:10});
    $("#p2").animate({left:600}).animate({top:10}).animate({left:400}).animate({top:300}).animate({left:10}).animate({top:400}).animate({left:10}).animate({top:10});
    $("#p3").animate({left:10}).animate({top:25}).animate({left:500}).animate({top:25}).animate({left:500}).animate({top:300}).animate({left:10}).animate({top:400}).animate({left:10}).animate({top:25});
  
   }

}

class Squares {
    constructor (width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
}

function animatesquares(){ for (var h = 0; h < 20; h++) {   
    
	$("#square1").animate({top:215}).animate({left:110}).animate({top:40}).animate({left:210}).fadeOut().animate({top:40}).fadeIn().animate({left:110}).animate({top:215}).animate({top:215}).animate({left:110}).animate({top:40}).animate({left:210}).fadeOut().animate({top:40}).fadeIn().animate({left:10}).animate({top:315});
	$("#square2").animate({top:240}).animate({left:440}).animate({top:190}).animate({left:540}).fadeOut().animate({top:190}).fadeIn().animate({left:440}).animate({top:240}).animate({top:240}).animate({left:440}).animate({top:190}).animate({left:540}).fadeOut().animate({top:990}).fadeIn().animate({left:40}).animate({top:440});
	$("#square3").animate({left:110}).animate({top:215}).animate({left:50}).animate({top:140}).fadeOut().animate({left:50}).fadeIn().animate({top:215}).animate({left:110}).animate({left:110}).animate({top:215}).animate({left:50}).animate({top:140}).fadeOut().animate({left:50}).fadeIn().animate({top:15}).animate({left:810});
	$("#square4").animate({left:110}).animate({top:385}).animate({left:400}).animate({top:475}).fadeOut().animate({left:400}).fadeIn().animate({top:385}).animate({left:110}).animate({left:110}).animate({top:385}).animate({left:400}).animate({top:475}).fadeOut().animate({left:900}).fadeIn().animate({top:585}).animate({left:10});
    $("#square5").animate({top:475}).animate({left:360}).animate({top:525}).animate({left:460}).fadeOut().animate({top:525}).fadeIn().animate({left:360}).animate({top:475}).animate({top:475}).animate({left:360}).animate({top:525}).animate({left:460}).fadeOut().animate({top:525}).fadeIn().animate({left:860}).animate({top:75});
    $("#square6").animate({top:450}).animate({left:110}).animate({top:525}).animate({left:210}).fadeOut().animate({top:525}).fadeIn().animate({left:110}).animate({top:450}).animate({top:450}).animate({left:110}).animate({top:525}).animate({left:210}).fadeOut().animate({top:525}).fadeIn().animate({left:810}).animate({top:50});

    }

}

