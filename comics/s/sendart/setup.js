let comicInfo = {
	title: 'Send Art',
	desc: 'Send Art',
	folder: './',
	rewindTo: 'trigger',
	corruptable: true,
	panels: [{
		panel: 'send_art_OLD.png',
		caption: 'Send Art'
	}],
	verify: (input) => {
		if (input.slide.toLowerCase() == 'send art') {
			window.location.href = '../../journal/?p=send-art';
		}
	},
	fullscreen: true
};
