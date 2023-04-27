const switchBlock = document.querySelector(".themeSwitch")
switchBlock.children[0].addEventListener("click" , ()=>{
    changeTheme()
     switchBlock.children[1].style.display = "block"
     switchBlock.children[0].style.display = "none"
     document.querySelectorAll(".dark").forEach((dark)=>{
        dark.classList.add("light")
        dark.classList.remove("dark")
     })
     if(document.querySelector(".footerBlockDark") !== null){
        document.querySelector(".footerBlockDark").className = "footerBlockLight"
    }
    document.querySelectorAll(".backGroundDark").forEach((dark)=>{
        dark.classList.add("backGroundlight")
        dark.classList.remove("backGroundDark")
     })
})
switchBlock.children[1].addEventListener("click", ()=>{
    changeThemeDark()
    switchBlock.children[0].style.display = "block"
    switchBlock.children[1].style.display = "none"
    if(document.querySelector(".footerBlockLight") !== null){
        document.querySelector(".footerBlockLight").className = "footerBlockDark"
    }
    document.querySelectorAll(".light").forEach((dark)=>{
        dark.classList.add("dark")
        dark.classList.remove("light")
     })
     document.querySelectorAll(".backGroundlight").forEach((dark)=>{
        dark.classList.add("backGroundDark")
        dark.classList.remove("backGroundlight")
     })

})





document.querySelector(".menuBtn").addEventListener("click", ()=>{
    document.querySelector(".menuBtn").style.rotate = "360deg"
    if(document.querySelector(".burgerMenuBlock").style.top !=="5vh"){
        document.querySelector(".burgerMenuBlock").style.display = "flex"
        setTimeout(() => {
            document.querySelector(".burgerMenuBlock").style.top ="5vh"
            document.querySelector(".menuBtn").style.rotate = "360deg"
        }, 100);
        Array.from(document.querySelector(".headerCart").children).forEach((child)=>{
            child.style.width = "90%"
            child.style.borderRadius = "10px"
        })
        document.querySelector(".restrictblock").style.width = "95%"
        document.querySelector(".restrictblock").style.left = "2.5%"
        document.querySelector(".restrictblock").style.top = "2.5vh"
        document.querySelector(".headerCart").style.marginTop = "2.5%"
        document.querySelector(".restrictblock").style.borderRadius = "10px"
    }else{

        document.querySelector(".burgerMenuBlock").style.top ="100vh"
        document.querySelector(".menuBtn").style.rotate = "0deg"
        Array.from(document.querySelector(".headerCart").children).forEach((child)=>{
            child.style.width = "100%"
        })
        document.querySelector(".restrictblock").style.width = "100%"
        document.querySelector(".restrictblock").style.left = "0%"
        document.querySelector(".restrictblock").style.top = "0vh"
        document.querySelector(".headerCart").style.marginTop = "0%"
        
    }
})


document.querySelector(".burgerMenuHeader").children[1].addEventListener("click" , ()=>{
    setTimeout(() => {
        document.querySelector(".burgerMenuBlock").style.display = "none"

    }, 1000);
    document.querySelector(".burgerMenuBlock").style.top ="100%"
    Array.from(document.querySelector(".headerCart").children).forEach((child)=>{
        child.style.width = "100%"
        child.style.borderRadius = "0px"
    })
    document.querySelector(".restrictblock").style.width = "100%"
    document.querySelector(".restrictblock").style.left = "0%"
    document.querySelector(".restrictblock").style.top = "0vh"
    document.querySelector(".headerCart").style.marginTop = "0%"
    document.querySelector(".restrictblock").style.borderRadius = "0px"
    

})

Array.from(document.querySelector(".dropDownsContainer").children).forEach((dropDown)=>{
    dropDown.addEventListener("click" , (event)=>{
        if(dropDown.open !== true){
            Array.from(document.querySelector(".dropDownsContainer").children).forEach((item)=>{
                item.className = "out"
                setTimeout(() => {
                    document.querySelectorAll(".out").forEach((out)=>{
                        out.style.display = "none"
                    })
                }, 500);
                document.querySelector(".burgerArrow").style.display = "none"
                event.currentTarget.className = ""
                event.currentTarget.style.position = "absolute"
                event.currentTarget.style.top = `${(-item.offsetTop +235)/2}px`
            })
        }else{
            Array.from(document.querySelector(".dropDownsContainer").children).forEach((item)=>{
               setTimeout(() => {
                item.style.display = "block"
                item.className = "in"
                document.querySelector(".burgerArrow").style.display = "block"
               }, 500);
                event.currentTarget.className = "active"
                event.currentTarget.style.position = "static"
                event.currentTarget.style.top = ""
                
            })
        }
    })
})


