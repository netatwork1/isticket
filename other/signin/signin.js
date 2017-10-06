



function signinUser() {

	var email = document.getElementById('emailField').value;
	var password = document.getElementById('passwordField').value;

	if ((email == "") || (password == "")) {

		document.getElementById("errorMessage").innerHTML = "Email/Password are missing";

	} else {
			document.getElementById("errorMessage").innerHTML = "";
			


		}









	
}






function resetPassword() {

	var email = document.getElementById('resetemailField').value;

		if ((email == "")) {

			document.getElementById("reseterrorMessage").innerHTML = "Email is missing";

		} else {

		if (verifyEmailType(email) == false) {

			document.getElementById("reseterrorMessage").innerHTML = "Invalid Email Format";

		} else {

			document.getElementById("reseterrorMessage").className = "success";
			document.getElementById("reseterrorMessage").innerHTML = "We sent you an email with instructions";

		}


	}




}











function verifyEmailType(email) {

    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email)) {

    return false;

	} else {

		return true;
	}





}


function hidelogin() {
	var d = document.getElementById("loginScreen");
	var forgot = document.getElementById("forgotPassword");
		d.className = "wrapper hidden";
		forgot.className = "wrapper";
}

function nevermind() {
	var d = document.getElementById("loginScreen");
	var forgot = document.getElementById("forgotPassword");

		d.className = "wrapper";
		forgot.className = "wrapper hidden";

}



function enterpressalert(e){
var code = (e.keyCode ? e.keyCode : e.which);
if(code == 13) { //Enter keycode
 signinUser();
}
}