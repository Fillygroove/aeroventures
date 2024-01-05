function addText(text, style = '') {
	let paragraph = document.createElement('p');
	paragraph.innerHTML = text;
	paragraph.style = style;
	avThin.append(paragraph);
}

function addHead(text) {
	let header = document.createElement('h2');
	let headerLine = document.createElement('hr');
	header.innerHTML = text;

	avThin.append(header, headerLine);
}

let mainH1 = document.createElement('h1');
mainH1.innerHTML = 'Metaventures!';
mainH1.className = 'page-header';

let lineBreak = document.createElement('hr');

avThin.append(mainH1, lineBreak);

addText('AEROVENTURES 1 SOONR.', 'font-size: 20px;');

addText('Welcome to the Metaventures website! Read below for more information!');

addHead('The newest change!');

addText('Heavily reworked the old Wiki system into a journal system which will be updated when new comics come out!');

addHead('The Comics!');

addText('The comics section contains a framework that will lead to future comics. There is currently a single spinoff and a password protected archive.');
addText('The newest Aeroventure comic, which is non-cannonical, is titled <a href="./comics/?c=heavell" class="comic-link">Towers of Heavell</a>, was made by Fristo and released on Halloween.');
addText('AEROVENTURES 1 IS BEING WORKED ON.');

addHead('The Journal!');

addText('The Journal is a collection of documents written by an entity known as The Keeper, who logs all of the information found in the comics.');
addText('Leave all stones turned. (\'>\')');

addHead('The Discord!');

addText('The Discord is a little invite to a server that allows you to chat with the creators of the content on this very website! The discord allows you to view changelogs, talk with other people, and more!');

addText('If you would like to take a visit, go <a href="https://discord.gg/xxRvYERs48" class="link">here</a>!')

addHead('The Credits!');

addText('If you would like to see who helped out with the Metaventures world, go <a href="./journal/?p=credits" class="link">here</a>!');

addText(`This website was made by Clarise, whos main website may be found <a href="../" class="link">here</a>!`);
