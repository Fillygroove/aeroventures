let imageSize = {
	large: 30,
	norm: 25,
	small: 20,
	smol: 15
};
let slideIndex = [];

let page = pageData;

if (page.redirect != undefined) {
	page.name = 'Redirecting...';
	window.location.href = page.redirect;
}

let pageHeader = document.createElement('span');

let journalPageName = document.createElement('h1');
journalPageName.innerHTML = page.name;
journalPageName.className = 'page-header';

let topLineBreak = document.createElement('hr');

pageHeader.append(journalPageName, topLineBreak);
avThin.append(pageHeader);

if (page.navbox != undefined) {
	let navbox = document.createElement('table');
	navbox.className = 'journal-infobox';
	
	let caption = document.createElement('caption');
	
	caption.innerHTML = page.navbox.name ? page.navbox.name : page.name;
	
	if (page.navbox.symbol != undefined) {
		let navsymbol = document.createElement('img');
		navsymbol.alt = `symbol_${page.navbox}.png`;
		navsymbol.src = `images/${pageName}/symbol.svg`;
	/*	navsymbol.onerror = () => { // Depricated error correction code
			navsymbol.onerror = null;
			navsymbol.src = `images/${pageName}/symbol.png`;
		};*/
		navsymbol.className = 'journal-navbox-symbol';
		if (page.navbox.symbolStyle !== undefined) {
			navsymbol.style = page.navbox.symbolStyle;
		}
		caption.append(navsymbol);
	};
	
	let navbody = document.createElement('tbody');
	
	let imagetr = document.createElement('tr');
	let imagetd = document.createElement('td');
	let imgnav = document.createElement('img');
	let capdiv = document.createElement('div');
	
	imagetd.className = 'journal-infobox-image-td';
	imagetd.colSpan = 2;

	if (page.navbox.file) {
		imgnav.className = `journal-navbox-image`;
		imgnav.src = `images/${pageName}/main.png`;
		imgnav.alt = pageName;
		
		imagetd.append(imgnav);
	};

	if (page.navbox.caption != undefined) {
		let capa = document.createElement('span');
		capa.innerHTML = page.navbox.caption;
		capdiv.append(capa);
	}
		
	imagetd.append(capdiv);
	
	imagetr.append(imagetd);
	
	navbody.append(imagetr);
	
	for (let k = 0; k < page.navbox.info.length; k++) {
		
		let headingtr = document.createElement('tr');
		let headingth = document.createElement('th');
		
		headingth.colSpan = "2";
		headingth.innerHTML = page.navbox.info[k].heading;
		
		headingtr.append(headingth);
		
		navbody.append(headingtr);
		
		for (let i = 0; i < page.navbox.info[k].info.length; i++) {
			let navboxtr = document.createElement('tr');
			
			let navboxth = document.createElement('th');
			navboxth.scope = 'row';
				
			if (page.navbox.info[k].info[i].name != undefined) {
				let navleftdiv = document.createElement('div');
				navleftdiv.innerHTML = page.navbox.info[k].info[i].name;

				navboxth.append(navleftdiv);
			}

			let navboxtd = document.createElement('td');

			let navrightdiv = document.createElement('div');

			let navrightul = document.createElement('ul');
			let navrightli = document.createElement('li');
			
			if (page.navbox.info[k].info[i].info != undefined) {
				for (let j = 0; j < page.navbox.info[k].info[i].info.length; j++) {
					let navrightspan = document.createElement('span');
					
					navrightspan.innerHTML = page.navbox.info[k].info[i].info[j];
					
					if (j != page.navbox.info[k].info[i].info.length - 1) navrightspan.innerHTML += '</br>';
					
					navrightli.append(navrightspan);
				}
			}			
	
			navboxtr.append(navboxth);
			
			if (page.navbox.info[k].info[i].embed != undefined) {
				navboxth.colSpan = "2";
				
				let embedInfo = page.navbox.info[k].info[i].embed
				let navrightembed = document.createElement('iframe');
				
				navrightembed.width = 275;
				navrightembed.height = 200;
				navrightembed.frameborder = 'no';
			//	navrightembed.allow = 'autoplay';
				navrightembed.display = 'block';
				navrightembed.src = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${embedInfo.track}&color=%23${embedInfo.color}&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=true&visual=true`;
				
				navboxth.append(navrightembed);
			} else {				
				navrightul.append(navrightli);
				navrightdiv.append(navrightul);
				navboxtd.append(navrightdiv);
				navboxtr.append(navboxtd);
			}

			navbody.append(navboxtr);
		}
		
		navbox.append(caption, navbody);
	}
	
	avThin.append(navbox);
};

function makeGallery(input) {
	let gallerySlideshow = document.createElement('div');
	gallerySlideshow.className = 'journal-gallery-parent';
	gallerySlideshow.id = `journal-gallery-parent-${slideIndex.length}`;
	slideIndex.push(0);

	for (let galleryIndex = 0; galleryIndex < input.length; galleryIndex++) {
		let slideshowDiv = document.createElement('div');
		slideshowDiv.className = 'journal-gallery';

		let slideshowDivChild = document.createElement('div');
		slideshowDivChild.className = 'journal-slide-parent';

		let slideDiv = document.createElement('div');
		slideDiv.className = 'journal-slide';

		let slideDivImage = document.createElement('img');
		slideDivImage.className = 'journal-image';
		slideDivImage.src = `images/${pageName}/${input[galleryIndex].image}`;

		if (input[galleryIndex].link != undefined) {
			let slideLink = document.createElement('a');
			slideLink.href = input[galleryIndex].link;
			slideLink.append(slideDivImage);
			slideDiv.append(slideLink);
		} else slideDiv.append(slideDivImage);

		let slideTextDiv = document.createElement('div');
		slideTextDiv.className = 'journal-slide-text';

		let slideText = document.createElement('p');
		slideText.innerHTML = `${input[galleryIndex].text}`;

		slideTextDiv.append(slideText);

		slideshowDivChild.append(slideDiv, slideTextDiv);

		let slideshowPrev = document.createElement('a');
		let slideshowNext = document.createElement('a');
		slideshowPrev.className = 'journal-gallery-prev';
		slideshowNext.className = 'journal-gallery-next';

		slideshowPrev.innerHTML = '&#9664;';
		slideshowNext.innerHTML = '&#9654;';

		function updateGallery(addSlideIndex) {
			let indexParent = gallerySlideshow.id.split('-')[3];
			let slides = document.getElementById(`journal-gallery-parent-${indexParent}`).childNodes;

			slides[slideIndex[indexParent]].style.display = 'none';

			slideIndex[indexParent] += addSlideIndex;
			if (slideIndex[indexParent] < 0) slideIndex[indexParent] = slides.length - 1;
			if (slideIndex[indexParent] > slides.length - 1) slideIndex[indexParent] = 0;

			slides[slideIndex[indexParent]].style.display = 'block';
		}

		slideshowPrev.onclick = () => {
			updateGallery(-1);
		}

		slideshowNext.onclick = () => {
			updateGallery(1);
		}

		slideshowDiv.append(slideshowPrev, slideshowDivChild, slideshowNext);

		if (galleryIndex > 0) slideshowDiv.style.display = 'none';
		else slideshowDiv.style.display = 'block';

		gallerySlideshow.append(slideshowDiv);
	}

	avThin.append(gallerySlideshow);
};

function makeQuote(input) {
	let quoteText = document.createElement('p');
	
	let quoteItalics = document.createElement('i');
	quoteItalics.className = 'journal-quote';
	quoteItalics.innerHTML = `"${input.quote}"`;

	let lineBreak = document.createElement('br');

	let quoteAuthor = document.createElement('i');
	quoteAuthor.className = 'journal-quote-author';
	quoteAuthor.innerHTML = ` - ${input.author}`;

	quoteText.append(quoteItalics, lineBreak, quoteAuthor);

	avThin.append(quoteText);
};

function makeList(list) {
	let listContainer = document.createElement('ul');
	listContainer.className = 'journal-unordered-list';

	for (let listIndex = 0; listIndex < list.length; listIndex++) {
		let listItem = document.createElement('li');
		listItem.innerHTML = list[listIndex];
		listItem.className = 'journal-list-item';
		listContainer.append(listItem);
	};

	avThin.append(listContainer);
};

function addImage(input) {
	let image = document.createElement('img');

	if (input.height != undefined) image.height = input.height;
	if (input.width != undefined) image.width = input.width;
	image.style.backgroundColor = '#555555';
	image.style.float = input.float;
	image.src = `images/${pageName}/${input.src}`;
	image.alt = input.alt;

	avThin.append(image);
};

function addText(input) {
	let newText = document.createElement('p');
	newText.innerHTML = input;
	avThin.append(newText);
};

function greneAddMacron(input) {
	for (let textIndex = 0; textIndex < input.length; textIndex++) {
		addText(input[textIndex]
			.replaceAll('Grene', 'Gr\u0113ne')
			.replaceAll('Grenian', 'Gr\u0113nian')
		);
	}
};

function rainbow(input) {
	let rainbowSpan = document.createElement('span');
	rainbowSpan.className = 'rainbow';
	rainbowSpan.innerHTML = input;

	addText(rainbowSpan.outerHTML);	
}

function handleText(input) {
	switch (typeof input) {
		case 'string':
			addText(input);
			break;
		case 'function':
			input();
			break;
		default:
			console.log('Unknown input type!', input);
			break;
	};
};

if (page.introText != undefined) {
	for (let i = 0; i < page.introText.length; i++) handleText(page.introText[i]);
}

if (page.categories != undefined) {
	for (let i = 0; i < page.categories.length; i++) {
		let category = document.createElement('h2');
		let lineBreak = document.createElement('hr');
		
		category.innerHTML = page.categories[i].name;
		
		avThin.append(category, lineBreak);
		
		if (page.categories[i].info != undefined) {
			for (let j = 0; j < page.categories[i].info.length; j++) handleText(page.categories[i].info[j]);
		}
	}
}

if (page.warning != undefined) {
	for (let i = 0; i < page.warning.split(' ').length; i++) {
		addScript(`./pages/warn_${page.warning.split(' ')[i]}.js`);
	}
}

if (page.endnav != undefined) {
	for (let i = 0; i < page.endnav.split(' ').length; i++) {
		addScript(`./pages/nav_${page.endnav.split(' ')[i]}.js`);
	}
}

addScript('./pages/FINALIZER.js');
