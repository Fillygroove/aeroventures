let themes = {
	default: {
		avThin: [85, 85, 85],
		topColor: [68, 68, 68],
		background: '#333333',
		infobox: '#555555',
		menus: '#444444',
		lineguide: '#FF0000',
		border: '#FFFFFF'
	},
	superdark: { // By CloakWithHoodedBoi
		avThin: [10, 10, 10],
		topColor: [25, 25, 25],
		background: '#080808',
		infobox: '#2B2B2B',
		menus: '#242424',
		lineguide: '#97F764',
		border: '#9C64F7'
	},
	cherryBlossom: {
		avThin: [216, 111, 111],
		topColor: [232, 160, 160],
		background: '#522F2F',
		infobox: '#D68383',
		menus: '#C45454',
		lineguide: '#00F3FF',
		border: '#FFFFFF'
	},
	the: {
		avThin: [85, 73, 109],
		topColor: [52, 49, 72],
		background: '#842066',
		infobox: '#3A1634',
		menus: '#3261B2',
		lineguide: '#FF0000',
		border: '#FFEB79'
	},
	abyss: { // By PS3_33
		avThin: [48, 48, 48],
		topColor: [89, 74, 108],
		background: '#26113F',
		infobox: '#7E57AD',
		menus: '#8D65BE',
		lineguide: '#FF0000',
		border: '#FFFFFF'
	},
	sunset: { // By Astro
		avThin: [145, 132, 217],
		topColor: [255, 162, 233],
		background: '#FF8F4F',
		infobox: '#862D9F',
		menus: '#FF8F4F',
		lineguide: '#00FF28',
		border: '#FDE868'
	},
	nyork: { // By Text Wall
		avThin: [0, 24, 11],
		topColor: [194, 0, 255],
		background: '#009748',
		infobox: '#5700B7',
		menus: '#C200FF',
		lineguide: '#00FF28',
		border: '#FFFFFF'
	}
};


function updateTheme(themeName) {

	if (window.localStorage.theme == undefined) window.localStorage.theme = 'default';
	let theme = themes[themeName];

	let colorArray = theme.topColor.toString();
	
	document.documentElement.style.setProperty('--avthin', `rgba(${theme.avThin}, var(--transparency)`);
	document.documentElement.style.setProperty('--topcolor', `rgba(${colorArray}, 1)`);
	document.documentElement.style.setProperty('--background', theme.background);
	document.documentElement.style.setProperty('--infobox', theme.infobox);
	document.documentElement.style.setProperty('--menus', theme.menus);
	document.documentElement.style.setProperty('--lineguide', theme.lineguide);
	document.documentElement.style.setProperty('--border', theme.border);

	lineGuideDiv.style.top = '100%';

	function correctHotbar() {
		if (document.body.getBoundingClientRect().top / 56 < 1 && document.body.getBoundingClientRect().top / 56 > -3) {
			dropdownDiv.style.backgroundColor = `rgba(${colorArray}, ${1 + document.body.getBoundingClientRect().top / 1792}`;
		} else if (document.body.getBoundingClientRect().top / 56 < -3) {
			dropdownDiv.style.backgroundColor = `rgba(${colorArray}, 0.91)`;
		} else dropdownDiv.style.backgroundColor = `rgba(${colorArray}, 1)`;
	};

	correctHotbar();

	window.onscroll = () => correctHotbar();
}

updateTheme(window.localStorage.theme);
