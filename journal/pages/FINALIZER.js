for (let i = warnings.length - 1; i >= 0; i--) {
	let warning = warnings[i];
	
	let warningTable = document.createElement('table');
	
	warningTable.className = "journal-warning";
	
	let warningCaption = document.createElement('caption');
	warningCaption.innerHTML = warning.caption;
	
	let warningBody = document.createElement('tbody');
	
	let warningTableRow = document.createElement('tr');
	warningTableRow.rows = "3";

	let warningIMGData = document.createElement('td');
	warningIMGData.rowSpan = "1";

	let warningIMG = document.createElement('img');

	warningIMG.alt = warning.image.file;
	warningIMG.src = `images/warn/${warning.image.file}`;
	warningIMG.width = warning.image.dims[0];
	warningIMG.height = warning.image.dims[1];

	warningIMGData.append(warningIMG);

	let warningWords = document.createElement('td');
	warningWords.rowSpan = "2";

	let warningWordsPassage = document.createElement('info');
	warningWordsPassage.className = 'journal-info';
	warningWordsPassage.innerHTML = warnings[i].wormbs;
	warningWords.append(warningWordsPassage);

	warningTableRow.append(warningIMGData, warningWords);

	warningBody.append(warningTableRow);
	
	warningTable.append(warningCaption, warningBody);
	
	pageHeader.append(warningTable);
}

for (let i = 0; i < endnavs.length; i++) {	
	let table = endnavs[i];
	
	let endTable = document.createElement('table');
	endTable.className = "journal-navbox";
	
	let caption = document.createElement('caption');
	caption.innerHTML = table.heading;
	
	let tableBody = document.createElement('tbody');
	tableBody.style.visibility = endnavs[i].hideable ? 'collapse' : 'visible';

	for (let i = 0; i < table.categories.length; i++) {
		let tableRow = document.createElement('tr');
		
		let tableHeader = document.createElement('th');
		tableHeader.className = 'journal-outer-table-header'

		let tableInfo = table.categories[i].category;
	
		if (tableInfo.link != undefined) {
			let tableHeaderLink = document.createElement('a');
			tableHeaderLink.href = tableInfo.link;

			let tableHeaderImg = document.createElement('img');
			tableHeaderImg.src = `images/nav/${table.type}/${tableInfo.img[0]}`;
			tableHeaderImg.height = tableInfo.img[1];
			
			tableHeaderLink.append(tableHeaderImg);
			tableHeaderLink.innerHTML += tableInfo.name;

			tableHeader.append(tableHeaderLink);
		} else {
			tableHeader.innerHTML += tableInfo.name;
		}

		tableHeader.scope = 'row';
		
		let tableData = document.createElement('td');
		let innerTable = document.createElement('table');
		
		tableData.append(innerTable);
		
		let innerTableBody = document.createElement('tbody');
		
		for (let j = 0; j < table.categories[i].info.length; j++) {
			let innerTableRow = document.createElement('tr');
			
			let innerTableHeader = document.createElement('th');
			innerTableHeader.scope = "row";
			innerTableHeader.className = 'journal-inner-table-header';

			if (table.categories[i].info[j].name.link != undefined) {
				let innerHeaderLink = document.createElement('a');
				innerHeaderLink.href = table.categories[i].info[j].name.link;
				innerHeaderLink.innerHTML = table.categories[i].info[j].name.name;
				innerHeaderLink.className = 'comic-link';
				innerTableHeader.append(innerHeaderLink);
			} else innerTableHeader.innerHTML += table.categories[i].info[j].name.name;
			
			let innerTableData = document.createElement('td');
			
			let innerTableDiv = document.createElement('div');
			
			for (let k = 0; k < table.categories[i].info[j].info.length; k++) {
				let innerTableInfo = table.categories[i].info[j].info[k];

				let innerTableSpan = document.createElement('span');
				
				if (innerTableInfo.link != undefined) {
					let innerTableLink = document.createElement('a');
					innerTableLink.href = innerTableInfo.link;

					if (innerTableInfo.img != undefined) {
						let innerTableImg = document.createElement('img');
						innerTableImg.src = `images/nav/${table.type}/${innerTableInfo.img[0]}`;
						innerTableImg.height = innerTableInfo.img[1];

						innerTableLink.append(innerTableImg);

						if (innerTableInfo.hover != undefined) {
							let innerTableHover = document.createElement('img');
							innerTableHover.src = `images/nav/${table.type}/${innerTableInfo.hover[0]}`;
							innerTableHover.height = innerTableInfo.hover[1];
							innerTableHover.className = 'aerospin-top';
	
							let imgSpan = document.createElement('span');
							imgSpan.className = 'aerospin';

							imgSpan.append(innerTableImg, innerTableHover);
							innerTableLink.append(imgSpan);
						} else innerTableLink.append(innerTableImg);
					}

					if (innerTableInfo.isGeorge) {
						innerTableLink.innerHTML += 'Georg';
						
						let innerGeorge = document.createElement('a');
						innerGeorge.href = 'images/nav/planet/george_real.png';
						innerGeorge.className = 'link';
						innerGeorge.innerHTML = 'e';
						innerTableSpan.append(innerTableLink, innerGeorge);
					} else {
						innerTableLink.innerHTML += innerTableInfo.name;
						innerTableSpan.append(innerTableLink);
					}
				} else {
					if (innerTableInfo.img != undefined) {
						let innerTableImg = document.createElement('img');
						innerTableImg.src = `images/nav/${table.type}/${innerTableInfo.img[0]}`;
						innerTableImg.height = innerTableInfo.img[1];
						innerTableSpan.append(innerTableImg);
					}
					innerTableSpan.innerHTML += innerTableInfo.name;
				}

				if (k != table.categories[i].info[j].info.length - 1) innerTableSpan.innerHTML += ' &bull; ';
				
				innerTableDiv.append(innerTableSpan);
			}
			
			innerTableData.append(innerTableDiv);
			
			innerTableRow.append(innerTableHeader, innerTableData);
			
			innerTableBody.append(innerTableRow);
		}
		
		innerTable.append(innerTableBody);
		
		tableRow.append(tableHeader, tableData);
		
		tableBody.append(tableRow);
	}
	
	if (endnavs[i].hideable) {
		let hidetext = document.createElement('a');
		hidetext.className = 'journal-navbox-hide-text';
		hidetext.innerHTML = '<u>Show</u>';

		hidetext.onclick = () => {
			if (tableBody.style.visibility == 'visible') {
				tableBody.style.visibility = 'collapse';
				hidetext.innerHTML = '<u>Show</u>';
			} else {
				tableBody.style.visibility = 'visible';
				hidetext.innerHTML = '<u>Hide</u>';
			}
		}

		caption.append(hidetext);
	}

	endTable.append(caption, tableBody);
	
	avThin.append(endTable);
}

correctLinks();

if (pageData.execute != undefined) pageData.execute();
