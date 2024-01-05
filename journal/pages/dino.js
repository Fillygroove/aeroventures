let scream = '';
for (let i = 0; i < 50000; i++) scream += 'A';

let pageData = {
	name: 'Secret: How to stop satellite. by Dinosaurs',
	introText: [
		`${scream}`
	]
};

window.onscroll = () => {
	let screamString = document.getElementsByTagName('p')[0];
	screamString.innerHTML += scream;
};
