function selector(s) {
    return document.querySelector(s);
}

selector(".menu").addEventListener('click', function(){
    this.classList.toggle('Open');
    selector("header").classList.toggle('open');
    selector(".overlay").classList.toggle('open');
});