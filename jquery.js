var playing = false;
var score;
var trialsleft;
var step;
var action; //set intrevel
var fruits = ['apple', 'banana', 'cherries', 'grapes', 'mango', 'orange', 'peach', 'pear', 'watermelon'];

$(function(){
  //click on start reset button
  $("#startreset").click(function(){
      
    //we are playing
    if(playing == true){
      
        //reload page
        
      location.reload();  
    }else{
      //we are not playing
      playing = true; //game initiatd

      //set score to 0
      score = 0;  //set score to 0
      $("#scorevalue").html(score);

      //show trialsleft
      $("#trialsleft").show();
      trialsleft = 3;
      addHeart();
        
        $("#gameOver").hide();
        
    //change button text to reset game
        
        $("#startreset").html("Reset Game");
        
        // start sending fruits
        startAction();
    }
  });

$("#fruit1").mouseover(function(){
    score++;
    $("#scorevalue").html(score); //update score
    //document.getElementById("slicesound").play();
    $("#slicesound")[0].play(); //play sound
    
    //stop fruit
    clearInterval(action); 
    
    //hide fruit
    $("#fruit1").hide("explode", 500); // slice frit
    
    //send new fruit
    setTimeout(startAction, 500); 
});
// slice a Fruit
      //play sound
      //explode fruit

//function
function addHeart(){
    $("#trialsleft").empty();
    for(i = 0; i < trialsleft; i++){
        $("#trialsleft").append('<img src = "images/heart.png" class = "life">');
      }
}


//start sending fruits

function startAction(){
    $("#fruit1").show();
    chooseFruit(); //choose a random friut
    $("#fruit1").css({'left' : Math.round(550*Math.random()), 'top' : -50});
        //random posistion
    
    
        //generate random 
         step = 1+ Math.round(5*Math.random()); //changing step  
        
        //move fruit down by one step every 10ms
        action = setInterval(function(){
            
            $("#fruit1").css('top' , $("#fruit1").position().top + step ); //move fruit by one step
            
            //check if the fruit is too low
            if($("#fruit1").position().top > $("#fruitscontainer").height()){
                
                // check trialsleft
                if(trialsleft > 1){
                    //generate a fruit
                     $("#fruit1").show();
    chooseFruit(); //choose a random friut
    $("#fruit1").css({'left' : Math.round(550*Math.random()), 'top' : -50});
        //random posistion
    
    
        //generate random 
         step = 1+ Math.round(5*Math.random()); //changing step  
                    
                    //reduce live bye one
                    trialsleft --;
                    
                    //populate live box
                    addHeart();
                      
                }else{
                    //game over
                    playing = false; //not playinh any more
                    $("#startreset").html("Start Game"); //change button name
                    $("#gameOver").show();
                    $("#gameOver").html('<p>Game Over!</p><p>Your score is '+ score +'</p>');
                    $("#trialsleft").hide();
                    stopAction();
                    
                }
            }
            
        },10);
    
    
    
    
}

// generate a random fruit

function chooseFruit(){
    $("#fruit1").attr('src' , 'images/' + fruits[Math.round(8*Math.random())] +'.png');

}


function stopAction(){
    clearInterval(action);
    $("#fruit1").hide();
    
}
    
});