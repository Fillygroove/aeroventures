let avThin = document.createElement('div');

let lineGuideDiv = document.createElement('div');
lineGuideDiv.className = 'lineguide';

let dropdownDiv = document.createElement('div');
dropdownDiv.className = 'topbar';

function correctLinks() {
	let pageLinks = document.getElementsByTagName('a');
	
	for (let i = 0; i < pageLinks.length; i++) {
		let pageLinkName = pageLinks[i].href.substring(pageLinks[i].href.indexOf('=') + 1, pageLinks[i].href.length);
		if (pageLinkName.includes('#')) pageLinkName = pageLinkName.substring(0, pageLinkName.indexOf('#'));
		if (pageLinks[i].id == '' && pageLinks[i].className == '') {
			if (journalList.norm.includes(pageLinkName)) pageLinks[i].className = 'link';
			else pageLinks[i].className = 'no-link';
		}
	}
}

function makeButton(input) {
	let dropdown = document.createElement('a');
	dropdown.className = `topbar-button ${input.color}`;
	dropdown.innerHTML = input.html;
	if (input.style != undefined) dropdown.style = input.style;
	if (input.link != undefined) dropdown.href = input.link;
	if (input.onclick != undefined) dropdown.onclick = input.onclick;
	dropdownDiv.append(dropdown);
}

function addScript(script, secondary) {
	let pageScript = document.createElement('script');
	pageScript.async = false;
	pageScript.src = script;
	if (secondary != undefined) secondary();
	avThin.append(pageScript);
}

function fixBG(url, check) {
	let custom = document.getElementsByTagName('html')[0].style.backgroundImage;
	document.getElementsByTagName('html')[0].style.backgroundImage = `url(${url}images/${check ? 'old-' : ''}bg${custom.includes('av') ? '-av' : ''}${custom.includes('pv') ? '-pv' : ''}.png)`;
}

function rng(max) {
    return Math.floor(Math.random() * max);
}

let isGreme = window.location.search == '?p=greme';

function gremeReplace(input) {
	return isGreme ? input.replaceAll('n', 'm') : input;
}

