

 var map = L.map('mapID').setView([49.267828, -123.1939443], 10);
			L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', 
					{
    					maxZoom: 19,
    					attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
						}).addTo(map); 
			L.marker([49.262315, -123.245354]).addTo(map)
    					.bindPopup('UBC')
    					.openPopup();
			
			