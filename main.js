var submitInputListener = document.getElementById('submit_input');
	submitInputListener.addEventListener('click', createMultiLink);


function createMultiLink() {
	var linksQuantity = document.getElementById('quantity_input').value;
	for (var i = 1; i <= linksQuantity; i++) {
		createLink();
	}

console.log(linksQuantity);	

}


function createLink(id) {
	var new_link = document.createElement('a');
		new_link.innerHTML = "новая ссылка";
		new_link.href = 'http://google.com';
	var new_link_div = document.createElement('div');
		new_link_div.id = container;
		new_link_div.appendChild(new_link);
	document.body.appendChild(new_link_div);
	
	var rem_link_button = document.createElement('button');
		rem_link_button.innerHTML = "удалить ссылку";
		new_link_div.appendChild(rem_link_button);

		rem_link_button.addEventListener('click', function removeLink () {
			new_link_div.removeChild(new_link);
			new_link_div.removeChild(rem_link_button);
		});
}


