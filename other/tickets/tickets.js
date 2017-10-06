$('input[name="datefilter"]').daterangepicker({
     "ranges": {
        "Today": [
            new Date(),
            new Date()
        ]
            },
    "autoApply": true,
    "alwaysShowCalendars": true,
    "startDate": new Date()-30,
    "endDate": new Date(),
    "maxDate":new Date(),
    "opens": "left"
}, function(start, end, label) {

    var startvalue = start.format('YYYY-MM-DD');
    var endValue = end.format('YYYY-MM-DD');

    updateURLParameter(location.href,'date',startvalue + '%20' + endValue);

});
$('table').paginate({
    'elemsPerPage': 20,
        'maxButtons': 10
});

var date = getQueryVariable("date");
var productname = getQueryVariable("productname");
var priority = getQueryVariable("priority");
var status12 = getQueryVariable("status");



if (date != false && date != 'today') {
    var startDate = new Date(date.split('%20')[0]);
    $('#filterDateTicket').data('daterangepicker').setStartDate(startDate.getMonth()+1 + '/' + parseInt(startDate.getDate() + 1)  + '/' + startDate.getFullYear());
    $('#filterDateTicketm').data('daterangepicker').setStartDate(startDate.getMonth()+1 + '/' + parseInt(startDate.getDate() + 1)  + '/' + startDate.getFullYear());
    var endDate = new Date(date.split('%20')[1]);
    $('#filterDateTicket').data('daterangepicker').setEndDate(endDate.getMonth()+1 + '/' + parseInt(endDate.getDate() + 1) + '/' + endDate.getFullYear());
    $('#filterDateTicketm').data('daterangepicker').setEndDate(endDate.getMonth()+1 + '/' + parseInt(endDate.getDate() + 1) + '/' + endDate.getFullYear());
}

if (productname != false) {
    $('#productNameFilter').val(productname);
    $('#productNameFilterm').val(productname);
} else {
    $('#productNameFilter').val('all');
    $('#productNameFilterm').val('all');
}
if (priority != false) {
    $('#priorityLevelFilter').val(priority);
    $('#priorityLevelFilterm').val(priority);
} else {
    $('#priorityLevelFilter').val("all");
    $('#priorityLevelFilterm').val("all");
}



if (status12 == false) {
    $('#productStatusFilter').val("all");
    $('#productStatusFilterm').val("all");
} else {
    $('#productStatusFilter').val(status12);
    $('#productStatusFilterm').val(status12);
}











$(".ftable").tablesorter({ 
    headers: { 
        6: { 
            sorter: false 
        } 
    } 
}); 

$('.opactiyBackground').click(function(){
    this.style.display = "none";
    $('.ticketDetails').css('display','none');
});
function closeModal() {
    $('.opactiyBackground').css('display','none');    
    $('.ticketDetails').css('display','none');    
}


function showTicketModal(object) {
    //var smalldate = object.cells[0].innerHTML;
    var ticketid = object.cells[1].innerHTML;
    $('#ticketIdTicket').html(ticketid);

    var title = object.cells[2].innerHTML;
    $('#ticektTitle').html(title);

    var product = object.cells[3].innerHTML;
    $('#productNameTicket').html(product);

    var status = object.cells[4].innerHTML;
    if (status == 'Open') {
        $('#ticketStatus').css('color','black');
        $('#ticketStatus').html(status);
    } else if (status == 'In Progress') {
        $('#ticketStatus').css('color','green');
        $('#ticketStatus').html(status);        
    } else if (status == 'Closed') {
        $('#ticketStatus').css('color','red');
        $('#ticketStatus').html(status);
    }
    var priority = object.cells[5].innerText;
    if (priority == 'Low') {
        $('#ticketPriority').attr('class','tagsStatus primary');
        $('#ticketPriority').html(priority);
    } else if (priority == 'Medium') {
        $('#ticketPriority').attr('class','tagsStatus warning');
        $('#ticketPriority').html(priority);        
    } else if (priority == 'High') {
        $('#ticketPriority').attr('class','tagsStatus error');
        $('#ticketPriority').html(priority);
    }

    var description = object.cells[7].innerHTML;
    $('#descriptionField').html(description);

    var engagementName = object.cells[8].innerHTML;
    $('#engagmenetNameTicket').html(engagementName);


    var createdOnFull = object.cells[9].innerHTML;
    var dateFormatCreated = new Date(createdOnFull);
    var monthsArray = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var month = monthsArray[dateFormatCreated.getMonth()];
    var day = dateFormatCreated.getDate();
    var year = dateFormatCreated.getFullYear();
    var timeCreated = createdOnFull.split(' ')[1].split(':')[0] + ':' + createdOnFull.split(' ')[1].split(':')[1] + ' ' + createdOnFull.split(' ')[2];
    $('#createdOnTicket').html(month + ' ' + day + ', ' + year + ' at ' + timeCreated);

    var requestIDGuid = object.cells[10].innerHTML;
    $('#requestIDGuid').html(requestIDGuid);




    $('.opactiyBackground').css('display','block');    
    $('.ticketDetails').css('display','block'); 
}

