let mainColor = localStorage.getItem('color-option');
console.log(mainColor);

if(mainColor !== null) {
	// console.log("Is Not null")
	document.documentElement.style.setProperty('--main-color', mainColor)

	// Check for active class 
	document.querySelectorAll('.colors-list li').forEach(element => {
		// remove active class for All list Items
		element.classList.remove('active');

		// Add   the calss active for element === local Storage Item
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

randomIzeimage();

// Select Skills Selector

let ourSkills = document.querySelector('.skills');
let allSkills = document.querySelectorAll(".skills-box .skill-progress span");

// إنشاء الـ Observer
let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // لو السكشن ظهر في الشاشة
        if (entry.isIntersecting) {
            allSkills.forEach(skill => {
                skill.style.width = skill.dataset.progress;
            });
            // نوقف المراقبة بعد ما الأنيماشن يشتغل مرة واحدة
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5 // معناه: يشتغل أول ما 30% من سكشن المهارات يظهر في الشاشة
});

// البدء في مراقبة سكشن المهارات
observer.observe(ourSkills);


// create poupe with the image 
let ourGallary = document.querySelectorAll(".gallary img");

ourGallary.forEach(img => {
	img.addEventListener('click', (e) => {

		// create overlay element 
		let overlay = document.createElement('div');

		// Add class to overlay 
		overlay.className = 'popup-overlay';

		// Append to the overylay to the body
		document.body.appendChild(overlay)

		// create the popup div
		let popupBox = document.createElement('div');

		popupBox.className = "popup-box";

		if (img.alt !== null) {
			// create heading
			let imageHeading = document.createElement('h3');

			// create text for heading
			let imgText = document.createTextNode(img.alt);

			// append the text for the heading 
			imageHeading.appendChild(imgText);

			// append the heading to the popup box
			popupBox.appendChild(imageHeading);
		}

		// create the image
		let popupImage = document.createElement('img');

		// create the button the close image 
		let btn = document.createElement('button');
		btn.textContent = "X";
		btn.className = "btn-close";
		// set image source

		popupImage.src = img.src;

		// Add to image to popup box;	
		popupBox.appendChild(popupImage);
		popupBox.appendChild(btn);

		document.body.appendChild(popupBox);

		// دي طريقة لحذف 
		// popupBox

		// // create the function close the popupBox 
		// btn.addEventListener('click', () => {
		// 	closePopup()
		// })

		// function closePopup () {
		// 	popupBox.style.display = 'none';
		// 	overlay.style.display = "none"
		// }

	})
})

document.addEventListener('click', (e) => {
	if(e.target.className == 'btn-close') {
		// remove current popup
		e.target.parentNode.remove();

		// remove overlay 
		document.querySelector('.popup-overlay').remove();
	}
})

// Select all pullets 

const allPullets = document.querySelectorAll("nav .bullet");
const allLinks = document.querySelectorAll(".links a")


function scrollToSomewhere(element) {
	element.forEach (ele => {
		ele.addEventListener('click', (e) => {
			e.preventDefault();

			document.querySelector(ele.dataset.section).scrollIntoView({
				behavior: "smooth"
			})
		})
	});
}

scrollToSomewhere(allPullets);
scrollToSomewhere(allLinks);

let bulletSpan = document.querySelectorAll(".bullets-option span");
let bulletCountainer = document.querySelector("nav");

let localBullet = localStorage.getItem("bullets-option");

if(localBullet !== null) {
	bulletSpan.forEach(span => {
		span.classList.remove('active')
	})

	if (localBullet === "block") {
		bulletCountainer.style.display = "block";
		document.querySelector(".bullets-option.yes").classList.add("active");
	} else {
		bulletCountainer.style.display = "none";
		document.querySelector(".bullets-option .no").classList.add("active");
	}
	
}
// console.log(bulletSpan);

bulletSpan.forEach( (span) => {
	span.addEventListener('click', (e) => {
		if(span.dataset.display === "yes") {
			bulletCountainer.style.display = "block";
			localStorage.setItem("bullets-option", "block")

		} else {
				bulletCountainer.style.display = "none";
				localStorage.setItem("bullets-option", "none")
		}

		e.target.parentElement.querySelectorAll('.active').forEach(element => {
			element.classList.remove('active');
		})

		e.target.classList.add('active');
	})
})

// Reset button
document.querySelector(".reset-option").onclick = function () {
	// localStorage.clear()

	localStorage.removeItem("bullets-option");
	localStorage.removeItem("color-option");
	localStorage.removeItem("tasks");

	// Reload window
	window.location.reload();
}

// toggle menu
let toggleMenu = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links")

toggleMenu.onclick = function () {
	// انا بضيف هنا كلاس اللي هيطلع السهم اللي في الصفحة
	this.classList.toggle("menu-active")

	// وهنا انا بضيف الكلاس اللي هيظهر القائمة
	tLinks.classList.toggle('open')
}
console.log(tLinks);

document.addEventListener('click', (e) => {
	
	if(!toggleMenu.contains(e.target) && !tLinks.contains(e.target)) {
	
		tLinks.classList.remove('open');
		toggleMenu.classList.remove('menu-active');
	}

	/**
	 * e.target: يحدد لك العنصر المباشر الذي تم النقر عليه.
		contains(): تفحص هل هذا العنصر موجود داخل القائمة/الزر أم لا، والنفي ! يضمن تنفيذ الإغلاق فقط عند النقر خارج هذه العناصر.
	 */
})