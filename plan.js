alert("Hello welcome to assetmining company all transactions on this company are secured with blockchain");

const right=document.getElementById('right'); 
const left=document.getElementById('left');  
const  next=document.getElementById('next'); 
const  text=document.getElementById('text');    
left.addEventListener('click',()=>{
    left.style.backgroundColor=" #ff6600 ";
    right.style.backgroundColor="black";
    text.style.display="none";
    next.style.display="block";
});
right.addEventListener('click',()=>{
    right.style.backgroundColor=" #ff6600 ";
   left.style.backgroundColor="black"
   text.style.display="block";
   next.style.display="none";
});