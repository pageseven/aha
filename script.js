
document.body.style.height = `${window.innerHeight}px`;
const responsify = (a,b) =>  window.navigator.maxTouchPoints ? a : b;

document.querySelector("link").setAttribute("href",responsify("stylem.css","style.css"));

const menuItems = [`About`,`Document`,`Contact`,`Projects`];
const mobileMenu =  `
<svg class="menu" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 141.73 141.73"
style="enable-background:new 0 0 141.73 141.73;" xml:space="preserve">
<style type="text/css">
    .st0 {
        stroke: #FFFFFF;
        stroke-miterlimit: 10;
        fill:#FFFFFF;
    }
</style>
<rect x="18.47" y="42.65" class="st0 a1" width="103.27" height="5.79" />
<rect x="19.23" y="65.82" class="st0 a2" width="103.27" height="5.79" />
<rect x="48.62" y="87.85" class="st0 a3" width="73.12" height="5.79" />
</svg>
`

document.querySelector("header").innerHTML+= responsify(mobileMenu,`<menu>${menuItems.map(el =>`<a class="menuItem" href="${el.toLowerCase()}.html">${el}</a>`).join('')}</menu>`);

document.querySelector(".menu").addEventListener("click",() =>{
    
    document.querySelector(".menu").classList.toggle("open");
    document.querySelector(".cover").classList.toggle("openC");
    document.querySelector(".openC")
    ?setTimeout(()=>{
        document.querySelector(".openC").innerHTML = [`About`,`Document`,`Contact`,`Projects`].map(el =>`<a class="menus" href="${el.toLowerCase()}.html">${el}</a>`).join('');
        },1000)
    :document.querySelector(".cover").innerHTML = ``;   
    });
