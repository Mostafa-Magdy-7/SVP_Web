var aboutbtn =document.getElementById("About");
var homebtn =document.getElementById("home");
var featuresbtn =document.getElementById("Features");
var pricingbtn =document.getElementById("pricing");
var downloadbtn =document.getElementById("download");


aboutbtn.addEventListener('click', (event) => {
    event.preventDefault(); // Stop default jump
    const aboutSection = document.getElementById('aboutv');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
});
homebtn.addEventListener('click', (event) => {
    event.preventDefault(); // Stop default jump
    const homeSection = document.getElementById('homev');
    homeSection.scrollIntoView({ behavior: 'smooth' });
});
featuresbtn.addEventListener('click', (event) => {
    event.preventDefault(); // Stop default jump
    const featSection = document.getElementById('Feature');
    featSection.scrollIntoView({ behavior: 'smooth' });
});
pricingbtn.addEventListener('click', (event) => {
    event.preventDefault(); // Stop default jump
    const priceSection = document.getElementById('pricev');
    priceSection.scrollIntoView({ behavior: 'smooth' });
});
function downloadwindow() {
    const win = document.getElementById("downloadwin");
    win.style.display = "flex"; // Make it flex when shown
  }
  function pricewindow() {
    const win = document.getElementById("pricewin");
    win.style.display = "flex"; // Make it flex when shown
  }


function closewin() {
    document.getElementById("downloadwin").style.display="none";
    document.getElementById("pricewin").style.display="none";
  }