const notiArr = Array.from(document.querySelectorAll('.notification'))
notiArr.forEach((noti)=>{

    noti.style.zIndex = `${-notiArr.indexOf(noti) +10}`
    noti.parentElement.style.height = `${noti.offsetHeight + 25}px`
    let flag = false
    document.querySelector(".notifications .seeMore").addEventListener("click", (event)=>{
        if(flag == false){
            notiArr.forEach((el)=>{
                let count = 0
                noti.classList.add("opened")
                do{count++}while (count < Math.round(el.offsetHeight * notiArr.indexOf(el) + 10)) 
                el.style.top = `${count +10 * notiArr.indexOf(el)}px`
                noti.style.left = `10px`
                el.parentElement.style.height = `${el.offsetHeight * notiArr.length+ 10*notiArr.length +10}px`
                count = 0
            })
            document.querySelector(".notifications .seeMore").classList.add('seeMoreActive')
            flag = true
        }else{
            notiArr.forEach((noti)=>{
                noti.classList.remove("opened")
                let count = 0
                do{count++}while(count < notiArr.indexOf(noti))
                noti.style.top = `10px`
                noti.style.left = `10px`
                noti.parentElement.style.height = `${noti.offsetHeight + 25}px`
                count = 0
                event.currentTarget.classList.remove('seeMoreActive')
                flag = false
            })
        }
    })
})
    document.querySelectorAll(".freeCalcBtn").forEach((btn)=>{
        btn.addEventListener("click", ()=>{
            const target = document.querySelector('.quizBlock')
            target.style.display = "flex"
            if(target.previousElementSibling.className == "headerFooterBlock"){
                target.previousElementSibling.style.display = "none"
            }
            document.querySelector(".headerCart").style.zIndex = "10"
            document.querySelector(".restrictblock").style.zIndex = "10"
            window.scrollTo({
                top: 0,
                behavior: "instant"
            })
            const text = document.querySelector('.first').children[0]
            let render = ""
            Array.from(text.innerText).forEach((letter)=>{
                letter.innerHTML = `<span>${letter}</span>`
                render += `<span>${letter}</span>`
            });
            text.innerHTML = render
            const lettersArr = Array.from(text.children)
            lettersArr.forEach((letter)=>{
                letter.style.display = "none"
                letter.style.opacity = "0"
            })
            let count = 0
                const writing =  setInterval(() => {
                    count++
                    const thisLetter = lettersArr.find(el => lettersArr.indexOf(el) == count - 1)
                    if(thisLetter !== undefined){
                        thisLetter.style.display = "inline"
                        thisLetter.className = "visible"
                    }
                }, 50);



                setTimeout(() => {
                    clearInterval(writing)
                    document.querySelector(".first .btnContainer").style.opacity = "1"
                }, 1200);
                    })
                })

    const sliderRange = document.getElementById("myRange");

sliderRange.addEventListener("input", ()=>{
    if(document.querySelector(".backGroundlight") != null){
        sliderRange.style.background =  `linear-gradient(90deg,  #101014 ${sliderRange.value}%, rgba(200, 186, 229, 0) ${sliderRange.value}%)`

    }else{
        sliderRange.style.background =  `linear-gradient(90deg,  #CFC4E7 ${sliderRange.value}%, rgba(200, 186, 229, 0) ${sliderRange.value}%)`
    }
})

document.querySelector(".return").addEventListener("click", ()=>{
    const target = document.querySelector('.quizBlock')
    target.style.display = "none"
    if(target.previousElementSibling.className == "headerFooterBlock"){
        target.previousElementSibling.style.display = "block"
    }
    document.querySelector(".headerCart").style.zIndex = "0"
    document.querySelector(".restrictblock ").style.zIndex = "0"
    window.scrollTo({
        top: 0,
        behavior: "instant"
    })
    document.querySelectorAll(".quizBlock .btnContainer").forEach((cnt)=>{
        cnt.style.opacity = "0"
    })
    document.querySelector(".third input").style.opacity = "0"
    document.querySelector(".fifth form").style.opacity = "0"
})

