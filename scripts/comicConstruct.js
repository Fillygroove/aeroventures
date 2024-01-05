let speedrunTime = 0;
let speedrunFinished = false;
let slides = document.getElementsByClassName('comic-slides');

console.log(comic, comic.substring(0, comic.lastIndexOf('/')));

if (comicInfo.rewind) makeButton({
	html: 'Rodney Rewind', 
	color: 'rodney-violet', 
	link: `?c=${comic.substring(0, comic.lastIndexOf('/')).replaceAll('/', '-')}`
});

if (comicInfo.background != undefined) {
	document.getElementsByTagName('html')[0].style.backgroundImage = `url(../images/${window.localStorage.oldBG == 'true' ? 'old-' : ''}${comicInfo.background})`;
}

if (window.localStorage.pass == 'true' && comicInfo.protected) {
	comicInfo.protected = false;
}

let slideshow = document.createElement('div');
slideshow.className = 'comic-slideshow-container';

let slideTitle = document.createElement('div');
slideTitle.className = 'comic-title';
slideTitle.innerHTML = comicInfo.title;

for (let i = 0; i < comicInfo.panels.length; i++) {
	let slide = document.createElement('div');
	slide.className = 'comic-slides';

	let panel = document.createElement('img');
	
	panel.src = `./${comic}/panels/${comicInfo.panels[i].panel}`;
	panel.className = `comic-panel${comicInfo.panels[i].classTitle ? ' ' + comicInfo.panels[i].classTitle : ''}`;

	if (comicInfo.panels[i].link !== undefined) {
		let panelLink = document.createElement('a');
		panelLink.href = comicInfo.panels[i].link;
		panelLink.append(panel);
		slide.append(panelLink);
	} else slide.append(panel);
	
	if (comicInfo.panels[i].caption !== undefined) {
		let caption = document.createElement('div');
		caption.className = 'comic-caption';
		caption.innerHTML = comicInfo.panels[i].caption;
		slide.append(caption);
	}

	if (comicInfo.panels[i].execute !== undefined) {
		comicInfo.panels[i].execute({panel, slide});
	}

	slideshow.append(slide);
}

if (comicInfo.protected) {
	let passwordPage = document.createElement('div');
	passwordPage.className = 'comic-password';

	passwordP = document.createElement('p');
	passwordP.style = 'padding: 20px';
	passwordP.innerHTML = 'Put the password in the panel number box.';

	passwordHidden = document.createElement('p');
	passwordHidden.style = 'color: rgba(0, 0, 0, 0); padding: 20px';
	passwordHidden.innerHTML = 'Ask the journal images directory.';

	passwordPage.append(passwordP, passwordHidden);

	slideshow.append(passwordPage);
}

let line = document.createElement('hr');
let prevButton = document.createElement('a');
let nextButton = document.createElement('a');
prevButton.className = window.localStorage.speedrun == 'true' ? 'comic-fast-prev' : 'comic-prev';

nextButton.className = 'comic-next';
prevButton.innerHTML = '&#9664;';
nextButton.innerHTML = '&#9654;';
prevButton.type = 'button';
nextButton.type = 'button';
prevButton.onclick = () => {
	if (window.localStorage.speedrun == 'false') showSlides(slideIndex -= 1);
};
nextButton.onclick = () => {
	let timerInterval;

	if (nextButton.className != 'comic-fast-next') showSlides(slideIndex += 1);

	if (slideIndex == 2 && speedrunTime == 0 && window.localStorage.speedrun == 'true') {
		timerInterval = setInterval(function() {
			speedrunTime++;
			slideTimer.innerHTML = `Timer: ${String(Math.floor((speedrunTime) / 100) % 60).padStart(2, '0')}.${String(speedrunTime % 100).padStart(2, '0')}`;
			if (slideIndex == slides.length) {
				clearInterval(timerInterval);
				nextButton.className = 'comic-fast-next';
				speedrunFinished = true;
			}
		}, 1);
	}
};

let slideDiv = document.createElement('div');
slideDiv.className = 'comic-slidetext';

let slideText = document.createElement('div');
slideText.className = 'comic-slidetext';
slideText.style = 'position: absolute';

let slideSpeedText = document.createElement('div');
slideSpeedText.className = 'comic-slidetext';
slideSpeedText.style = 'position: absolute';

slideLabel = document.createElement('label');
slideLabel.className = 'comic-slidelabel';
slideLabel.innerHTML = 'Panel Number: ';
slideLabel.htmlFor = 'comic-slide-input';

slideInput = document.createElement('input');
slideInput.type = 'text';
slideInput.id = 'comic-slide-input';
slideInput.addEventListener('keyup', function(event) {
	if (event.key === 'Enter') {
		let slideValue = slideInput.value;
		if (comicInfo.protected && slideInput.value == '4NAX') {
			document.getElementsByClassName('comic-password')[0].remove();
//			slideInput.value = 'Be careful.';
			comicInfo.protected = false;
			slideValue = '1';
			slideInput.blur();
			window.localStorage.pass = 'true';
		}
		verify(slideValue);
	}
});

slideTimer = document.createElement('p');
slideTimer.innerHTML = 'Timer: 00.00';

slideText.style.visibility = window.localStorage.speedrun == 'true' ? 'hidden' : 'visible';
slideSpeedText.style.visibility = window.localStorage.speedrun == 'true' ? 'visible' : 'hidden';

slideText.append(slideLabel, slideInput);
slideSpeedText.append(slideTimer);

slideDiv.append(prevButton, nextButton, slideText, slideSpeedText);

