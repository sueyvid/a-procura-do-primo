var tela = 0;
var posicao = 1, xBarra = 220, yBarra = 130, heightBarra = 160;
var dific = 1;
var opcaodific = 0;
var opcaoconfig = 1;
var yCred = 420;
var explic = 1, instruc = 0;
var som = true;
var fr = 0;

var trofeudafase = [0,0,0,0,0,0,0,0,0,0];
var recorde = [0,0,0,0,0,0,0,0,0,0];
var nomedafase = [2,3,5,7,11,13,17,19,23,27];
var coluna = [160,230,300,370,440], linha = [150,270];
var pontuacaominima = 0;
var trof = 0;
var pegoubau = 0, valordobau = 0;
var xBau = -50, yBau = -50;
var aparecebau = 0;
var xVida = -50, yVida = -50;
var aparecevida = 0;
var aberto = 1;
var opacidade = 0;
var time_moeda = 0;
var cont_moeda = 0;
var coin = [ ]
var up, down, left, right;
var direcao = "down";
var cont = 0;
var time = 0;
var errou = 0;
var xPers = 20, yPers = 20, tPers = 2;
var qtdObj = 2;
var xObj = [0,1,2,3], yObj = [0,1,2,3], tObj = [0,1,2,3];
var rObj = 25, rPers = 30;
var xZona = 100, yZona = 100, widthZona = 200, heightZona = 180;

var aleat = 0;
var pontostotais = 0;
var pontos = 0;
var tempo = 0;
var momento = 0;
var qtd = 0;
var qtdMaxima = 20;
var yCong = 500;
var congratulação;
var fase = 1;
var vida = 3;

var tMaximo = 11;
var tFonte = 32;
var tDist = 10;
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
  pixelDensity(1);
  createCanvas(600, 400);
  frameRate(60);
  xPers = xZona+widthZona/2;
  yPers = yZona+heightZona/2;
  aleatorio();
  moeda_som = createAudio('assets/moeda.mp3');
  dano_som = createAudio('assets/dano.mp3');
}

function draw() {
  if(tela == 0){
    background(150, 240, 200);
    opcaoconfig = 1;
    menu();
  }
  if(tela == 1){
    if(aberto == 1 && instruc == 0){
      explicacao();
    }
    else{
      tela = 12;
    }
  }
  if(tela == 2){
    background(80, 240, 200);
    dificuldade();
  }
  if(tela == 3){
    background(80, 240, 200);
    configuracoes();
  }
  if(tela == 4){
    instruc = 0;
    jogo();
  }
  if(tela == 8){
    background(150, 240, 200);
    fimdejogo();
  }
  if(tela == 9){
    creditos();
  }
  if(tela == 11){
    background(150, 240, 200);
    pontuacao();
  }
  if(tela == 12){
    background(150, 240, 200);
    selecionarfase();
  }
  if(tela == 13){
    explicacao();
  }
}

function menu() {
  fill('white');
  rect(xBarra, yBarra, heightBarra, 40, 20);
  fill('black');
  textAlign(CENTER);
  textSize(32);
  text("MENU", width/2, 60);
  text("Iniciar", width/2, 160);
  text("Dificuldade", width/2, 220);
  text("Configurações", width/2, 280);
  textSize(15);
  text("Seus pontos: "+pontostotais,width/2,360);
  textAlign(RIGHT);
  text("versão: 1.02",590,390);
  textAlign(CENTER);
  
  if(dific == 1){
    text("Modo: Fácil", width/2, 340);
    tMaximo = 11;
    tFonte = 32;
    tDist = 10;
  }
  if(dific == 2){
    text("Modo: Médio", width/2, 340);
    tMaximo = 101;
    tFonte = 32;
    tDist = 10;
  }
  if(dific == 3){
    text("Modo: Difícil", width/2, 340);
    tMaximo = 101;
    tFonte = 24;
    tDist = 8;
  }
}