document.querySelectorAll(".btnContainer button").forEach((btn)=>{
    btn.addEventListener("click" , ()=>{
        document.querySelectorAll(".btnContainer button").forEach((butn)=>{
            butn.className = ""
        })
        btn.className = "active"
        const parent = btn.parentElement.parentElement
        parent.style.display = "none"
        parent.nextElementSibling.style.display = "flex"
        if(parent.className == "first"){
            const text = document.querySelector('.second').children[0]
            let render = ""
            Array.from(text.innerText).forEach((letter)=>{
                letter.innerHTML = `<span>${letter}</span>`
                render += `<span>${letter}</span>`
            });
            text.innerHTML = render
            const lettersArr = Array.from(text.children)
            lettersArr.forEach((letter)=>{
                letter.style.display = "none"
                letter.style.opacity = "0"
            })
            let counter = 0
                const writing =  setInterval(() => {
                    counter++
                    const thisLetter = lettersArr.find(el => lettersArr.indexOf(el) == counter - 1)
                    if(thisLetter !== undefined){
                        thisLetter.style.display = "inline"
                        thisLetter.className = "visible"
                    }

                }, 50);



                setTimeout(() => {
                    clearInterval(writing)
                    document.querySelector(".second .btnContainer").style.opacity = "1"
                }, 1900);
            let count = 0
                const interval = setInterval(() => {
                    count++
                    if (document.querySelector(".backGroundlight") != null) {
                        sliderRange.style.background =  `linear-gradient(90deg,  #101014 ${count/10}%, rgba(200, 186, 229, 0) ${count/10}%)`                        
                    }else{
                        sliderRange.style.background =  `linear-gradient(90deg,  #CFC4E7 ${count/10}%, rgba(200, 186, 229, 0) ${count/10}%)`
                    }
                }, 10);
                setTimeout(() => {
                    clearInterval(interval)
                    sliderRange.value = 25
                    if(document.querySelector(".backGroundlight") != null){
                        sliderRange.style.background =  `linear-gradient(90deg,  #101014 ${sliderRange.value}%, rgba(200, 186, 229, 0) ${sliderRange.value}%)`
                
                    }else{
                        sliderRange.style.background =  `linear-gradient(90deg,  #CFC4E7 ${sliderRange.value}%, rgba(200, 186, 229, 0) ${sliderRange.value}%)`
                    }
                }, 2500);
        }
        if(parent.className == "second"){
            const text = document.querySelector('.third').children[0]
            let render = ""
            Array.from(text.innerText).forEach((letter)=>{
                letter.innerHTML = `<span>${letter}</span>`
                render += `<span>${letter}</span>`
            });
            text.innerHTML = render
            const lettersArr = Array.from(text.children)
            lettersArr.forEach((letter)=>{
                letter.style.display = "none"
                letter.style.opacity = "0"
            })
            let counter = 0
                const writing =  setInterval(() => {
                    counter++
                    const thisLetter = lettersArr.find(el => lettersArr.indexOf(el) == counter - 1)
                    if(thisLetter !== undefined){
                        thisLetter.style.display = "inline"
                        thisLetter.className = "visible"
                    }

                }, 50);

                setTimeout(() => {
                    clearInterval(writing)
                    document.querySelector(".third input").style.opacity = "1"
                }, 2600);
            let count = 250
                const interval = setInterval(() => {
                    count++
                    if(document.querySelector(".backGroundlight") != null){
                        sliderRange.style.background =  `linear-gradient(90deg,  #101014 ${count/10}%, rgba(200, 186, 229, 0) ${count/10}%)`

                    }else{
                        sliderRange.style.background =  `linear-gradient(90deg,  #CFC4E7 ${count/10}%, rgba(200, 186, 229, 0) ${count/10}%)`
                    }
                }, 10);
                setTimeout(() => {
                    clearInterval(interval)
                sliderRange.value = 50
                if(document.querySelector(".backGroundlight") != null){
                    sliderRange.style.background =  `linear-gradient(90deg,  #101014 ${sliderRange.value}%, rgba(200, 186, 229, 0) ${sliderRange.value}%)`
            
                }else{
                    sliderRange.style.background =  `linear-gradient(90deg,  #CFC4E7 ${sliderRange.value}%, rgba(200, 186, 229, 0) ${sliderRange.value}%)`
                }                }, 2500);
        }
        if(parent.className == "third"){

            let count = 500
            const interval = setInterval(() => {
                count++
                if(document.querySelector(".backGroundlight") != null){
                    sliderRange.style.background =  `linear-gradient(90deg,  #101014 ${count/10}%, rgba(200, 186, 229, 0) ${count/10}%)`

                }else{
                    sliderRange.style.background =  `linear-gradient(90deg,  #CFC4E7 ${count/10}%, rgba(200, 186, 229, 0) ${count/10}%)`
                }            }, 10);
            setTimeout(() => {
                clearInterval(interval)
            sliderRange.value = 75
            if(document.querySelector(".backGroundlight") != null){
                sliderRange.style.background =  `linear-gradient(90deg,  #101014 ${sliderRange.value}%, rgba(200, 186, 229, 0) ${sliderRange.value}%)`
        
            }else{
                sliderRange.style.background =  `linear-gradient(90deg,  #CFC4E7 ${sliderRange.value}%, rgba(200, 186, 229, 0) ${sliderRange.value}%)`
            }            }, 2500);
        }
        if(parent.className == "fourth"){
            const text = document.querySelector('.fifth').children[0]
            let render = ""
            Array.from(text.innerText).forEach((letter)=>{
                letter.innerHTML = `<span>${letter}</span>`
                render += `<span>${letter}</span>`
            });
            text.innerHTML = render
            const lettersArr = Array.from(text.children)
            lettersArr.forEach((letter)=>{
                letter.style.display = "none"
                letter.style.opacity = "0"
            })
            let counter = 0
                const writing =  setInterval(() => {
                    counter++
                    const thisLetter = lettersArr.find(el => lettersArr.indexOf(el) == counter - 1)
                    if(thisLetter !== undefined){
                        thisLetter.style.display = "inline"
                        thisLetter.className = "visible"
                    }

                }, 50);

                setTimeout(() => {
                    clearInterval(writing)
                    document.querySelector(".fifth form").style.opacity = "1"
                }, 2400);
            let count = 750
            const interval = setInterval(() => {
                count++
                if(document.querySelector(".backGroundlight") != null){
                    sliderRange.style.background =  `linear-gradient(90deg,  #101014 ${count/10}%, rgba(200, 186, 229, 0) ${count/10}%)`

                }else{
                    sliderRange.style.background =  `linear-gradient(90deg,  #CFC4E7 ${count/10}%, rgba(200, 186, 229, 0) ${count/10}%)`
                }            }, 10);
            setTimeout(() => {
                clearInterval(interval)
            sliderRange.value = 100
            if(document.querySelector(".backGroundlight") != null){
                sliderRange.style.background =  `linear-gradient(90deg,  #101014 ${sliderRange.value}%, rgba(200, 186, 229, 0) ${sliderRange.value}%)`
        
            }else{
                sliderRange.style.background =  `linear-gradient(90deg,  #CFC4E7 ${sliderRange.value}%, rgba(200, 186, 229, 0) ${sliderRange.value}%)`
            }            }, 2500);
        }
    })
})

