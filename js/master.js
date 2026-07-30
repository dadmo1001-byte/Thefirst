let mainColor = localStorage.getItem('color-option');
console.log(mainColor);

if(mainColor !== null) {
	// console.log("Is Not null")
	document.documentElement.style.setProperty('--main-color', mainColor)

	// Check for active class 
	document.querySelectorAll('.colors-list li').forEach(element => {
		// remove active class for All list Items
		element.classList.remove('active');

		// Add the calss active for element === local Storage Item
		if(element.dataset.color === mainColor) {
			// Add the active class
			element.classList.add('active')
		}
	})
}

// toggle spin class icon 
document.querySelector(".toggle-setting i").onclick = function () {
	this.classList.toggle("fa-spin")
	document.querySelector(".setting-box").classList.toggle("open")
}

// Switch Colors
const colorLi = document.querySelectorAll('.colors-list li');
// Loop On All List Item
colorLi.forEach(li => {
	// Click On Every list Itmes
	li.addEventListener('click', (e) => {
		// Set Color On Root
		document.documentElement.style.setProperty('--main-color', e.target.dataset.color)

		// set color in local storage
		localStorage.setItem('color-option', e.target.dataset.color)

		// Remove active class in child
		e.target.parentElement.querySelectorAll('.active').forEach(element => {
			element.classList.remove('active');
		})

		// add class active on the target element
		e.target.classList.add('active');
	});
})

// option background 
let optionBackground = true;

// variabel to control the background setInterval 
let backgroundIntervale;


// switch Random Background option
const randomBackground = document.querySelectorAll('.random-background span');

randomBackground.forEach(span => {
    // click on every span
    span.addEventListener('click', (e) => {
        // remove active class from all siblings
        e.target.parentElement.querySelectorAll(".active").forEach(ele => {
            ele.classList.remove('active');
        });

        // add active class to clicked element
        e.target.classList.add('active');

		if(e.target.dataset.background === 'yes') {
			optionBackground = true;
			randomIzeimage()
		} else {
			optionBackground = false;
			clearInterval(backgroundIntervale);
		}
    });
});

// Select Landing Page Element 
let ladingPage = document.querySelector('.lading-page');

// get array for images 
let arrImage = ["01.jpg","02.jpg","03.jpg","04.jpg"];


function randomIzeimage () {
	if(optionBackground === true) {
		// أهم خطوة: بنوقف أي انترڤال قديم شغال عشان ما يتكرروش على بعض
		clearInterval(backgroundIntervale);

		// change background-image 
		backgroundIntervale = setInterval (() => {
			let randomNumber = Math.floor(Math.random() * arrImage.length);
			ladingPage.style.backgroundImage = `url("../image/${arrImage[randomNumber]}")` ;
		}, 2000);
	}
}

randomIzeimage()