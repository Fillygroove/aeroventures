let comic = new URLSearchParams(window.location.search);
comic = comic.get('c').replaceAll('-', '/');

function panelSetup(howLong, extension) {
	comicInfo.panels = [];
	for (let i = 0; i < howLong; i++) {
		comicInfo.panels.push({
			panel: `${i + 1}.${extension}`
		});
	}
}

if (!comicList.norm.includes(comic.replaceAll('/', '-'))) {
	comic = '';
	window.location.href = '?c=';
}

if (window.localStorage.pass == undefined) window.localStorage.pass = 'false'; 

addScript(`./${comic}/setup.js`);
addScript('../scripts/comicConstruct.js');
