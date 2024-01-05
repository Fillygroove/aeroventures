let comicInfo = {
	title: 'AV-11: Code Red',
	desc: 'Something terribly wrong has happened in Dr. Lakys\'s lab. Can the Aeroventures Crew stop this new menace?',
	background: 'bg-av.png',
	rewind: true,
	corruptable: true,
	fullscreen: true
};

panelSetup(106, 'jpg');

comicInfo.panels[7].execute = (input) => {
	let panelLink = document.createElement('a');
	panelLink.style = 'cursor: pointer;';
	panelLink.onclick = () => {
		currentSlide(3);
	};
	
	panelLink.append(input.panel);
	input.slide.append(panelLink);
};
comicInfo.panels[43].link = '?c=brooo';
