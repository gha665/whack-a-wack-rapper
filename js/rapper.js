let randomIndex = Math.floor(Math.random() * rappers.length);

const rapperImg1 = new Image();
const rapperImg2 = new Image();

//function for update a rapper's image
function rapperUpdate() {
    randomIndex = Math.floor(Math.random() * rappers.length);

    //rapper before the click
    rapperImg1.src = rappers[randomIndex].src1;
    rapperImg1.classList.add('rapper');


    //rapper after the click
    rapperImg2.src = rappers[randomIndex].src2;
    rapperImg2.classList.add('rapper');

}

