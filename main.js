let isDrawing = false;
let x = 0;
let y = 0;

const myPics = document.getElementById('myPics');
const context = myPics.getContext('2d');
const mouseXY = document.getElementById('mouseXY');

// 点1~12 の座標
const coordinates = {
  dot1:	{x: 100.0, y: 2},
  dot2:	{x: 150.0, y: 13.4},
  dot3:	{x: 186.6, y: 50},
  dot4:	{x: 198.0, y: 100},
  dot5:	{x: 186.6, y: 150},
  dot6:	{x: 150.0, y: 186.6},
  dot7:	{x: 100.0, y: 198},
  dot8:	{x:  50.0, y: 186.6},
  dot9:	{x:  13.4, y: 150},
  dot10:{x:   2.0, y: 100},
  dot11:{x:  13.4, y: 50},
  dot12:{x:  50.0, y: 13.4}
}

// 選択された dots
const selectedDots = new Set();

// 円を描く
context.beginPath();
context.arc(100, 100, 100, 0 * Math.PI / 180, 360 * Math.PI / 180, false );
context.fillStyle = "rgba(0,0,0,0)";
context.fill();
context.stroke();

// 12点を描く
for(let key in coordinates){
  context.beginPath();
  context.arc(coordinates[key].x, coordinates[key].y, 7, 0 * Math.PI / 180, 360 * Math.PI / 180, false );
  context.fillStyle = "rgba(0,0,0,0.7)";
  context.fill();
  context.stroke();
}

