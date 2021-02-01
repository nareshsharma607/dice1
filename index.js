var randomNum1=Math.floor(Math.random()*6)+1;//1-6
var randomImg="dice"+randomNum1+".png";
var randomImgSrc="images/" + randomImg;

var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImgSrc);

 var randomNum2=Math.floor(Math.random()*6)+1;
 var randomImg2="dice"+randomNum2+".png";
 var randomImgSrc2="images/" + randomImg2;

 var image2= document.querySelectorAll("img")[1];
 image2.setAttribute("src",randomImgSrc2);


 if(randomNum1 > randomNum2){
   document.querySelector("h1").innerHTML="🚩player 1 wins"
 }
 else if(randomNum1 < randomNum2){
   document.querySelector("h1").innerHTML="🚩player 2 wins"
 }
 if(randomNum1 === randomNum2){
   document.querySelector("h1").innerHTML="Draw"
 }
