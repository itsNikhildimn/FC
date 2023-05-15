const servicebtn = document.querySelector('.service');
const dropdown = document.querySelector('.dropdown');
const links = document.querySelectorAll('.animated-link');
const  hamb = document.querySelector('.ham-menu');
const sidenav = document.querySelector('.headerlinks')

servicebtn.addEventListener('mouseenter', () => {
    dropdown.classList.add('active');
});
dropdown.addEventListener('mouseleave', () => {
    dropdown.classList.remove('active');
});
hamb.addEventListener('click',() => { 
   sidenav.classList.toggle('active')

})