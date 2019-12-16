document.getElementById('startGame').onclick = () => {



    document.getElementById("game").style.display = "block";
    document.getElementById("start").style.display = "none";


    // // swap out the cursor...
    // document.getElementById("game").style.cursor = "hand"; //url('./images/microphone-1.png'), default;";
    // alert('set custom cursor');

    let theScore = 0;

    let randomBox;

    let paused = false;




    //---------------------sound decoration---------------------------------//
    let audioWin = new Audio('./sounds/Yeah-Boy.mp3');
    let audioLose = new Audio('./sounds/so-damn-tough.mp3');
    let audioPunch = new Audio('./sounds/punch.mp3')
    let audioBackground = new Audio();
    audioBackground.src = './sounds/instrumental.mp3';
    document.querySelector('body').append(audioBackground);
    audioBackground.play();

    // audioBackground.onload = () => {
    //     audioBackground.play();
    // }



    //-----------------------shows rappers' images-------------------------//
    function showTheRapper() {

        if (!paused) {
            rapperUpdate();
            rapperImg1.remove();

            let boxes = document.getElementsByClassName('col');
            randomBox = boxes[Math.floor(Math.random() * boxes.length)];

            rapperImg2.remove();
            randomBox.append(rapperImg1);
        }

        let randomNumWithGlobalScope = (Math.floor(Math.random() * 5000));
        setTimeout(showTheRapper, randomNumWithGlobalScope);
    }
    showTheRapper();



    //-----------------------actions when you click rappers' images---------//
    rapperImg1.onclick = function () {

        audioPunch.play();

        paused = true;

        // resume the  game...
        setTimeout(function () {
            if (gameover() === false) {
                paused = false;
                document.getElementById("score").style.color = 'white';
            }
        }, 1000);

        let scoreColor = 'red';

        if (rappers[randomIndex].title === 'wack') {
            theScore += 10;
            scoreColor = 'green';
        } else theScore -= 10;

        document.getElementById("score").style.color = scoreColor;
        updateScore();
        rapperImg1.remove();
        randomBox.append(rapperImg2);
    }



    //------------------------updates the score-------------------------//
    function updateScore() {
        document.getElementById("score").innerHTML = "$core: " + theScore;
        checkStatus();
    }



    //------------------------ends the game-----------------------------//
    function gameover() {
        return theScore <= 0 || theScore >= 100;
    }



    //------------------------when the game ends------------------------// 
    function checkStatus() {
        if (theScore <= 0) {
            audioBackground.pause();
            audioLose.play();
            document.getElementById("score").style.color = 'red';
            document.getElementById("score").innerHTML = "YOU'RE WACK! CULTURE UP!";
        }

        if (theScore >= 100) {
            audioBackground.pause();
            audioWin.play();
            document.getElementById("score").style.color = 'green';
            document.getElementById("score").innerHTML = "KEEP IT REAL, PLAYA!!!";
        }
    }

}


//------------------------ swap cursor on click -----------------------// 
$('#game').on('mousedown', function (e) {
    $('#game').addClass('cursor-clicked');
});

$('#game').on('mouseup', function (e) {
    $('#game').removeClass('cursor-clicked');
});