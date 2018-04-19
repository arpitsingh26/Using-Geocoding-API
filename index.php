<html>
	<head>
		<title>Geocoding Assignment</title>
	</head>
	<body>
		<div>
			<h>Enter address: </h>
			<form id="input_form">
				<input type="text" id="input_address">
				<br><br>
				<button type="submit">Submit</button>
			</form>
			<div id="address"></div>
			<div id="latitude"></div>
			<div id="longitude"></div>
		</div>
		<script src="js/axios_script.js"></script>
		<script src="js/geocoding_script.js"></script>
	</body>
</html>
