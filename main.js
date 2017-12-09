var submitInputListener = document.getElementById('submit_input');
	submitInputListener.addEventListener('click', createNewLinks);


	var allLinksRemButton = document.createElement('button');
		allLinksRemButton.id = 'all_links_rem_button';
		allLinksRemButton.classList.add('all-links-rem-button');
		allLinksRemButton.innerHTML = 'удалить все ссылки';
		document.querySelector('#general_container').appendChild(allLinksRemButton);
		allLinksRemButton.style.display = 'none';
		
		allLinksRemButton.addEventListener('click', function () {
			if (confirm('Вы действительно хотите удалить все ссылки?')) {
				var allLinks = document.querySelectorAll('.new-link');
				var allRemLinkButtons = document.querySelectorAll('.rem-link-button');
					for (var i = 0; i < allLinks.length; i++){
						allLinks[i].remove();
						allRemLinkButtons[i].remove();
					}
			} 	
				
		});

	
function createNewLinks() {
	
	var linksQuantity = document.getElementById('links_quantity').value;
	for (var i = 1; i <= linksQuantity; i++) {
		createLink(i);
	}
	
	allLinksRemButton.style.display = 'block';	
	

console.log(linksQuantity);

}	


function createLink(i) {
	var newLink = document.createElement('a');
		newLink.id = 'n_l' + i;
		newLink.classList.add('new-link');
		newLink.innerHTML = 'новая ссылка' + ' ' + i;	
		newLink.href = 'http://google.com';
	
	var generalContainer = document.querySelector('#general_container');

	var newLinkContainer = document.createElement('div');
		newLinkContainer.id = 'container';
		newLinkContainer.classList.add('new-link-container');
		
	var icon = document.createElement('i');
		icon.classList.add('fa', 'fa-trash-o');

	var remLinkButton = document.createElement('button');
		remLinkButton.id = 'rem_link_button';
		remLinkButton.classList.add('rem-link-button');
		remLinkButton.setAttribute('title', 'удалить ссылку' + ' ' + i);
		remLinkButton.innerHTML = " ";
		
		document.body.appendChild(generalContainer);
		generalContainer.appendChild(newLinkContainer);
		newLinkContainer.appendChild(newLink);
		newLinkContainer.appendChild(remLinkButton);
		remLinkButton.appendChild(icon);

		remLinkButton.addEventListener('click', function removeLink () {
			generalContainer.removeChild(newLinkContainer);
		});

}