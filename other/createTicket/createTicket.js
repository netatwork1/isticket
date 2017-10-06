function createNewTicket() {
var ticketNameJS = document.getElementsByClassName('ticketNameJS')[0].value;
var ticketDescriptionJS = document.getElementsByClassName('ticketDescriptionJS')[0].value;
var productNameSelectJS = document.getElementsByClassName('productNameSelectJS')[0].value;
var productPriorityJS = document.getElementsByClassName('productPriorityJS')[0].value;
if (ticketNameJS == "") {
	$('.ticketNameJS').css('background-color','#ffe5e5');
	$('.ticketDescriptionJS').css('background-color','#ffe5e5');
	$('.productNameSelectJS').css('background-color','#ffe5e5');
	$('.productPriorityJS').css('background-color','#ffe5e5');
} else if (ticketDescriptionJS == "") {
	$('.ticketNameJS').css('background-color','#f3f3f3');
	$('.ticketDescriptionJS').css('background-color','#ffe5e5');
	$('.productNameSelectJS').css('background-color','#ffe5e5');
	$('.productPriorityJS').css('background-color','#ffe5e5');
} else if (productNameSelectJS == "default") {
	$('.ticketNameJS').css('background-color','#f3f3f3');
	$('.ticketDescriptionJS').css('background-color','#f3f3f3');
	$('.productNameSelectJS').css('background-color','#ffe5e5');
	$('.productPriorityJS').css('background-color','#ffe5e5');
} else if (productPriorityJS == "default") {
	$('.ticketNameJS').css('background-color','#f3f3f3');
	$('.ticketDescriptionJS').css('background-color','#f3f3f3');
	$('.productNameSelectJS').css('background-color','#f3f3f3');
	$('.productPriorityJS').css('background-color','#ffe5e5');
} else {
	$('.ticketNameJS').css('background-color','#f3f3f3');
	$('.ticketDescriptionJS').css('background-color','#f3f3f3');
	$('.productNameSelectJS').css('background-color','#f3f3f3');
	$('.productPriorityJS').css('background-color','#f3f3f3');
	showLoading();
}
}