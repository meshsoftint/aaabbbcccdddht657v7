/*!
* Start Bootstrap - Small Business v5.0.5 (https://startbootstrap.com/template/small-business)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-small-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

const elements = document.getElementsByClassName("working_hours");
const todayHours = document.getElementsByClassName("today_hours");

let day = new Date().getDay();
console.log('date ',elements)
if(day === 0)
    day = 6
else
    day = day -1
if(elements.length>day){
    todayHours[0].innerHTML = elements[day].innerHTML
}

var dropDown = document.querySelector(".dropbtn");
var dropDownDiv = document.querySelector(".dropdown-content");
dropDown.addEventListener("click", function(){
    dropDownDiv.classList.toggle('is-mobile');
});
