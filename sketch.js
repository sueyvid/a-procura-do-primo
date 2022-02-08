var posicao = 1;
var tela = "menu";
var primo = [2,3,5,7,11,13,17,19,23,27];
var dific = 1;
var yCred = 0;
var pag_explic = 1;
var instruc = 0;
var som = true;

var porcent = 0;
var probab = 5;

var xiZona;
var xfZona;
var yiZona;
var yfZona;

var h1 = 32;
var h2 = 24;
var h3 = 15;

var aberto = [1,1,1,1,1,1,1,1,1,1];
var fase = 1;

var pontuacaominima = 0;
var trof = 0;
var pegoubau = 0;
var valordobau = 0;
var xBau = -50, yBau = -50;
var xVida = -50, yVida = -50;
var opacidade = 0;
var time_moeda = 0;
var cont_moeda = 0;
var coin = [ ]
var up, down, left, right;
var direcao = "down";
var cont = 0;
var time = 0;
var errado = false;
var andando = false;
var xPers = 20, yPers = 20, tPers = 2;
var xObj = 0, yObj = 0, tObj = 0;
var xObj2 = 0, yObj2 = 0, tObj2 = 0;
var xObj3 = 0, yObj3 = 0, tObj3 = 0;
var xObj4 = 0, yObj4 = 0, tObj4 = 0;
var rObj = 25, rPers = 30;
var xZona = 100, yZona = 100;
var widthZona = 200, heightZona = 180;

var rodadaTempo = (600+400)/(2*rObj*5);
var rodadaMax = 1; //10
var vida = 1; //3

var aleat = 0;
var pontostotais = 0;
var pontos = 0;
var tempo = 0;
var momento = 0;
var rodada = 0;
var yCong = 500;
var congratulação;

var tMaximo = 11;
var tDist = 9;
var moeda_som;

