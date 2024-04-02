var logo = document.querySelector('.burger-menu');
var nav = document.querySelector('.nav');

logo.addEventListener('click', function(){
    this.classList.toggle('open');
    nav.classList.toggle('showmenu');
});