function jogo() {
  clear();
  background('lightgreen');
  fill('#7CFC00');
  rect(0,0,600,50);
  
  if(qtd == 0){momento = 0}
  if(qtd > qtdMaxima){tela = 11}
  
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
  image(castelo,xZona,yZona,widthZona,heightZona)
  textSize(24);
  fill('white');
  rect(xZona+28,yZona+60,24,24);
  rect(xZona+widthZona-52,yZona+60,24,24);
  fill('red');
  text(tPers,xZona+40,yZona+80);
  text(tPers,xZona+widthZona-40,yZona+80);
  
  //Objetos
  image(coracao, xVida-1.2*rObj, yVida-1.2*rObj, 2.4*rObj, 2.4*rObj);
  image(bau, xBau-1.2*rObj, yBau-1.2*rObj, 2.4*rObj, 2.4*rObj);
  textSize(tFonte);
  textAlign(CENTER);
  if(dific == 1){qtdObj = 2}
  if(dific == 2){qtdObj = 3}
  if(dific == 3){qtdObj = 4}
  for(i = 0;i < qtdObj;i ++){
    image(obj,xObj[i]-1.2*rObj,yObj[i]-1.2*rObj,2.4*rObj,2.4*rObj);
    fill('black');
    text(tObj[i], xObj[i], yObj[i]+tDist);
  }
  
  //controle do personagem
  if(errou == 0){
    if (keyIsDown(UP_ARROW) && (yPers > 40 + rPers)) {
      up = true;
      direcao = "up";
      yPers -= 3;
    }
    else if(direcao == "up"){
      image(Pers_up,xPers-rPers,yPers-rPers,2*rPers,2*rPers);
      right = false;
    }
    if (keyIsDown(DOWN_ARROW) && (yPers < height - rPers)) {
      down = true;
      direcao = "down";
      yPers += 3;
    }
    else if(direcao == "down"){
      image(Pers_down,xPers-rPers,yPers-rPers,2*rPers,2*rPers);
      down = false;
    }
    if (keyIsDown(LEFT_ARROW) && (xPers > 0 + rPers)) {
      left = true;
      direcao = "left";
      xPers -= 3;
    }
    else if(direcao == "left"){
      image(Pers_left,xPers-rPers,yPers-rPers,2*rPers,2*rPers);
      left = false;
    }
    if (keyIsDown(RIGHT_ARROW) && (xPers < width - rPers)) {
      right = true;
      direcao = "right";
      xPers += 3;
    }
    else if(direcao == "right"){
      image(Pers_right,xPers-rPers,yPers-rPers,2*rPers,2*rPers);
      right = false;
    }
  }
  
  if(left && direcao == "left"){
    left_move();
    zeradirecoes();
  }
  else if(right && direcao == "right"){
    right_move();
    zeradirecoes();
  }
  else if(up && direcao == "up"){
    up_move();
    zeradirecoes();
  }
  else if(down && direcao == "down"){
    down_move();
    zeradirecoes();
  }
  else if(left && down){
    down_move();
    zeradirecoes();
  }
  else if(left && down && right){
  }
  
  //Variáveis de pontuação
  moeda();
  textSize(32);
  fill('black');
  textAlign(LEFT);
  text(pontos,35,35);
  if(tempo.toFixed(1)%2 == 0){
    fr = frameRate();
  }
  textSize(16);
  text("fps: "+parseInt(fr),540,390);
  
  textSize(32);
  textAlign(RIGHT);
  if(aleat == 0){
    tempo += 1/60;
  }
  text(tempo.toFixed(1) + " s",590,35);
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
  text(congratulação,590,yCong);
  
  textAlign(CENTER);
  fill('red');
  if(vida  >= 1)
    circle(286,35,20,20);
  if(vida >= 2)
    circle(301,35,20,20);
  if(vida >= 3)
    circle(316,35,20,20);
  if(vida < 1){
    pontostotais += pontos;
    tela = 8;
    vida = 3;
    pontos = 0;
    qtd = 0;
  }
  fill('black');
  textSize(16);
  textAlign(CENTER);
  text(vida+" vidas",width/2,20);
  
  //Teste da zona segura para objetos
  if(xBau >= xZona-rObj && xBau <= widthZona+xZona+rObj && yBau >= yZona-rObj && yBau <= heightZona+yZona+rObj){
    posicaoaleatoriabau();
  }
  if(xVida >= xZona-rObj && xVida <= widthZona+xZona+rObj && yVida >= yZona-rObj && yVida <= heightZona+yZona+rObj){
    posicaoaleatoriavida();
  }
  for(i = 0; i < qtdObj; i ++){
    if(xObj[i] >= xZona-rObj && xObj[i] <= widthZona+xZona+rObj && yObj[i] >= yZona-rObj && yObj[i] <= heightZona+yZona+rObj){
      aleat = 1;
      aleatorio();
    }
  }
  
  //Teste de primo
  if(dific == 1 && (tObj[0]%tPers == 0 || tObj[1]%tPers == 0)){
    }
  else if(dific == 2 && (tObj[0]%tPers == 0 || tObj[1]%tPers == 0 || tObj[2]%tPers == 0)){
    }
  else if(dific == 3 && (tObj[0]%tPers == 0 || tObj[1]%tPers == 0 || tObj[2]%tPers == 0 || tObj[3]%tPers == 0)){
    }
  else{
    aleat = 1;
    aleatorio();
  }
  
  //Recomeço
  if(tempo >= 5){
    momento = 0;
    pontos = pontos-(dific*10);
    congratulação = "";
    colisao();
  }
  if(tempo < 1.2 && momento == 0 && errou == 0){
    textSize(24);
    fill('white');
    text("- "+(dific*10),xPers,yPers+10-yCong);
  }
  
  //Teste da zona segura para personagem
  if(xPers >= xZona && xPers <= widthZona+xZona && yPers >= yZona && yPers <= heightZona+yZona){
  }
  else{
    if(aleat == 0){
      if(dist(xPers,yPers,xBau,yBau) < rPers){
        momento = tempo.toFixed(1);
        pontos = parseInt(pontos + (5-momento) * valordobau);
        errou = 0;
        pegoubau = 1;
        colisao();
      }
      if(dist(xPers,yPers,xVida,yVida) < rPers){
        momento = tempo.toFixed(1);
        pontos = parseInt(pontos + (5-momento) * dific*10);
        errou = 0;
        vida += 1;
        colisao();
      }
      for(i = 0; i < qtdObj; i ++){
        if(tObj[i]%tPers == 0 && dist(xObj[i], yObj[i], xPers, yPers) < rPers){
          momento = tempo.toFixed(1);
          pontos = parseInt(pontos + (5-momento) * dific*10);
          qtd += 1;
          errou = 0;
          if(som){
            moeda_som.play(true);
          }
          colisao();
        }
        else if(tObj[i]%tPers != 0 && dist(xObj[i], yObj[i], xPers, yPers) < rPers){
          momento = 0;
          pontos = pontos - (dific*100);
          vida -= 1;
          errou = 1;
          if(som){
            dano_som.play(true);
          }
          colisao();
        }
      }
    }
  }
  
  //Teste de distância entre os objetos
  if(dist(xObj[0], yObj[0], xObj[1], yObj[1]) < 2*rObj ||
     dist(xObj[0], yObj[0], xObj[2], yObj[2]) < 2*rObj ||
     dist(xObj[0], yObj[0], xObj[3], yObj[3]) < 2*rObj){
    aleat = 1;
    aleatorio();
  }
  if(dist(xObj[1], yObj[1], xObj[2], yObj[2]) < 2*rObj ||
     dist(xObj[1], yObj[1], xObj[3], yObj[3]) < 2*rObj ||
     dist(xObj[2], yObj[2], xObj[3], yObj[3]) < 2*rObj){
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
  textSize(24);
  fill('black');
  if(tempo <= 3 && qtd < 3){
    text("Mova-se até o seu múltiplo",width/2, 340);
  }
  if(tempo < 1.2){
    fill('white');
    if(momento != 0 && errou == 0 && pegoubau == 1){
      text("+ "+parseInt((5-momento) * valordobau * dific * fase),xPers,yPers+10-yCong);
    }
    else if(momento != 0 && errou == 0 && pegoubau == 0){
      text("+ "+parseInt((5-momento) * dific*10 * fase),xPers,yPers+10-yCong);
    }
    else if(momento == 0 && errou == 1){
      text("- "+(dific*100*fase),xPers,yPers+10-yCong);
      perdeuvida();
    }
    fill('black');
    if(qtd >= 3 && momento == 0 && !errou){
      text("Seja mais rápido",width/2,380);
    }
    if(qtd >= 3 && momento == 0 && errou){
      text("Cuidado!",width/2,380);
    }
  }
  if(tempo > 1.2){
    errou = 0;
    pegoubau = 0;
  }
  textSize(32);
  fill(0,0,0,opacidade);
  if(tempo < 2 && momento != 0){
    text("Rodada "+qtd,300,380);
  }
  opacidade -= 2.5;
  if(tempo == 0){
    opacidade = 255;
  }
  
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
}

function colisao() {
  xPers = xZona+widthZona/2;
  yPers = yZona+heightZona/2;
  xVida = -50;
  yVida = -50;
  tempo = 0;
  yCong = 50;
  direcao = "down";
  zeradirecoes();
  aleat = 1;
  aleatorio();
  vidaaleatoria();
  baualeatorio();
}

function moeda() {
  time_moeda++;
  image(coin[cont_moeda%9],0,4,40,40);
  if(time_moeda>10){
    cont_moeda++;
    time_moeda = 0;
  }
}

function zeradirecoes() {
  left = false;
  right = false;
  up = false;
  down = false;
}

function left_move() {
  time ++;
  image(Pers_left[cont%4],xPers-rPers,yPers-rPers,2*rPers,2*rPers);
  if(time>5){
    cont ++;
    time = 0;
  }
}

function right_move() {
  time ++;
  image(Pers_right[cont%4],xPers-rPers,yPers-rPers,2*rPers,2*rPers);
  if(time>5){
    cont ++;
    time = 0;
  }
}

function up_move() {
  time ++;
  image(Pers_up[cont%4],xPers-rPers,yPers-rPers,2*rPers,2*rPers);
  if(time>5){
    cont ++;
    time = 0;
  }
}

function down_move() {
  time ++;
  image(Pers_down[cont%4],xPers-rPers,yPers-rPers,2*rPers,2*rPers);
  if(time>5){
    cont ++;
    time = 0;
  }
}

function perdeuvida() {
  time ++;
  if(time>7){
    image(Pers_down,xPers-rPers,yPers-rPers,2*rPers,2*rPers);
    time = 0;
  }
}

function aleatorio() {
  xObj[0] = random(0+rObj,width-rObj);
  yObj[0] = random(50+rObj,height-rObj);
  tObj[0] = parseInt(random(1,tMaximo));
  
  xObj[1] = random(0+rObj,width-rObj);
  yObj[1] = random(50+rObj,height-rObj);
  tObj[1] = parseInt(random(1,tMaximo));
  
  xObj[2] = random(0+rObj,width-rObj);
  yObj[2] = random(50+rObj,height-rObj);
  tObj[2] = parseInt(random(1,tMaximo));
  
  xObj[3] = random(0+rObj,width-rObj);
  yObj[3] = random(50+rObj,height-rObj);
  tObj[3] = parseInt(random(1,tMaximo));
  aleat = 0;
}

function vidaaleatoria() {
  aparecevida = parseInt(random(1,11));
  if(aparecevida <= 7){
    xVida = -50;
    yVida = -50;
  }
  else if(aparecevida > 7 && vida < 3){
    posicaoaleatoriavida();
  }
}

function posicaoaleatoriavida() {
  xVida = random(0+rObj,width-rObj);
  yVida = random(50+rObj,height-rObj);
}

function baualeatorio() {
  aparecebau = parseInt(random(1,11));
  if(aparecebau <= 7){
    xBau = -50;
    yBau = -50;
  }
  else if(aparecebau > 7){
    posicaoaleatoriabau();
  }
}

function posicaoaleatoriabau() {
  xBau = random(0+rObj,width-rObj);
  yBau = random(50+rObj,height-rObj);
  valordobau = parseInt(random(1,tMaximo));
}

function dificuldade() {
  fill('white');
  rect(xBarra, yBarra, heightBarra, 40, 20);
  fill('black');
  textAlign(CENTER);
  textSize(32);
  text("DIFICULDADE", width/2, 60);
  text("Fácil", width/2, 160);
  text("Médio", width/2, 220);
  text("Difícil", width/2, 280);
}

function configuracoes() {
  fill('white');
  rect(xBarra, yBarra, heightBarra, 40, 20);
  fill('black');
  textAlign(CENTER);
  textSize(32);
  text("CONFIGURAÇÕES", width/2, 60);
  
  if(opcaoconfig == 1){
    yBarra = 127;
  }
  if(opcaoconfig == 2){
    yBarra = 187;
  }
  if(opcaoconfig == 3){
    yBarra = 247;
  }
  
  textSize(18);
  textAlign(LEFT);
  text("SOM: ", 200, 155);
  text("CRÉDITOS", 200, 215);
  text("INTRUÇÕES", 200, 275);
  
  fill('gray');
  textSize(11);
  textAlign(CENTER);
  if(som){
    triangle(270,148,280,138,280,158);
    text("com som",327.5,152);
  }
  if(!som){
    triangle(385,148,375,138,375,158);
    text("sem som",327.5,152);
  }
}

function selecionarfase() {
  textSize(36);
  textAlign(CENTER);
  fill('black');
  text("Fase",width/2,60);
  textSize(24);
  text("Selecione uma fase para jogar", width/2, 370);
  
  textSize(18);
  for(i = 0; i <= 10; i ++){
    if(aberto >= (i+2)){
      text(recorde[i],coluna[i],(linha[0]-40));
      if(i > 4){
        text(recorde[i],coluna[i-5],(linha[1]-40));
      }
    }
  }
  for(i = 0; i <= 10; i ++){
    if(aberto >= (i+2)){
      fill(128,128,128,100);
      circle(coluna[i]-15,linha[0]+40,12,12);
      circle(coluna[i],linha[0]+40,12,12);
      circle(coluna[i]+15,linha[0]+40,12,12);
      
      circle(coluna[i-5]-15,linha[1]+40,12,12);
      circle(coluna[i-5],linha[1]+40,12,12);
      circle(coluna[i-5]+15,linha[1]+40,12,12);
    }
    if(trofeudafase[i] >= 1){
      fill('yellow');
      if(i <= 4){
        circle(coluna[i]-15,linha[0]+40,12,12);
      }
      if(i > 4){
        circle(coluna[i-5]-15,linha[1]+40,12,12);
      }
    }
    if(trofeudafase[i] >= 2){
      fill('yellow');
      if(i <= 4){
        circle(coluna[i],linha[0]+40,12,12);
      }
      if(i > 4){
        circle(coluna[i-5],linha[1]+40,12,12);
      }
    }
    if(trofeudafase[i] >= 3){
      fill('yellow');
      if(i <= 4){
        circle(coluna[i]+15,linha[0]+40,12,12);
      }
      if(i > 4){
        circle(coluna[i-5]+15,linha[1]+40,12,12);
      }
    }
  }
  textSize(36);
  for(i = 0; i <= 10; i ++){
    fill('gray');
    circle(coluna[i],linha[0],60,60);
    fill('black');
    text(nomedafase[i],coluna[i],(linha[0]+10));
    if(i > 4){
      fill('gray');
      circle(coluna[i-5],linha[1],60,60);
      fill('black');
      text(nomedafase[i],coluna[i-5],(linha[1]+10));
    }
  }
  
  for(i = 0; i <= 10; i ++){
    if(aberto >= (i+1)){
      fill('white');
      circle(coluna[i],linha[0],60,60);
      fill('black');
      text(nomedafase[i],coluna[i],(linha[0]+10));
      if(i > 4){
        fill('white');
        circle(coluna[i-5],linha[1],60,60);
        fill('black');
        text(nomedafase[i],coluna[i-5],(linha[1]+10));
      }
    }
  }
  
  fill(173,216,230,100)
  if(fase <= 5){
    circle(coluna[fase-1],linha[0],60,60);
  }
  else{
    circle(coluna[fase-6],linha[1],60,60);
  }
}

function pontuacao() {
  fill('black');
  textSize(36);
  textAlign(CENTER);
  text("Pontuação",width/2,150);
  text(pontos, width/2, 200);
  
  pontuacaominima = dific*(qtdMaxima*10)*3;
  if(pontos > pontuacaominima/3){
    trof = 1;
    trofeudafase[fase-1] = 1;
  }
  if(pontos > pontuacaominima/1.5){
    trof = 2;
    trofeudafase[fase-1] = 2;
  }
  if(pontos >= pontuacaominima){
    trof = 3;
    trofeudafase[fase-1] = 3;
  }
  
  fill(150, 240, 200, 100);
  image(trofeu, width/2-90-rObj, 240-rObj, 2*rObj, 2*rObj);
  image(trofeu, width/2-rObj, 250-rObj, 2*rObj, 2*rObj);
  image(trofeu, width/2+90-rObj, 240-rObj, 2*rObj, 2*rObj);
  rect(170,210,260,80);
  
  if(trof >= 1){
    image(trofeu, width/2-90-rObj, 240-rObj, 2*rObj, 2*rObj);
  }
  if(trof >= 2){
    image(trofeu, width/2-rObj, 250-rObj, 2*rObj, 2*rObj);
  }
  if(trof >= 3){
    image(trofeu, width/2+90-rObj, 240-rObj, 2*rObj, 2*rObj);
  }
  
  fill('black');
  textSize(24);
  textAlign(RIGHT);
  text("Enter ->",580,380);
}

function fimdejogo() {
  fill('black');
  textSize(36);
  textAlign(CENTER);
  text("Fim de jogo",width/2,height/2);
  textSize(24);
  textAlign(RIGHT);
  text("Enter ->",580,380);
  zerar();
}

function creditos() {
  background('black');
  fill('white');
  textSize(24);
  textAlign(CENTER);
  text("CRÉDITOS",width/2,yCred);
  textSize(16);
  textAlign(LEFT);
  text("PROGRAMADOR:\nSueyvid José",width/2,yCred+40+16);
  text("EDUCADOR:\nRummenigge Rudson",width/2,yCred+195+16);
  image(Prog,160,yCred+40,100,125);
  image(Educ,160,yCred+195);
  yCred--;
  if(yCred <= 0-340){
    tela = 0;
    posicao = 1;
    xBarra = 220;
    yBarra = 130;
    heightBarra = 160;
  }
}

function zerar() {
  colisao();
  pontos = 0;
  momento = 0;
  qtd = 0;
  if(aberto <= 10) fase = aberto;
  vida = 3;
  explic = 1;
  instruc = 0;
  yCong = 500;
  errou = 0;
  pontuacaominima = 0;
  trof = 0;
}

function explicacao() {
  background(150, 240, 200);
  fill('black');
  textAlign(CENTER);
  textSize(32);
  text("INSTRUÇÕES", width/2, 60);
  
  if(explic < 6){
    textSize(24);
    textAlign(RIGHT);
    text("Próximo ->",580,380);
  }
  
  if(explic == 6 && instruc == 0){
    textSize(24);
    textAlign(CENTER);
    text("COMEÇAR",width/2,380);
  }
  
  if(explic == 6 && instruc == 1){
    textSize(24);
    textAlign(CENTER);
    text("OK",width/2,380);
  }
  
  textSize(16);
  textAlign(CENTER);
  if(explic == 1){
    text("Um número primo\né aquele que é dividido\napenas por um e por ele mesmo.",width/2,200);
  }
  if(explic == 2){
    text("O presente game utiliza a tabela\ndo Crivo de Eratóstenes\npara criar um game educacional\npara ensinar mais sobre\no universo dos números primo.",width/2,200);
  }
  if(explic == 3){
    text("Disciplina: Matemática 6º Ano\n\nHabilidade: (EF06MA05) Classificar números naturais\nem primos e compostos, estabelecer relações\nentre números, expressos pelos termos “é múltiplo de”,\n “é divisor de”, “é fator de”, e estabelecer, por meio de\n investigações, critérios de divisibilidade por\n2, 3, 4, 5, 6, 8, 9, 10, 100 e 1000",width/2,150);
  }
  if(explic == 4){
    text("O usuário irá controlar\nos números primos, através do teclado,\ne irá anular os seus múltiplos,\npois somente ele é considerado primo,\nos seus múltiplos não.",width/2,200);
  }
  if(explic == 5){
    text("Nessa primeira fase\niremos procurar os números\nmúltiplos do primo 2.",width/2,200);
  }
  if(explic == 6){
    text("Um número é divisível por 2\nquando for PAR, e um número\né par quando seu último algarismo\nfor PAR, ou seja, {0, 2, 4, 6, 8}",width/2,200);
  }
}

function keyPressed() {
  if (key == "Escape"){
    if(tela == 4){
      tela = 11;
    }
    else{
      tela = 0;
      posicao = 1;
      xBarra = 220;
      yBarra = 130;
      heightBarra = 160;
      pontostotais += pontos;
      zerar();
    }
  }
  
  //Tela dificuldade
  if(tela == 2){
    if(key == "ArrowDown" && opcaodific != 3){
      opcaodific = opcaodific + 1;
      yBarra += 60;
    }
    if(key == "ArrowUp" && opcaodific != 1){
      opcaodific = opcaodific - 1;
      yBarra -= 60;
    }
    if (key == "Enter" && heightBarra == 160){
     if(yBarra == 130){
        dific = 1;
      }
      if(yBarra == 190){
        dific = 2;
      }
      if(yBarra == 250){
        dific = 3;
      }
      tela = 0;
      posicao = 1;
      xBarra = 220;
      yBarra = 130;
      heightBarra = 160;
    }
  }
  
  //Tela configurações
  else if(tela == 3){
    if(key == "ArrowDown" && opcaoconfig != 3){
      opcaoconfig += 1;
    }
    if(key == "ArrowUp" && opcaoconfig != 1){
      opcaoconfig -= 1;
    }
    if (key == "Enter"){
      if(opcaoconfig == 2){
        yCred = 420;
        tela = 9;
      }
      if(opcaoconfig == 3){
        instruc = 1;
        tela = 13;
      }
    }
  }
  
  //Tela Menu
  else if(tela == 0){
    if(key == "ArrowDown" && posicao != 3){
      posicao += 1;
      yBarra += 60;
      heightBarra += 30;
      xBarra -= 15;
    }
    if(key == "ArrowUp" && posicao != 1){
      posicao -= 1;
      yBarra -= 60;
      heightBarra -= 30;
      xBarra += 15;
    }
    if (key == "Enter" && yBarra == 190){
      tela = posicao;
      if(dific == 1){
        xBarra = 220;
        yBarra = 130;
        heightBarra = 160;
        opcaodific = 1;
      }
      if(dific == 2){
        xBarra = 220;
        yBarra = 190;
        heightBarra = 160;
        opcaodific = 2;
      }
      if(dific == 3){
        xBarra = 220;
        yBarra = 250;
        heightBarra = 160;
        opcaodific = 3;
      }
    }
    else if(key == "Enter"){
      tela = posicao;
    }
  }
  
  //No fim de jogo
  else if(key == "Enter" && tela == 8){
    tela = 0;
  }
  else if(key == "Enter" && tela == 11){
    if(fase == aberto && qtd >= 10){
      aberto += 1;
    }
    if(pontos >= recorde[fase-1]){
      recorde[fase-1] = pontos;
    }
    pontostotais += pontos;
    zerar();
    tela = 0;
  }
  
  //Na seleção de fase
  if(tela == 12){
    if(key == "ArrowRight" && aberto >= (fase+1) && fase < 10){
      fase += 1;
    }
    else if(key == "ArrowLeft" && fase > 1){
      fase -= 1;
    }
    else if(key == "ArrowDown" && (fase+5) <= aberto && fase <= 5){
      fase += 5;
    }
    else if(key == "ArrowUp" && fase >= 6){
      fase -= 5;
    }
    for(i = 0; i < 10; i ++){
      if(key == "Enter" && fase == (i+1)){
        tPers = nomedafase[i]
        tela = 4;
      }
    }
  }
  
  //configurações do som
  if(tela == 3 && opcaoconfig == 1){
    if(key == "ArrowLeft" && som){
      som = false;
    }
    if(key == "ArrowRight" && !som){
      som = true;
    }
  }
  
  //Na explicação
  else if(key == "Enter" && (tela == 1 || tela == 13) && explic < 6){
    explic = explic + 1;
  }
  else if(key == "Enter" && tela == 1 && explic >= 6 && instruc == 0){
    tela = 12;
  }
  else if(key == "Enter" && tela == 13 && explic >= 6 && instruc == 1){
    tela = 0;
    posicao = 1;
    xBarra = 220;
    yBarra = 130;
    heightBarra = 160;
    zerar();
  }
}