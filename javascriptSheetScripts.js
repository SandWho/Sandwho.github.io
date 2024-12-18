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
  
  
  function variable() {
    const moreSection = document.getElementById('variables');
    moreSection.classList.remove('hidden');
    moreSection.scrollIntoView({ behavior: 'smooth' });
  }

  function arrays() {
    const moreSection = document.getElementById('arrays');
    moreSection.classList.remove('hidden');
    moreSection.scrollIntoView({ behavior: 'smooth' });
  }
  
  function operators() {
    const moreSection = document.getElementById('operators');
    moreSection.classList.remove('hidden');
    moreSection.scrollIntoView({ behavior: 'smooth' });
  }

  
  function functions() {
    const moreSection = document.getElementById('functions');
    moreSection.classList.remove('hidden');
    moreSection.scrollIntoView({ behavior: 'smooth' });
  }
  
  function loops() {
    const moreSection = document.getElementById('loops');
    moreSection.classList.remove('hidden');
    moreSection.scrollIntoView({ behavior: 'smooth' });
  }

  
  function ifelse() {
    const moreSection = document.getElementById('ifelse');
    moreSection.classList.remove('hidden');
    moreSection.scrollIntoView({ behavior: 'smooth' });
  }
  
  function strings() {
    const moreSection = document.getElementById('strings');
    moreSection.classList.remove('hidden');
    moreSection.scrollIntoView({ behavior: 'smooth' });
  }
  
  function regularExpressions() {
    const moreSection = document.getElementById('regularExpressions');
    moreSection.classList.remove('hidden');
    moreSection.scrollIntoView({ behavior: 'smooth' });
  }