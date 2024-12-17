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

function color()
{
  const features = document.getElementById('feature1');
  features.classList.add('textColor');
  setTimeout(function() {
    features.classList.remove('textColor');
  }, 3000);
}

function fontType()
{
  const features = document.getElementById('feature2');
  features.classList.add('fontType');
  setTimeout(function() {
    features.classList.remove('fontType');
  }, 3000);
}

function fontSize()
{
  const features = document.getElementById('feature3');
  features.classList.add('fontSize');
  setTimeout(function() {
    features.classList.remove('fontSize');
  }, 3000);
}

function textDecoration()
{
  const features = document.getElementById('feature4');
  features.classList.add('textDecoration');
  setTimeout(function() {
    features.classList.remove('textDecoration');
  }, 3000);
}

function width()
{
  const features = document.getElementById('feature5');
  features.classList.add('width');
  setTimeout(function() {
    features.classList.remove('width');
  }, 3000);
}

function height()
{
  const features = document.getElementById('feature6');
  features.classList.add('height');
  setTimeout(function() {
    features.classList.remove('height');
  }, 3000);
}

function margin()
{
  const features = document.getElementById('feature7');
  features.classList.add('margin');
  setTimeout(function() {
    features.classList.remove('margin');
  }, 3000);
}

function padding()
{
  const features = document.getElementById('feature8');
  features.classList.add('padding');
  setTimeout(function() {
    features.classList.remove('padding');
  }, 3000);
}

function border()
{
  const features = document.getElementById('feature9');
  features.classList.add('border');
  setTimeout(function() {
    features.classList.remove('border');
  }, 3000);
}

function backgroundColor()
{
  const features = document.getElementById('feature10');
  features.classList.add('backgroundColor');
  setTimeout(function() {
    features.classList.remove('backgroundColor');
  }, 3000);
}

function backgroundImage()
{
  const features = document.getElementById('feature11');
  features.classList.add('backgroundImage');
  setTimeout(function() {
    features.classList.remove('backgroundImage');
  }, 3000);
}

function backgroundRepeat()
{
  const features = document.getElementById('feature12');
  features.classList.add('backgroundRepeat');
  setTimeout(function() {
    features.classList.remove('backgroundRepeat');
  }, 3000);
}

function backgroundPosition()
{
  const features = document.getElementById('feature13');
  features.classList.add('backgroundPosition');
  setTimeout(function() {
    features.classList.remove('backgroundPosition');
  }, 3000);
}

function display()
{
  const features = document.getElementById('feature14');
  features.classList.add('display');
  setTimeout(function() {
    features.classList.remove('display');
  }, 3000);
}

function visibility()
{
  const features = document.getElementById('feature15');
  features.classList.add('visibility');
  setTimeout(function() {
    features.classList.remove('visibility');
  }, 3000);
}

function showMore()
{
  const moreContent = document.getElementById('moreContent');
  moreContent.classList.remove('hidden');
  document.getElementById('showMore').classList.add('hidden');
  document.getElementById('showLess').classList.remove('hidden');
  moreContent.scrollIntoView({behavior:"smooth"});
}
function showLess()
{
  const moreContent = document.getElementById('moreContent');
  moreContent.classList.add('hidden');
  document.getElementById('showMore').classList.remove('hidden');
  document.getElementById('showLess').classList.add('hidden');
}