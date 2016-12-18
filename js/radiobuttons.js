/**
 * Created by itc_user1 on 12/14/2016.
 */
var  answerCheck = function(){

    var userAnswer = document.getElementsByClassName("option");
    for( var i=0;i<userAnswer.length;i++){
        if(userAnswer[i].checked){
            score+=parseInt(userAnswer[i].value);
        }
    }
    console.log(score);


};