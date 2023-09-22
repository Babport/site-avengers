let imagemDaEstrada;
let imagemDoAtor;
let imagemUltron;
let imagemUltron2;
let imagemUltron3;
let imagemUltron4;

let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
  imagemDaEstrada = loadImage("imagens/fundo.png");
  imagemDoAtor = loadImage("imagens/wanda.png");
  imagemUltron = loadImage("imagens/ultron.png");
  imagemUltron2 = loadImage("imagens/ultron2.png");
  imagemUltron3 = loadImage("imagens/ultron3.png"); 
  imagemUltron4 = loadImage("imagens/ultron4.png");
  imagemUltrons = [imagemUltron, imagemUltron2, imagemUltron3, imagemUltron4]
 
  somDaTrilha = loadSound("sons/musica.mp3");
  somDaColisao = loadSound("sons/colisao.mp3");
  somDoPonto = loadSound("sons/ponto.mp3");
}