$('.searchFilterInput').keyup(function() {
  var rBoxes = document.getElementsByClassName("ticketRowTR");
  for(var i = 0; i < rBoxes.length; i++){
    var rbox = rBoxes[i];
    var searchValue = this.value;

    if(rbox.innerHTML.toUpperCase().indexOf(searchValue) > -1 && rbox.className != "ticketRowTR noticketsFound"){
        
        rbox.className = 'ticketRowTR activeTickets';
    } else if (rbox.className != "ticketRowTR noticketsFound") {
        if (rbox.innerHTML.toLowerCase().indexOf(searchValue) > -1) {
        rbox.className = 'ticketRowTR activeTickets';
        } else {
            rbox.className = 'ticketRowTR hidden';
        }
    }
  }
    if ($('.ticketRowTR.activeTickets').length != 0) {
        $('#noticketsFound').css('display','none');
    } else {
        $('#noticketsFound').css('display','table-row');
    }
});

$('#priorityLevelFilter').change(function(){
   updateURLParameter(location.href,'priority',this.value)
});
$('#productStatusFilter').change(function(){
   updateURLParameter(location.href,'status',this.value)
});
$('#productNameFilter').change(function(){
   updateURLParameter(location.href,'productname',this.value)
});

$('#priorityLevelFilterm').change(function(){
   updateURLParameter(location.href,'priority',this.value)
});
$('#productStatusFilterm').change(function(){
   updateURLParameter(location.href,'status',this.value)
});
$('#productNameFilterm').change(function(){
   updateURLParameter(location.href,'productname',this.value)
});

function updateURLParameter(url, param, paramVal){
    var newAdditionalURL = "";
    var tempArray = url.split("?");
    var baseURL = tempArray[0];
    var additionalURL = tempArray[1];
    var temp = "";
    if (additionalURL) {
        tempArray = additionalURL.split("&");
        for (var i=0; i<tempArray.length; i++){

            if(tempArray[i].split('=')[0] != param){
                newAdditionalURL += temp + tempArray[i];
                temp = "&";
            }
        }
    }
    var rows_txt = temp + "" + param + "=" + paramVal;
    location.href =  baseURL + "?" + newAdditionalURL + rows_txt;
}
function getQueryVariable(variable)
{
   var query = window.location.search.substring(1);
   var vars = query.split("&");
   for (var i=0;i<vars.length;i++) {
           var pair = vars[i].split("=");
           if(pair[0] == variable){return pair[1];}
   }
   return(false);
}


$('#allTicketSelected').change(function(){
    if (this.checked == true) {
        for (var i = 0; i < $('.ticketRowTR').length; i++) {
            $('.ticketRowTR')[i].cells[0];
            $('.ticketRowTR')[i].cells[0].childNodes[0].checked = true;
        }
    } else {
        for (var i = 0; i < $('.ticketRowTR').length; i++) {
            $('.ticketRowTR')[i].cells[0];
            $('.ticketRowTR')[i].cells[0].childNodes[0].checked = false;
        }
    }

});



