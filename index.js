let navbar = document.querySelector('.navbar');
document.querySelector('#manu-btn').onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
}