const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');
const list = document.querySelector('.navbar__menu li ul');
const icons = document.querySelector('.navbar__icons');
const navbar = document.querySelector('.navbar');

var search = document.querySelector(".search");
var searchButton = search.querySelector("input[type=submit]");
var scrollDown = document.querySelector("#scroll-down");

var topscroll = document.querySelector("#topscroll");
var bottom = document.querySelector("#bottom");



bottom.addEventListener('click', (e) => {
    e.stopPropagation();
    var height = document.body.scrollHeight;
    window.scroll({ top: height, behavior: 'smooth' });
});


topscroll.addEventListener('click', (e) => {
    console.log("aaa");
    e.stopPropagation();
    window.scroll({ top: 0, behavior: 'smooth' });

});


toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log("aaa");
    menu.classList.toggle('active');
    //icons.classList.toggle('active');
});

searchButton.addEventListener('click', (e) => {
    e.stopPropagation();
    alert("검색영역 개발 중입니다.");

});