// クリック時の座標に応じて dot を selectedDots に追加する
myPics.addEventListener('mousedown',(e)=>{

  // dot 1
  if((e.offsetX > coordinates.dot1.x - 15 && e.offsetX < coordinates.dot1.x + 15) 
      && (e.offsetY > coordinates.dot1.y - 15 && e.offsetY < coordinates.dot1.y + 15)){
    context.beginPath();
    context.arc(coordinates.dot1.x, coordinates.dot1.y, 7, 0 * Math.PI / 180, 360 * Math.PI / 180, false );
    context.fillStyle = "rgba(255,200,0,0.8)";
    context.fill();
    context.stroke();

    selectedDots.add("dot1");
  }
  // dot 2
  else if((e.offsetX > coordinates.dot2.x - 15 && e.offsetX < coordinates.dot2.x + 15) 
  && (e.offsetY > coordinates.dot2.y - 15 && e.offsetY < coordinates.dot2.y + 15)){
    context.beginPath();
    context.arc(coordinates.dot2.x, coordinates.dot2.y, 7, 0 * Math.PI / 180, 360 * Math.PI / 180, false );
    context.fillStyle = "rgba(255,200,0,0.8)";
    context.fill();
    context.stroke();
    selectedDots.add("dot2");
  }
  // dot 3
  else if((e.offsetX > coordinates.dot3.x - 15 && e.offsetX < coordinates.dot3.x + 15) 
      && (e.offsetY > coordinates.dot3.y - 15 && e.offsetY < coordinates.dot3.y + 15)){
    context.beginPath();
    context.arc(coordinates.dot3.x, coordinates.dot3.y, 7, 0 * Math.PI / 180, 360 * Math.PI / 180, false );
    context.fillStyle = "rgba(255,200,0,0.8)";
    context.fill();
    context.stroke();
    selectedDots.add("dot3");
  }
  // dot 4
  else if((e.offsetX > coordinates.dot4.x - 15 && e.offsetX < coordinates.dot4.x + 15) 
  && (e.offsetY > coordinates.dot4.y - 15 && e.offsetY < coordinates.dot4.y + 15)){
    context.beginPath();
    context.arc(coordinates.dot4.x, coordinates.dot4.y, 7, 0 * Math.PI / 180, 360 * Math.PI / 180, false );
    context.fillStyle = "rgba(255,200,0,0.8)";
    context.fill();
    context.stroke();
    selectedDots.add("dot4");
  }
  // dot 5
  else if((e.offsetX > coordinates.dot5.x - 15 && e.offsetX < coordinates.dot5.x + 15) 
  && (e.offsetY > coordinates.dot5.y - 15 && e.offsetY < coordinates.dot5.y + 15)){
    context.beginPath();
    context.arc(coordinates.dot5.x, coordinates.dot5.y, 7, 0 * Math.PI / 180, 360 * Math.PI / 180, false );
    context.fillStyle = "rgba(255,200,0,0.8)";
    context.fill();
    context.stroke();
    selectedDots.add("dot5");
  }
  // dot 6
  else if((e.offsetX > coordinates.dot6.x - 15 && e.offsetX < coordinates.dot6.x + 15) 
      && (e.offsetY > coordinates.dot6.y - 15 && e.offsetY < coordinates.dot6.y + 15)){
    context.beginPath();
    context.arc(coordinates.dot6.x, coordinates.dot6.y, 7, 0 * Math.PI / 180, 360 * Math.PI / 180, false );
    context.fillStyle = "rgba(255,200,0,0.8)";
    context.fill();
    context.stroke();
    selectedDots.add("dot6");
  }
  // dot 7
  else if((e.offsetX > coordinates.dot7.x - 15 && e.offsetX < coordinates.dot7.x + 15) 
  && (e.offsetY > coordinates.dot7.y - 15 && e.offsetY < coordinates.dot7.y + 15)){
    context.beginPath();
    context.arc(coordinates.dot7.x, coordinates.dot7.y, 7, 0 * Math.PI / 180, 360 * Math.PI / 180, false );
    context.fillStyle = "rgba(255,200,0,0.8)";
    context.fill();
    context.stroke();
    selectedDots.add("dot7");
  }
  // dot 8
  else if((e.offsetX > coordinates.dot8.x - 15 && e.offsetX < coordinates.dot8.x + 15) 
  && (e.offsetY > coordinates.dot8.y - 15 && e.offsetY < coordinates.dot8.y + 15)){
    context.beginPath();
    context.arc(coordinates.dot8.x, coordinates.dot8.y, 7, 0 * Math.PI / 180, 360 * Math.PI / 180, false );
    context.fillStyle = "rgba(255,200,0,0.8)";
    context.fill();
    context.stroke();
    selectedDots.add("dot8");
  }
  // dot 9
  else if((e.offsetX > coordinates.dot9.x - 15 && e.offsetX < coordinates.dot9.x + 15) 
      && (e.offsetY > coordinates.dot9.y - 15 && e.offsetY < coordinates.dot9.y + 15)){
    context.beginPath();
    context.arc(coordinates.dot9.x, coordinates.dot9.y, 7, 0 * Math.PI / 180, 360 * Math.PI / 180, false );
    context.fillStyle = "rgba(255,200,0,0.8)";
    context.fill();
    context.stroke();
    selectedDots.add("dot9");
  }
  // dot 10
  else if((e.offsetX > coordinates.dot10.x - 15 && e.offsetX < coordinates.dot10.x + 15) 
  && (e.offsetY > coordinates.dot10.y - 15 && e.offsetY < coordinates.dot10.y + 15)){
    context.beginPath();
    context.arc(coordinates.dot10.x, coordinates.dot10.y, 7, 0 * Math.PI / 180, 360 * Math.PI / 180, false );
    context.fillStyle = "rgba(255,200,0,0.8)";
    context.fill();
    context.stroke();
    selectedDots.add("dot10");
  }
  // dot 11
  else if((e.offsetX > coordinates.dot11.x - 15 && e.offsetX < coordinates.dot11.x + 15) 
  && (e.offsetY > coordinates.dot11.y - 15 && e.offsetY < coordinates.dot11.y + 15)){
    context.beginPath();
    context.arc(coordinates.dot11.x, coordinates.dot11.y, 7, 0 * Math.PI / 180, 360 * Math.PI / 180, false );
    context.fillStyle = "rgba(255,200,0,0.8)";
    context.fill();
    context.stroke();
    selectedDots.add("dot11");
  }
  // dot 12
  else if((e.offsetX > coordinates.dot12.x - 15 && e.offsetX < coordinates.dot12.x + 15) 
    && (e.offsetY > coordinates.dot12.y - 15 && e.offsetY < coordinates.dot12.y + 15)){
      context.beginPath();
      context.arc(coordinates.dot12.x, coordinates.dot12.y, 7, 0 * Math.PI / 180, 360 * Math.PI / 180, false );
      context.fillStyle = "rgba(255,200,0,0.8)";
      context.fill();
      context.stroke();  
      selectedDots.add("dot12");
  } 

});

setInterval(() => {

  // もし 3 点が選択されたら三角形を描写する
  if(selectedDots.size == 3){
    let dots = Array.from(selectedDots.values());
    context.beginPath();
    context.moveTo(coordinates[dots[0]].x, coordinates[dots[0]].y); //最初の点の場所
    context.lineTo(coordinates[dots[1]].x, coordinates[dots[1]].y); //2番目の点の場所
    context.lineTo(coordinates[dots[2]].x, coordinates[dots[2]].y); //3番目の点の場所
    context.closePath();	//三角形の最後の線 closeさせる
    context.strokeStyle = "rgb(0,0,0)"; //枠線の色
    context.stroke();
    context.fillStyle="rgba(0,0,255,0.1)";//塗りつぶしの色
    context.fill();
  }

  
}, 500);

