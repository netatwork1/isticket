<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="Cloud_Desk.index" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Dashboard | Net@Work</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Fardos Corporation">
    <link rel="shortcut icon" href="http://naw.netatwork.netdna-cdn.com/wp-content/themes/nitro/images/header.jpg" type="image/x-icon">   
	<link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="other/main/main.css">
	<link rel="stylesheet" href="other/index/index.css">
</head>
<body style="background-color: #fdfdfd">
    <form id="form1" runat="server">
        <div>
        </div>
    </form>

    <div id="header"></div>


<div class="body-main">
	<div class="dashboardWrapper">
		<p class="mainTitle">Overview</p>
		<a href="tickets.html">
		<div class="dboxC">
			<div class="ibox" style="background-color: white;color: black;">
				<img src="images/icons/allTickets.png" />
				<p class="title">Total Tickets</p>
				<p class="description">10</p>
			</div>
		</div>
		</a>
		<a href="tickets.html?status=open">
		<div class="dboxC">
			<div class="ibox" style="background-color:#00264c;color: white;">
				<img src="images/icons/openTickets.png" />
				<p class="title">Open Tickets</p>
				<p class="description">3</p>
			</div>
		</div></a>
		<a href="tickets.html?status=open&priority=high">
		<div class="dboxC">
			<div class="ibox" style="background-color: rgba(241, 60, 110, 0.8);color: white;">
				<img src="images/icons/highPriority.png" />
				<p class="title">High Priority Tickets</p>
				<p class="description">5</p>
			</div>
		</div></a>
		<a href="tickets.html?status=closed">
		<div class="dboxC">
			<div class="ibox" style="background-color: rgba(97, 92, 168, 0.8);color: white;">
				<img src="images/icons/closedTickets.png" />
				<p class="title">Closed Tickets</p>
				<p class="description">6</p>
			</div>
		</div></a>
		<br style="clear: both" />
		<p class="mainTitle">Priority Tickets <span class="pull-right exportTableButton"><a href="#" id="export"><img src="images/icons/excelIcon.png" /></a></span></p>
		<div class="secondPartWrapper">
			<div class="ibox" style="background-color: white;padding: 0;">
				<div class="table-content" id="contentData">
			        <table>
			            <thead>
			                <tr>
			                    <th style="padding-left: 15px;" scope="col" id="col1">
			                        Type of Ticket
			                    </th>

			                    <th style="padding-left: 15px;width: 200px;" scope="col" id="col5">
			                        Low Tickets
			                    </th>

			                    <th style="padding-left: 15px;width: 200px;" scope="col" id="col5">
			                        Medium Tickets
			                    </th>
			                    
			                    <th style="padding-left: 15px;width: 200px;" scope="col" id="col5">
			                        High Tickets
			                    </th>

			                    <th style="padding-right: 15px;text-align: right; width: 150px;" scope="col" id="col5">
			                        Grand Total
			                    </th>
			                </tr>
			            </thead>
			            <tbody id="clientBody">
			            	<tr>
			            		<td class="sideBarCB" style="color: black;font-weight: bold;">ERP</td>
			            		<td>23</td>
			            		<td>23</td>
			            		<td>23</td>
			            		<td style="text-align: right;padding-right: 10px;">23</td>
			            	</tr>
			            	<tr>
			            		<td class="sideBarCB" style="color: black;font-weight: bold;">IT Infrastructure</td>
			            		<td>3</td>
			            		<td>5</td>
			            		<td>1</td>
			            		<td style="text-align: right;padding-right: 10px;">23</td>
			            	</tr>
			            	<tr>
			            		<td class="sideBarCB" style="color: black;font-weight: bold;">POS</td>
			            		<td>23</td>
			            		<td>23</td>
			            		<td>23</td>
			            		<td style="text-align: right;padding-right: 10px;">23</td>
			            	</tr>
			            	<tr>
			            		<td style="color: black;font-weight: bold;">Reports</td>
			            		<td>23</td>
			            		<td>23</td>
			            		<td>23</td>
			            		<td style="text-align: right;padding-right: 10px;">23</td>
			            	</tr>
			            	<tr>
			            		<td style="color: black;font-weight: bold;">Sisense</td>
			            		<td>23</td>
			            		<td>23</td>
			            		<td>23</td>
			            		<td style="text-align: right;padding-right: 10px;">23</td>
			            	</tr>
			            	<tr>
			            		<td style="color: black;font-weight: bold;">Telephony</td>
			            		<td>23</td>
			            		<td>23</td>
			            		<td>23</td>
			            		<td style="text-align: right;padding-right: 10px;">23</td>
			            	</tr>
			            </tbody>
			            <tbody id="ptFooter">
			            	<tr style="background-color: #cce5ff;">
			            		<td style="color: black;font-weight: bold;">Grand Total</td>
			            		<td>23</td>
			            		<td>23</td>
			            		<td>23</td>
			            		<td style="text-align: right;padding-right: 10px;">23</td>
			            	</tr>		            	
			            </tbody>
			        </table>
			    </div>
			</div>
		</div>

		<br />
		<br />
		<br />


	</div>




































</div>
<div class="opactiyBackground2"></div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js"></script>
<script src="other/main/main.js"></script>
</body>
</html>
