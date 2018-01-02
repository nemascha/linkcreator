var submitInputListener, generalContainer, allLinksRemButton;

document.addEventListener('DOMContentLoaded', function () {
	submitInputListener = document.getElementById('submit-input');
	submitInputListener.addEventListener('click', createNewLinks);

	generalContainer = document.querySelector('#general-container');

	allLinksRemButton = document.querySelector('#all-links-rem-btn');
	allLinksRemButton.addEventListener('click', function () {
		if (confirm('Вы действительно хотите удалить все ссылки?')) {
			generalContainer.innerHTML = '';
		}	

		updateAllLinksRemoveButton();

	});

});

function updateAllLinksRemoveButton () {

	if (document.querySelector('.new-link')) {
		allLinksRemButton.classList.remove('hidden');
		allLinksRemButton.classList.add('all-links-rem-button');
	} else {
		allLinksRemButton.classList.remove('all-links-rem-button');
		allLinksRemButton.classList.add('hidden');
	}

}

function createNewLinks() {

	var linksQuantity = document.getElementById('links-quantity').value;
	for (var i = 1; i <= linksQuantity; i++) {
		createLink(i);
	}	

updateAllLinksRemoveButton();

console.log(linksQuantity);
	
}	


function* generator() {
	let ident = 1;
	while(true){
		yield ident++;
	}
}

var gen = generator();

function createLink(i) {
	let id = gen.next().value;
	
	var newLinkContainer = document.createElement('div');
		newLinkContainer.id = 'container';
		newLinkContainer.classList.add('new-link-container');
		
	var newLink = document.createElement('a');
		newLink.id = 'link' + '-' + id;
		newLink.classList.add('new-link');
		newLink.innerHTML = 'новая ссылка' + ' ' + id;	
		newLink.href = 'http://google.com';
	
	var icon = document.createElement('i');
		icon.classList.add('fa', 'fa-trash-o');

	var remLinkButton = document.createElement('button');
		remLinkButton.id = 'rem-link-btn';
		remLinkButton.classList.add('rem-link-button');
		remLinkButton.setAttribute('title', 'удалить ссылку');
		remLinkButton.innerHTML = " ";
		
		document.body.appendChild(generalContainer);
		generalContainer.appendChild(newLinkContainer);
		newLinkContainer.appendChild(newLink);
		newLinkContainer.appendChild(remLinkButton);
		remLinkButton.appendChild(icon);

		remLinkButton.addEventListener('click', function removeLink () {
			newLinkContainer.remove();
			
			return updateAllLinksRemoveButton();
		});

}