function preload() {
  Educ = loadImage('assets/Rummenigge.JPG');
  Prog = loadImage('assets/Sueyvid.jpg');
  obj = loadImage('assets/moeda_objeto.png');
  castelo = loadImage('assets/castelo_zona_segura.png');
  coracao = loadImage('assets/coracao.png');
  bau = loadImage('assets/bau.png');
  trofeu = loadImage('assets/trofeu.png');
  Pers_down = loadImage('assets/Warrior_down.png');
  Pers_down[0] = loadImage('assets/Warrior_down_1.png');
  Pers_down[1] = loadImage('assets/Warrior_down.png');
  Pers_down[2] = loadImage('assets/Warrior_down_2.png');
  Pers_down[3] = loadImage('assets/Warrior_down.png');
  Pers_left = loadImage('assets/Warrior_left.png');
  Pers_left[0] = loadImage('assets/Warrior_left_1.png');
  Pers_left[1] = loadImage('assets/Warrior_left.png');
  Pers_left[2] = loadImage('assets/Warrior_left_2.png');
  Pers_left[3] = loadImage('assets/Warrior_left.png');
  Pers_right = loadImage('assets/Warrior_right.png');
  Pers_right[0] = loadImage('assets/Warrior_right_1.png');
  Pers_right[1] = loadImage('assets/Warrior_right.png');
  Pers_right[2] = loadImage('assets/Warrior_right_2.png');
  Pers_right[3] = loadImage('assets/Warrior_right.png');
  Pers_up = loadImage('assets/Warrior_up.png');
  Pers_up[0] = loadImage('assets/Warrior_up_1.png');
  Pers_up[1] = loadImage('assets/Warrior_up.png');
  Pers_up[2] = loadImage('assets/Warrior_up_2.png');
  Pers_up[3] = loadImage('assets/Warrior_up.png');
  coin[0] = loadImage('assets/goldCoin1.png');
  coin[1] = loadImage('assets/goldCoin2.png');
  coin[2] = loadImage('assets/goldCoin3.png');
  coin[3] = loadImage('assets/goldCoin4.png');
  coin[4] = loadImage('assets/goldCoin5.png');
  coin[5] = loadImage('assets/goldCoin6.png');
  coin[6] = loadImage('assets/goldCoin7.png');
  coin[7] = loadImage('assets/goldCoin8.png');
  coin[8] = loadImage('assets/goldCoin9.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
}

function setupjogo() {
  xPers = xZona+widthZona/2;
  yPers = yZona+heightZona/2;
  aleatorio();
  moeda_som = createAudio('assets/moeda.mp3');
  dano_som = createAudio('assets/dano.mp3');
}

function draw() {
  if(tela == "menu"){
    menu();
  }
  if(tela == "int_selecionarfase"){
    if(!aberto[1] && instruc == 0){
      explicacao();
    }
    else{
      tela = "selecionarfase";
    }
  }
  if(tela == "dificuldade"){
    dificuldade();
  }
  if(tela == "configuracoes"){
    configuracoes();
  }
  if(tela == "jogo"){
    jogo();
  }
  if(tela == "int_menu"){
    tela = "menu";
  }
  if(tela == "int_fimdejogo"){
    tela = "fimdejogo";
  }
  if(tela == "fimdejogo"){
    fimdejogo();
  }
  if(tela == "creditos"){
    creditos();
  }
  if(tela == "int_jogo"){
    setupjogo();
    instruc = 0;
    tela = "jogo";
  }
  if(tela == "pontuacao"){
    pontuacao();
  }
  if(tela == "selecionarfase"){
    selecionarfase();
  }
  if(tela == "explicacao"){
    explicacao();
  }
}

function menu() {
  posicao = 1;
  background(150, 240, 200);
  textFont('Verdana');
  fill('black');
  textSize(h1);
  
  textAlign(CENTER);
  text("MENU", width/2, height/6+h1/2);
  
  textAlign(LEFT);
  text(">", width/6-h1, posicao*height/9+height/18*5+h1/3);
  text("Iniciar", width/6, height/18*7+h1/3);
  /*
  text("Dificuldade", width/6, height/18*9+h1/3);
  text("Configurações", width/6, height/18*11+h1/3);
  
  textSize(h3);
  textAlign(CENTER);
  text("Seus pontos: "+pontostotais, width/2, height/6*5+h3);
  
  if(dific == 1){
    text("Modo: Fácil", width/2, height/6*5-h3/3);
  }
  if(dific == 2){
    text("Modo: Médio", width/2, height/6*5-h3/3);
  }
  if(dific == 3){
    text("Modo: Difícil", width/2, height/6*5-h3/3);
  }
  */
}

/*function dificuldade() {
  posicao = dific;
  background(80, 240, 200);
  fill('black');
  textSize(h1);
  
  textAlign(CENTER);
  text("DIFICULDADE", width/2, height/6+h1/2);
  
  textAlign(LEFT);
  text(">", width/6-h1, posicao*height/9+height/18*5+h1/3);
  text("Fácil", width/6, height/18*7+h1/3);
  text("Médio", width/6, height/18*9+h1/3);
  text("Difícil", width/6, height/18*11+h1/3);
}*/

/*function configuracoes() {
  posicao = 1;
  background(80, 240, 200);
  fill('black');
  textSize(h1);
  
  textAlign(CENTER);
  text("CONFIGURAÇÕES", width/2, height/6+h1/2);
  
  textAlign(LEFT);
  text(">", width/6-h1, posicao*height/9+height/18*5+h1/3);
  text("SOM: ", width/6, height/18*7+h1/3);
  text("CRÉDITOS", width/6, height/18*9+h1/3);
  text("INTRUÇÕES", width/6, height/18*11+h1/3);
  
  textSize(h3);
  textAlign(CENTER);
  if(som){
    text("com som", (width/3*2-width/3)/2+width/3, height/18*7+h3/4);
    fill('gray');
    triangle(width/3, height/18*7, width/3+10, height/18*7-10,width/3+10, height/18*7+10);
    fill('black');
    triangle(width/3*2,height/18*7,width/3*2-10, height/18*7-10,width/3*2-10, height/18*7+10);
  }
  if(!som){
    text("sem som", (width/3*2-width/3)/2+width/3, height/18*7+h3/4);
    fill('black');
    triangle(width/3, height/18*7, width/3+10, height/18*7-10,width/3+10, height/18*7+10);
    fill('gray');
    triangle(width/3*2,height/18*7,width/3*2-10, height/18*7-10,width/3*2-10, height/18*7+10);
  }
}*/

function selecionarfase() {
  background(150, 240, 200);
  fill('black');
  textSize(h1);
  textAlign(CENTER);
  text("Fase",width/2,60);
  textSize(h3);
  text("Selecione uma fase para jogar", width/2, 360);
  textSize(h1);
  
  console.log(fase);
  for(i = 1; i <= 5; i++){
    fill('gray');
    circle(i*100+100,160,60,60);
  }
  for(i = 6; i <= 10; i++){
    fill('gray');
    circle((i-5)*100+100,260,60,60);
  }
  
  for(i = 1; i <= 5; i++){
    if(aberto[i-1]){
      fill('white');
      circle(i*100+100,160,60,60);
    }
  }
  for(i = 6; i <= 10; i++){
    if(aberto[i-1]){
      fill('white');
      circle((i-5)*100+100,260,60,60);
    }
  }
  
  for(i = 1; i <= 5; i++){
    if(fase == i){
      fill('lightblue');
      circle(i*100+100,160,60,60);
    }
  }
  for(i = 6; i <= 10; i++){
    if(fase == i){
      fill('lightblue');
      circle((i-5)*100+100,260,60,60);
    }
  }
  
  fill('black');
  text("2",200,170);
  text("3",300,170);
  text("5",400,170);
  text("7",500,170);
  text("11",600,170);
  text("13",200,270);
  text("17",300,270);
  text("19",400,270);
  text("23",500,270);
  text("27",600,270);
}

/*function explicacao() {
  instruc = 1;
  background(150, 240, 200);
  fill('black');
  textSize(h1);
  
  textAlign(CENTER);
  text("INSTRUÇÕES", width/2, height/6+h1/2);
  
  if(pag_explic < 6){
    textSize(h3);
    textAlign(RIGHT);
    text("Próximo ->", width/6*5, height/6*5+h3);
  }
  
  if(pag_explic == 6){
    textSize(h3);
    textAlign(CENTER);
    if(instruc == 0){
      text("COMEÇAR", width/2, height/6*5+h3);
    }
    if(instruc == 1){
      text("OK", width/2, height/6*5+h3);
    }
  }
  
  textSize(h3);
  textAlign(CENTER);
  if(pag_explic == 1){
    text("Um número primo\né aquele que é dividido\napenas por um e por ele mesmo.",width/2, height/18*7+h1/3);
  }
  if(pag_explic == 2){
    text("O presente game utiliza a tabela\ndo Crivo de Eratóstenes\npara criar um game educacional\npara ensinar mais sobre\no universo dos números primo.",width/2, height/18*7+h1/3);
  }
  if(pag_explic == 3){
    text("Disciplina: Matemática 6º Ano\n\nHabilidade: (EF06MA05) Classificar números naturais\nem primos e compostos, estabelecer relações\nentre números, expressos pelos termos “é múltiplo de”,\n “é divisor de”, “é fator de”, e estabelecer, por meio de\n investigações, critérios de divisibilidade por\n2, 3, 4, 5, 6, 8, 9, 10, 100 e 1000",width/2, height/18*7+h1/3);
  }
  if(pag_explic == 4){
    text("O usuário irá controlar\nos números primos, através do teclado,\ne irá anular os seus múltiplos,\npois somente ele é considerado primo,\nos seus múltiplos não.",width/2, height/18*7+h1/3);
  }
  if(pag_explic == 5){
    text("Nessa primeira fase\niremos procurar os números\nmúltiplos do primo 2.",width/2, height/18*7+h1/3);
  }
  if(pag_explic == 6){
    text("Um número é divisível por 2\nquando for PAR, e um número\né par quando seu último algarismo\nfor PAR, ou seja, {0, 2, 4, 6, 8}",width/2, height/18*7+h1/3);
  }
}*/

/*function creditos() {
  yCred = h1;
  background('black');
  fill('white');
  textSize(h1);
  
  textAlign(CENTER);
  text("CRÉDITOS",width/2,height+yCred);
  
  textSize(h3);
  textAlign(LEFT);
  text("PROGRAMADOR:\nSueyvid José",width/2,height+yCred+40+16);
  text("EDUCADOR:\nRummenigge Rudson",width/2,height+yCred+195+16);
  image(Prog,160,height+yCred+40,100,125);
  image(Educ,160,height+yCred+195);
  yCred--;
  if(yCred <= -height-340){
    tela = "menu";
    posicao = 1;
  }
}*/

function acertou() {
  momento = tempo.toFixed(1);
  pontos = parseInt(pontos + (5-momento) * dific*10 * fase);
  rodada++;
  if(som){
    moeda_som.play(true);
  }
}

function errou() {
  pontos = pontos - (dific*100*fase);
  momento = 0;
  vida -= 1;
  errado = true;
  if(som){
    dano_som.play(true);
  }
}

function gameover() {
    pontostotais += pontos;
    tela = "int_fimdejogo";
    vida = 3;
    pontos = 0;
    rodada = 0;
}

function iguais() {
  xPers = xZona+widthZona/2;
  yPers = yZona+heightZona/2;
  zeradirecoes();
  direcao = "down";
  tempo = 0;
  yCong = 50;
  aleat = 1;
  aleatorio();
  vidaaleatoria();
  baualeatorio();
  xVida = -50;
  yVida = -50;
}

/*function moeda() {
  time_moeda++;
  image(coin[cont_moeda%9],0,4,40,40);
  if(time_moeda>10){
    cont_moeda++;
    time_moeda = 0;
  }
}*/

function zeradirecoes() {
  left = false;
  right = false;
  up = false;
  down = false;
}

function movimento() {
  time++;
  if(time > 5){
    cont++;
    time = 0;
  }
}

function paralisa() {
  time++;
  if(andando == true && time > 7){
    image(Pers_down,xPers-rPers,yPers-rPers,2*rPers,2*rPers);
    time = 0;
  }
}

function aleatorizacao() {
  porcent = parseInt(random(1,11));
}

function vidaaleatoria() {
  aleatorizacao();
  if(porcent >= probab){
    xVida = -50;
    yVida = -50;
  }
  else if(porcent < probab && vida < 3){
    posicaovida();
  }
}

function posicaovida() {
  xVida = random(0+rObj,width-rObj);
  yVida = random(50+rObj,height-rObj);
}

function baualeatorio() {
  aleatorizacao();
  if(porcent >= probab){
    xBau = -50;
    yBau = -50;
  }
  else if(porcent < probab){
    posicaobau();
  }
}

function posicaobau() {
  xBau = random(0+rObj,width-rObj);
  yBau = random(50+rObj,height-rObj);
  valordobau = parseInt(random(1,tMaximo));
}

function aleatorio() {
  xObj = random(0+rObj,width-rObj);
  yObj = random(50+rObj,height-rObj);
  tObj = parseInt(random(1,tMaximo));
  
  xObj2 = random(0+rObj,width-rObj);
  yObj2 = random(50+rObj,height-rObj);
  tObj2 = parseInt(random(1,tMaximo));
  
  xObj3 = random(0+rObj,width-rObj);
  yObj3 = random(50+rObj,height-rObj);
  tObj3 = parseInt(random(1,tMaximo));
  
  xObj4 = random(0+rObj,width-rObj);
  yObj4 = random(50+rObj,height-rObj);
  tObj4 = parseInt(random(1,tMaximo));
  aleat = 0;
}

function pontuacao() {
  background(150, 240, 200);
  fill('black');
  textSize(h1);
  textAlign(CENTER);
  text("Pontuação", width/2, height/6+h1/2);
  text(pontos, width/2, height/6+h1/2 + 2*h1);
  
  pontuacaominima = fase*dific*100*3;
  if(pontos > pontuacaominima/3){
    trof = 1;
  }
  if(pontos > pontuacaominima/1.5){
    trof = 2;
  }
  if(pontos >= pontuacaominima){
    trof = 3;
  }
  
  fill(150, 240, 200, 100);
  image(trofeu, width/2-90-rObj, height/18*7+h1/3-rObj, 2*rObj, 2*rObj);
  image(trofeu, width/2-rObj, height/18*7+h1/3-rObj, 2*rObj, 2*rObj);
  image(trofeu, width/2+90-rObj, height/18*7+h1/3-rObj, 2*rObj, 2*rObj);
  rect(width/2-130, height/18*7+h1/3-40,260,80);
  
  if(trof >= 1){
    image(trofeu, width/2-90-rObj, height/18*7+h1/3-rObj, 2*rObj, 2*rObj);
  }
  if(trof >= 2){
    image(trofeu, width/2-rObj, height/18*7+h1/3-rObj, 2*rObj, 2*rObj);
  }
  if(trof >= 3){
    image(trofeu, width/2+90-rObj, height/18*7+h1/3-rObj, 2*rObj, 2*rObj);
  }
  
  fill('black');
  textSize(h2);
  textAlign(RIGHT);
  text("Enter ->", width/6*5, height/6*5+h3);
}

function fimdejogo() {
  background(150, 240, 200);
  fill('black');
  textSize(h1);
  textAlign(CENTER);
  text("Fim de jogo", width/2, height/18*7+h1/3);
  textSize(h2);
  textAlign(RIGHT);
  text("Enter ->", width/6*5, height/6*5+h3);
  resetar();
}

function jogo() {
  clear();
  background('lightgreen');
  fill('#7CFC00');
  rect(0,0,width,50);
  
  if(dific == 1){
    tMaximo = 11*fase;
  }
  if(dific == 2){
    tMaximo = 101*fase;
  }
  if(dific == 3){
    tMaximo = 101*fase;
  }
  
  //Zona segura
  fill('green');
  rect(xZona,yZona,widthZona,heightZona);
  image(castelo,xZona,yZona,widthZona,heightZona);
  
  fill('white');
  rect(xZona+23,yZona+60,h1,h1);
  rect(xZona+widthZona-23-h1,yZona+60,h1,h1);
  
  fill('red');
  textSize(h2);
  text(tPers,xZona+39,yZona+85);
  text(tPers,xZona+widthZona-39,yZona+85);
  
  //Objetos
  image(coracao, xVida-1.2*rObj, yVida-1.2*rObj, 2.4*rObj, 2.4*rObj);
  fill('white');
  text("+ "+valordobau, xBau-1.2*rObj, yBau-1.2*rObj);
  image(bau, xBau-1.2*rObj, yBau-1.2*rObj, 2.4*rObj, 2.4*rObj);
  if(dific >= 1){
    fill('lightblue');
    image(obj,xObj-1.2*rObj,yObj-1.2*rObj,2.4*rObj,2.4*rObj);
    image(obj,xObj2-1.2*rObj,yObj2-1.2*rObj,2.4*rObj,2.4*rObj);
    
    textSize(h2);
    textAlign(CENTER);
    fill('black');
    text(tObj, xObj, yObj+tDist);
    text(tObj2, xObj2, yObj2+tDist);
  }
  if(dific >= 2){
    fill('lightblue');
    image(obj,xObj3-1.2*rObj,yObj3-1.2*rObj,2.4*rObj,2.4*rObj);
    
    fill('black');
    text(tObj3, xObj3, yObj3+tDist);
  }
  if(dific >= 3){
    fill('lightblue');
    image(obj,xObj4-1.2*rObj,yObj4-1.2*rObj,2.4*rObj,2.4*rObj);
    
    fill('black');
    text(tObj4, xObj4, yObj4+tDist);
  }
  
  //controle do personagem
  if(!errado){
    if(keyIsDown(UP_ARROW) && (yPers > 40 + rPers)){
      up = true;
      direcao = "up";
    }
    else if(direcao == "up"){
      image(Pers_up,xPers-rPers,yPers-rPers,2*rPers,2*rPers);
      up = false;
    }
    if(keyIsDown(DOWN_ARROW) && (yPers < height - rPers)){
      down = true;
      direcao = "down";
    }
    else if(direcao == "down"){
      image(Pers_down,xPers-rPers,yPers-rPers,2*rPers,2*rPers);
      down = false;
    }
    if(keyIsDown(LEFT_ARROW) && (xPers > 0 + rPers)){
      left = true;
      direcao = "left";
    }
    else if(direcao == "left"){
      image(Pers_left,xPers-rPers,yPers-rPers,2*rPers,2*rPers);
      left = false;
    }
    if(keyIsDown(RIGHT_ARROW) && (xPers < width - rPers)){
      right = true;
      direcao = "right";
    }
    else if(direcao == "right"){
      image(Pers_right,xPers-rPers,yPers-rPers,2*rPers,2*rPers);
      right = false;
    }
  }
  
  if(up || down || left || right){
    andando = true;
  }
  
  //movimento do personagem
  if(left && direcao == "left"){
    movimento();
    image(Pers_left[cont%4],xPers-rPers,yPers-rPers,2*rPers,2*rPers);
    xPers -= 3;
  }
  else if(right && direcao == "right"){
    movimento();
    image(Pers_right[cont%4],xPers-rPers,yPers-rPers,2*rPers,2*rPers);
    xPers += 3;
  }
  else if(up && direcao == "up"){
    movimento();
    image(Pers_up[cont%4],xPers-rPers,yPers-rPers,2*rPers,2*rPers);
    yPers -= 3;
  }
  else if(down && direcao == "down"){
    movimento();
    image(Pers_down[cont%4],xPers-rPers,yPers-rPers,2*rPers,2*rPers);
    yPers += 3;
  }
  
  //Instruções
  if(tempo <= 3 && rodada < 3){
    textSize(h2);
    text("Mova-se até o seu múltiplo",width/2, height/6*5);
  }
  
  //Variáveis de pontuação
  //moeda();
  textSize(h1);
  fill('black');
  textAlign(LEFT);
  text(pontos,40,36);
  
  textAlign(RIGHT);
  if(aleat == 0){
    tempo += 1/60;
  }
  text(tempo.toFixed(1) + " s",width-20,36);
  
  textAlign(RIGHT);
  if(momento > 0 && momento <= 1.5){
    fill(255,0,127,opacidade);
  }
  if(momento > 1.5 && momento <= 2.5){
    fill(0,128,0,opacidade);
  }
  if(momento > 2.5 && momento < 4){
    fill(255,255,0,opacidade);
  }
  if(yCong >= 0){
    yCong += 30/60;
  }
  text(congratulação,width-20,yCong);
  
  fill('red');
  if(vida  >= 1)
    circle(width/2-15,35,20,20);
  if(vida >= 2)
    circle(width/2,35,20,20);
  if(vida >= 3)
    circle(width/2+15,35,20,20);
  if(vida < 1)
    gameover();
  fill('black');
  textSize(h3);
  textAlign(CENTER);
  text(vida+" vidas",width/2,20);
  
  //Teste da zona segura para objetos
  xiZona = xZona-rObj;
  xfZona = widthZona+xZona+rObj;
  yiZona = yZona-rObj;
  yfZona = heightZona+yZona+rObj;
  
  if(xBau >= xiZona && xBau <= xfZona && yBau >= yiZona && yBau <= yfZona){
    posicaobau();
  }
  if(xVida >= xiZona && xVida <= xfZona && yVida >= yiZona && yVida <= yfZona){
    posicaovida();
  }
  if(xObj >= xiZona && xObj <= xfZona && yObj >= yiZona && yObj <= yfZona){
    aleat = 1;
    aleatorio();
  }
  if(xObj2 >= xiZona && xObj2 <= xfZona && yObj2 >= yiZona && yObj2 <= yfZona){
    aleat = 1;
    aleatorio();
  }
  if(xObj3 >= xiZona && xObj3 <= xfZona && yObj3 >= yiZona && yObj3 <= yfZona){
    aleat = 1;
    aleatorio();
  }
  if(xObj4 >= xiZona && xObj4 <= xfZona && yObj4 >= yiZona && yObj4 <= yfZona){
    aleat = 1;
    aleatorio();
  }
  
  //Teste de primo
  if(dific == 1){
    if(tObj%tPers == 0 || tObj2%tPers == 0){
    }
    else{
      aleat = 1;
      aleatorio();
    }
  }
  if(dific == 2){
    if(tObj%tPers == 0 || tObj2%tPers == 0 || tObj3%tPers == 0 ){
    }
    else{
      aleat = 1;
      aleatorio();
    }
  }
  if(dific == 3){
    if(tObj%tPers == 0 || tObj2%tPers == 0 || tObj3%tPers == 0 || tObj4%tPers == 0){
    }
    else{
      aleat = 1;
      aleatorio();
    }
  }
  
  //Recomeço
  if(tempo >= rodadaTempo){
    iguais();
    momento = 0;
    congratulação = "";
    pontos = pontos-(dific*10);
  }
  if(tempo < 1.2 && momento == 0 && !errado){
    textSize(h2);
    fill('white');
    textAlign(CENTER);
    text("- "+(dific*10),xPers,yPers+10-yCong);
  }
  
  //Teste da zona segura para personagem
  if(xPers >= xZona && xPers <= widthZona+xZona && yPers >= yZona && yPers <= heightZona+yZona){
  }
  else{
    if(aleat == 0){
      //Bau aleatório
      if(dist(xPers,yPers,xBau,yBau) < rPers){
        momento = tempo.toFixed(1);
        pontos = parseInt(pontos + (5-momento) * valordobau);
        iguais();
        errado = false;
        pegoubau = 1;
      }
      //Vidas aleatórias
      if(dist(xPers,yPers,xVida,yVida) < rPers){
        momento = tempo.toFixed(1);
        pontos = parseInt(pontos + (5-momento) * dific*10);
        iguais();
        errado = false;
        vida += 1;
      }
      //Objeto 1
      if(tObj%tPers == 0 && dist(xObj, yObj, xPers, yPers) < rPers){
        acertou();
        iguais();
      }
      else if(tObj%tPers != 0 && dist(xObj, yObj, xPers, yPers) < rPers){
        errou();
        iguais();
      }
    
      //Objeto 2
      if(tObj2%tPers == 0 && dist(xObj2, yObj2, xPers, yPers) < rPers){
        acertou();
        iguais();
      }
      else if(tObj2%tPers != 0 && dist(xObj2, yObj2, xPers, yPers) < rPers){
        errou();
        iguais();
      }
    
      if(dific >= 2){
        //Objeto 3
        if(tObj3%tPers == 0 && dist(xObj3, yObj3, xPers, yPers) < rPers){
          acertou();
          iguais();
        }
        else if(tObj3%tPers != 0 && dist(xObj3, yObj3, xPers, yPers) < rPers){
          errou();
          iguais();
        }  
      }
    
      if(dific >= 3){
        //Objeto 4
        if(tObj4%tPers == 0 && dist(xObj4, yObj4, xPers, yPers) < rPers){
          acertou();
          iguais();
        }
        else if(tObj4%tPers != 0 && dist(xObj4, yObj4, xPers, yPers) < rPers){
          errou();
          iguais();
        }
      }
    }
  }
  
  //Teste de distância entre os objetos
  if(dist(xObj, yObj, xObj2, yObj2) < 2*rObj ||
     dist(xObj, yObj, xObj3, yObj3) < 2*rObj ||
     dist(xObj, yObj, xObj4, yObj4) < 2*rObj ||
     dist(xObj2, yObj2, xObj3, yObj3) < 4*rObj ||
     dist(xObj2, yObj2, xObj4, yObj4) < 4*rObj ||
     dist(xObj3, yObj3, xObj4, yObj4) < 4*rObj ||
     dist(xObj, yObj, xBau, yBau) < 2*rObj ||
     dist(xObj2, yObj2, xBau, yBau) < 2*rObj ||
     dist(xObj3, yObj3, xBau, yBau) < 2*rObj ||
     dist(xObj4, yObj4, xBau, yBau) < 2*rObj ||
     dist(xObj, yObj, xVida, yVida) < 2*rObj ||
     dist(xObj2, yObj2, xVida, yVida) < 2*rObj ||
     dist(xObj3, yObj3, xVida, yVida) < 2*rObj ||
     dist(xObj4, yObj4, xVida, yVida) < 2*rObj){
    aleat = 1;
    aleatorio();
  }
  
  //Congratulação
  if(tempo < 1.2){
    if(momento > 0 && momento <= 1.5){
      congratulação = "Perfeito";
    }
    if(momento > 1.5 && momento <= 2.5){
      congratulação = "Ótimo";
    }
    if(momento > 2.5 && momento < 4){
      congratulação = "Bom";
    }
  }
  else{
    congratulação = " ";
  }
  
  //Instruções e informações
  if(tempo < 1.2 && momento != 0 && !errado && pegoubau == 1){
    textSize(h2);
    fill('white');
    text("+ "+parseInt((5-momento) * valordobau * dific * fase),xPers,yPers+10-yCong);
  }
  else if(tempo < 1.2 && momento != 0 && !errado && pegoubau == 0){
    textSize(h2);
    fill('white');
    text("+ "+parseInt((5-momento) * dific*10 * fase),xPers,yPers+10-yCong);
  }
  else if(tempo < 1.2 && momento == 0 && errado){
    textSize(h2);
    fill('white');
    text("- "+(dific*100*fase),xPers,yPers+10-yCong);
    paralisa();
  }
  if(tempo > 1.2){
    errado = false;
    pegoubau = 0;
  }
  
  if(tempo < 1.2 && rodada >= 3 && momento == 0){
      textSize(h2);
      fill('black');
    if(!errado){
      text("Seja mais rápido",width/2,height/6*5);
    }
    if(errado){
      text("Cuidado!",width/2,height/6*5);
    }
  }
  
  
  if(tempo < 2 && momento != 0){
    textSize(h1);
    fill(0,0,0,opacidade);
    text("Rodada "+rodada,width/2,height/6*5-h1);
  }
  opacidade -= 3;
  if(tempo == 0){
    opacidade = 250;
  }
  
  //Personagem
  textSize(12);
  textAlign(CENTER);
  fill('white');
  if(direcao == "down"){
    text(tPers,xPers-21,yPers+17);
  }
  if(direcao == "left"){
    text(tPers,xPers+6,yPers-8);
  }
  if(direcao == "right"){
    text(tPers,xPers-6,yPers-8);
  }
  if(direcao == "up"){
    text(tPers,xPers,yPers-8);
  }
  if(rodada == 0){
    momento = 0;
  }
  if(rodada == rodadaMax){
    tela = "pontuacao";
  }
}

function resetar() {
  pontostotais += pontos;
  pontos = 0;
  tempo = 0;
  momento = 0;
  rodada = 0;
  fase = 1;
  vida = 3;
  pag_explic = 1;
  instruc = 0;
  yCong = 500;
  direcao = "down";
  andando = false;
  errado = false;
  pontuacaominima = 0;
  trof = 0;
  xVida = -50;
  yVida = -50;
}

function keyPressed() {
  if (key == "Escape"){
    if(tela == "jogo"){
      tela = "pontuacao";
    }
    else{
      tela = "int_menu";
      posicao = 1;
      resetar();
    }
  }
  
  //Tela dificuldade
  if(tela == "dificuldade"){
    if(key == "ArrowDown" && posicao != 3){
      posicao++;
    }
    if(key == "ArrowUp" && posicao != 1){
      posicao--;
    }
    if (key == "Enter"){
      dific = posicao;
      tela = "menu";
      posicao = 1;
    }
  }
  
  //Tela configurações
  else if(tela == "configuracoes"){
    if(key == "ArrowDown" && posicao != 3){
      posicao += 1;
    }
    if(key == "ArrowUp" && posicao != 1){
      posicao -= 1;
    }
    if (key == "Enter"){
      if(posicao == 2){
        tela = "creditos";
      }
      if(posicao == 3){
        tela = "explicacao";
      }
    }
  }
  
  //Tela Menu
  else if(tela == "menu"){
    if(key == "ArrowDown" && posicao != 3){
      posicao += 1;
    }
    if(key == "ArrowUp" && posicao != 1){
      posicao -= 1;
    }
    if(key == "Enter"){
      if(posicao == 1){
        tela = "int_selecionarfase";
      }
      if(posicao == 2){
        tela = "dificuldade";
      }
      if(posicao == 3){
        tela = "configuracoes";
      }
    }
  }
  
  //Tela fim de jogo
  else if(key == "Enter" && tela == "fimdejogo"){
    tela = "menu";
  }
  
  //Tela pontuação
  else if(key == "Enter" && tela == "pontuacao"){
    if(rodada == rodadaMax){
      aberto[fase-1] = true;
    }
    resetar();
    tela = "menu";
  }
  
  //Tela seleção de fase
  if(tela == "selecionarfase"){
    if(key == "ArrowRight" && aberto[fase] && fase <= 10){
      fase += 1;
    }
    else if(key == "ArrowLeft" && fase > 1){
      fase -= 1;
    }
    else if(key == "ArrowDown" &&  aberto[fase+4] && fase <= 5){
      fase += 5;
    }
    else if(key == "ArrowUp" && fase >= 6){
      fase -= 5;
    }
    else if(key == "Enter"){
      tPers = primo[fase-1];
      tela = "int_jogo";
    }
  }
  
  //configurações do som
  if(tela == "configuracoes" && posicao == 1){
    if(key == "ArrowLeft"){
      som = false;
    }
    if(key == "ArrowRight"){
      som = true;
    }
  }
  
  //Na explicação
  else if(key == "Enter" && (tela == "int_selecionarfase" || tela == "explicacao") && pag_explic < 6){
    pag_explic++;
  }
  else if(key == "Enter" && tela == "int_selecionarfase" && pag_explic >= 6 && instruc == 0){
    tela = "selecionarfase";
  }
  else if(key == "Enter" && tela == "explicacao" && pag_explic >= 6 && instruc == 1){
    tela = "menu";
    resetar();
  }
}