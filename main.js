var submitInputListener = document.getElementById('submit-input');
	submitInputListener.addEventListener('click', createNewLinks);

document.addEventListener('DOMContentLoaded', function () {
			
	allLinksRemButton = document.querySelector('#all-links-rem-btn');
	allLinksRemButton.style.display = 'none';
	allLinksRemButton.addEventListener('click', function () {
			if (confirm('Вы действительно хотите удалить все ссылки?')) {
				var allLinksContainer = document.querySelector('#general-container');
				allLinksContainer.innerHTML = '';
			} 	
		});
});
	
function createNewLinks() {
	
	var linksQuantity = document.getElementById('links-quantity').value;
	for (var i = 1; i <= linksQuantity; i++) {
		createLink(i);
	}
	
	allLinksRemButton.style.display = 'block';	
	
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
	
	var generalContainer = document.querySelector('#general-container');	
	
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
		});

}

