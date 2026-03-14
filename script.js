function celebrate(){

for(let i=0;i<50;i++){

let conf=document.createElement("div");

conf.style.position="fixed";
conf.style.width="10px";
conf.style.height="10px";
conf.style.background="red";

conf.style.left=Math.random()*100+"vw";
conf.style.top="-10px";

conf.style.animation="fall 3s linear";

document.body.appendChild(conf);

setTimeout(()=>{
conf.remove();
},3000);

}

alert("Happy Birthday Day Papa ❤️");

}