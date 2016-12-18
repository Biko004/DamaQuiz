var score = 0;
//Radio button function
var  answerCheck = function(){

    var userAnswer = document.getElementsByClassName("option");
    for( var i=0;i<userAnswer.length;i++){
        if(userAnswer[i].checked){
            score+=parseInt(userAnswer[i].value);
        }
    }
    console.log(score);


};

//Dropdown function
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

//Pick a number function
var sliderCheck = function(){

    var userChoice = document.getElementById("numbers").value;
    score += parseInt(userChoice);

    console.log(score);
};


// Hide and show
function welcomeIntro() {
    document.getElementById("one").style.display = 'block';
    document.getElementById("intro").style.display = 'none';
}

function hideAndShow() {
    if ($('input[name=radio]:checked').length > 0) {
        document.getElementById("two").style.display = 'block';
        document.getElementById("one").style.display = 'none';
    }
    else{
        alert("Please choose your answer");
    }
}
function hideAndShow2(){
    var tryagain = document.getElementById("dropdown");
    var userChoice = tryagain.value;
    if(userChoice === "select"){
    }
    else{
        document.getElementById("three").style.display = 'block';
        document.getElementById("two").style.display = 'none';
    }

}
function hideAndShow3(){
    // document.getElementById("four").style.display = 'block';
    // document.getElementById("three").style.display = 'none';
    var userChoice = document.getElementById("numbers").value;

    if(userChoice>0){
        document.getElementById("four").style.display = 'block';
        document.getElementById("three").style.display = 'none';
    }
    else{
        alert("Please choose your answer");
    }


}

function hideAndShow4(){
    document.getElementById("five").style.display = 'block';
    document.getElementById("four").style.display = 'none';
}

function hideAndShow5(){
    if(score<7){
        document.getElementById("loser").style.display = 'block';
        document.getElementById("five").style.display = 'none'
    }

    else if(score>=7 && score<=16){
        document.getElementById("midwin").style.display = 'block';
        document.getElementById("five").style.display = 'none';
    }

    else if(score>16){
        document.getElementById("winner").style.display = 'block';
        document.getElementById("five").style.display = 'none';
    }
alert("Your score is " + score)
}
