function getValues() {

	let userInput = document.getElementById('message').value;

	let reverseInput = reverseString(userInput);

	displayString(reverseInput);

}




function reverseString(message) {

	let reversedMessage = '';

	for (let index = message.length - 1; index >= 0; index = index - 1) {
		reversedMessage += message[index];
	}

	return reversedMessage;


}


function displayString(reversedMessage) {

	document.getElementById('msg').textContent = reversedMessage;
	document.getElementById('alert').classList.remove('d-none');


}



	// Swal.fire(
	// 	{
	// 		backdrop: false,
	// 		title: 'JS-Rewind',
	// 		text: msg
	// 	}
	// );
