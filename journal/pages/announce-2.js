let pageData = {
	name: 'The Metaventures Announcement',
	introText: [
		() => {
			makeQuote({
				quote: 'This announcement comes from Text Wall, thanks for reading!',
				author: 'Clarise'
			});
		}
	],
	categories: [{
		name: 'History Time!',
		info: [
			`Way before the first version or the server was even considered to be made, I used to make the mv comics in discord channels. There would be one discord channel for each comic, where i would post all the panels by hand and pin the first panel of said comic for an episode list. It was that simple. Of course, nobody had ever done such a thing, ever, so i had to explain the process whenever someone new wanted to see it. It was cute, but not at all a way a comic should live. Very early into the server's development Clarise brought up an idea to just make a website for the whole thing! To hold everything, and fill it with other random tidbits in the mv style. I said "No, what? We hardly done anything. What's good starting something like that now? The discord channels are fine." Then she offered to show me a sample, a beta of what she could do, and left. It was later that night when i was talking to Gramiatar that i told him "There's no way this is going to work." Next time he messages me, he was along the lines of "I don't understand, this is a really good idea." I woke up next morning to him telling me that it's even "fantastic". What?! I had to check for myself, which was easy because they were both in the voice chat of the server, streaming the site. I went in, and i was completely wrong. It was fantastic, it was the only time that i saw the potential of the whole thing instead of hiding behind my traditional discord channel comics that ive been doing for years. After that, i took down all the discord channels and we started working on the site, and i don't regret anything at all about it.`,
			`Perhaps that says something, perhaps it was wrong of me to believe there was any actual perfect "time" to create it. I surely can't imagine making the site now, it might be too much to handle at once. So, maybe, consider the idea that the perfect time to do something, is right now. Sometimes there is times to do things, but i think sometimes we fantasize a perfect time where we are perfectly capable of doing such a thing and all the variables are lining up. That "time" we've hyped up so much, may not exist. Maybe the state we are in right now, is a perfect time to start whatever you wanted to do. Don't overwhelm yourself, i'm just saying if you've been sitting on something for a year now maybe, you can give it a try? Anyway, since then the site has been a perfect foundation of the mv content with even a fucking WIKI to help us out. And a year later, we've been starting many, many projects. Mind you, back then there was only Aeroventures! We made the ideas of Polyventures, Nyork, Marathar and whoever else during this period of creativity, dabbed into animation, spritings, and video games! I can recite 100 named characters already! However, while these developmental processes were fantastic, the product has not been shown to you guys. or gals. That's usually the finishing point, the final nail on making something, to show it to other people! I appreciate everyone being in here whether it be for mv or just for looking at the funny channel names, but i think it's about time we worked on something to show. Here's to Aeroventures 1, which will be quite a monster to overcome, the very first modern comic...! While we wait.. I know it isnt MV's birthday, (we don't know what it is) but heres some OLD sketches of ideas that might have you think.`,
			() => {
				makeGallery([{
					image: 'pv_old.jpg',
					text: `Woah. This is odd. The first ever drawing of the Polyventures Characters. Larry doesnt look that evil anymore, and Pon's design surely changed...`
				}, {
					image: 'pv_bow.jpg',
					text: `Later on Larry was changed to have a Bow, which he'd launch the (still two eyed) Pon with. What am i saying? Pon didnt even have a name yet, Larry was the first named character here. Anyway, this move was taken out because doing so would make them win the whole comic instantly. I'm kidding, we moved this idea to another helpful character..`
				}, {
					image: 'pv_arms.jpg',
					text: `Pon had arms once, in early development. She even had a weapon, she was going to use a War Fan! Everyone else thought she should be armless, so im probably going to save the War Fan for someone else. Sorry!`
				}, {
					image: 'av_felix_1.jpg',
					text: `I need to show the original AV 12 Fight with Felix sometime. It was real good. Take this as a lesson! Don't let fake expectations and doubts pile up! You, are, good! (1/3)`
				}, {
					image: 'av_felix_2.jpg',
					text: `I need to show the original AV 12 Fight with Felix sometime. It was real good. Take this as a lesson! Don't let fake expectations and doubts pile up! You, are, good! (2/3)`
				}, {
					image: 'av_felix_3.jpg',
					text: `I need to show the original AV 12 Fight with Felix sometime. It was real good. Take this as a lesson! Don't let fake expectations and doubts pile up! You, are, good! (3/3)`
				}, {
					image: 'pv_desk.jpg',
					text: `Theres just pages filled with this on my desk.`
				}, {
					image: 'av_poster.jpg',
					text: `I made this for a poster project. I won.`
				}, {
					image: 'mv_pilf.jpg',
					text: `Found the original "Pilf" Drawing in some old cabinets, way way way back. Did i ever tell you Pilf is technically the oldest concept in all of MV? I MADE IT IN 4TH GRADE! I called it Cubar because Cuba was such a wierd name to me... It was led by the cerebral brain men who rode on peacock shrimps, fighting in a central arena. Yeah. Different now.`
				}]);
			},
			`So yeah. HAPPY BIRTHDAY SITE`,
			`we appreciate you :)`,
			`have some fun looking at these old ass drawings`
		]
	}, {
		name: 'Thanks for reading!',
		info: [
			() => {
				makeQuote({
					quote: 'Hey, website coder here. Would you like to live on Vemma for 2 minutes?',
					author: 'Clarise'
				});
			}
		]
	}]
}; 
