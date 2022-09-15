canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_width=100;
rover_height=100;
rover_x=10;
rover_y=10;

bgi="mars.jpg";
bgri="rover.png";

function add()
{
bimg=new Image();
bimg.onload=ubg;
bimg.src=bgi;

rimg=new Image();
rimg.onload=ubgr;
rimg.src=bgri;
}
function ubg()
{
    ctx.drawImage(bimg,0,0,canvas.width,canvas.height);
}
function ubgr()
{
    ctx.drawImage(rimg,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("kewdown",mykeydown);
function mykeydown(e)
{
    keypressed=e.keyCode;
if(keypressed=='38')
{
    up();
}
if(keypressed=='40')
{
    down();
}
if(keypressed=='37')
{
    left();
}
if(keypressed=='39')
{
    right();
}
}
function up()
{
if (rover_y>=0)
{
    rover_y=rover_y-10;
    console.log("When up arroy is pressed , X = "+rover_x+" Y = "+rover_y);
    ubg();
    ubgr();
}
}
function down()
{
if (rover_y<=500)
{
    rover_y=rover_y+10;
    console.log("When up arroy is pressed , X = "+rover_x+" Y = "+rover_y);
    ubg();
    ubgr();
}
}
function left()
{
if (rover_x>=0)
{
    rover_x=rover_x-10;
    console.log("When up arroy is pressed , X = "+rover_x+" Y = "+rover_y);
    ubg();
    ubgr();
}
}
function right()
{
if (rover_x<=700)
{
    rover_x=rover_x+10;
    console.log("When up arroy is pressed , X = "+rover_x+" Y = "+rover_y);
    ubg();
    ubgr();
}
}