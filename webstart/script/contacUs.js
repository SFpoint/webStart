document.querySelectorAll(".monday div").forEach((div)=>{
    div.addEventListener("click" , (event)=>{
        const parent = event.currentTarget.parentElement
        const arr = Array.from(document.querySelectorAll(".monday div"))
        const current = arr.find(el=> el.className == event.currentTarget.className);
        if(arr.indexOf(current)+5 >=37){
            parent.insertAdjacentHTML("beforeend" , `<div class="newDate" style="grid-column-start: 1; grid-column-end: 1;grid-row-start: 33; grid-row-end: 37; "></div>`)
        }else{
            parent.insertAdjacentHTML("beforeend" , `<div  class="newDate" style="grid-column-start: 1; grid-column-end: 1;grid-row-start: ${arr.indexOf(current)+1}; grid-row-end: ${arr.indexOf(current)+5}; ">
            
            </div>`)
        }
        async function calendarDate(){
            const newDate = await document.querySelector(".monday .newDate")
document.querySelectorAll(".monday .calendarDate").forEach((date)=>{
    if (newDate !==null) {
        let start = newDate.style.gridRowStart ;
        let dateStart = date.style.gridRowStart 
            if(start - dateStart <5 && dateStart-start <4){
                    alert("please select another time")
                    newDate.remove()
            }
        
    }
            })
            newDate.className = "calendarDate"
        }
        calendarDate()
    })
})
document.querySelectorAll(".tuesday div").forEach((div)=>{
    div.addEventListener("click" , (event)=>{
        const parent = event.currentTarget.parentElement
        const arr = Array.from(document.querySelectorAll(".tuesday div"))
        const current = arr.find(el=> el.className == event.currentTarget.className);
        if(arr.indexOf(current)+5 >=37){
            parent.insertAdjacentHTML("beforeend" , `<div class="newDate" style="grid-column-start: 1; grid-column-end: 1;grid-row-start: 33; grid-row-end: 37; "></div>`)
        }else{
            parent.insertAdjacentHTML("beforeend" , `<div  class="newDate" style="grid-column-start: 1; grid-column-end: 1;grid-row-start: ${arr.indexOf(current)+1}; grid-row-end: ${arr.indexOf(current)+5}; "></div>`)
        }
        async function calendarDate(){
            const newDate = await document.querySelector(".tuesday .newDate")
document.querySelectorAll(".tuesday .calendarDate").forEach((date)=>{
    if (newDate !==null) {
        let start = newDate.style.gridRowStart ;
        let dateStart = date.style.gridRowStart 
            if(start - dateStart <5 && dateStart-start <4){
                    alert("please select another time")
                    newDate.remove()
            }
        
    }
            })
            newDate.className = "calendarDate"
        }
        calendarDate()
    })
})
document.querySelectorAll(".wednesday div").forEach((div)=>{
    div.addEventListener("click" , (event)=>{
        const parent = event.currentTarget.parentElement
        const arr = Array.from(document.querySelectorAll(".wednesday div"))
        const current = arr.find(el=> el.className == event.currentTarget.className);
        if(arr.indexOf(current)+5 >=37){
            parent.insertAdjacentHTML("beforeend" , `<div class="newDate" style="grid-column-start: 1; grid-column-end: 1;grid-row-start: 33; grid-row-end: 37; "></div>`)
        }else{
            parent.insertAdjacentHTML("beforeend" , `<div  class="newDate" style="grid-column-start: 1; grid-column-end: 1;grid-row-start: ${arr.indexOf(current)+1}; grid-row-end: ${arr.indexOf(current)+5}; "></div>`)
        }
        async function calendarDate(){
            const newDate = await document.querySelector(".wednesday .newDate")
document.querySelectorAll(".wednesday .calendarDate").forEach((date)=>{
    if (newDate !==null) {
        let start = newDate.style.gridRowStart ;
        let dateStart = date.style.gridRowStart 
            if(start - dateStart <5 && dateStart-start <4){
                    alert("please select another time")
                    newDate.remove()
            }
        
    }
            })
            newDate.className = "calendarDate"
        }
        calendarDate()
    })
})
document.querySelectorAll(".thursday div").forEach((div)=>{
    div.addEventListener("click" , (event)=>{
        const parent = event.currentTarget.parentElement
        const arr = Array.from(document.querySelectorAll(".thursday div"))
        const current = arr.find(el=> el.className == event.currentTarget.className);
        if(arr.indexOf(current)+5 >=37){
            parent.insertAdjacentHTML("beforeend" , `<div class="newDate" style="grid-column-start: 1; grid-column-end: 1;grid-row-start: 33; grid-row-end: 37; "></div>`)
        }else{
            parent.insertAdjacentHTML("beforeend" , `<div  class="newDate" style="grid-column-start: 1; grid-column-end: 1;grid-row-start: ${arr.indexOf(current)+1}; grid-row-end: ${arr.indexOf(current)+5}; "></div>`)
        }
        async function calendarDate(){
            const newDate = await document.querySelector(".thursday .newDate")
document.querySelectorAll(".thursday .calendarDate").forEach((date)=>{
    if (newDate !==null) {
        let start = newDate.style.gridRowStart ;
        let dateStart = date.style.gridRowStart 
            if(start - dateStart <5 && dateStart-start <4){
                    alert("please select another time")
                    newDate.remove()
            }
        
    }
            })
            newDate.className = "calendarDate"
        }
        calendarDate()
    })
})
document.querySelectorAll(".friday div").forEach((div)=>{
    div.addEventListener("click" , (event)=>{
        const parent = event.currentTarget.parentElement
        const arr = Array.from(document.querySelectorAll(".friday div"))
        const current = arr.find(el=> el.className == event.currentTarget.className);
        if(arr.indexOf(current)+5 >=37){
            parent.insertAdjacentHTML("beforeend" , `<div class="newDate" style="grid-column-start: 1; grid-column-end: 1;grid-row-start: 33; grid-row-end: 37; "></div>`)
        }else{
            parent.insertAdjacentHTML("beforeend" , `<div  class="newDate" style="grid-column-start: 1; grid-column-end: 1;grid-row-start: ${arr.indexOf(current)+1}; grid-row-end: ${arr.indexOf(current)+5}; "></div>`)
        }
        async function calendarDate(){
            const newDate = await document.querySelector(".friday .newDate")
document.querySelectorAll(".friday .calendarDate").forEach((date)=>{
    if (newDate !==null) {
        let start = newDate.style.gridRowStart ;
        let dateStart = date.style.gridRowStart 
            if(start - dateStart <5 && dateStart-start <4){
                    alert("please select another time")
                    newDate.remove()
            }
        
    }
            })
            newDate.className = "calendarDate"
        }
        calendarDate()
    })
})
document.querySelectorAll(".saturday div").forEach((div)=>{
    div.addEventListener("click" , (event)=>{
        const parent = event.currentTarget.parentElement
        const arr = Array.from(document.querySelectorAll(".saturday div"))
        const current = arr.find(el=> el.className == event.currentTarget.className);
        if(arr.indexOf(current)+5 >=37){
            parent.insertAdjacentHTML("beforeend" , `<div class="newDate" style="grid-column-start: 1; grid-column-end: 1;grid-row-start: 33; grid-row-end: 37; "></div>`)
        }else{
            parent.insertAdjacentHTML("beforeend" , `<div  class="newDate" style="grid-column-start: 1; grid-column-end: 1;grid-row-start: ${arr.indexOf(current)+1}; grid-row-end: ${arr.indexOf(current)+5}; "></div>`)
        }
        async function calendarDate(){
            const newDate = await document.querySelector(".saturday .newDate")
document.querySelectorAll(".saturday .calendarDate").forEach((date)=>{
    if (newDate !==null) {
        let start = newDate.style.gridRowStart ;
        let dateStart = date.style.gridRowStart 
            if(start - dateStart <5 && dateStart-start <4){
                    alert("please select another time")
                    newDate.remove()
            }
        
    }
            })
            newDate.className = "calendarDate"
        }
        calendarDate()
    })
})
document.querySelectorAll(".sunday div").forEach((div)=>{
    div.addEventListener("click" , (event)=>{
        const parent = event.currentTarget.parentElement
        const arr = Array.from(document.querySelectorAll(".sunday div"))
        const current = arr.find(el=> el.className == event.currentTarget.className);
        if(arr.indexOf(current)+5 >=37){
            parent.insertAdjacentHTML("beforeend" , `<div class="newDate" style="grid-column-start: 1; grid-column-end: 1;grid-row-start: 33; grid-row-end: 37; "></div>`)
        }else{
            parent.insertAdjacentHTML("beforeend" , `<div  class="newDate" style="grid-column-start: 1; grid-column-end: 1;grid-row-start: ${arr.indexOf(current)+1}; grid-row-end: ${arr.indexOf(current)+5}; "></div>`)
        }
        async function calendarDate(){
            const newDate = await document.querySelector(".sunday .newDate")
document.querySelectorAll(".sunday .calendarDate").forEach((date)=>{
    if (newDate !==null) {
        let start = newDate.style.gridRowStart ;
        let dateStart = date.style.gridRowStart 
            if(start - dateStart <5 && dateStart-start <4){
                    alert("please select another time")
                    newDate.remove()
            }
        
    }
            })
            newDate.className = "calendarDate"
        }
        calendarDate()
    })
})
const thisDay = new Date
const today = Array.from(document.querySelectorAll(".Day")).find(el => el.children[0].getAttribute("data-day") == thisDay.getDay())
const lastDayDate = new Date(thisDay.getFullYear(), thisDay.getMonth() + 1, 0);
today.lastElementChild.innerHTML = thisDay.getDate()
today.lastElementChild.className = "today"
document.querySelectorAll(".Day").forEach((day)=>{
    if(day.children[0].getAttribute("data-day") < thisDay.getDay() && day.children[0].getAttribute("data-day") != 0){
        let count = thisDay.getDate() - (thisDay.getDay() - (day.children[0].getAttribute("data-day")))
        day.children[1].innerHTML = count
    }
    if(day.children[0].getAttribute("data-day") > thisDay.getDay() && day.children[0].getAttribute("data-day") != 0){
        let count = thisDay.getDate() + (day.children[0].getAttribute("data-day") - thisDay.getDay()  )
        if(lastDayDate.getDate() < count){
            count =  count - lastDayDate.getDate()
        }
        day.children[1].innerHTML = count
    }
    if(day.children[0].getAttribute("data-day") == 0){
        let count = thisDay.getDate() + (7 - thisDay.getDay()  )
        if(lastDayDate.getDate() < count){
            count =  count - lastDayDate.getDate()
        }
        day.children[1].innerHTML = count
    }
})

Array.from(document.querySelector(".askUs").children).forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        Array.from(document.querySelector(".askUs").children).forEach((item)=>{
            item.className = ""
        })
        btn.className ="active"
    })
})
    document.querySelector(".askUs").children[0].addEventListener("click", ()=>{
        document.querySelector(".calendarBlock").style.display = "flex"
        document.querySelector(".restrictblock").style.display ="block"
        document.querySelector(".headerCart").style.background = "none"
    })
    document.querySelector(".askUs").children[1].addEventListener(
        "click", ()=>{
            document.querySelector(".leaveMessage").style.display = "flex"
        document.querySelector(".restrictblock").style.display ="block"
        document.querySelector(".headerCart").style.background = "none"
        }
    )