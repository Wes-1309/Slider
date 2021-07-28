//VARIÁVEIS

let thumbnails = document.getElementsByClassName("thumbnail");
let slider = document.getElementById("slider");
let buttonRight = document.getElementById("slide-right");
let buttonLeft = document.getElementById("slide-left");

//Eventos

buttonLeft.addEventListener('click', () => { //Esse evento faz com que o slider volte 125px para a esquerda
    slider.scrollLeft -= 125;
})

buttonRight.addEventListener('click', () => { //Esse evento faz com que o slider volter 125 px para a direita
    slider.scrollLeft +=125;
})

//Evento para calcular o tamnho do slider versus o tamanho do container
const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

function autoPlay(){
    if(slider.scrollLeft > (maxScrollLeft - 1)){
        slider.scrollLeft -= maxScrollLeft;
    }else{
        slider.scrollLeft += 1;
    }
}

let play = setInterval(autoPlay, 30);

//PAUSE O SLIDE NO HOVER

for (let i=0; i < thumbnails.length; i++){
    thumbnails[i].addEventListener('mouseover', () => {
        clearInterval(play);
    })
    thumbnails[i].addEventListener('mouseout', () => {
        return play = setInterval(autoPlay, 30);
    })
}