function makePage(page) {
	let comicDir, journalDir, titleDir, pageName;
	switch (page) {
		case 'main':
			comicDir = './';
			journalDir = './';
			titleDir = './';
			pageName = 'Main';
			break;
		case 'comic':
			comicDir = '../';
			journalDir = '../';
			titleDir = '../';
			pageName = 'Comics';
			break;
		case 'journal':
			comicDir = '../';
			journalDir = '../';
			titleDir = '../';
			pageName = 'Journal';
			break;
	}

	fixBG(titleDir, window.localStorage.oldBG == 'true');

	let metaTitle = document.createElement('title');
	metaTitle.innerHTML = `${pageName} - Metaventures`;
	
	let metaFavicon = document.createElement('link');
	metaFavicon.rel = 'icon';
	metaFavicon.type = 'image/png';
	metaFavicon.href = `${titleDir}/images/favicon.png`;
	
	let metaCss = document.createElement('link');
	metaCss.rel = 'stylesheet';
	metaCss.href = `${titleDir}index.css`;
	
	document.head.append(metaTitle, metaFavicon, metaCss);
		
	avThin.className = 'av-thin';

	let preferenceMenuDiv = document.createElement('div');
	preferenceMenuDiv.className = 'preference-menu';

	let preferenceMenuIsOpen = false;

	let preferenceMenuLine = document.createElement('hr');
	preferenceMenuLine.style.margin = 0;

	let preferenceMenuHeader = document.createElement('h2')
	preferenceMenuHeader.innerHTML = `Prefe<a class="preference-secret" href="${comicDir}comics/?c=dk">r</a>e${isGreme ? 'm' : 'n'}ces`;

	preferenceMenuDiv.append(preferenceMenuHeader, preferenceMenuLine);


	function addPreferenceCategory(input) {
		let preference = document.createElement('div');
		preference.className = 'preference-collapse-div';
	
		preferenceHeader = document.createElement('h3');
		preferenceHeader.innerHTML = gremeReplace(input.name);
		preferenceHeader.className = 'preference-collapse-closed';
		preferenceHeader.id = input.id;

		let preferenceInner = document.createElement('div');
		preferenceInner.className = 'preference-inner';
		preferenceInner.style.height = '0px';

		function addPreference(input) {
			let checkDiv = document.createElement('div');
			checkDiv.title = gremeReplace(input.description);
		
			let checkLabel = document.createElement('label');
			checkLabel.innerHTML = gremeReplace(input.title);
			checkLabel.htmlFor = input.id;
		
			checkDiv.append(checkLabel);

			if (input.dropdownValues != undefined) {
				let checkSelect = document.createElement('select');
				checkSelect.name = input.id;
				checkSelect.id = input.id;
				
				for (let i = 0; i < Object.keys(input.dropdownValues).length; i++) {
					let checkSelectOption = document.createElement('option');
					checkSelectOption.innerHTML = gremeReplace(Object.values(input.dropdownValues)[i]);
					checkSelectOption.value = Object.keys(input.dropdownValues)[i];
					checkSelect.append(checkSelectOption);
				}

				checkSelect.onchange = () => {
					input.onclick({checkSelect: document.getElementById(input.id)});
				}

				checkSelect.value = window.localStorage[input.id] == undefined ? input.default : window.localStorage[input.id];

				checkDiv.append(checkSelect);
			} else {
				let check = document.createElement('input');

				if (window.localStorage[input.id] == 'true') check.checked = true;
				check.type = 'checkbox';
				check.id = input.id;
				check.name = input.id;

				checkDiv.onclick = () => {
					input.onclick({check});
				}

				checkDiv.append(check);
			}

			if (window.localStorage[input.id] == undefined) window.localStorage[input.id] = input.default;

			preferenceInner.append(checkDiv);
		}

		if (input.options != undefined) {
			for (let i = 0; i < input.options.length; i++) addPreference(input.options[i]);
		}

		preferenceHeader.onclick = () => {
			if (preferenceInner.style.height != '0px') {
				document.getElementById(input.id).className = 'preference-collapse-closed';
				preferenceInner.style.height = '0px';
			} else {
				document.getElementById(input.id).className = 'preference-collapse-opened';
				preferenceInner.style.height = `${28 * input.options.length}px`;
			}
		};

		preference.append(preferenceHeader, preferenceInner);	
		preferenceMenuDiv.append(preference);	
	}

	addPreferenceCategory({
		name: 'General',
		id: 'general',
		options: [{
			title: 'Theme',
			id: 'theme',
			description: 'Wearing tinted glasses for cheap.',
			default: 'default',
			dropdownValues: {
				default: 'Default',
				superdark: 'Super Dark',
				cherryBlossom: 'Cherry Blossom',
				the: 'The',
				abyss: 'Abyss',
				sunset: 'Sunset (Bright)',
				nyork: 'Omnikron'
			},
			onclick: function(input) {
				window.localStorage.theme = input.checkSelect.value;
				updateTheme(window.localStorage.theme);
			}
		}, {
			title: 'Old Backgrounds',
			id: 'oldBG',
			description: 'For old timey people.',
			default: false,
			onclick: function(input) {
				window.localStorage.oldBG = input.check.checked;
				fixBG(titleDir, input.check.checked);
			}
		}]
	});

	addPreferenceCategory({
		name: 'The Comics',
		id: 'comics',
		options: [{
			title: 'Speedrun Mode',
			id: 'speedrun',
			description: 'For when your cousins\' MV-related birthday is tomorrow.',
			default: false,
			onclick: function(input) {
				window.localStorage.speedrun = input.check.checked;
				if (page == 'comic') {
					nextButton.className = window.localStorage.speedrun == 'true' ? (speedrunFinished ? 'comic-fast-next' : 'comic-next') : 'comic-next';
					prevButton.className = window.localStorage.speedrun == 'true' ? 'comic-fast-prev' : 'comic-prev';
					slideText.style.visibility = window.localStorage.speedrun == 'true' ? 'hidden' : 'visible';
					slideSpeedText.style.visibility = window.localStorage.speedrun == 'true' ? 'visible' : 'hidden';
					if (speedrunFinished) currentSlide(slides.length);
					else currentSlide(1);
				}
			}
		}]
	});

	addPreferenceCategory({
		name: 'Accessibility',
		id: 'access',
		options: [{
			title: 'Line Guide',
			id: 'lineGuide',
			description: 'Adds a line guide for people who have a hard time reading.',
			default: false,
			onclick: function(input) {
				window.localStorage.lineGuide = input.check.checked;
				if (window.localStorage.lineGuide == 'false') lineGuideDiv.style.top = '100%';
			}
		}, {
			title: 'Line Height',
			id: 'lineHeight',
			description: 'Adds extra space between lines for people who have a hard time reading.',
			default: false,
			onclick: function(input) {
				window.localStorage.lineHeight = input.check.checked;
				
				document.body.className = 'transition';
	
				if (window.localStorage.lineHeight == 'false') {
					document.documentElement.style.setProperty('--lineheight', 1.5);
				}
	
				if (window.localStorage.lineHeight == 'true') {
					document.documentElement.style.setProperty('--lineheight', 3);
				}
			}
		}]
	});

	let preferenceMenuButton = document.createElement('a');
	preferenceMenuButton.innerHTML = '&#9776;';
	preferenceMenuButton.className = 'preference-button';
	preferenceMenuButton.onclick = () => {
		if (preferenceMenuIsOpen) {
			preferenceMenuDiv.style.width = 0;
			preferenceMenuDiv.style.borderRightWidth = '0px';
			preferenceMenuIsOpen = false;
		} else {
			preferenceMenuDiv.style.width = '250px';
			preferenceMenuDiv.style.borderRightWidth = '1px';
			preferenceMenuIsOpen = true;
		}
	};

	if (window.localStorage.lineHeight == 'true') document.documentElement.style.setProperty('--lineheight', 3);
	if (window.localStorage.speedrun == undefined) window.localStorage.speedrun = 'false';

	dropdownDiv.append(preferenceMenuButton);

	let mainAVIMGLink = document.createElement('a');
	mainAVIMGLink.href = titleDir;

	let mainAVIMG = document.createElement('img');
	mainAVIMG.src = `${titleDir}images/top-bar.png`;
	mainAVIMG.className = 'bar-image';
	mainAVIMGLink.append(mainAVIMG);
	dropdownDiv.append(mainAVIMGLink);

	makeButton({
		html: 'The Comics', 
		color: 'aero-blue', 
		link: `${comicDir}comics/?c=`
	});
	makeButton({
		html: 'The Journal', 
		color: 'nyork-green', 
		link: `${journalDir}journal/?p=main`
	});
	/* // Add later when more people join
	makeButton({
		html: 'The Discord', 
		color: 'pon-pink', 
		link: '' // no >:)
	});*/
		
	document.body.append(preferenceMenuDiv, dropdownDiv, avThin, lineGuideDiv);
	
	addScript(`${titleDir}scripts/pageList.js`);
	addScript(`${titleDir}scripts/themeSetup.js`);
	addScript(`${titleDir}scripts/${page}Setup.js`);
}

window.addEventListener('mousedown', mouseInfo => {	
	if (window.localStorage.lineGuide == 'true') {		
		lineGuideDiv.style.top = `${mouseInfo.clientY}px`;
		lineGuideShown = true;
	}
});
