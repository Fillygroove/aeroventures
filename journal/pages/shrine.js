let pageData = {
	name: 'Secret: Aposteel\'s Shrine',
	introText: [
		() => {
			makeQuote({
				quote: 'yo',
				author: 'Panzer, our savior!'
			});
		},
		() => {
			addImage({
				src: 'shrine.jpg',
				alt: 'shrine.jpg',
				width: '250',
				float: 'right'
			});
		},
		'by apo don\'t STEEL'
	]
};
