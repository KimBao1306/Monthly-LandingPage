//make popup to show success form

window.addEventListener('click', submitValid);

function submitValid(e) {
	if (e.target.classList.contains('form-btn')) {
		//get all form-control in page
		const arrIpt = Array.from(document.querySelectorAll('.form-control'));
		//hide validate when focus in input
		arrIpt.forEach((ipt) =>
			ipt.addEventListener('focus', () => hideValidate(ipt))
		);
		//check success
		let check = true;
		//use for to check valid
		for (let i = 0, len = arrIpt.length; i < len; i++) {
			if (!checkValidate(arrIpt[i])) {
				showValidate(arrIpt[i]);
				check = false;
			}
		}

		if (check) {
			document.body.classList.add('show');
			setTimeout(() => document.body.classList.add('success-form'), 200);
			setTimeout(() => (window.location.href = 'index.html'), 1500);
		}
	}
}

function showValidate(ipt) {
	ipt.parentElement.classList.add('fail-valid');
}

function hideValidate(ipt) {
	ipt.parentElement.classList.remove('fail-valid');
}

function checkValidate(ipt) {
	const iptVl = ipt.value;
	if (ipt.getAttribute('name') === 'email') {
		return valid_email(iptVl);
	}
	if (ipt.getAttribute('name') === 'psw') {
		return valid_pass(iptVl);
	}
	if (
		ipt.getAttribute('name') === 'fname' ||
		ipt.getAttribute('name') === 'lname'
	) {
		return valid_text(iptVl);
	}
}

function valid_email(str) {
	return str.match(
		/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/
	)
		? true
		: false;
}

function valid_pass(str) {
	return str.match(/^[A-Za-z\d]{8,}$/) ? true : false;
}

function valid_text(str) {
	return str.match(/^\w+[^<>%$;]*$/) ? true : false;
}
