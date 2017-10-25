<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="reports.aspx.cs" Inherits="Cloud_Desk.reports" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Reports | Net@Work</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Fardos Corporation">
    <link rel="shortcut icon" href="http://naw.netatwork.netdna-cdn.com/wp-content/themes/nitro/images/header.jpg" type="image/x-icon">
	<link rel="stylesheet" href="other/main/main.css">
	<link rel="stylesheet" href="other/assets/jquery.paginate.css">
	<link rel="stylesheet" href="other/tickets/tickets.css" />
</head>
<body style="background-color: #fff;">
    <form id="form1" runat="server">
        <div>
        </div>
    </form>

    <div id="header"></div>
<div class="opactiyBackground2"></div>

<div class="subHeader">
	<ul>
		<li class="headerLink toRight" style="margin-top: -6px;">
			<a class="headerLink">
				<img src="images/icons/excelWhiteIcon.png">
			</a>
		</li>
		<li class="headerLink toRight metricsFilter" style="margin-top: -3px;">
			<input id="filterDateTicket" type="text" name="datefilter" value="12/20/2017 - 12/20/2017">
		</li>
		<li class="headerLink toRight" style="margin-top: -3px;">
			<select id="priorityLevelFilter" style="width: 170px;">
				<option value="all">Priority Level</option>
				<option value="low">Low</option>
				<option value="medium">Medium</option>
				<option value="high">High</option>
			</select>
		</li>
		<li class="headerLink toRight" style="margin-top: -3px;">
			<select id="productNameFilter" style="width: 170px;">
				<option value="all">Product Name</option>
				<option value="1">1</option>
				<option value="1">1</option>
				<option value="1">1</option>
				<option value="1">1</option>
				<option value="1">1</option>
				<option value="1">1</option>
				<option value="1">1</option>

			</select>
		</li>
		<li class="headerLink toRight" style="margin-top: -3px;">
			<select id="productStatusFilter" style="width: 120px;">
				<option value="all">Status</option>
				<option value="open">Open</option>
				<option value="inprogress">In Progress</option>
				<option value="closed">Closed</option>
			</select>
		</li>
	</ul>
</div>

<div class="body-main"  style="background-color: #fff;">
	<div class="dashboardWrapper" style="padding-top: 50px;">
		<div class="tableInfo" style="float: left;">
			<input id="fileSearchField" class="searchFilterInput" placeholder="Search by ID, Product Name or Date" type="text" />
		</div>
		<table class="ftable tablesorter">
		<thead>
		  <tr>
		    <th style="width: 20px;"><input type="checkbox"></th>
		    <th style="width: 100px;">Date</th>
		    <th style="width: 100px;">ID</th>
		    <th>Title</th>
		    <th style="width: 150px;">Product</th>
		    <th style="width: 100px;">Status</th>
		    <th style="width:100px;">Priority</th>
		    <th style="width: 20px;text-align: right;">Actions</th>
		  </tr>
		</thead>
		<tbody>
		  <tr onclick="showTicketModal(this)" class="ticketRowTR activetickets">
		    <td><input type="checkbox"></td>
		    <td>09/28/2017</td>
		    <td>17-011283</td>
		    <td>Something Here</td>
		    <td style="width: 150px;padding-right: 10px;">Sage 100 Support</td>
		    <td style="width: 100px;padding-right: 10px;">Closed</td>
		    <td style="width: 70px;padding-right: 10px;"><span class="tagsStatus primary">High</span></td>
		    <td style="width: 20px;padding-right: 10px;margin-top: 8px;">
		    	<a><i class="fa fa-share-alt"></i></a>
		    </td>
		    <td class="hidden">This is my description hear</td>
		    <td class="hidden">This is my Engagmenet hear</td>
		    <td class="hidden">9/28/2017 3:07:12 PM</td>
		    <td class="hidden">123456789157644</td>
		   </tr>
		</tbody>
		</table>
	</div>
</div>
<br />
<br />
<br />
<br />













<div class="opactiyBackground" style=""></div>
<div class="loadingScreen">
	<div class="loading-spinner"></div>
</div>






































<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js"></script>
<script src="other/assets/daterangepicker/moment.js"></script>
<script src="other/assets/daterangepicker/daterangepicker.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.tablesorter/2.28.14/js/jquery.tablesorter.min.js"></script>
<script src="other/main/main.js"></script>
<script src="other/tickets/tickets.js"></script>
</body>
</html>
