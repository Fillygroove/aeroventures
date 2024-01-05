let pageName = new URLSearchParams(window.location.search);
pageName = pageName.get('p');
if (pageName == null) pageName = "main";
/*
makeButton({
	html: rng(50) == 0 ? 'RANSOM PAGE' : 'Random Page', 
	color: 'rand-black',
	onclick: () => {
        window.location.href = `?p=${journalList.rand[rng(journalList.rand.length)]}`;
    }
});*/

let warnings = [];
let endnavs = [];
	
if (!journalList.norm.includes(pageName)) pageName = '404'; 
addScript(`./pages/${pageName}.js`);
addScript('./pages/CONSTRUCTOR.js');
