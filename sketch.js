var posicao = 1;
var xBarra = 220;
var yBarra = 130;
var largura = 160;
var tela = 0;
var dific = 1;
var opcaodific = 0;
var opcaoconfig = 1;
var yCred = 420;
var explic = 1;
var instruc = 0;
var som = true;

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
var andando = 0
var xPers = 20, yPers = 20, tPers = 2;
var xObj = 0, yObj = 0, tObj = 0;
var xObj2 = 0, yObj2 = 0, tObj2 = 0;
var xObj3 = 0, yObj3 = 0, tObj3 = 0;
var xObj4 = 0, yObj4 = 0, tObj4 = 0;
var rObj = 25, rPers = 30;
var xZona = 100, yZona = 100;
var widthZona = 200, heightZona = 180;

var aleat = 0;
var pontostotais = 0;
var pontos = 0;
var tempo = 0;
var momento = 0;
var qtd = 0;
var yCong = 500;
var congratulação;
var fase = 1;
var vida = 3;

var tMaximo = 11;
var tFonte = 32;
var tDist = 10;
var moeda_som;

function preload() {
  Educ = loadImage('Rummenigge.JPG');
  Prog = loadImage('Sueyvid.jpg');
  obj = loadImage('moeda_objeto.png');
  castelo = loadImage('castelo_zona_segura.png');
  zona_segura = loadImage('zona_segura.png');
  Pers_down = loadImage('Warrior_down.png');
  Pers_down[0] = loadImage('Warrior_down_1.png');
  Pers_down[1] = loadImage('Warrior_down.png');
  Pers_down[2] = loadImage('Warrior_down_2.png');
  Pers_down[3] = loadImage('Warrior_down.png');
  Pers_left = loadImage('Warrior_left.png');
  Pers_left[0] = loadImage('Warrior_left_1.png');
  Pers_left[1] = loadImage('Warrior_left.png');
  Pers_left[2] = loadImage('Warrior_left_2.png');
  Pers_left[3] = loadImage('Warrior_left.png');
  Pers_right = loadImage('Warrior_right.png');
  Pers_right[0] = loadImage('Warrior_right_1.png');
  Pers_right[1] = loadImage('Warrior_right.png');
  Pers_right[2] = loadImage('Warrior_right_2.png');
  Pers_right[3] = loadImage('Warrior_right.png');
  Pers_up = loadImage('Warrior_up.png');
  Pers_up[0] = loadImage('Warrior_up_1.png');
  Pers_up[1] = loadImage('Warrior_up.png');
  Pers_up[2] = loadImage('Warrior_up_2.png');
  Pers_up[3] = loadImage('Warrior_up.png');
  coin[0] = loadImage('goldCoin1.png');
  coin[1] = loadImage('goldCoin2.png');
  coin[2] = loadImage('goldCoin3.png');
  coin[3] = loadImage('goldCoin4.png');
  coin[4] = loadImage('goldCoin5.png');
  coin[5] = loadImage('goldCoin6.png');
  coin[6] = loadImage('goldCoin7.png');
  coin[7] = loadImage('goldCoin8.png');
  coin[8] = loadImage('goldCoin9.png');
}

function setup() {
  createCanvas(600, 400);
  frameRate(60);
}

function setupjogo() {
  xPers = xZona+widthZona/2;
  yPers = yZona+heightZona/2;
  aleatorio();
  moeda_som = createAudio('moeda.mp3');
  dano_som = createAudio('dano.mp3');
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
    jogo();
  }
  if(tela == 6){
    setup();
    tela = 0;
  }
  if(tela == 7){
    setup();
    tela = 8;
  }
  if(tela == 8){
    background(150, 240, 200);
    fimdejogo();
  }
  if(tela == 9){
    creditos();
  }
  if(tela == 10){
    setupjogo();
    instruc = 0;
    tela = 4;
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
  rect(xBarra, yBarra, largura, 40, 20);
  fill('black');
  textAlign(CENTER);
  textSize(32);
  text("MENU", width/2, 60);
  text("Iniciar", width/2, 160);
  text("Dificuldade", width/2, 220);
  text("Configurações", width/2, 280);
  textSize(15);
  text("Seus pontos: "+pontostotais,width/2,360);
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
    tMaximo = (100*tPers)+1;
    tFonte = 24;
    tDist = 8;
  }
}