document.querySelectorAll('.goBack').forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        const parent = btn.parentElement
    btn.parentElement.style.display = "none"
    btn.parentElement.previousElementSibling.style.display = "flex"
    if(parent.className == "first"){
        sliderRange.value = 0
        let count = 0
            if(document.querySelector(".backGroundlight") != null){
                sliderRange.style.background =  `linear-gradient(90deg,  #101014 ${count}%, rgba(200, 186, 229, 0) ${count}%)`
            }else{
                sliderRange.style.background =  `linear-gradient(90deg,  #CFC4E7 ${count}%, rgba(200, 186, 229, 0) ${count}%)`
            }    
    }
    if(parent.className == "second"){
        document.querySelector(".first .btnContainer").style.opacity = "1"
        sliderRange.value = 0
        let count = 0
        if(document.querySelector(".backGroundlight") != null){
            sliderRange.style.background =  `linear-gradient(90deg,  #101014 ${count}%, rgba(200, 186, 229, 0) ${count}%)`
        }else{
            sliderRange.style.background =  `linear-gradient(90deg,  #CFC4E7 ${count}%, rgba(200, 186, 229, 0) ${count}%)`
        }       }
    if(parent.className == "third"){
        document.querySelector(".second .btnContainer").style.opacity = "1"
        let count = 25
        sliderRange.value = 25
        if(document.querySelector(".backGroundlight") != null){
            sliderRange.style.background =  `linear-gradient(90deg,  #101014 ${count}%, rgba(200, 186, 229, 0) ${count}%)`
        }else{
            sliderRange.style.background =  `linear-gradient(90deg,  #CFC4E7 ${count}%, rgba(200, 186, 229, 0) ${count}%)`
        }       }
    if(parent.className == "fourth"){
        document.querySelector(".third input").style.opacity = "1"
        sliderRange.value = 50
        let count = 50
        if(document.querySelector(".backGroundlight") != null){
            sliderRange.style.background =  `linear-gradient(90deg,  #101014 ${count}%, rgba(200, 186, 229, 0) ${count}%)`
        }else{
            sliderRange.style.background =  `linear-gradient(90deg,  #CFC4E7 ${count}%, rgba(200, 186, 229, 0) ${count}%)`
        }       }
    if(parent.className == "fifth"){
        document.querySelector(".fourth .btnContainer").style.opacity = "1"
        let count = 75
        sliderRange.value = 75
        if(document.querySelector(".backGroundlight") != null){
            sliderRange.style.background =  `linear-gradient(90deg,  #101014 ${count}%, rgba(200, 186, 229, 0) ${count}%)`
        }else{
            sliderRange.style.background =  `linear-gradient(90deg,  #CFC4E7 ${count}%, rgba(200, 186, 229, 0) ${count}%)`
        }       }
    })
})

