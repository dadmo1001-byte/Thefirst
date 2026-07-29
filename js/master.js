// toggle spin class icon 
document.querySelector(".toggle-setting i").onclick = function () {
	this.classList.toggle("fa-spin")
	document.querySelector(".setting-box").classList.toggle("open")
}


// Select Landing Page Element 
let ladingPage = document.querySelector('.lading-page');

// get array for images 
let arrImage = ["01.jpg","02.jpg","03.jpg","04.jpg"];

// change background-image 
// get random number 
setInterval (() => {
	let randomNumber = Math.floor(Math.random() * arrImage.length);
	ladingPage.style.backgroundImage = `url("../image/${arrImage[randomNumber]}")` ;
}, 5000);
