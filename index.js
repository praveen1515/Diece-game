//FIRST dice

var number=Math.floor(Math.random()*6)+1;
var randomSource= "images/dice" + number + ".png";
var image1=document.querySelectorAll("img")[0];
     image1.setAttribute("src", randomSource);

//    second dice

var number2=Math.floor(Math.random()*6)+1;
var randomSource2="images/dice" + number2 +".png";
document.querySelectorAll("img")[1].setAttribute("src",randomSource2);

//dice game

  if(randomSource > randomSource2){
    document.querySelector("h1").innerHTML="🏁Player1 wins";

  }
  else if(randomSource===randomSource2){
    document.querySelector("h1").innerHTML="😶Draw";
  }
  else{
    document.querySelector("h1").innerHTML="🏁Player2 wins";
  }
