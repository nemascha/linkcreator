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
			
		});
		

console.log(links_quantity);	




}


function createLink(i) {
	var new_link = document.createElement('a');
		new_link.classList.add('new-link');
		new_link.innerHTML = 'новая ссылка' + ' ' + i;	
		new_link.href = 'http://google.com';
	
	var new_link_div = document.createElement('div');
		new_link_div.id = container;
		new_link_div.classList.add('links-container');
		new_link_div.appendChild(new_link);
		general_div.appendChild(new_link_div);

	var rem_link_button = document.createElement('button');
		rem_link_button.innerHTML = "удалить ссылку";
		new_link_div.appendChild(rem_link_button);

		rem_link_button.addEventListener('click', function removeLink () {
			new_link_div.removeChild(new_link);
			new_link_div.removeChild(rem_link_button);
		});

}
