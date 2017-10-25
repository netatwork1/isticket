﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="createticket.aspx.cs" Inherits="tickets.aspx.createticket" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Create a Ticket | Net@Work</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Fardos Corporation">
    <link rel="shortcut icon" href="http://naw.netatwork.netdna-cdn.com/wp-content/themes/nitro/images/header.jpg" type="image/x-icon">   
	<link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="other/main/main.css">
	<link rel="stylesheet" href="other/createTicket/createTicket.css" />
</head>
<body>
    <form id="form1" runat="server">
        <div>
        </div>
    </form>
<div id="header"></div>

<div class="body-main">
	<div class="dashboardWrapper" style="padding-top: 50px;">
		<div class="form">
		  <div class="form-toggle"></div>
		  <div class="form-panel one">
		    <div class="form-header">
		      <h2 class="createTicketHeaderName">Create a New Ticket</h2>
		    </div>
		    <div class="form-content">
		        <div class="form-group">
		          <label for="username">Ticket Name</label><span class="requiredFieled">Required *</span>
		          <input id="ticketName" runat='server' type="text" class="ticketNameJS" />
		        </div>
		        <div class="form-group">
		          <label for="username">Ticket Description</label><span class="requiredFieled">Required *</span>
		          <textarea id="ticketDescription" runat="server" class="ticketDescriptionJS" rows="5"></textarea>
		        </div>
		        <div class="form-group">
		          <label for="password">Product Name</label><span class="requiredFieled">Required *</span>
		          <select id="productNameSelect" runat="server" class="productNameSelectJS">
		          	<option value="default">Choose a Product</option>
		          	<option>1</option>
		          	<option>2</option>
		          	<option>3</option>
		          	<option>4</option>
		          	<option>5</option>
		          </select>
		        </div>
		        <div class="form-group">
		          <label for="password">Product Priority</label><span class="requiredFieled">Required *</span>
		          <select id="productPriority" runat='server' class="productPriorityJS" >
		          	<option value="default">Choose the Priority Level</option>
		          	<option value="low">Low</option>
		          	<option value="medium">Medium</option>
		          	<option value="high">High</option>
		          </select>
		        </div>
		        <div class="form-group">
		          <label for="password">Attachments <span class="subtitleForm">Only PDF, PNG, JPEG, Powerpoint, Excel or Word</span></label>
		          <input type="file" name="" multiple="multiple">
		        </div>
		        <div class="form-group">
		          <button onclick="createNewTicket()" type="submit">Create</button>
		        </div>
		    </div>
		  </div>
		  <div class="form-panel two"></div>
		</div>
	</div>
</div>
<br />
<br />
<br />
<br />













<div class="opactiyBackground"></div>
<div class="opactiyBackground2"></div>
<div class="loadingScreen">
	<div class="loading-spinner"></div>
</div>






<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js"></script>
<script src="other/main/main.js"></script>
<script src="other/createTicket/createTicket.js"></script>
</body>
</html>
