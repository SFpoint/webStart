const text = document.querySelector('.headerFooterContainer').children[0]
let render = ""
Array.from(text.innerText).forEach((letter)=>{
     letter.innerHTML = `<span>${letter}</span>`
     render += `<span>${letter}</span>`
});
text.innerHTML = render
const slider = document.getElementById("fromSlider")
const inner = document.querySelector(".slidersControl").children[1]

const lettersArr = Array.from(text.children)
lettersArr.forEach((letter)=>{
    letter.style.display = "none"
    letter.style.opacity = "0"
})
let count = 0
    const writing =  setInterval(() => {
        count++
        const thisLetter = lettersArr.find(el => lettersArr.indexOf(el) == count - 1)
        thisLetter.style.display = "inline"
        thisLetter.className = "visible"

    }, 100);



    setTimeout(() => {
        clearInterval(writing)
    }, 3800);

document.getElementById("fromSlider").addEventListener("input", ()=>{
     slider.value
    slider.style.background =  `linear-gradient(90deg,  #B39DE1 ${slider.value}%, rgba(200, 186, 229, 0.1) ${100 - slider.value}%)`
    if(inner.className == "dark"){
        inner.style.color = "#000"
        
    }else{
        inner.style.color = "#D6C6DD;"
    }
    inner.style.zIndex = "5"
    if(slider.value >= 100){
        setTimeout(() => {
            slider.value = 0
            slider.style.background = "rgba(200, 186, 229, 0.1)"
            if(inner.className == "dark"){
                inner.style.color = "#D6C6DD"
                slider.style.background = "rgba(200, 186, 229, 0.1)"
            }else{
                inner.style.color = "#000"
            }
        }, 2100);
    }
})

slider.addEventListener("click",()=>{
    const interval = setInterval(() => { 
        slider.value++
        slider.style.background =  `linear-gradient(90deg,  #B39DE1 ${slider.value}%, rgba(200, 186, 229, 0.1) ${100 - slider.value}%)`
    }, 10);
    setTimeout(() => {
        clearInterval(interval)
        slider.value = 0
        if(inner.className == "dark"){
            inner.style.color = "#D6C6DD"
            slider.style.background = "rgba(200, 186, 229, 0.1)"
        }else{
            inner.style.color = "#000"
        }
    }, 2100);
    
    if(inner.className == "dark"){
        inner.style.color = "#000"

    }else{
        inner.style.color = "#D6C6DD"

    }
    inner.style.zIndex = "5"
})

const designBtn = document.querySelector('.switch').children[0]
const codeBtn = document.querySelector('.switch').children[1]
const marketBtn = document.querySelector('.switch').children[2]
const target = document.querySelector(".switchContainer")
target.scrollTo({
    left: target.clientWidth * 1,
    behavior: "smooth"
})
designBtn.addEventListener("click" ,()=>{
    designBtn.className="activeBtn"
    codeBtn.className=""
    marketBtn.className=""

    target.scrollTo({
        left: target.clientWidth * 0,
        behavior: "smooth"
    })
})
codeBtn.addEventListener("click" ,()=>{
    designBtn.className=""
    codeBtn.className="activeBtn"
    marketBtn.className=""
    target.scrollTo({
        left: target.clientWidth * 1,
        behavior: "smooth"
    })
})
marketBtn.addEventListener("click" ,()=>{
    designBtn.className=""
    codeBtn.className=""
    marketBtn.className="activeBtn"
    target.scrollTo({
        left: target.clientWidth * 2,
        behavior: "smooth"
    })
})

Array.from(document.querySelector('.cvBtns').children).forEach((btn)=>{
    btn.addEventListener("click" , (event)=>{
        Array.from(document.querySelector('.cvBtns').children).forEach((btn)=>{
            btn.className = ""
        })
        event.currentTarget.className = "active"
          
    })
})

