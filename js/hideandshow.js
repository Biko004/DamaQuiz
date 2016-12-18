function welcomeIntro() {
    document.getElementById("one").style.display = 'block';
    document.getElementById("intro").style.display = 'none';
}

function hideAndShow() {
    document.getElementById("two").style.display = 'block';
    document.getElementById("one").style.display = 'none';
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

        document.getElementById("four").style.display = 'block';
        document.getElementById("three").style.display = 'none';

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