myPics.addEventListener('mousemove', e => {
 
  // 座標と選択された dot を表示する
  mouseXY.innerText = `x座標: ${e.offsetX}, Y座標:${e.offsetY} 選択された dot -> ${Array.from(selectedDots)}`

  // もし 3 点が選択されたら三角形を描写する
  if(selectedDots.size == 3){
    let dots = Array.from(selectedDots.values());
    context.beginPath();
    context.moveTo(coordinates[dots[0]].x, coordinates[dots[0]].y); //最初の点の場所
    context.lineTo(coordinates[dots[1]].x, coordinates[dots[1]].y); //2番目の点の場所
    context.lineTo(coordinates[dots[2]].x, coordinates[dots[2]].y); //3番目の点の場所
    context.closePath();	//三角形の最後の線 closeさせる
    context.strokeStyle = "rgb(0,0,0)"; //枠線の色
    context.stroke();
    context.fillStyle="rgba(0,0,255,0.1)";//塗りつぶしの色
    context.fill();
  }

  // dot 1
  if((e.offsetX > coordinates.dot1.x - 15 && e.offsetX < coordinates.dot1.x + 15) 
      && (e.offsetY > coordinates.dot1.y - 15 && e.offsetY < coordinates.dot1.y + 15)){
  }

  // dot 2
  if((e.offsetX > coordinates.dot2.x - 15 && e.offsetX < coordinates.dot2.x + 15) 
      && (e.offsetY > coordinates.dot2.y - 15 && e.offsetY < coordinates.dot2.y + 15)){
  }

  // dot 3
  if((e.offsetX > coordinates.dot3.x - 15 && e.offsetX < coordinates.dot3.x + 15) 
      && (e.offsetY > coordinates.dot3.y - 15 && e.offsetY < coordinates.dot3.y + 15)){
  }

  // dot 4
  if((e.offsetX > coordinates.dot4.x - 15 && e.offsetX < coordinates.dot4.x + 15) 
      && (e.offsetY > coordinates.dot4.y - 15 && e.offsetY < coordinates.dot4.y + 15)){
  }  

  // dot 5
  if((e.offsetX > coordinates.dot5.x - 15 && e.offsetX < coordinates.dot5.x + 15) 
      && (e.offsetY > coordinates.dot5.y - 15 && e.offsetY < coordinates.dot5.y + 15)){
  }

  // dot 6
  if((e.offsetX > coordinates.dot6.x - 15 && e.offsetX < coordinates.dot6.x + 15) 
      && (e.offsetY > coordinates.dot6.y - 15 && e.offsetY < coordinates.dot6.y + 15)){
  }
  
  // dot 7
  if((e.offsetX > coordinates.dot7.x - 15 && e.offsetX < coordinates.dot7.x + 15) 
      && (e.offsetY > coordinates.dot7.y - 15 && e.offsetY < coordinates.dot7.y + 15)){
  }  

  // dot 8
  if((e.offsetX > coordinates.dot8.x - 15 && e.offsetX < coordinates.dot8.x + 15) 
      && (e.offsetY > coordinates.dot8.y - 15 && e.offsetY < coordinates.dot8.y + 15)){
  }

  // dot 9
  if((e.offsetX > coordinates.dot9.x - 15 && e.offsetX < coordinates.dot9.x + 15) 
      && (e.offsetY > coordinates.dot9.y - 15 && e.offsetY < coordinates.dot9.y + 15)){
  }

  // dot 10
  if((e.offsetX > coordinates.dot10.x - 15 && e.offsetX < coordinates.dot10.x + 15) 
      && (e.offsetY > coordinates.dot10.y - 15 && e.offsetY < coordinates.dot10.y + 15)){
  }

  // dot 11
  if((e.offsetX > coordinates.dot11.x - 15 && e.offsetX < coordinates.dot11.x + 15) 
      && (e.offsetY > coordinates.dot11.y - 15 && e.offsetY < coordinates.dot11.y + 15)){
  }

  // dot 12
  if((e.offsetX > coordinates.dot12.x - 15 && e.offsetX < coordinates.dot12.x + 15) 
      && (e.offsetY > coordinates.dot12.y - 15 && e.offsetY < coordinates.dot12.y + 15)){
  }

});