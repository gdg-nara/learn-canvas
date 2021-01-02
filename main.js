let isDrawing = false;
let x = 0;
let y = 0;

const myPics = document.getElementById('myPics');
const context = myPics.getContext('2d');
const mouseXY = document.getElementById('mouseXY');

// 点1~12 の座標
const coordinates = {
  dot1:	{x: 100.0, y: 0},
  dot2:	{x: 150.0, y: 13.4},
  dot3:	{x: 186.6, y: 50},
  dot4:	{x: 200.0, y: 100},
  dot5:	{x: 186.6, y: 150},
  dot6:	{x: 150.0, y: 186.6},
  dot7:	{x: 100.0, y: 200},
  dot8:	{x: 50.0,  y: 186.6},
  dot9:	{x: 13.4,  y: 150},
  dot10:{x: 0.0,   y: 100},
  dot11:{x: 13.4,  y: 50},
  dot12:{x: 50.0,  y: 13.4}
}

// 選択された dots
const selectedDots = new Set();
const selectedDotsfmt = [];


myPics.addEventListener('mousedown', e => {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
});

myPics.addEventListener('mousemove', e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }    

  mouseXY.innerText = `x座標: ${e.offsetX}, Y座標:${e.offsetY} 選択された dot -> ${Array.from(selectedDots)}`

  // dot 1
  if((e.offsetX > coordinates.dot1.x - 15 && e.offsetX < coordinates.dot1.x + 15) 
      && (e.offsetY > coordinates.dot1.y - 15 && e.offsetY < coordinates.dot1.y + 15)){
    context.beginPath();
    context.arc(coordinates.dot1.x, coordinates.dot1.y, 7, 0 * Math.PI / 180, 360 * Math.PI / 180, false );
    context.fillStyle = "rgba(255,200,0,0.8)";
    context.fill();
    context.stroke();
    setTimeout(()=>{context.clearRect(0, 0, 200, 200)},500);
    myPics.addEventListener('click',()=>{selectedDots.add("1")});
    console.log(selectedDots);
  }

  // dot 2
  if((e.offsetX > coordinates.dot2.x - 15 && e.offsetX < coordinates.dot2.x + 15) 
      && (e.offsetY > coordinates.dot2.y - 15 && e.offsetY < coordinates.dot2.y + 15)){
    context.beginPath();
    context.arc(coordinates.dot2.x, coordinates.dot2.y, 7, 0 * Math.PI / 180, 360 * Math.PI / 180, false );
    context.fillStyle = "rgba(255,200,0,0.8)";
    context.fill();
    context.stroke();
    setTimeout(()=>context.clearRect(0, 0, 200, 200),500);
    myPics.addEventListener('click',()=>{selectedDots.add("2")});
    console.log(selectedDots);
  }

  // dot 3
  if((e.offsetX > coordinates.dot3.x - 15 && e.offsetX < coordinates.dot3.x + 15) 
      && (e.offsetY > coordinates.dot3.y - 15 && e.offsetY < coordinates.dot3.y + 15)){
    context.beginPath();
    context.arc(coordinates.dot3.x, coordinates.dot3.y, 7, 0 * Math.PI / 180, 360 * Math.PI / 180, false );
    context.fillStyle = "rgba(255,200,0,0.8)";
    context.fill();
    context.stroke();
    console.log("dot3を点滅");
    setTimeout(()=>context.clearRect(0, 0, 200, 200),500);
    myPics.addEventListener('click',()=>{selectedDots.add("3")});
    console.log(selectedDots);
  }

  // dot 4
  if((e.offsetX > coordinates.dot4.x - 15 && e.offsetX < coordinates.dot4.x + 15) 
      && (e.offsetY > coordinates.dot4.y - 15 && e.offsetY < coordinates.dot4.y + 15)){
    context.beginPath();
    context.arc(coordinates.dot4.x, coordinates.dot4.y, 7, 0 * Math.PI / 180, 360 * Math.PI / 180, false );
    context.fillStyle = "rgba(255,200,0,0.8)";
    context.fill();
    context.stroke();
    console.log("dot4を点滅");
    setTimeout(()=>context.clearRect(0, 0, 200, 200),500);
    myPics.addEventListener('click',()=>{selectedDots.add("4")});
    console.log(selectedDots);
  }  

  // dot 5
  if((e.offsetX > coordinates.dot5.x - 15 && e.offsetX < coordinates.dot5.x + 15) 
      && (e.offsetY > coordinates.dot5.y - 15 && e.offsetY < coordinates.dot5.y + 15)){
    context.beginPath();
    context.arc(coordinates.dot5.x, coordinates.dot5.y, 7, 0 * Math.PI / 180, 360 * Math.PI / 180, false );
    context.fillStyle = "rgba(255,200,0,0.8)";
    context.fill();
    context.stroke();
    console.log("dot5を点滅");
    setTimeout(()=>context.clearRect(0, 0, 200, 200),500);
    myPics.addEventListener('click',()=>{selectedDots.add("5")});
    console.log(selectedDots);
  }

  // dot 6
  if((e.offsetX > coordinates.dot6.x - 15 && e.offsetX < coordinates.dot6.x + 15) 
      && (e.offsetY > coordinates.dot6.y - 15 && e.offsetY < coordinates.dot6.y + 15)){
    context.beginPath();
    context.arc(coordinates.dot6.x, coordinates.dot6.y, 7, 0 * Math.PI / 180, 360 * Math.PI / 180, false );
    context.fillStyle = "rgba(255,200,0,0.8)";
    context.fill();
    context.stroke();
    console.log("dot6を点滅");
    setTimeout(()=>context.clearRect(0, 0, 200, 200),500);
    myPics.addEventListener('click',()=>{selectedDots.add("6")});
    console.log(selectedDots);
  }
  
  // dot 7
  if((e.offsetX > coordinates.dot7.x - 15 && e.offsetX < coordinates.dot7.x + 15) 
      && (e.offsetY > coordinates.dot7.y - 15 && e.offsetY < coordinates.dot7.y + 15)){
    context.beginPath();
    context.arc(coordinates.dot7.x, coordinates.dot7.y, 7, 0 * Math.PI / 180, 360 * Math.PI / 180, false );
    context.fillStyle = "rgba(255,200,0,0.8)";
    context.fill();
    context.stroke();
    console.log("dot7を点滅");
    setTimeout(()=>context.clearRect(0, 0, 200, 200),500);
    myPics.addEventListener('click',()=>{selectedDots.add("7")});
    console.log(selectedDots);
  }  

  // dot 8
  if((e.offsetX > coordinates.dot8.x - 15 && e.offsetX < coordinates.dot8.x + 15) 
      && (e.offsetY > coordinates.dot8.y - 15 && e.offsetY < coordinates.dot8.y + 15)){
    context.beginPath();
    context.arc(coordinates.dot8.x, coordinates.dot8.y, 7, 0 * Math.PI / 180, 360 * Math.PI / 180, false );
    context.fillStyle = "rgba(255,200,0,0.8)";
    context.fill();
    context.stroke();
    console.log("dot8を点滅");
    setTimeout(()=>context.clearRect(0, 0, 200, 200),500);
    myPics.addEventListener('click',()=>{selectedDots.add("8")});
    console.log(selectedDots);
  }

  // dot 9
  if((e.offsetX > coordinates.dot9.x - 15 && e.offsetX < coordinates.dot9.x + 15) 
      && (e.offsetY > coordinates.dot9.y - 15 && e.offsetY < coordinates.dot9.y + 15)){
    context.beginPath();
    context.arc(coordinates.dot9.x, coordinates.dot9.y, 7, 0 * Math.PI / 180, 360 * Math.PI / 180, false );
    context.fillStyle = "rgba(255,200,0,0.8)";
    context.fill();
    context.stroke();
    console.log("dot9を点滅");
    setTimeout(()=>context.clearRect(0, 0, 200, 200),500);
    myPics.addEventListener('click',()=>{selectedDots.add("9")});
    console.log(selectedDots);
  }

  // dot 10
  if((e.offsetX > coordinates.dot10.x - 15 && e.offsetX < coordinates.dot10.x + 15) 
      && (e.offsetY > coordinates.dot10.y - 15 && e.offsetY < coordinates.dot10.y + 15)){
    context.beginPath();
    context.arc(coordinates.dot10.x, coordinates.dot10.y, 7, 0 * Math.PI / 180, 360 * Math.PI / 180, false );
    context.fillStyle = "rgba(255,200,0,0.8)";
    context.fill();
    context.stroke();
    console.log("dot10を点滅");
    setTimeout(()=>context.clearRect(0, 0, 200, 200),500);
    myPics.addEventListener('click',()=>{selectedDots.add("10")});
    console.log(selectedDots);
  }

  // dot 11
  if((e.offsetX > coordinates.dot11.x - 15 && e.offsetX < coordinates.dot11.x + 15) 
      && (e.offsetY > coordinates.dot11.y - 15 && e.offsetY < coordinates.dot11.y + 15)){
    context.beginPath();
    context.arc(coordinates.dot11.x, coordinates.dot11.y, 7, 0 * Math.PI / 180, 360 * Math.PI / 180, false );
    context.fillStyle = "rgba(255,200,0,0.8)";
    context.fill();
    context.stroke();
    console.log("dot11を点滅");
    setTimeout(()=>context.clearRect(0, 0, 200, 200),500);
    myPics.addEventListener('click',()=>{selectedDots.add("11")});
    console.log(selectedDots);
  }

  // dot 12
  if((e.offsetX > coordinates.dot12.x - 15 && e.offsetX < coordinates.dot12.x + 15) 
      && (e.offsetY > coordinates.dot12.y - 15 && e.offsetY < coordinates.dot12.y + 15)){
    context.beginPath();
    context.arc(coordinates.dot12.x, coordinates.dot12.y, 7, 0 * Math.PI / 180, 360 * Math.PI / 180, false );
    context.fillStyle = "rgba(255,200,0,0.8)";
    context.fill();
    context.stroke();
    console.log("dot12を点滅");
    setTimeout(()=>context.clearRect(0, 0, 200, 200),500);
    myPics.addEventListener('click',()=>{selectedDots.add("12")});
    console.log(selectedDots);
  }

});

window.addEventListener('mouseup', e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = 'black';
  context.lineWidth = 1;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}

// 円の中心座標: (100,100)
// 半径: 50
// 開始角度: 0度 (0 * Math.PI / 180)
// 終了角度: 360度 (360 * Math.PI / 180)
// 方向: true=反時計回りの円、false=時計回りの円
//

/*
dot1:	[100, 0]
dot2:	[150,13.4]
dot3:	[186.6, 50]
dot4:	[200, 100]
dot5:	[186.6, 150]
dot6:	[150, 186.6]
dot7:	[100, 200]
dot8:	[50, 186.6]
dot9:	[13.4, 150]
dot10:[0, 100]
dot11:[13.4, 50]
dot12:[50, 13.4]
*/

