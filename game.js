var gamePattern=[];
var userClickedPatern =[];
var buttonColor=["red","blue","green","yellow"];
var count=false;
var level=0;


$(document).keypress(function(){
if(!count){
  $("h1").text("Level  " + level);
  nextSequence();
  count=true;
}

});


$(".btn").click(function(){
  var userChosenColor=$(this).attr("id");
  userClickedPatern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPatern.length-1);
});

function nextSequence()
{userClickedPatern=[];
  level++;
$("h1").text("Level  "+level);
  var randomNumber=Math.floor(Math.random()*4);
  var randomChosenColor=buttonColor[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
}


function playSound(name)
{
var a=new Audio("sounds/"+name+".mp3");
a.play();
}


function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel)
{if(userClickedPatern[currentLevel]===gamePattern[currentLevel])
  {console.log("success");
      if(userClickedPatern.length===gamePattern.length)
      {
      setTimeout(function () {
        nextSequence();
      }, 1000);}}

      else
      {console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
  }}

function startOver()
{
  level=0;
  gamePattern=[];
  count=false;
}