let fullscreenOverlay = document.createElement('div');
fullscreenOverlay.className = 'comic-fs-overlay';

if (comicInfo.fullscreen) {
	let fullscreenButton = document.createElement('a');
	fullscreenButton.className = 'comic-fs-button';
	fullscreenButton.type = 'button';
	fullscreenButton.title = 'Fullscreen';
	
	let fullscreenIn = document.createElement('p');
	fullscreenIn.innerHTML = '&#x26F6;';
	fullscreenIn.className = 'comic-fs-button-text';
	fullscreenButton.append(fullscreenIn);

	slideDiv.append(fullscreenButton);
	fullscreenButton.onclick = () => {
		fullscreenOverlay.style.visibility = 'visible';
	};

	let unfullscreenButton = document.createElement('a');
	unfullscreenButton.className = 'comic-fs-undo';
	unfullscreenButton.type = 'button';
	
	let unfullscreenIn = document.createElement('p');
	unfullscreenIn.innerHTML = '&#x26F6;';
	unfullscreenIn.className = 'comic-fs-button-text';
	unfullscreenButton.append(unfullscreenIn);
	fullscreenOverlay.append(unfullscreenButton);

	for (let i = 0; i < comicInfo.panels.length; i++) {
		let fsSlideDiv = document.createElement('div');
		fsSlideDiv.className = 'comic-fs-slide';

		fsSlideDiv.style = `background-image: url('./${comic}/panels/${comicInfo.panels[i].panel}');`;
		fsSlideDiv.style.display = 'none';
  
		fullscreenOverlay.append(fsSlideDiv);
	}

	let fullscreenSlides = fullscreenOverlay.childNodes;

	fullscreenButton.onclick = () => {
		fullscreenOverlay.style.visibility = 'visible';
		fullscreenSlides[slideIndex].style.display = 'block';
	};

	unfullscreenButton.onclick = () => {
		fullscreenOverlay.style.visibility = 'hidden';
		fullscreenSlides[slideIndex].style.display = 'none';
	};

	let fsPrevButton = document.createElement('a');
	let fsNextButton = document.createElement('a');
	fsPrevButton.className = 'comic-fs-prev';
	fsNextButton.className = 'comic-fs-next';
	fsPrevButton.innerHTML = '&#9664;';
	fsNextButton.innerHTML = '&#9654;';
	fsPrevButton.type = 'button';
	fsNextButton.type = 'button';

	fsPrevButton.onclick = () => {
		showSlides(slideIndex -= 1);
	};

	fsNextButton.onclick = () => {
		showSlides(slideIndex += 1);
	};

	let fsNumberText = document.createElement('div');
	fsNumberText.className = 'comic-fs-numbertext';

	fullscreenOverlay.append(fsPrevButton, fsNextButton, fsNumberText);

	avThin.append(fullscreenOverlay);
}

slideshow.append(slideDiv, line);

let desc = document.createElement('h4');

desc.className = 'comic-description';
desc.innerHTML = comicInfo.desc;

let numbertext = document.createElement('p');
numbertext.className = 'comic-numbertext';

avThin.append(numbertext, slideTitle, slideshow, desc);


let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	if (n > slides.length) {
		slideIndex = 1;
	}

	if (n < 1) {
		slideIndex = slides.length;
	}

	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
		if (comicInfo.fullscreen == true) fullscreenOverlay.childNodes[i + 1].style.display = 'none';
	}

	if (comicInfo.protected != true) {
		slides[slideIndex - 1].style.display = 'block';
		if (comicInfo.fullscreen == true) fullscreenOverlay.childNodes[slideIndex].style.display = 'block';
	}

	let numbertextInner = `${comicInfo.panels[slideIndex - 1].number ? comicInfo.panels[slideIndex - 1].number : slideIndex} / ${comicInfo.howLong ? comicInfo.howLong : comicInfo.panels.length}`;
	numbertext.innerHTML = numbertextInner;
	if (comicInfo.fullscreen) document.getElementsByClassName('comic-fs-numbertext')[0].innerHTML = numbertextInner;
}

function verify(slide) {
	if (comicInfo.verify != undefined) {
		comicInfo.verify({slide, slideIndex});
	} else if (slide.toLowerCase() == 'panel number') {
		window.location.href = '?c=pn';
	} else if (!isNaN(slide) && Math.floor(slide) != slide && comicInfo.corruptable) { // Panel Corruption Easter Egg
		let slideTag = document.getElementsByClassName('comic-slides')[slideIndex - 1];

		if (slideTag.childNodes[0].tagName == 'A') slideTag = slideTag.childNodes[0];

		document.getElementsByClassName('comic-description')[0].innerHTML = 'Well... What did you think was going to happen when you put in a decimal value?';
		slideTag.childNodes[0].src = `./panels/secrets/corrupt/${comic}.jpg`;
		slideTag.childNodes[0].visibility = 'visible';
		if (comic == 'nine') {
			slideTag.childNodes[1].innerHTML = 'Aero is gone.';
		}
	}
	
	slide = Number(slide);

	if (!isNaN(slide)) {
		if (slide < slides.length + 1 && slide > 0 && Math.floor(slide) == slide) {
			currentSlide(slide);
		}
	}
}

window.addEventListener('keydown', function(event) {
	if (window.localStorage.speedrun == 'false') {
		if (event.key == 'ArrowLeft') showSlides(slideIndex -= 1);
		if (event.key == 'ArrowRight') showSlides(slideIndex += 1);
	}
});

correctLinks();
