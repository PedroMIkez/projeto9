var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;
var coin =0;
var gameState ="serve";

  boundary1 = createSprite(190,0,420,3);
  boundary2 = createSprite(190,400,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "orange";
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "blue";
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "blue";
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "blue";
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "blue";
  car5 = createSprite(397,370,10,10);
 car5.shapeColor = "blue";
 car6 = createSprite(3,370,10,10);
 car6.shapeColor = "blue";
  car7 = createSprite(377,40,10,10);
  car7.shapeColor = "blue";
  casa1 = createSprite(200, 200);
  casa1.shapeColor= "black"
  var moeda1 = createSprite(51, 46, 8, 8);
  moeda1.shapeColor= "yellow"
   var moeda2 = createSprite(99, 46, 8, 8);
  moeda2.shapeColor= "yellow"
  var moeda3 = createSprite(144, 46, 8, 8);
  moeda3.shapeColor= "yellow"
  var moeda4 = createSprite(199, 46, 8, 8);
  moeda4.shapeColor= "yellow"
  var moeda5 = createSprite(244, 46, 8, 8);
  moeda5.shapeColor= "yellow"
 var moeda6 = createSprite(299, 46, 8, 8);
  moeda6.shapeColor= "yellow" 
  var moeda7 = createSprite(366, 46, 8, 8);
  moeda7.shapeColor= "yellow"
  var moeda8 = createSprite(134, 192, 8, 8);
  moeda8.shapeColor= "yellow"
 var moeda9 = createSprite(134, 147, 8, 8);
  moeda9.shapeColor= "yellow" 
 var moeda10 = createSprite(134, 227, 8, 8);
  moeda10.shapeColor= "yellow" 
  var moeda11 = createSprite(177, 134, 8, 8);
  moeda11.shapeColor= "yellow"
  var moeda12 = createSprite(211, 134, 8, 8);
  moeda12.shapeColor= "yellow"
  var moeda13 = createSprite(267, 137, 8, 8);
  moeda13.shapeColor= "yellow"
  var moeda14 = createSprite(267, 201, 8, 8);
  moeda14.shapeColor= "yellow"
  var moeda15 = createSprite(267, 241, 8, 8);
  moeda15.shapeColor= "yellow"
  var moeda16 = createSprite(244, 255, 8, 8);
  moeda16.shapeColor= "yellow"
  var moeda17 = createSprite(198, 257, 8, 8);
  moeda17.shapeColor= "yellow"
  var moeda18 = createSprite(153, 252, 8, 8);
  moeda18.shapeColor= "yellow"
  var moeda19 = createSprite(24, 363, 8, 8);
  moeda19.shapeColor= "yellow"
  var moeda20 = createSprite(63, 363, 8, 8);
  moeda20.shapeColor= "yellow"
   var moeda21 = createSprite(122, 363, 8, 8);
  moeda21.shapeColor= "yellow"
   var moeda22 = createSprite(166, 363, 8, 8);
  moeda22.shapeColor= "yellow"
   var moeda23 = createSprite(222, 363, 8, 8);
  moeda23.shapeColor= "yellow"
   var moeda24 = createSprite(266, 363, 8, 8);
  moeda24.shapeColor= "yellow"
   var moeda25 = createSprite(333, 363, 8, 8);
  moeda25.shapeColor= "yellow"
   var moeda26 = createSprite(377, 363, 8, 8);
  moeda26.shapeColor= "yellow"
   var moeda27 = createSprite(377, 307, 8, 8);
  moeda27.shapeColor= "yellow"
   var moeda28 = createSprite(377, 255, 8, 8);
  moeda28.shapeColor= "yellow"
   var moeda29 = createSprite(377, 200, 8, 8);
  moeda29.shapeColor= "yellow"
   var moeda30 = createSprite(377, 155, 8, 8);
  moeda30.shapeColor= "yellow"
   var moeda31 = createSprite(377, 100, 8, 8);
  moeda31.shapeColor= "yellow"
  
  
  
  
  
//adicione velocidade para fazer o carro se mover.
 
createEdgeSprites();


function draw() {
   background("gray");
   fill("red");
  textSize(24);
  text("Tentativas: " + life,255,19);
  fill("yellow")
  text("Moedas: " + coin,26,19);
  strokeWeight(0);
  fill("blue");
  rect(2,160,60,60);
  
  
// crie a função rebater, para fazer o carro rebater nos limites
car1.bounceOff(boundary1);
car1.bounceOff(boundary2);
car2.bounceOff(boundary1);
car2.bounceOff(boundary2);
car3.bounceOff(boundary1);
car3.bounceOff(boundary2);
car4.bounceOff(boundary1);
car4.bounceOff(boundary2);
car5.bounceOff(boundary1);
car5.bounceOff(boundary2);
sam.bounceOff(boundary1);
sam.bounceOff(boundary2);
sam.bounceOff(rightEdge);
sam.bounceOff(leftEdge);
car5.bounceOff(edges);
car6.bounceOff(edges);
car7.bounceOff(edges);
car1.bounceOff(casa1);
car2.bounceOff(casa1);
car3.bounceOff(casa1);
car4.bounceOff(casa1);
car5.bounceOff(casa1);
car6.bounceOff(casa1);
car7.bounceOff(casa1);
sam.collide(casa1);



//Adicione a condição para fazer Sam se mover para a esquerda e para a direita
if (keyDown("RIGHT_ARROW")) {
  sam.x= sam.x+2;
  playSound("assets/category_objects/switch.mp3")
  
}

if (keyDown("LEFT_ARROW")) {
  sam.x = sam.x-2;
   playSound("assets/category_objects/switch.mp3")
}
if (keyDown("up")) {
 sam.y = sam.y-2; 
  playSound("assets/category_objects/switch.mp3")
}
if (keyDown("down")) {
 sam.y = sam.y+2;  
  playSound("assets/category_objects/switch.mp3")
}




//Adicione a condição para reduzir a vida de Sam quando ele encostar no carro.
 if (sam.isTouching(car1) || sam.isTouching(car2) || sam.isTouching(car3) || sam.isTouching(car4) || sam.isTouching(car5) || sam.isTouching(car6) || sam.isTouching(car7)){
 sam.x = 20;
 sam.y = 190;
  life = life +1; 
  playSound("assets/category_explosion/vibrant_game_arcade_game_negative_hit_6_pop_bubble.mp3")
 }
 if (sam.isTouching(moeda1)) {
   coin = coin +1;
   moeda1.destroy(sam);
   playSound("assets/category_bell/vibrant_cash_register_open_positive_game_open.mp3")
   
 }
 if (sam.isTouching(moeda2)) {
   coin = coin +1;
   moeda2.destroy(sam);
   playSound("assets/category_bell/vibrant_cash_register_open_positive_game_open.mp3")
   
 }
 if (sam.isTouching(moeda3)) {
   coin = coin +1;
   moeda3.destroy(sam);
   playSound("assets/category_bell/vibrant_cash_register_open_positive_game_open.mp3")
   
 }
 if (sam.isTouching(moeda4)) {
   coin = coin +1;
   moeda4.destroy(sam);
   playSound("assets/category_bell/vibrant_cash_register_open_positive_game_open.mp3")
   
 }
 if (sam.isTouching(moeda5)) {
   coin = coin +1;
   moeda5.destroy(sam);
   playSound("assets/category_bell/vibrant_cash_register_open_positive_game_open.mp3")
   
 }
 if (sam.isTouching(moeda6)) {
   coin = coin +1;
   moeda6.destroy(sam);
   playSound("assets/category_bell/vibrant_cash_register_open_positive_game_open.mp3")
   
 }
 if (sam.isTouching(moeda7)) {
   coin = coin +1;
   moeda7.destroy(sam);
   playSound("assets/category_bell/vibrant_cash_register_open_positive_game_open.mp3")
   
 } 
 if (sam.isTouching(moeda8)) {
   coin = coin +1;
   moeda8.destroy(sam);
   playSound("assets/category_bell/vibrant_cash_register_open_positive_game_open.mp3")
   
 }
 if (sam.isTouching(moeda9)) {
   coin = coin +1;
   moeda9.destroy(sam);
   playSound("assets/category_bell/vibrant_cash_register_open_positive_game_open.mp3")
   
 }
 if (sam.isTouching(moeda10)) {
   coin = coin +1;
   moeda10.destroy(sam);
   playSound("assets/category_bell/vibrant_cash_register_open_positive_game_open.mp3")
   
 }
 if (sam.isTouching(moeda11)) {
   coin = coin +1;
   moeda11.destroy(sam);
   playSound("assets/category_bell/vibrant_cash_register_open_positive_game_open.mp3")
   
 }
 if (sam.isTouching(moeda12)) {
   coin = coin +1;
   moeda12.destroy(sam);
   playSound("assets/category_bell/vibrant_cash_register_open_positive_game_open.mp3")
   
 }
 if (sam.isTouching(moeda13)) {
   coin = coin +1;
   moeda13.destroy(sam);
   playSound("assets/category_bell/vibrant_cash_register_open_positive_game_open.mp3")
   
 }
 if (sam.isTouching(moeda14)) {
   coin = coin +1;
   moeda14.destroy(sam);
   playSound("assets/category_bell/vibrant_cash_register_open_positive_game_open.mp3")
   
 }
 if (sam.isTouching(moeda15)) {
   coin = coin +1;
   moeda15.destroy(sam);
   playSound("assets/category_bell/vibrant_cash_register_open_positive_game_open.mp3")
   
 }
 if (sam.isTouching(moeda16)) {
   coin = coin +1;
   moeda16.destroy(sam);
   playSound("assets/category_bell/vibrant_cash_register_open_positive_game_open.mp3")
   
 }
 if (sam.isTouching(moeda17)) {
   coin = coin +1;
   moeda17.destroy(sam);
   playSound("assets/category_bell/vibrant_cash_register_open_positive_game_open.mp3")
   
 }
 if (sam.isTouching(moeda18)) {
   coin = coin +1;
   moeda18.destroy(sam);
   playSound("assets/category_bell/vibrant_cash_register_open_positive_game_open.mp3")
   
 }
 if (sam.isTouching(moeda19)) {
   coin = coin +1;
   moeda19.destroy(sam);
   playSound("assets/category_bell/vibrant_cash_register_open_positive_game_open.mp3")
   
 }
 if (sam.isTouching(moeda20)) {
   coin = coin +1;
   moeda20.destroy(sam);
   playSound("assets/category_bell/vibrant_cash_register_open_positive_game_open.mp3")
   
 }
 if (sam.isTouching(moeda21)) {
   coin = coin +1;
   moeda21.destroy(sam);
   playSound("assets/category_bell/vibrant_cash_register_open_positive_game_open.mp3")
   
 }
 if (sam.isTouching(moeda22)) {
   coin = coin +1;
   moeda22.destroy(sam);
   playSound("assets/category_bell/vibrant_cash_register_open_positive_game_open.mp3")
   
 }
 if (sam.isTouching(moeda23)) {
   coin = coin +1;
   moeda23.destroy(sam);
   playSound("assets/category_bell/vibrant_cash_register_open_positive_game_open.mp3")
   
 }
 if (sam.isTouching(moeda24)) {
   coin = coin +1;
   moeda24.destroy(sam);
   playSound("assets/category_bell/vibrant_cash_register_open_positive_game_open.mp3")
   
 }
 if (sam.isTouching(moeda25)) {
   coin = coin +1;
   moeda25.destroy(sam);
   playSound("assets/category_bell/vibrant_cash_register_open_positive_game_open.mp3")
   
 }
 if (sam.isTouching(moeda26)) {
   coin = coin +1;
   moeda26.destroy(sam);
   playSound("assets/category_bell/vibrant_cash_register_open_positive_game_open.mp3")
   
 }
 if (sam.isTouching(moeda27)) {
   coin = coin +1;
   moeda27.destroy(sam);
   playSound("assets/category_bell/vibrant_cash_register_open_positive_game_open.mp3")
   
 }
 if (sam.isTouching(moeda28)) {
   coin = coin +1;
   moeda28.destroy(sam);
   playSound("assets/category_bell/vibrant_cash_register_open_positive_game_open.mp3")
   
 }
 if (sam.isTouching(moeda29)) {
   coin = coin +1;
   moeda29.destroy(sam);
   playSound("assets/category_bell/vibrant_cash_register_open_positive_game_open.mp3")
   
 }
 if (sam.isTouching(moeda30)) {
   coin = coin +1;
   moeda30.destroy(sam);
   playSound("assets/category_bell/vibrant_cash_register_open_positive_game_open.mp3")
   
 }
 if (sam.isTouching(moeda31)) {
   coin = coin +1;
   moeda31.destroy(sam);
   playSound("assets/category_bell/vibrant_cash_register_open_positive_game_open.mp3")
   
 }
 if(gameState == "serve")
 {
  fill("green");
   textSize(19);
 text("O JOGO MAIS DIFICIL DO MUNDO 2.0" ,3, 100);
 text("aperte espaço para começar",3,122)
 text("mova-se com as setas do teclado")
 }
 
 if(gameState == "play")
 {

 }
 
 if(gameState == "end")
 {   
  car1.velocityY=0;
 car2.velocityY=0;
 car3.velocityY=-0;
 car4.velocityY=-0;
 car5.velocityY=-0;
 car5.velocityX=-0;
 car6.velocityX=-0;
 car5.velocityY=0;
  car7.velocityX=0;
 textSize(23);
 stroke("yallow");
sam.setVelocity(0, 0);
text("FIM DE JOGO!",150,98)


 }
 
 if (keyDown("space")) {
  car1.velocityY=8;
 car2.velocityY=8;
 car3.velocityY=-8;
 car4.velocityY=-8;
 car5.velocityY=-4;
 car5.velocityX=-4;
 car6.velocityX=-5;
 car5.velocityY=4;
  car7.velocityX=4;
  stopSound("assets/Mission-Passed-Ver2.mp3")
   gameState="play";
   playSound("Need-4-Speed-Most-Wanted---Prodigy---You-will-be-Under-my-Wheels-(1).mp3",true) 
 }
 
 if (sam.isTouching(moeda1) || coin == 31) 
  { 
    stopSound("Need-4-Speed-Most-Wanted---Prodigy---You-will-be-Under-my-Wheels-(1).mp3")
    gameState="end"
 }


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 drawSprites();
}

  playSound("assets/Mission-Passed-Ver2.mp3",false)
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
