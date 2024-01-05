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
		name: 'So, what the hell is Metaventures as of now anyway? Isn’t it some fanfiction of Diep or something?',
		info: [
			'Nah. I want to make it clear that I’ve moved on from diep-related ideas making their way into Metaventures since a long time ago (That’s Project Nest’s thing anyways…). It’s been really, really hard to do so and I don\'t advise anyone in a similar situation to do the same as I\'ve done unless they really liked the ideas. I sure did… So, the only thing that’s survived all that is Pon’s color, Aero’s color, and the color of a few polygon types. That’s all. The only reason I haven\'t changed those miniscule things is because they are already kind of iconic to me. Otherwise, as you’ll see… Everything is quite different!'
		]
	}, {
		name: 'In that case, what is Metaventures now?',
		info: [
			`It’s a fictional universe which encompasses a wide spread of projects starring the characters from Planet <span title="Renamed to Vemma"><u>Vemma</u></span>, a planet somewhat different from ours, in another dimension with its own absurd history. The logo features three “main'' projects: two comics and the games which I shall explain below: `,
			`Aeroventures, which takes place in the unsurprisingly north land of the Northland continent, an area mostly populated by a species of Reegs. This is a comic that focuses on Aero, a reeg who attempts to find out what he should be in the hellish cartoon world that Vemma is. Aero will meet many a serial murderer, a wizard, an associate, a space priest, a man made out of lavish yolk, you name it. It’s a rather laid back series, something like a saturday morning cartoon show starring recurring villains and heroes blasting each other with anything they have near them, but also may have some effects on Aero, who is almost unwillingly put into different roles throughout. Based around the Reeg species nature to be malleable. More on that later. `,
			`Polyventures, which focuses on the completely unexpected south land of Southland, where the species of Polygons have a serious uprising problem of their robotic workforce, the Constructs. Their leaders, the Paragons, are a primary target for one of the two main protagonists - a construct named Pon with the outrageous goal to become a Paragon for the Constructs. Meanwhile the other protagonist is a square named Larry who embarks on the journey with Pon, sporting a comically large sword in his bag. Unlike Aeroventures, the difference for Polyventures is that it is linear and continuity matters a LOT. For example: If Pon punches some merchant randomly, it’ll have the effect later of the merchant’s cousin from the next 100 chapters on. This might cause them to close the door on Pon and Larry when they are left in the biting frost of Sherbet Island. In addition, this comic happens not during but BEFORE Aeroventures. How fun. Based on the Polygon species nature to be strict and structured. More on more on that later, later. `,
			`The Games - We have been considering making video games, with our new access to certain game engines. By no means are we making Legend of Aero “Breath of the Blue Cheese” with this new technology, but small games that we hope you might find fun. Some of these ideas include Marathar, a game based of atari’s Adventure game which features an ancient bareeg saving his mountain village from disaster, Omnikron which features Captain Nyork exploring the horrifically…. Inhabited planet of Omnikron. Those are our current plans.`
		]
	}, {
		name: '“We”?',
		info: [
			`WE as a group have separated the roles for some projects in order to separate the workload.`,
			`As of now the people actively assisting those projects are Fristo, <span title="omg thats me!"><u>Clarise</u></span>, Gramiatar, SnapKrakPop, and Text Wall .`
		]
	}, {
		name: 'What about the old stuff?',
		info: [
			() => {
				addImage({
					src: 'sup_logo_1.jpg',
					alt: 'sup_logo_1.png',
					width: '300',
					float: 'right'
				});
			},
			`Errg, I mean, if you like it, it won’t go anywhere. But i’ll just stash it somewhere else, the above does not reflect the old stuff at all, it’s also really kind of rubbish at the start. But don’t worry! If you liked them, the new stuff will still have the odd sense of humor that made me go through with it in the first place, just a lot more formal, and digitized! Yes, that’s right, it won’t be dictated by my flash camera whether you can hear a one liner or not!! I still have to get good at digital art, but nonetheless I hope you’ll look forward to it being a definite improvement to whatever I was kind of barfing out before…`
		]
	}, {
		name: 'What is a Reeg?! Aero looks like a damn penguin, don’t lie to me!',
		info: [
			`Well, first there’s an interesting sort of connection to the Reegs and Polygon species. They were always actually meant to be one creature, a quadruped sort of being.. But the instructions were unclear that these species were only basic PARTS to their creator. So the Reeg is actually only a part of an unfinished being, living on it’s own 2 legs (which are also arms) and cursing pigeons who decided to join in on their breakfast. In fact, the namesake, “Reeg” is actually meant as “Rig”! Reeg sounded cooler to them though, but that’s what they are. Malleable, squishy creatures that were originally meant to envelop the colorful wireframe shape, a Polygon. Now both Polygon and Reeg hate and blame each other over the whole “could have been an awesome, un-unfinished creature” business.`
		]
	}, {
		name: 'What is that pokey thing on Aero’s face, though?',
		info: [
			`The Reegs, without their desired wireframe (However, don’t think they don’t have skeletons, they very well are not just actual slimes or blobs. The wireframes and rigs are meant for godlike creator’s eyes..) have found that their malleable body can hold and attach things, and quite well!! This has been furthered into a very useful Reeg invention.. The nose. It’s actually called attachments, but they usually put it on their faces to aim for whatever they have better. Plus, we can call a gun a nose now, we all win there. Aero holds a noselance, however as much as he tries to pry it off, it’s just stubborn and won’t give up. So he’s just kind of like that now.  Reegs, despite the vast array of possible attachments/noses, usually only have one or two. You don’t want to trip and simultaneously have all the tank guns, wire hooks, raisin dispensers, and plungers go off unless you’re like me. `
		]
	}, {
		name: 'What happened to Archie?',
		info: [
			`I have renamed them to fit better into the story, since before it was all kind of a mishmash of ideas from anybody at all. So, there has been some formal renaming and redesigning on my behalf. For this segment in particular this only really affects people who remember the old comics. So renaming as..`,
			() => {
				makeList([
					`Archie -> Rodney (equipped with redesign)`,
					`Royale -> Krieg Kahn (equipped with his son, Kellogg)`,
					`Coyl Stone -> Felix Stone (Like Helix, equipped with no laughter other than mine. Also redesigned species wise...)`,
					`War Machine -> Placeholder “S5-RA”`,
					`Archpuppet -> Placeholder name “Rodnette” (will come with redesign, too.)`
				]);
			},
			`If you don’t remember any of those names then this segment doesn’t really do much for you.`
		]
	}, {
		name: 'Will the story be the same?',
		info: [
			`No, Aero is a lot different this time around. He starts in a more humble area of a place called Yolktown. While I do expect to follow some similar plotlines, there’s an overwhelming amount of new content that I can't wait for you to see. However, you can bet that the stretchy powers will stay… how they are presented is much more interesting though. I hope to show more of the world and less comics just being a few panels of fighting without context for other types of conflict… `,
			`By the way, the reegs have mouths. We are all just going to have to live with it now.`,
			() => {
				makeGallery([{
					image: 'sup_aero_1.jpg',
					text: 'AV Main Cast doing the "Can-Can" because they can.'
				}, {
					image: 'sup_aero_2.jpg',
					text: 'Supplementary character sheet.'
				}, {
					image: 'sup_aero_3.jpg',
					text: 'bro give me your digital currency.'
				}]);
			}
		]
	}, {
		name: 'What is a polygon, anyway? If Pon isn’t a polygon then why is she supposedly the main character of POLYventures?!',
		info: [
			`It’s an interesting topic, the other side of the planet. The polygon species mostly resides in Southland, as do Reegs in Northland. As mentioned before, they are conceptually, a half finished species. Originally meant to be the wireframes of the otherwise smushy “rig” body, equipped with 4 limbs, many different side types (Triangle, Nonagon, Square) and a brightly colored core. Now they just babble on about how the other species sucks, caused all this, and aren't invited to my son's 14th birthday party, all that. Polygons, like an opposite end to Reeg societal structure, which was shown as rather hectic, unpredictable, and free, are a bit of the opposite. Polygon societal structure is very rigid and structured, dividing areas into “sectors” where a specific polygon type mainly populates. These sectors are ruled by the most powerful polygon leader named a “Paragon” of the attributed side. For example, the Pentagon Sector which mainly houses Pentagons (but not entirely made up of only pentagons) is ruled by the Paragon of the Pentagon Sector. Simple, you learned this in Geometry Class. Polygons quite like rigid systems, so they also had created a race of machines called “Constructs” with an arguably sentient a.i. to do a lot of the dirty work for them like replaceable soldiers, chefs, door-openers, and vehicles. Everything is automated and somehow someone else’s fault. Great! Not so great when we take into consideration the dastardly effects that would happen if any of these systems get corrupt, or fail. Good thing that doesn’t happen…… Yeah, some of the paragons in Polyventures might be a bit power-mad, and the constructs don’t like their lives being wasted on a simple task. This is Polyventures. Pon is one of those simple task soldier constructs. (Notice the clockwork key signifying that this, surprisingly, isn't an organic being)`
		]
	}, {
		name: 'What the hell is Pon going to do, She\'s just a walking knife!',
		info: [
			`Exactly! She has this outrageous idea to fix everything by being a Paragon while not taking into consideration that any Paragon could easily wipe her off the face of the Vemma, let’s see this unfold! Larry, a square polygon squire also will join pretty early in on this quest, and many more who are quite honestly sick of some of the people above them. Since the characters will have to go through the massive polygon sectors, I hope to show a lot of the weird ass landscapes and environments I have ideas for in this hellish cartoon planet. The absurdity of one of my weakest characters reaching for the top had seemed like such a fun thing to somehow justify, so I imagine the plot would have to be equally absurd. `
		]
	}, {
		name: 'Would I have to see Aeroventures or Polyventures first?',
		info: [
			`Any. You don’t need to see one to get the other. There are some fun references that I think will be rewarding if you did see both, but I think both series could stand up on their own legs.`,
			() => {
				makeGallery([{
					image: 'sup_poly_1.jpg',
					text: 'Somebody\'s pissed.'
				}, {
					image: 'sup_poly_2.jpg',
					text: 'BONK.'
				}, {
					image: 'sup_poly_3.jpg',
					text: 'Heirarchy of Polygons.'
				}]);
			}
		]
	}, {
		name: 'Marathar who?',
		info: [
			`Marathar was formerly a gag project started by Fristo based off of Atari's Adventure. It started as a short 10 minute long game with super basic bosses and enemies. However, after some discussion, it became a more serious (though still comedy driven) game project. Currently, this project is at the top of our list of priorities and you can probably expect to see it soon enough.`
		]
	}, {
		name: 'Nyor-I mean Omnikron',
		info: [
			`Omnikron (formerly Nyork/Nyork’s Adventure) has been a part of the logo ever since Metaventures was a thing! This project takes its inspiration from arcade classics but is painted in its unmistakably green and purple aesthetic. The game is a space-shooter exploration type, as you follow Captain Nyork deeper into the icy planet Omnikron. Its development is still early but the core idea remains nearly unchanged. We’ll see more about our brave Nyork as we get Marathar close to completion.`
		]
	}, {
		name: 'Alas we have here the Planets...',
		info: [
			`There was a focus on developing Metaventures’s astronomy and planet systems. This will be put on hold as we feel like it won’t be a relevant thing for the comics. Instead of setting it all up before we make our moves with the comics, we’ll be adding more information about them alongside the comics on the Wiki.`
		]
	}, {
		name: 'So, the comic, when?',
		info: [
			`Probably the most important question here. While I hope it’s clear now that I have been working on many things MV related, I also am doing other projects not MV related, for and with other people. I just don’t know, really. I have most of the tools necessary, it’s all just skill based and writing dialogue now, which I have been practicing on in OTHER projects as a secondary gain of experience so I can tell it will be soon, with our current rate of progress. I’m a bit grown up now, and I have to say that I have real life as a way higher priority than retreating to making silly comics that feature vampires and giant worms on a cookie planet. Although I still love all of these things (and will never change this sense of humour as I get older), the way that life has become unpredictable is something that I have to learn to adapt to. I have to be resembling a semblance of a part of a responsible human being after all. With it being as spontaneous as a doodle you can pretty much count that I usually would work on it for fun in the background. I would like to have something pretty nice in mind soon, but we’ll have to see what happens, hopefully the wraps of college, and real life treat me nicely.`
		]
	}, {
		name: 'Did I need to read all of this?',
		info: [
			`Not really. I just wanted to give everyone that wanted to know surface information of (mostly) EVERYTHING that I’ve been doing, and what the hell MV even is. By any means, you can continue using the server as you have been doing. After all, I hope all of this information is shown NATURALLY through the comics. So, I'll see you there!`,
			() => {
				makeGallery([{
					image: 'sup_mara_1.png',
					text: 'A screenshot of Marathar!'
				}, {
					image: 'sup_omni_1.jpg',
					text: 'Captain Nyork and Zedd, the player 1 and player 2 of Omnikron!'
				}, {
					image: 'sup_omni_2.jpg',
					text: 'Enemies for Omnikron!'
				}]);
			}
		]
	}, {
		name: 'Thanks for reading!',
		info: [
			() => {
				makeQuote({
					quote: 'Heyo, website coder here. Stuff is coming soon, I swear!',
					author: 'Clarise'
				});
			}
		]
	}]
}; 
