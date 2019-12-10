window.onload = function () {

    let theScore = 0;

    let randomBox;
    let rapper;
    let paused = false;

    let audioWin = new this.Audio(
        './sounds/Yeah-Boy.mp3');

    function showTheRapper() {

        if(!paused) {
            rapperUpdate();
            rapperImg1.remove();

            let boxes = document.getElementsByClassName('col');
            randomBox = boxes[Math.floor(Math.random() * boxes.length)];

            rapperImg2.remove();
            randomBox.append(rapperImg1);
        }

        let randomNumWithGlobalScope = (Math.floor(Math.random() * 4000));
        setTimeout(showTheRapper, randomNumWithGlobalScope);
    }

    showTheRapper();


    rapperImg1.onclick = function () {

        paused = true;

        // resume the  game...
        setTimeout(function() {
            if(gameover() === false) {
                paused = false;
                document.getElementById("score").style.color = 'white';
            }
        }, 2000);

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

    function updateScore() {
        document.getElementById('score').innerHTML = "Score: " + theScore;
        checkStatus();
    }

    function gameover() {
        return theScore <= 0 || theScore >= 100;
    }

    function checkStatus() {
        if (theScore <= 0) {
            document.getElementById("score").style.color = 'red';
            document.getElementById('score').innerHTML = "YOU WACK! CULTURE UP!";
        }

        if (theScore >= 100) {
            audioWin.play();
            document.getElementById("score").style.color = 'green';
            document.getElementById('score').innerHTML = "KEEP IT REAL!!!";
        }
    }

}
