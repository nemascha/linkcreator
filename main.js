var submitInputListener = document.getElementById('submit_input');
	submitInputListener.addEventListener('click', createNewLinks);


function createNewLinks() {
	var linksQuantity = document.getElementById('quantity_input').value;
	for (var i = 1; i <= linksQuantity; i++) {
		createLink(i);
	}

	console.log(document.getElementById('all_links_del_button'));

	if (! document.getElementById('all_links_del_button')) {
		var allLinksDelButton = document.createElement('button');
			allLinksDelButton.id = 'all_links_del_button';
			allLinksDelButton.innerHTML = "удалить все ссылки";
			allLinksDelButton.classList.add('del-button');
			document.body.appendChild(allLinksDelButton);
	
		
		allLinksDelButton.addEventListener('click', function () {
			var allLinks = document.querySelectorAll('.new-link');
			var allRemButtons = document.querySelectorAll('.del-link-button');
				for (var i = 0; i < allLinks.length; i++){
					allLinks[i].remove();
					allRemButtons[i].remove();
				}

			allLinksDelButton.remove();
				
		});
	}	

console.log(linksQuantity);	

}


function createLink(i) {
	var newLink = document.createElement('a');
		newLink.id = 'n_l' + i;
		newLink.classList.add('new-link');
		newLink.innerHTML = 'новая ссылка' + ' ' + i;	
		newLink.href = 'http://google.com';
	
	var newLinkContainer = document.querySelector('#container');
		newLinkContainer.appendChild(newLink);
		document.body.appendChild(newLinkContainer);

	var icon = document.createElement('i');
		icon.classList.add('fa', 'fa-trash-o');

	var allLinksDelButton = document.createElement('button');
		allLinksDelButton.innerHTML = "удалить все ссылки";
		allLinksDelButton.classList.add('del-button');

	var remLinkButton = document.createElement('button');
		remLinkButton.id = 'rem_button';
		remLinkButton.classList.add('del-link-button');
		remLinkButton.setAttribute('title', 'удалить ссылку' + ' ' + i);
		remLinkButton.innerHTML = " ";
		remLinkButton.appendChild(icon);
		newLinkContainer.appendChild(remLinkButton);

		remLinkButton.addEventListener('click', function removeLink () {
			newLink.remove();
			remLinkButton.remove();
		});

}
