var submitInputListener = document.getElementById('submit_input');
	submitInputListener.addEventListener('click', createLink);


function createLink() {
	var linksQuantity = document.getElementById('quantity_input').value;
	var new_link = document.createElement('a');
		new_link.innerHTML = "новая ссылка";
		new_link.href = 'http://google.com';
	var new_link_div = document.createElement('div');
		new_link_div.id = container;
		new_link_div.appendChild(new_link);
	document.body.appendChild(new_link_div);

		

console.log(linksQuantity);	
}

