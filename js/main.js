

// * set date
import setFullDate from "./setDate.js";

const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const wDay = document.getElementById("wDay")
const longDate = document.getElementById('longDate')

setFullDate(date, day, month, year, longDate, wDay);
// *


// * wand
const btnWand = document.getElementById('wand')
const name = document.getElementById('name')
const userData = {
    setted: false,
    value: "Stranger"
}

function nameScape(el) {

    if(el.length == 0) {
        userData.setted = false
        userData.value = "Stranger"
        localStorage.setItem('user', JSON.stringify(userData))
        return "Stranger"
    }

    let scapedEl = el.trim()
    scapedEl = scapedEl.replace(/\s/g, "");

    userData.setted = true;
    userData.value = scapedEl
    localStorage.setItem('user', JSON.stringify(userData))
    return scapedEl
}


btnWand.addEventListener('click', () => { 
    name.contentEditable = true
    name.focus()
})

document.addEventListener("keyup", (e) => {

    if (e.keyCode == 13 || e.keyCode == 32) {
        name.contentEditable = false
        name.blur()

        let el = nameScape(name.textContent);
        name.textContent = el;
    }

});

name.addEventListener("blur", (e) => {
    name.contentEditable = false
});


let local = localStorage

let data = local.getItem('user') 
let dataArr = JSON.parse(data)          

if(data) {
    name.textContent = dataArr.value

} else {
    localStorage.setItem('user',JSON.stringify(userData))
    name.textContent = userData.value
}
// *



// // * loader
const loader = document.getElementById('loader')
const main = document.getElementById('main')

setTimeout(() => {
    loader.classList.add('disabled')

    setTimeout(() => {
        main.classList.add('enabled')
    }, 1000);
}, 2000);