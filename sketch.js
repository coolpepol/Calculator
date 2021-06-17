var b1 
var n1 
var n2





function setup() {
  
  createCanvas(800, 800);
  num1 = createInput()
  num1.position(20,20)
 num2 = createInput()
 num2.position(600,20)
 b1 = createButton("ADD")
 b1.position(220,200)
 b2 = createButton("MINUSE")
 b2.position(290,200)
 b3 = createButton("MULT")
 b3.position(360,200)
 b4 = createButton("DIVIDE")
 b4.position(430,200)
 //console.log (n1 + n2)

}
var awnserAdd
function add (){
  awnser = n1 + n2
  fill ("red")
text (n1 +"+"+n2+"="+awnserAdd,400,200)
console.log(n1+n2)

}
var awnserMinuse
function minuse (){
  awnser = n1 - n2
  fill ("red")
text (n1 +"+"+n2+"="+awnserMinuse,400,200)
console.log(n1-n2)

}
var awnserMult
function mult (){
  awnser = n1 * n2
  fill ("red")
text (n1 +"+"+n2+"="+awnserMult,400,200)
console.log(n1*n2)

}
var awnserDiv
function div (){
  awnser = n1 / n2
  fill ("red")
text (n1 +"+"+n2+"="+awnserDiv,400,200)
console.log(n1 / n2)

}



function draw() {
 fill ("black")
  background(220);
  text(awnser,200,300)
text (" number 1",20,10)
text (" number 2 ",580,10)
n1 = parseInt(num1.value())
n2 = parseInt(num2.value())
b1.mousePressed(add)
b2.mousePressed(minuse)
b3.mousePressed(mult)
b4.mousePressed(div)
}