x = 0;
y = 0;
screen_width = 0;
screen_height = 0;
fruit = "";
speak_data = "";
to_number = "";
img_name = "";

draw_apple = false;
draw_banana = false;
draw_mango = false;
draw_orange = false;
draw_peach = false;
draw_strawberry = false;

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload()
{
  app = loadImage("apple.png");
  ban = loadImage("Banana.png");
  man = loadImage("Mango.png");
  ora = loadImage("Orange.png");
  pea = loadImage("Peach.png");
  stb = loadImage("Strawberry.png")
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;
 to_number = Number(content);
 document.getElementById("status").innerHTML = "The speech has been recognized: " + content;  

 if (Number.isInteger(to_number))
 {
 if (img_name == "Apple")
    {
      document.getElementById("status").innerHTML = "Started drawing Apple";
        draw_apple = true;
    } else if (img_name == "Banana")
    {
        document.getElementById("status").innerHTML = "Started drawing Banana";
        draw_banana = true;
    } else if (img_name == "Mango")
    {
        document.getElementById("status").innerHTML = "Started drawing Mango";
        draw_mango = true;
    } else if (img_name == "Orange")
    {
        document.getElementById("status").innerHTML = "Started drawing Orange";
        draw_orange = true;
    } else if (img_name == "Peach")
    {
        document.getElementById("status").innerHTML = "Started drawing Peach";
        draw_peach = true;
    } else if (img_name == "Strawberry")
    {
        document.getElementById("status").innerHTML = "Started drawing Strawberry";
        draw_strawberry = true;
    }
  } else {
    document.getElementById("status").innerHTML = "The speech has not been recognized. Please try again";
  }
}

function setup() 
{
  canvas = createCanvas(800, 500)
}

function draw() {
  
  
    if (draw_apple == true)
    {
      for(var i = 1; i<=to_number; i++)
      {
      x = Math.floor(Math.random()*700);
      y = Math.floor(Math.random()*400);
      image(app, x, y, 100, 100);
      draw_apple = false;
      }
    } else if (draw_banana == true)
    {
      for(var i = 1; i<=to_number; i++)
      {
      x = Math.floor(Math.random()*700);
      y = Math.floor(Math.random()*400);
      image(ban, x, y, 100, 100);
      draw_banana = false;
      }
    } else if (draw_mango == true)
    {
      for(var i = 1; i<=to_number; i++)
      {
      x = Math.floor(Math.random()*700);
      y = Math.floor(Math.random()*400);
      image(man, x, y, 100, 100);
      draw_mango = false;
      }
    } else if (draw_orange == true)
    {
      for(var i = 1; i<=to_number; i++)
      {
      x = Math.floor(Math.random()*700);
      y = Math.floor(Math.random()*400);
      image(ora, x, y, 100, 100);
      draw_orange = false;
      }
    } else if (draw_peach == true)
    {
      for(var i = 1; i<=to_number; i++)
      {
      x = Math.floor(Math.random()*700);
      y = Math.floor(Math.random()*400);
      image(pea, x, y, 100, 100);
      draw_peach = false;
      }
    } else if (draw_strawberry == true)
    {
      for(var i = 1; i<=to_number; i++)
      {
      x = Math.floor(Math.random()*700);
      y = Math.floor(Math.random()*400);
      image(stb, x, y, 100, 100);
      draw_strawberry = false;
      }
    }
 
}

function appl()
{
  img_name = "Apple";
}

function bana()
{
  img_name = "Banana";
}

function mang()
{
  img_name = "Mango";
}

function oran()
{
  img_name = "Orange";
}

function peac()
{
  img_name = "Peach";
}

function strb()
{
  img_name = "Strawberry";
}