document.querySelector('.third input').addEventListener("change", (event)=>{
    const text = document.querySelector('.fourth').children[0]
    let render = ""
    Array.from(text.innerText).forEach((letter)=>{
        letter.innerHTML = `<span>${letter}</span>`
        render += `<span>${letter}</span>`
    });
    text.innerHTML = render
    const lettersArr = Array.from(text.children)
    lettersArr.forEach((letter)=>{
        letter.style.display = "none"
        letter.style.opacity = "0"
    })
    let counter = 0
        const writing =  setInterval(() => {
            counter++
            const thisLetter = lettersArr.find(el => lettersArr.indexOf(el) == counter - 1)
            if(thisLetter !== undefined){
                thisLetter.style.display = "inline"
                thisLetter.className = "visible"
            }

        }, 50);



        setTimeout(() => {
            clearInterval(writing)
            document.querySelector(".fourth .btnContainer").style.opacity = "1"
        }, 600);
    let count = 500
            const interval = setInterval(() => {
                count++
                if(document.querySelector(".backGroundlight") != null){
                    sliderRange.style.background =  `linear-gradient(90deg,  #101014 ${count/10}%, rgba(200, 186, 229, 0) ${count/10}%)`

                }else{
                    sliderRange.style.background =  `linear-gradient(90deg,  #CFC4E7 ${count/10}%, rgba(200, 186, 229, 0) ${count/10}%)`
                }            }, 10);
            setTimeout(() => {
                clearInterval(interval)
            sliderRange.value = 75
            if(document.querySelector(".backGroundlight") != null){
                sliderRange.style.background =  `linear-gradient(90deg,  #101014 ${sliderRange.value}%, rgba(200, 186, 229, 0) ${sliderRange.value}%)`
        
            }else{
                sliderRange.style.background =  `linear-gradient(90deg,  #CFC4E7 ${sliderRange.value}%, rgba(200, 186, 229, 0) ${sliderRange.value}%)`
            }            }, 2500);
    event.target.parentElement.style.display = "none"
    event.target.parentElement.nextElementSibling.style.display = "flex"
})

