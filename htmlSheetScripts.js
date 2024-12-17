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


function basicTag1() {
  const moreSection = document.getElementById('basicTags');
  moreSection.classList.remove('hidden');
  document.getElementById('showMore1').classList.add('hidden');
  document.getElementById('showLess1').classList.remove('hidden');
  moreSection.scrollIntoView({ behavior: 'smooth' });
}
function basicTag2() {
  const moreSection = document.getElementById('basicTags');
  moreSection.classList.add('hidden');
  document.getElementById('showMore1').classList.remove('hidden');
  document.getElementById('showLess1').classList.add('hidden');
}

function formattingTag1() {
  const moreSection = document.getElementById('formattingTags');
  document.getElementById('showMore2').classList.add('hidden');
  document.getElementById('showLess2').classList.remove('hidden');
  moreSection.classList.remove('hidden');
  moreSection.scrollIntoView({ behavior: 'smooth' });
}

function formattingTag2()
{
  const moreSection = document.getElementById('formattingTags');
  document.getElementById('showMore2').classList.remove('hidden');
  document.getElementById('showLess2').classList.add('hidden');
  moreSection.classList.add('hidden');
}

function textTag1() {
  const moreSection = document.getElementById('textTags');
  document.getElementById('showMore3').classList.add('hidden');
  document.getElementById('showLess3').classList.remove('hidden');
  moreSection.classList.remove('hidden');
  moreSection.scrollIntoView({ behavior: 'smooth' });
}

function textTag2()
{
  const moreSection = document.getElementById('textTags');
  document.getElementById('showMore3').classList.remove('hidden');
  document.getElementById('showLess3').classList.add('hidden');
  moreSection.classList.add('hidden');
}


function listTag1() {
  const moreSection = document.getElementById('listTags');
  document.getElementById('showMore4').classList.add('hidden');
  document.getElementById('showLess4').classList.remove('hidden');
  moreSection.classList.remove('hidden');
  moreSection.scrollIntoView({ behavior: 'smooth' });
}

function listTag2()
{
  const moreSection = document.getElementById('listTags');
  document.getElementById('showMore4').classList.remove('hidden');
  document.getElementById('showLess4').classList.add('hidden');
  moreSection.classList.add('hidden');
}