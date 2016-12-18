/**
 * Created by itc_user1 on 12/14/2016.
 */
var  answerCheckDropDown = function(){

    var userAnswer = document.getElementById("dropdown");
    var answerValue = userAnswer.value;
    if(answerValue == "select"){
        alert("Please select your answer");
    }
    else if(parseInt(answerValue) == "1"){
        score+= 1;
    }
    else if(parseInt(answerValue) == "2"){
        score+= 2;
    }
    else if(parseInt(answerValue) == "3"){
        score+= 3;
    }
    else if(parseInt(answerValue) == "4"){
        score+= 4;
    }
    console.log(score);

};