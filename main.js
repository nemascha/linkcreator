var submitInputListener = document.getElementById('submit-input');
	submitInputListener.addEventListener('click', createNewLinks);


	var allLinksRemButton = document.createElement('button');
		allLinksRemButton.id = 'all-links-rem-btn';
		allLinksRemButton.classList.add('all-links-rem-button');
		allLinksRemButton.innerHTML = 'удалить все ссылки';
		document.body.appendChild(allLinksRemButton);
		allLinksRemButton.style.display = 'none';
		
		allLinksRemButton.addEventListener('click', function () {
			if (confirm('Вы действительно хотите удалить все ссылки?')) {
				var allLinksContainer = document.querySelector('#general-container');
				allLinksContainer.innerHTML = '';
			} 	
		});

	
function createNewLinks() {
	
	var linksQuantity = document.getElementById('links-quantity').value;
	for (var i = 1; i <= linksQuantity; i++) {
		createLink(i);
	}
	
	allLinksRemButton.style.display = 'block';	
	
console.log(linksQuantity);

}	


function createLink(i) {
	var newLink = document.createElement('a');
		newLink.id = 'link' + gen.next().value;
		newLink.classList.add('new-link');
		newLink.innerHTML = 'новая ссылка' + ' ' + gen.next().value;	
		newLink.href = 'http://google.com';

	var generalContainer = document.querySelector('#general-container');

	var newLinkContainer = document.createElement('div');
		newLinkContainer.id = 'container';
		newLinkContainer.classList.add('new-link-container');
		
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
		});
}


document.addEventListener('DOMContentLoaded', function () {
	container = document.querySelector('#container');
	button = document.querySelector('#all-links-rem-btn');
});

function* generator() {
	var ident = 1;
	while(true){
		yield ident++;
	}
}

var gen = generator();

