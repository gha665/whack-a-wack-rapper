window.onload = function () {

  let theScore = 20;

  let randomBox;
  let rapper;

  let audioWin = new this.Audio(
    './sounds/Yeah-Boy.mp3');

  function showTheRapper() {

    rapperUpdate();
    rapperImg1.remove();

    let randomNumWithGlobalScope = (Math.floor(Math.random() * 4000));

    let boxes = document.getElementsByClassName('col');
    randomBox = boxes[Math.floor(Math.random() * boxes.length)];


    rapperImg2.remove();
    randomBox.append(rapperImg1);

    setTimeout(showTheRapper, randomNumWithGlobalScope);
  }
  showTheRapper();


  rapperImg1.onclick = function () {

    if (rappers[randomIndex].title === 'wack') {
      theScore += 10;
    } else theScore -= 10;

    updateScore();
    rapperImg1.remove();
    randomBox.append(rapperImg2);
  }

  function updateScore() {
    document.getElementById('score').innerHTML = "Score: " + theScore;
    checkStatus();
  }

  function checkStatus() {
    if (theScore <= 0) {
      alert('YOU WACK! CULTURE UP!');
    }

    if (theScore => 100) {
      audioWin.play();
      alert('KEEP IT REAL!!!');
    }
  }

}