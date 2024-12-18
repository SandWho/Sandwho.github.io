// Toggle the navigation menu visibility on small screens
document.getElementById('menu-toggle').addEventListener('click', function () {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
});