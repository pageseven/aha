let arr = [];document.body.style.height = `${window.innerHeight}px`;
window.addEventListener("resize",()=> document.body.style.height = `${window.innerHeight}px`);
document.querySelectorAll(".record").forEach(rec => {
     
    rec.addEventListener("touchmove",ev=>{
        rec.style.transition = '';   
        document.querySelector(".bmain").children[Object.values(document.querySelectorAll(".record")).indexOf(rec)].style.transition = '';
        document.querySelector(".bmain").children[Object.values(document.querySelectorAll(".record")).indexOf(rec)].style.background = `green`;
        rec.addEventListener("touchend",(ev)=>{
            arr = [];
            rec.style.transform = 'initial';
            document.querySelectorAll(".brecord").forEach(x => x.style.background = 'initial');
            rec.style.transition = 'all 0.6s ease';
            document.querySelector(".bmain").children[Object.values(document.querySelectorAll(".record")).indexOf(rec)].style.transition = 'all 1s ease';
        })
        arr.push(ev.touches[0].clientX);
        const dist = arr.slice(-1) - arr[0];
        rec.style.transform = `translateX(${dist}px)`; 
    })
})