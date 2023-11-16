const submit = document.querySelector(".control__submit");

var textControls = document.querySelectorAll(".control__text");

submit.addEventListener('click',(event)=>{
	event.preventDefault();

	textControls = document.querySelectorAll(".control__text");

	textControls.forEach(control=>{
		let parent = control.parentElement;
		if(!check(control)) {
			parent.classList.add('fail');
		}
		else {
			if(parent.classList.contains('fail'))
				parent.classList.remove('fail');
		}
	});
});

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function check(control) {
	if(control.value != ""){
		if(control.type=="email")
		{
			return validateEmail(control.value);
		}
		else {
			return true;
		}
	}
	

	return false;
}