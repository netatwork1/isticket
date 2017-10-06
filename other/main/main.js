function exportTableToCSV($table, filename) {
    var $headers = $table.find('tr:has(th)')
        ,$rows = $table.find('tr:has(td)')

        // Temporary delimiter characters unlikely to be typed by keyboard
        // This is to avoid accidentally splitting the actual contents
        ,tmpColDelim = String.fromCharCode(11) // vertical tab character
        ,tmpRowDelim = String.fromCharCode(0) // null character

        // actual delimiter characters for CSV format
        ,colDelim = '","'
        ,rowDelim = '"\r\n"';

        // Grab text from table into CSV formatted string
        var csv = '"';
        csv += formatRows($headers.map(grabRow));
        csv += rowDelim;
        csv += formatRows($rows.map(grabRow)) + '"';

        // Data URI
        var csvData = 'data:application/csv;charset=utf-8,' + encodeURIComponent(csv);

    $(this)
        .attr({
        'download': filename
            ,'href': csvData
            //,'target' : '_blank' //if you want it to open in a new window
    });

    //------------------------------------------------------------
    // Helper Functions 
    //------------------------------------------------------------
    // Format the output so it has the appropriate delimiters
    function formatRows(rows){
        return rows.get().join(tmpRowDelim)
            .split(tmpRowDelim).join(rowDelim)
            .split(tmpColDelim).join(colDelim);
    }
    // Grab and format a row from the table
    function grabRow(i,row){
         
        var $row = $(row);
        //for some reason $cols = $row.find('td') || $row.find('th') won't work...
        var $cols = $row.find('td'); 
        if(!$cols.length) $cols = $row.find('th');  

        return $cols.map(grabCol)
                    .get().join(tmpColDelim);
    }
    // Grab and format a column from the table 
    function grabCol(j,col){
        var $col = $(col),
            $text = $col.text();

        return $text.replace('"', '""'); // escape double quotes

    }
}




$("#export").click(function (event) {
  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();

    var outputFile =  'Priority Tickets Exported on ' + month + '/' + day + '/' + year;
    outputFile = outputFile.replace('.csv','') + '.csv'
    exportTableToCSV.apply(this, [$('#contentData > table'), outputFile]);
    
});

function showLoading() {
    $('.opactiyBackground').css('display','block');
    $('.loadingScreen').css('display','block');
    $('body').css('overflow','hidden');
}
function hideLoading() {
    $('.opactiyBackground').css('display','none');
    $('.loadingScreen').css('display','none');
    $('body').css('overflow','auto');
}


function showMMenu() {
    $('#mobileMenuSide').css('left','0');
    $('.opactiyBackground2').css('display','block');
    $('#showMFilterSide').css('left','-300px');
}

$('.opactiyBackground2').click(function(){
    this.style.display = "none";
    $('#mobileMenuSide').css('left','-300px');
    $('#showMFilterSide').css('left','-300px');
});

$('#header').append('<div class="mainHeader">'+
'    <ul>'+
'        <li style="padding: 14px;padding-right: 5px;">'+
'            <a href="index.html">'+
'                <img class="logo" src="images/logo.png" alt="Logo">'+
'            </a>'+
'        </li>'+
'        <li class="headerLink toRight">'+
'            <a href="createticket.html" class=" createATicket">'+
'                Create a Ticket'+
'            </a>'+
'        </li>'+
'        <li class="headerLink toRight">'+
'            <a href="reports.html" class="headerLink ">'+
'                Reports'+
'            </a>'+
'        </li>'+
'        <li class="headerLink toRight">'+
'            <a href="tickets.html?status=open" class="headerLink ">'+
'                Open Tickets'+
'            </a>'+
'        </li>'+
'        <li class="headerLink toRight">'+
'            <a href="tickets.html?status=closed" class="headerLink ">'+
'                Closed Tickets'+
'            </a>'+
'        </li>'+
'        <li class="headerLink toRight">'+
'            <a href="tickets.html?status=open&priority=high" class="headerLink ">'+
'                Highest Priority Tickets'+
'            </a>'+
'        </li>'+
'    </ul>'+
'</div>'+
'<div class="mainHeaderm">'+
'    <ul>'+
'        <li class="headerLink " style="padding: 0px;margin-top: 6px;float: left;">'+
'            <a onclick="showMMenu()" class="headerLink" style="cursor: pointer;">'+
'                <img src="images/icons/menu.png" style="width:20px;">'+
'            </a>'+
'        </li>'+
'        <li style="padding: 14px;padding-right: 5px;">'+
'            <a href="index.html">'+
'                <img class="logo" src="images/logo.png" alt="Logo">'+
'            </a>'+
'        </li>'+
'        <li class="headerLink toRight">'+
'            <a href="createticket.html" class=" createATicket">'+
'                Create a Ticket'+
'            </a>'+
'        </li>'+
'    </ul>'+
'</div>'+
'<div id="mobileMenuSide">'+
'    <ul>'+
'        <a href="tickets.html"><li>All Tickets</li></a>'+
'        <a href="tickets.html?status=open"><li>Open Tickets</li></a>'+
'        <a href="tickets.html?status=closed"><li>Closed Tickets</li></a>'+
'        <a href="tickets.html?status=open&priority=high"><li>Highest Priority Tickets</li></a>'+
'        <a href="reports.html"><li>Reports</li></a>'+
'    </ul>'+
'</div>');


function showMFilter() {
    $('#showMFilterSide').css('left','0');
    $('.opactiyBackground2').css('display','block');
    $('#mobileMenuSide').css('left','-300px');
}