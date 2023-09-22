let xUltrons = [600, 600, 600, 600, 600, 600];
let yUltrons = [40, 96, 150, 210, 270, 318];
let velocidadeUltrons = [2, 2.5, 3.2, 5, 3.3, 2.3];
let comprimentoUltron = 50;
let alturaUltron = 40;

function mostraUltron(){
  for (let i = 0; i < imagemUltrons.length; i++){
    image(imagemUltrons[i], xUltrons[i], yUltrons[i], comprimentoUltron, alturaUltron);
  }
}

function movimentaUltron(){
  for (let i = 0; i < imagemUltrons.length; i++){
    xUltrons[i] -= velocidadeUltrons[i];
  }
}

function voltaPosicaoInicialDoUltron(){
  for (let i = 0; i < imagemUltrons.length; i++){
    if (passouTodaATela(xUltrons[i])){
      xUltrons[i] = 600;
    }
  }
}

function passouTodaATela(xUltron){
  return xUltron < - 50;
}