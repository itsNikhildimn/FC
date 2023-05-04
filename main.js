const servicebtn = document.querySelector('.service');
const dropdown = document.querySelector('.dropdown');
const links = document.querySelectorAll('.animated-link');

servicebtn.addEventListener('mouseenter', () => {
    dropdown.classList.add('active');
})
dropdown.addEventListener('mouseleave', () => {
    dropdown.classList.remove('active');
})