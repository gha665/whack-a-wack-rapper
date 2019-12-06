window.onload = function () {







  // let explosion = document.createElement('img');
  // explosion.setAttribute('src', "theexplosion.gif");
  // explosion.style.width = "50px";

  // let theScore = 20;

  let didTheMoleGetWacked = true;

  let rapperImg = new this.Image();
  rapperImg.src = rappers[index];


  // let mole = document.createElement('div');
  // mole.classList.add('mole');


  let randomBox;
  let rapper;


  function sendTheMole() {


    // if (!didTheMoleGetWacked) {
    //   theScore -= 10;
    // }
    // updateScore();


    let randomNumWithGlobalScope = (Math.floor(Math.random() * 3000));

    if (randomNumWithGlobalScope > 2500 || randomNumWithGlobalScope < 250) {
      setTimeout(sendTheMole, randomNumWithGlobalScope)
      return;
    }

    didTheMoleGetWacked = false; 


    let boxes = document.getElementsByClassName('col');
    randomBox = boxes[Math.floor(Math.random() * boxes.length)];

    let index = Math.floor(Math.random() * rappers.length);
    rapper = document.createElement('img');
    rapper.setAttribute('src', rappers[index].src1);
    rapper.setAttribute('class', 'rapper');
    rapper.style.width = "150px";

    // rapper.remove();

    // explosion.remove();
    randomBox.append(rapper);


    // setTimeout(sendTheMole, randomNumWithGlobalScope)s
  }

  sendTheMole();


  console.log(document.getElementById('game-board'));



  rapper.onclick = function () {
    // theScore += 10;
    // updateScore();
    rapper.remove();

    didTheMoleGetWacked = true;
    randomBox.append(explosion);

    // let sound = document.getElementById('explode-sound')
    // if (sound.paused) {
    //   sound.play();
    // } else {
    //   sound.currentTime = 0
    // }



  }



  // function updateScore() {
  //   document.getElementById('score').innerHTML = "Score: " + theScore;
  //   // checkStatus();
  // }



  // function checkStatus() {
  //   if (theScore < 0) {
  //     alert('you lose');
  //   }

  //   if (theScore > 100) {
  //     alert('you win');
  //   }

} // end window onload