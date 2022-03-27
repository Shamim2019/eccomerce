let bar=document.getElementById('bar');
let nav = document.getElementById('navbar');
let close=document.getElementById('close');

if (bar) {
    bar.addEventListener('click', ()=>{
         nav.classList.add('active')
    })
}

if (close) {
    close.addEventListener('click', ()=>{
         nav.classList.remove('active')
    })
}

var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");

smallimg [0].onclick = function(){
    MainImg.src = smallimg[0].src;
}
smallimg [1].onclick = function(){
    MainImg.src = smallimg[1].src;
}
smallimg [2].onclick = function(){
    MainImg.src = smallimg[2].src;
}
smallimg [3].onclick = function(){
    MainImg.src = smallimg[3].src;
}
smallimg [4].onclick = function(){
    MainImg.src=smallimg[4].src;
}