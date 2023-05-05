let arr = [];
document.body.style.height = `${window.innerHeight}px`;
const absoluteValue = n => n>0 ? n : 0-n;
const ist = d => (absoluteValue(d) / parseInt(window.getComputedStyle(document.querySelector(".record")).width));
window.addEventListener("resize",()=> document.body.style.height = `${window.innerHeight}px`);
document.querySelectorAll(".record").forEach(rec => {
     
    rec.addEventListener("touchmove",ev=>{
        
        rec.style.transition = '';   
        document.querySelector(".bmain").children[Object.values(document.querySelectorAll(".record")).indexOf(rec)].style.transition = '';
     
        rec.addEventListener("touchend",(ev)=>{
            arr = [];
            document.querySelector(".bmain").children[Object.values(document.querySelectorAll(".record")).indexOf(rec)].style.backgroundColor = ` background-color: hsla(0,0%,0%,0.3)`;
         
            rec.style.transform = 'initial';
          
            rec.style.transition = 'all 0.6s ease';
            document.querySelector(".bmain").children[Object.values(document.querySelectorAll(".record")).indexOf(rec)].style.transition = 'all 1s ease';
        })
        arr.push(ev.touches[0].clientX);
        const dist = arr.slice(-1) - arr[0];
        const color = dist > 0 ? '100' : '340';
        const relativeDist =  ist(dist);
        rec.style.transform = `translateX(${dist}px)`; 
   
        document.querySelector(".bmain").children[Object.values(document.querySelectorAll(".record")).indexOf(rec)].style.background = relativeDist < 0.5 ? `hsla(0,0%,0%,0.3)` : `hsla(${color},100%,50%,${relativeDist})`;
       
    })
})