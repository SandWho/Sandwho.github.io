// Toggle the navigation menu visibility on small screens
document.getElementById('menu-toggle').addEventListener('click', function () {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
});
  
function scrollToFeatures() {
  const featuresSection = document.getElementById('features');
  featuresSection.classList.remove('hidden'); // Show the features section
  featuresSection.scrollIntoView({ behavior: 'smooth' });
}