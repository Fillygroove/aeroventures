let comicInfo = {
	title: 'Secret: Nineventures',
	desc: '"Nineventures" contains every ninth panel from every aeroventure to make some.. tangible kind of story. More panels are sure to be added after more comics are made.',
	folder: 'secrets/nine/',
	corruptable: true,
	panels: [{
		panel: '1.jpg',
		caption: 'Aero looks upon a memory of a deceased Archie, someone who\'s been rumored to be coming back in recent times...'
	}, {
		panel: '2.jpg',
		caption: 'Aero seeks his old rival, but newfound partner, Archie. Had he forgotten that he must be present in order for a mafia war to take place? He hastily scurries around the room in an attempt to find his lost partner.'
	}, {
		panel: '3.jpg',
		caption: 'His old enemy, Lakys remarks on Aero\'s persistence. Lakys sees the focus of a true reeg in Aero. Perhaps both of them share a similair goal..?'
	}, {
		panel: '4.jpg',
		caption: 'Lakys suddenly grows suspicious as he seems to remember the enviroment both of them are currently standing on with their own two stubs! The Island of No Escape? A memory shakes and wriggles in Lakys\'s brain, attempting to find clarification before...'
	}, {
		panel: '5.jpg',
		caption: '..Mcfrownies? This was odd, had he been transported to somewhere else via some anomalous object, some.. kind of witchery? Lakys\' sees a sweat drop from his face as the familiar cashier in the back welcomes him to enjoy one of their burgers, something the resturant is praised for. Lakys sighs; Might as well.'
	}, {
		panel: '6.jpg',
		caption: 'But it was not! Once the Cashier has stated the resturants menu, Lakys immediately recognizes the monotone voice of his short-time ally, Aero! Lakys is at a lost for words! How did Aero do this??'
	}, {
		panel: '7.jpg',
		caption: 'Some familiar fellows seem quick to abscond the area, which has the aura of a fight looming. Looming hard! Trivy gives one last word of wisdom before fleeing the premises! What will happen next??'
	}, {
		panel: '8.jpg',
		caption: 'As lakys gets battle-ready, boot on, duck placed, and armed to the stub, he cant help but notice Aero\'s lack of common decency.'
	}, {
		panel: '9.jpg',
		caption: 'THE NINTH PANEL OF "NINEVENTURES" HAS BEEN REMOVED</br>FURTHER INVESTIGATIONS HAVE BEEN TERMINATED UNDER ORDER GAMMA-52OXY</br>THE FOLLOWING FILM SHALL CONTINUE AS INTENDED.'
	}, {
		panel: '10.jpg',
		caption: '"Whatever." Lakys says, turning on his machine that he was SURE would work to make the Lacii army he\'s always dreamed of! Hopefully it\'ll work again, as Aero seems to be ready to battle.'
	}, {
		panel: '11.jpg',
		caption: 'Aero was somewhat late to the prepare of war. He scrambles on the desk of a nearby resturant in order to obtain some sort of energy that not even regular Reegs should use! Meanwhile, some familiar faces farm XP from a bear person. Perhaps Aero should do the same...?'
	}, {
		panel: '12.jpg',
		caption: 'As Lakys looks on to what Aero\'s ignoring, Lacus questions everyone\'s safety...'
	}],
	verify: (input) => {
		if (input.slideIndex == 9 && (input.slide == '9' || input.slide == 'nine')) {
			window.location.href = '../journal/?p=nine';
		};
	},
	background: 'bg-av.png',
	fullscreen: true
};
