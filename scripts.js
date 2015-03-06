var map = L.map('healthCenterMap').setView([40.714269, -74.005973], 13);

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	attribution : '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var nycCenters = healthCenterData.rows;

for (var i = 0; i < nycCenters.length; i++) {
	var individualHealthCenter = nycCenters[i]
	var marker = L.marker([individualHealthCenter.latitude, individualHealthCenter.longitude]).addTo(map);
	marker.bindPopup("<b>" + individualHealthCenter.FullAddress + "</b><br>" + individualHealthCenter.ProgramName);
} //end of for loop