function jogo() {
  clear();
  background('lightgreen');
  fill('#7CFC00');
  rect(0,0,600,50);
  
  if(dific == 1){
    tMaximo = 11*fase;
  }
  if(dific == 2){
    tMaximo = 101*fase;
  }
  if(dific == 3){
    tMaximo = tMaximo*fase;
  }
  
  //Zona segura
  fill('green');
  rect(xZona,yZona,widthZona,heightZona);
  image(castelo,xZona,yZona,widthZona,heightZona)
  fill('black');
  textSize(24);
  fill('white')
  rect(xZona+28,yZona+60,24,24)
  rect(xZona+widthZona-52,yZona+60,24,24)
  fill('red');
  text(tPers,xZona+40,yZona+80)
  text(tPers,xZona+widthZona-40,yZona+80)
  
  //Objetos
  if(dific >= 1){
    fill('lightblue');
    image(obj,xObj-1.2*rObj,yObj-1.2*rObj,2.4*rObj,2.4*rObj);
    image(obj,xObj2-1.2*rObj,yObj2-1.2*rObj,2.4*rObj,2.4*rObj);
    
    textSize(tFonte);
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
  if (keyIsDown(UP_ARROW) && (yPers > 40 + rPers) && errou == 0) {
    up = true;
    direcao = "up";
    andando = 1;
    yPers -= 3;
  }
  else if(direcao == "up" && errou == 0){
    image(Pers_up,xPers-rPers,yPers-rPers,2*rPers,2*rPers);
    right = false;
  }
  if (keyIsDown(DOWN_ARROW) && (yPers < height - rPers) && errou == 0) {
    down = true;
    direcao = "down";
    andando = 1;
    yPers += 3;
  }
  else if(direcao == "down" && errou == 0){
    image(Pers_down,xPers-rPers,yPers-rPers,2*rPers,2*rPers);
    down = false;
  }
  if (keyIsDown(LEFT_ARROW) && (xPers > 0 + rPers) && errou == 0) {
    left = true;
    direcao = "left";
    andando = 1;
    xPers -= 3;
  }
  else if(direcao == "left" && errou == 0){
    image(Pers_left,xPers-rPers,yPers-rPers,2*rPers,2*rPers);
    left = false;
  }
  if (keyIsDown(RIGHT_ARROW) && (xPers < width - rPers) && errou == 0) {
    right = true;
    direcao = "right";
    andando = 1;
    xPers += 3;
  }
  else if(direcao == "right" && errou == 0){
    image(Pers_right,xPers-rPers,yPers-rPers,2*rPers,2*rPers);
    right = false;
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
  
  //Instruções
  if(tempo <= 3 && qtd < 3){
    textSize(24);
    text("Mova-se até o seu múltiplo",width/2, 340);
  }
  
  //Variáveis de pontuação
  moeda();
  textSize(32);
  fill('black');
  textAlign(LEFT);
  text(pontos,35,35);
  textAlign(LEFT);
  
  textAlign(RIGHT);
  if(aleat == 0){
    tempo += 1/60;
  }
  text(tempo.toFixed(1) + " s",590,35);
  
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
    tela = 7;
    vida = 3;
    pontos = 0;
    qtd = 0;
  }
  fill('black');
  textSize(16);
  textAlign(CENTER);
  text(vida+" vidas",width/2,20);
  
  //Teste da zona segura para objetos
  if(xObj >= xZona-rObj && xObj <= widthZona+xZona+rObj && yObj >= yZona-rObj && yObj <= heightZona+yZona+rObj){
    aleat = 1;
    aleatorio();
  }
  if(xObj2 >= xZona-rObj && xObj2 <= widthZona+xZona+rObj && yObj2 >= yZona-rObj && yObj2 <= heightZona+yZona+rObj){
    aleat = 1;
    aleatorio();
  }
  if(xObj3 >= xZona-rObj && xObj3 <= widthZona+xZona+rObj && yObj3 >= yZona-rObj && yObj3 <= heightZona+yZona+rObj){
    aleat = 1;
    aleatorio();
  }
  if(xObj4 >= xZona-rObj && xObj4 <= widthZona+xZona+rObj && yObj4 >= yZona-rObj && yObj4 <= heightZona+yZona+rObj){
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
  if(tempo >= 5){
    aleat = 1;
    aleatorio();
    xPers = xZona+widthZona/2;
    yPers = yZona+heightZona/2;
    momento = 0;
    congratulação = "";
    tempo = 0;
    yCong = 50;
    pontos = pontos-(dific*10);
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
      //Objeto 1
      if(tObj%tPers == 0 && dist(xObj, yObj, xPers, yPers) < rPers){
        momento = tempo.toFixed(1);
        pontos = parseInt(pontos + (5-momento) * dific*10 * fase);
        xPers = xZona+widthZona/2;
        yPers = yZona+heightZona/2;
        qtd += 1;
        tempo = 0;
        yCong = 50;
        direcao = "down";
        if(som){
          moeda_som.play(true);
        }
        zeradirecoes();
        aleat = 1;
        aleatorio();
      }
      else if(tObj%tPers != 0 && dist(xObj, yObj, xPers, yPers) < rPers){
        pontos = pontos - (dific*100*fase);
        xPers = xZona+widthZona/2;
        yPers = yZona+heightZona/2;
        vida -= 1;
        tempo = 0;
        momento = 0;
        errou = 1;
        if(som){
          dano_som.play(true);
        }
        yCong = 50;
        aleat = 1;
        aleatorio();
      }
    
      //Objeto 2
      if(tObj2%tPers == 0 && dist(xObj2, yObj2, xPers, yPers) < rPers){
        momento = tempo.toFixed(1);
        pontos = parseInt(pontos + (5-momento) * dific*10 * fase);
        xPers = xZona+widthZona/2;
        yPers = yZona+heightZona/2;
        qtd += 1;
        tempo = 0;
        yCong = 50;
        direcao = "down";
        if(som){
          moeda_som.play(true);
        }
        zeradirecoes();
        aleat = 1;
        aleatorio();
      }
      else if(tObj2%tPers != 0 && dist(xObj2, yObj2, xPers, yPers) < rPers){
        pontos = pontos - (dific*100*fase);
        xPers = xZona+widthZona/2;
        yPers = yZona+heightZona/2;
        vida -= 1;
        tempo = 0;
        momento = 0;
        errou = 1;
        if(som){
          dano_som.play(true);
        }
        yCong = 50;
        aleat = 1;
        aleatorio();
      }
    
      if(dific >= 2){
        //Objeto 3
        if(tObj3%tPers == 0 && dist(xObj3, yObj3, xPers, yPers) < rPers){
          momento = tempo.toFixed(1);
          pontos = parseInt(pontos + (5-momento) * dific*10 * fase);
          xPers = xZona+widthZona/2;
          yPers = yZona+heightZona/2;
          qtd += 1;
          tempo = 0;
          yCong = 50;
          direcao = "down";
          if(som){
            moeda_som.play(true);
          }
          zeradirecoes();
          aleat = 1;
          aleatorio();
        }
        else if(tObj3%tPers != 0 && dist(xObj3, yObj3, xPers, yPers) < rPers){
          pontos = pontos - (dific*100*fase);
          xPers = xZona+widthZona/2;
          yPers = yZona+heightZona/2;
          vida -= 1;
          tempo = 0;
          momento = 0;
          errou = 1;
          if(som){
            dano_som.play(true);
          }
          yCong = 50;
          aleat = 1;
          aleatorio();
        }  
      }
    
      if(dific >= 3){
        //Objeto 4
        if(tObj4%tPers == 0 && dist(xObj4, yObj4, xPers, yPers) < rPers){
          momento = tempo.toFixed(1);
          pontos = parseInt(pontos + (5-momento) * dific*10 * fase);
          xPers = xZona+widthZona/2;
          yPers = yZona+heightZona/2;
          qtd += 1;
          tempo = 0;
          yCong = 50;
          direcao = "down";
          if(som){
            moeda_som.play(true);
          }
          zeradirecoes();
          aleat = 1;
          aleatorio();
        }
        else if(tObj4%tPers != 0 && dist(xObj4, yObj4, xPers, yPers) < rPers){
          pontos = pontos - (dific*100*fase);
          xPers = xZona+widthZona/2;
          yPers = yZona+heightZona/2;
          vida -= 1;
          tempo = 0;
          momento = 0;
          errou = 1;
          if(som){
            dano_som.play(true);
          }
          yCong = 50;
          aleat = 1;
          aleatorio();
        }
      }
    }
  }
  
  //Teste de distância entre os objetos
  if(dist(xObj, yObj, xObj2, yObj2) < 2*rObj ||
     dist(xObj, yObj, xObj3, yObj3) < 2*rObj ||
     dist(xObj, yObj, xObj4, yObj4) < 2*rObj){
    aleat = 1;
    aleatorio();
  }
  if(dist(xObj2, yObj2, xObj3, yObj3) < 2*rObj ||
     dist(xObj2, yObj2, xObj4, yObj4) < 2*rObj ||
     dist(xObj3, yObj3, xObj4, yObj4) < 2*rObj){
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
  if(tempo < 1.2 && momento != 0 && errou == 0){
    textSize(24);
    fill('white');
    text("+ "+parseInt((5-momento) * dific*10 * fase),xPers,yPers+10-yCong);
  }
  if(tempo < 1.2 && momento == 0 && errou == 1){
    textSize(24);
    fill('white');
    text("- "+(dific*100*fase),xPers,yPers+10-yCong);
    perdeuvida();
  }
  if(tempo > 1.2 && momento == 0){
    errou = 0;
  }
  
  if(tempo < 1.2 && qtd >= 3 && momento == 0 && !errou){
    textSize(24);
    fill('black');
    text("Seja mais rápido",width/2,380);
  }
  if(tempo < 1.2 && qtd >= 3 && momento == 0 && errou){
    textSize(24);
    fill('black');
    text("Cuidado!",width/2,380);
  }
  
  if(tempo < 2 && momento != 0){
    textSize(32);
    fill(0,0,0,opacidade);
    text("Rodada "+qtd,300,380);
  }
  opacidade -= 3;
  if(tempo == 0){
    opacidade = 250;
  }
  
  //Personagem
  fill('yellow');
  if(andando == 0){}
  fill('black');
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
  if(qtd == 0){
    momento = 0;
  }
  
  if(qtd == 10){
    tela = 11;
  }
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
  if(andando == 1){
  if(time>7){
    image(Pers_down,xPers-rPers,yPers-rPers,2*rPers,2*rPers);
    time = 0;
  }
  }
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

function dificuldade() {
  fill('white');
  rect(xBarra, yBarra, largura, 40, 20);
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
  rect(xBarra, yBarra, largura, 40, 20);
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
  text("Selecione uma fase para jogar", width/2, 360);
  textSize(36);
  
  if(fase == 1){
    fill('lightblue')
  }
  else if(aberto >= 1){
    fill('white');
  }
  else{
    fill('gray');
  }
  circle(160,160,60,60);
  fill('black');
  text("2",160,170);
  
  if(fase == 2){
    fill('lightblue')
  }
  else if(aberto >= 2){
    fill('white');
  }
  else{
    fill('gray');
  }
  circle(230,160,60,60);
  fill('black');
  text("3",230,170);
  
  if(fase == 3){
    fill('lightblue')
  }
  else if(aberto >= 3){
    fill('white');
  }
  else{
    fill('gray');
  }
  circle(300,160,60,60);
  fill('black');
  text("5",300,170);
  
  if(fase == 4){
    fill('lightblue')
  }
  else if(aberto >= 4){
    fill('white');
  }
  else{
    fill('gray');
  }
  circle(370,160,60,60);
  fill('black');
  text("7",370,170);
  
  if(fase == 5){
    fill('lightblue')
  }
  else if(aberto >= 5){
    fill('white');
  }
  else{
    fill('gray');
  }
  circle(440,160,60,60);
  fill('black');
  text("11",440,170);
  
  if(fase == 6){
    fill('lightblue')
  }
  else if(aberto >= 6){
    fill('white');
  }
  else{
    fill('gray');
  }
  circle(160,250,60,60);
  fill('black');
  text("13",160,260);
  
  if(fase == 7){
    fill('lightblue')
  }
  else if(aberto >= 7){
    fill('white');
  }
  else{
    fill('gray');
  }
  circle(230,250,60,60);
  fill('black');
  text("17",230,260);
  
  if(fase == 8){
    fill('lightblue')
  }
  else if(aberto >= 8){
    fill('white');
  }
  else{
    fill('gray');
  }
  circle(300,250,60,60);
  fill('black');
  text("19",300,260);
  
  if(fase == 9){
    fill('lightblue')
  }
  else if(aberto >= 9){
    fill('white');
  }
  else{
    fill('gray');
  }
  circle(370,250,60,60);
  fill('black');
  text("23",370,260);
  
  if(fase == 10){
    fill('lightblue')
  }
  else if(aberto >= 10){
    fill('white');
  }
  else{
    fill('gray');
  }
  circle(440,250,60,60);
  fill('black');
  text("27",440,260);
}

function pontuacao() {
  fill('black');
  textSize(36);
  textAlign(CENTER);
  text("Pontuação",width/2,175);
  text(pontos, width/2, 225)
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

function zerar() {
  pontos = 0;
  tempo = 0;
  momento = 0;
  qtd = 0;
  fase = 1;
  vida = 3;
  explic = 1;
  instruc = 0;
  yCong = 500;
  direcao = "down";
  andando = 0;
  errou = 0;
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
    largura = 160;
  }
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
    tela = 6;
    posicao = 1;
    xBarra = 220;
    yBarra = 130;
    largura = 160;
    pontostotais += pontos;
    zerar();
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
    if (key == "Enter" && largura == 160){
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
      largura = 160;
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
      largura += 30;
      xBarra -= 15;
    }
    if(key == "ArrowUp" && posicao != 1){
      posicao -= 1;
      yBarra -= 60;
      largura -= 30;
      xBarra += 15;
    }
    if (key == "Enter" && yBarra == 190){
      tela = posicao;
      if(dific == 1){
        xBarra = 220;
        yBarra = 130;
        largura = 160;
        opcaodific = 1;
      }
      if(dific == 2){
        xBarra = 220;
        yBarra = 190;
        largura = 160;
        opcaodific = 2;
      }
      if(dific == 3){
        xBarra = 220;
        yBarra = 250;
        largura = 160;
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
    if(fase == aberto){
      aberto += 1;
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
    
    else if(key == "Enter" && fase == 1){
      tPers = 2
      tela = 10;
    }
    else if(key == "Enter" && fase == 2){
      tPers = 3
      tela = 10;
    }
    else if(key == "Enter" && fase == 3){
      tPers = 5
      tela = 10;
    }
    else if(key == "Enter" && fase == 4){
      tPers = 7
      tela = 10;
    }
    else if(key == "Enter" && fase == 5){
      tPers = 11
      tela = 10;
    }
    else if(key == "Enter" && fase == 6){
      tPers = 13
      tela = 10;
    }
    else if(key == "Enter" && fase == 7){
      tPers = 17
      tela = 10;
    }
    else if(key == "Enter" && fase == 8){
      tPers = 19
      tela = 10;
    }
    else if(key == "Enter" && fase == 9){
      tPers = 23
      tela = 10;
    }
    else if(key == "Enter" && fase == 10){
      tPers = 27
      tela = 10;
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
    largura = 160;
    zerar();
  }
}
