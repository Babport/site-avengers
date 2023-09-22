function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
background(imagemDaEstrada);
mostraAtor();
mostraUltron();
movimentaUltron();
movimentaAtor();
voltaPosicaoInicialDoUltron();
verificaColisao();
incluiPontos();
marcaPonto();
}
  
