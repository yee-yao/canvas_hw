var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext('2d');
canvas.width = 400
canvas.height = 400

var time=0
function draw(){
  time++
  //清除畫布上的軌跡
  ctx.clearRect(0,0,400,400) 
  
  //座標繪製
  ctx.beginPath
  for(var i=0;i<10;i++){
    let pos = i*50
    ctx.moveTo(pos,0)
    ctx.lineTo(pos,400)
    ctx.fillText(pos,pos,10)/*加上文字*/
    ctx.moveTo(0,pos)
    ctx.lineTo(400,pos)
    ctx.fillText(pos,10,pos)
  }
  ctx.strokeStyle = "rgba(0,0,0,0.1)"
  ctx.stroke() 
  
  //地面上的線
  ctx.beginPath()
  ctx.moveTo(0,350)
  ctx.lineTo(400,350)
  ctx.lineWidth = 2
  ctx.strokeStyle = "black"
  ctx.stroke()
 
  
  //右城門
  ctx.fillStyle = "#FFE4CA"
  ctx.fillRect(300,100,50,250)
  ctx.strokeRect(300,100,50,250)
  //右城門上
  ctx.fillStyle = "#BB3D00"
  ctx.fillRect(290,100,70,25)
  ctx.strokeRect(290,100,70,25)
  
  //拱門
  ctx.beginPath()
  ctx.moveTo(75,200)
  ctx.lineTo(325,200)
  ctx.lineTo(300,350)
  ctx.lineTo(75,350)
  
  ctx.arc(200,350,50,Math.PI*2,Math.PI,true)
  
  ctx.lineTo(150,350)
  ctx.lineTo(100,350)
  ctx.closePath()
  
  ctx.fillStyle = "#FFE4CA"
  ctx.fill()
  ctx.strokeStyle = "black"
  ctx.stroke()
  
  //拱門尖塔
  ctx.beginPath()
    ctx.moveTo(75,200)
    ctx.lineTo(200,100-mouse.y/10)
    ctx.lineTo(325,200)
  ctx.closePath()
  ctx.fillStyle = "#BB3D00"
  ctx.fill()
  ctx.strokeStyle = "black"
  ctx.stroke()
  
   //車子的道路
   ctx.fillStyle = "black"
   ctx.fillRect(0,350,400,25)
  
   ctx.fillStyle = "white"
   ctx.fillRect(0,355,400,13)
  
  //車子
  ctx.fillStyle="#D26900"
    let carx = time%440-40
    ctx.fillRect(carx,340,40,25)
    ctx.strokeRect(carx,340,40,25)
  
    ctx.beginPath()
    ctx.arc(carx+10,365,5,0,Math.PI*2)
    ctx.arc(carx+30,365,5,0,Math.PI*2)
  
    ctx.fillStyle="black"
    ctx.fill()
    ctx.stroke()
  


  
   //確認滑鼠事件有抓取到
    ctx.beginPath()
    ctx.arc(mouse.x,mouse.y,5,0,Math.PI*2)
    ctx.fillStyle="black"
    ctx.fill()
}

//draw()

//設定連續繪製
setInterval(draw,30) 

//定義變數為物件，x,y分別紀錄滑鼠位置
var mouse = {
  x: 0,
  y: 0
} 

//事件監聽，取得滑鼠位置
canvas.addEventListener("mousemove",function(evt){
  mouse.x = evt.offsetX  //相對於畫布上的距離
  mouse.y = evt.offsetY
})