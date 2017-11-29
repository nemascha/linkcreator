var submit_input_listener = document.getElementById('submit_input');
	submit_input_listener.addEventListener('click', createNewLinks);

var general_div = document.getElementById('general_container');
	document.body.appendChild(general_div);

function createNewLinks() {
	var links_quantity = document.getElementById('quantity_input').value;
	for (var i = 1; i <= links_quantity; i++) {
		createLink(i);
	}

	var div_del_button = document.createElement('button');
		div_del_button.innerHTML = "удалить все ссылки";
		div_del_button.classList.add('del-button');
		document.body.appendChild(div_del_button);
		
		div_del_button.addEventListener('click', function () {
			general_div.remove();
			div_del_button.remove();
		});
		

console.log(links_quantity);	

}


function createLink(i) {
	var new_link = document.createElement('a');
		new_link.id = 'n_l';
		new_link.classList.add('new-link');
		new_link.innerHTML = 'новая ссылка' + ' ' + i;	
		new_link.href = 'http://google.com';
	
	var new_link_div = document.createElement('div');
		new_link_div.id = container;
		new_link_div.classList.add('links-container');
		new_link_div.appendChild(new_link);
		general_div.appendChild(new_link_div);

	var icon = document.createElement('i');
		icon.classList.add('fa', 'fa-trash-o');

	var rem_link_button = document.createElement('button');
		rem_link_button.id = 'rem_button';
		rem_link_button.classList.add('del-link-button');
		rem_link_button.innerHTML = " ";
		rem_link_button.appendChild(icon);
		new_link_div.appendChild(rem_link_button);

		rem_link_button.addEventListener('click', function removeLink () {
			new_link.remove();
			rem_link_button.remove();
		});

}