function submitForm() {
    const text = document.querySelector('.sixth').children[0]
    let render = ""
    Array.from(text.innerText).forEach((letter)=>{
        letter.innerHTML = `<span>${letter}</span>`
        render += `<span>${letter}</span>`
    });
    text.innerHTML = render
    const lettersArr = Array.from(text.children)
    lettersArr.forEach((letter)=>{
        letter.style.display = "none"
        letter.style.opacity = "0"
    })
    let counter = 0
        const writing =  setInterval(() => {
            counter++
            const thisLetter = lettersArr.find(el => lettersArr.indexOf(el) == counter - 1)
            if(thisLetter !== undefined){
                thisLetter.style.display = "inline"
                thisLetter.className = "visible"
            }

        }, 50);

        setTimeout(() => {
            clearInterval(writing)
            text.nextElementSibling.style.opacity = "1"
        }, 2400);
        document.querySelector('.fifth').style.display = "none"
    document.querySelector('.sixth').style.display = "flex"
    sliderRange.value = 100
    if(document.querySelector(".backGroundlight") != null){
        sliderRange.style.background =  `linear-gradient(90deg,  #101014 ${sliderRange.value}%, rgba(200, 186, 229, 0) ${sliderRange.value}%)`

    }else{
        sliderRange.style.background =  `linear-gradient(90deg,  #CFC4E7 ${sliderRange.value}%, rgba(200, 186, 229, 0) ${sliderRange.value}%)`
    }    const lastOne = document.querySelector(".quizBlock")
    /*setTimeout(() => {
        lastOne.style.display = "none"
        document.querySelector(".headerCart").style.zIndex = "0"
        document.querySelector(".restrictblock ").style.zIndex = "0"
        document.querySelector(".headerFooterBlock").style.display = "flex"
        document.querySelector(".first").style.display = "flex"
        document.querySelector(".sixth").style.display = "none"
        sliderRange.value = 0
        sliderRange.style.background =  `linear-gradient(90deg,  #CFC4E7 ${sliderRange.value}%, rgba(200, 186, 229, 0) ${sliderRange.value}%)`
        document.querySelectorAll(".quizBlock .btnContainer").forEach((cnt)=>{
            cnt.style.opacity = "0"
        })
        document.querySelector(".third input").style.opacity = "0"
        document.querySelector(".fifth form").style.opacity = "0"
    }, 5000);*/
}


document.querySelector('.headerContainer nav details').addEventListener("mouseover", (event)=>{
event.currentTarget.open = true
})
document.querySelector('.headerContainer nav details').addEventListener("mouseleave", (event)=>{
    event.currentTarget.open = false
    })



function changeTheme() {
    document.querySelectorAll(".webCreating p").forEach((p)=>{
        p.style.color = "#101014"
    })
    document.querySelectorAll(".webCreating h2").forEach((p)=>{
        p.style.color = "#101014"
    })
    document.querySelectorAll(".webCreating h1").forEach((p)=>{
        p.style.color = "#101014"
    })
    document.querySelectorAll(".webCreating span").forEach((p)=>{
        p.style.color = "#101014"
    })
    document.querySelectorAll(".webCreating ol").forEach((p)=>{
        p.style.color = "#101014"
    })
    document.querySelectorAll(".webCreating a").forEach((p)=>{
        p.style.color = "#101014"
    })
}
function changeThemeDark() {
    document.querySelectorAll(".webCreating p").forEach((p)=>{
        p.style.color = "#B39DE1"
    })
    document.querySelectorAll(".webCreating h2").forEach((p)=>{
        p.style.color = "#B39DE1"
    })
    document.querySelectorAll(".webCreating h1").forEach((p)=>{
        p.style.color = "#B39DE1"
    })
    document.querySelectorAll(".webCreating span").forEach((p)=>{
        p.style.color = "#B39DE1"
    })
    document.querySelectorAll(".webCreating ol").forEach((p)=>{
        p.style.color = "#B39DE1"
    })
    document.querySelectorAll(".webCreating a").forEach((p)=>{
        p.style.color = "#B39DE1"
    })
}

document.querySelectorAll(".lang").forEach((lang)=>{
    const chosen = document.querySelectorAll(".singleLang")
    lang.querySelectorAll(".langChoice svg").forEach((choice)=>{
        choice.addEventListener("click", (event)=>{
            chosen.forEach((choiceLang)=>{
                choiceLang.innerHTML = event.currentTarget.outerHTML
            })
        })
    })
})
