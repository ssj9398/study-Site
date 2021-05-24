const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');
const list = document.querySelector('.navbar__menu li ul');
const icons = document.querySelector('.navbar__icons');
const navbar = document.querySelector('.navbar');




toggleBtn.addEventListener('click', () => {
    console.log("aaa");
    menu.classList.toggle('active');
    //icons.classList.toggle('active');
});


menu.addEventListener('click', () => {
    list.classList.toggle('active');

    // icons.classList.toggle('active');
});

