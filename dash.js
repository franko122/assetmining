
const funds=document.getElementById('funds');
const zero=document.getElementById('zero');
const may=document.getElementById('may');
const abot=document.getElementById('abot');
const circleshow=document.getElementById('circleshow');
const showing=document.getElementById('showing');
const cans=document.getElementById('cans'); 
cans.addEventListener('click',()=>{
    showing.style.display="none";
});
  circleshow.addEventListener('click',()=>{
      showing.style.display="block";
  });
funds.addEventListener('click',()=>{
    if(zero.innerText > 0){
        may.style.display="block";
    }
    else(alert('Insuficient fund'));
});