const block = document.querySelector(".reviewContainer")
const back =  block.children[0].children[1].children[0]
const front =  block.children[0].children[1].children[1]
const reviews = block.children[1]
let scrolls = 0
setInterval(() => {
    scrolls++
    if(reviews.children[scrolls+1].nextElementSibling == null){
        scrolls = 1
        reviews.scrollTo({
            left: 0,
            behavior: 'instant'
        })
        reviews.scrollTo({
            left: (reviews.children[0].offsetWidth +30) *scrolls,
            behavior: 'smooth'
        })
    }
    reviews.scrollTo({
        left: (reviews.children[0].offsetWidth +30) *scrolls,
        behavior: 'smooth'
    })
}, 2000);
front.addEventListener("click", ()=>{
    scrolls++
    console.log(scrolls);
    if(reviews.children[scrolls+1].nextElementSibling == null){
        scrolls = 1
        reviews.scrollTo({
            left: 0,
            behavior: 'instant'
        })
        reviews.scrollTo({
            left: (reviews.children[0].offsetWidth +30) *scrolls,
            behavior: 'smooth'
        })
    }
    reviews.scrollTo({
        left: (reviews.children[0].offsetWidth +30) *scrolls,
        behavior: 'smooth'
    })
})
back.addEventListener("click", ()=>{
    scrolls--
    if(scrolls <= 0){
        scrolls = 1
        reviews.scrollTo({
            left: (reviews.children[0].offsetWidth +30) *2,
            behavior: 'instant'
        })
        reviews.scrollTo({
            left: (reviews.children[0].offsetWidth +30) *scrolls,
            behavior: 'smooth'
        })
    }
    reviews.scrollTo({
        left: (reviews.children[0].offsetWidth +30) *scrolls,
        behavior: 'smooth'
    })
})
window.addEventListener("DOMContentLoaded", ()=>{
    let cookieAccept = JSON.parse(localStorage.getItem("cookieAccept"))
    if(cookieAccept !== true){
        cookieAccept = false
    }
    if(cookieAccept == false){
    const cookie = document.querySelector('.cookieContainer')
    cookie.parentElement.style.display = "block"
    cookie.children[1].addEventListener("click" ,()=>{
    cookieAccept = true
    localStorage.setItem("cookieAccept" , JSON.stringify(cookieAccept))
    cookie.parentElement.style.display = "none"
    })
    cookie.lastElementChild.addEventListener("click", ()=>{
        cookie.parentElement.style.display = "none"
    })
    }
})
document.querySelector('.aboutUsContainer').addEventListener("scroll", (event)=>{
    event.currentTarget.scrollIntoView({behavior: 'smooth', block: "end", inline: "nearest"})
    document.querySelector(".projectBLock").style.display = "block"
    document.querySelector(".reviewBlock").style.display = "block"
    document.querySelector(".webCreatingBlock").style.display = "block"
    document.querySelector("footer").style.display = "flex"
})
window.addEventListener("resize", ()=>{
    if(window.innerWidth < 1024 && window.innerWidth >=768){
        document.querySelector(".projectBLock").style.display = "block"
        document.querySelector(".reviewBlock").style.display = "block"
        document.querySelector(".webCreatingBlock").style.display = "block"
        document.querySelector("footer").style.display = "flex"
        document.querySelectorAll(".webCreating h1").forEach((p)=>{
            p.style.fontSize = "40px"
        })
    }
    if(window.innerWidth <768){
        document.querySelectorAll(".webCreating p").forEach((p)=>{
            p.style.fontSize = "10px"
        })
        document.querySelectorAll(".webCreating h2").forEach((p)=>{
            p.style.fontSize = "11px"
        })
        document.querySelectorAll(".webCreating h1").forEach((p)=>{
            p.style.fontSize = "18px"
        })
        document.querySelectorAll(".webCreating span").forEach((p)=>{
            p.style.fontSize = "10px"
        })
        document.querySelectorAll(".webCreating ol").forEach((p)=>{
            p.style.fontSize = "10px"
        })
        document.querySelectorAll(".webCreating a").forEach((p)=>{
            p.style.fontSize = "10px"
        })
    }
    if(window.innerWidth >= 1024){
        document.querySelectorAll(".webCreating p").forEach((p)=>{
            p.style.fontSize = "23px"
        })
        document.querySelectorAll(".webCreating h2").forEach((p)=>{
            p.style.fontSize = "25px"
        })
        document.querySelectorAll(".webCreating h1").forEach((p)=>{
            p.style.fontSize = "60px"
        })
        document.querySelectorAll(".webCreating span").forEach((p)=>{
            p.style.fontSize = "23px"
        })
        document.querySelectorAll(".webCreating ol").forEach((p)=>{
            p.style.fontSize = "23px"
        })
        document.querySelectorAll(".webCreating a").forEach((p)=>{
            p.style.fontSize = "23px"
        })
    }
})

const hitslider = document.querySelector('.reviews');
let hitmouseDown = false;
let hitstartX, hitscrollLeft;

let hitstartDragging = function (e) {
  hitmouseDown = true;
  hitstartX = e.pageX - hitslider.offsetLeft;
  hitscrollLeft = hitslider.scrollLeft;
};
let hitstopDragging = function (event) {
  hitmouseDown = false;
  hitslider.style.cursor = "grab"
};

hitslider.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if(!hitmouseDown) { return; }
  const x = e.pageX - hitslider.offsetLeft;
  const scroll = x - hitstartX;
  hitslider.scrollLeft = hitscrollLeft - scroll;
});

// Add the event listeners
hitslider.addEventListener('mousedown', hitstartDragging, false);
hitslider.addEventListener('mouseup', hitstopDragging, false);
hitslider.addEventListener('mouseleave', hitstopDragging, false);

const aboutUs = document.querySelector('.aboutUsContainer');

let aboutUshitstartDragging = function (e) {
  hitmouseDown = true;
  hitstartX = e.pageX - aboutUs.offsetLeft;
  hitscrollLeft = aboutUs.scrollLeft;
};
let aboutUshitstopDragging = function (event) {
  hitmouseDown = false;
  console.log(aboutUs);
};

aboutUs.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if(!hitmouseDown) { return; }
  const x = e.pageX - aboutUs.offsetLeft;
  const scroll = x - hitstartX;
  aboutUs.scrollLeft = hitscrollLeft - scroll;
});

// Add the event listeners
aboutUs.addEventListener('mousedown', aboutUshitstartDragging, false);
aboutUs.addEventListener('mouseup', aboutUshitstopDragging, false);
aboutUs.addEventListener('mouseleave', aboutUshitstopDragging, false);

Array.from(document.querySelector(".cvlinks").children).forEach((link)=>{
    link.addEventListener("click",()=>{
        if(link.open == false){
            Array.from(document.querySelector(".cvlinks").children).forEach((li)=>{
                li.className = ""
                li.children[1].style.opacity = "0" 
                li.open = false
            
            })
            link.className = "active"
            link.children[1].style.opacity = "1" 
        }else{
            Array.from(document.querySelector(".cvlinks").children).forEach((li)=>{
                li.className = ""
                link.children[1].style.opacity = "0" 
            })
            link.className = ""
            link.children[1].style.opacity = "0" 
        }
    })
})