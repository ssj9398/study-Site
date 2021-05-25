const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');
const list = document.querySelector('.navbar__menu li ul');
const icons = document.querySelector('.navbar__icons');
const navbar = document.querySelector('.navbar');

var search = document.querySelector(".search");
var searchButton = search.querySelector("input[type=submit]");
var scrollDown = document.querySelector("#scroll-down");

toggleBtn.addEventListener('click', () => {
    console.log("aaa");
    menu.classList.toggle('active');
    //icons.classList.toggle('active');
});

searchButton.addEventListener('click', () => {
    alert("검색영역 개발 중입니다.");

});

scrollDown.addEventListener('click', () => {
    alert("a");
});