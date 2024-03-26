const btn=document.getElementById("btn");
const output= document.querySelector(".output");


let quote =["Life is like riding a bicycle. To keep your balance, you must keep moving.",
   "May the Force be with you.","No one can make you feel inferior without your consent.",
   "Not all those who wander are lost.","Dreams come true. ..."
]

btn.addEventListener("click", ()=> {
 let random = Math.floor(Math.random()*quote.length);
 output.textContent = quote[random];
})
