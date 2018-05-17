console.log('Radi li?');


var mymap = L.map('mapid').setView([44.787197, 20.457273], 13);
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZG92bGExOTkyIiwiYSI6ImNqZnM0aG9nMzAwYWMycXA5OHlra2dnc2YifQ.0jZcVmYULoRh9DZewROQOA', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZG92bGExOTkyIiwiYSI6ImNqZnM0aG9nMzAwYWMycXA5OHlra2dnc2YifQ.0jZcVmYULoRh9DZewROQOA'
}).addTo(mymap);

function onMapClick(e){
    console.log("You clicked the map at " + e.latlng);
};

mymap.on('click', onMapClick);  //On click event, when someone click on map object, cb func will occur



var marker = L.marker([44.816459, 20.460835]).addTo(mymap);
var marker1 = L.marker([44.831891, 20.435944]).addTo(mymap)
var marker2 = L.marker([44.822882, 20.449848]).addTo(mymap)
var marker3 = L.marker([44.818986, 20.294838]).addTo(mymap)
var marker4 = L.marker([44.814906, 20.448732]).addTo(mymap)
var marker5 = L.marker([44.797246, 20.42573]).addTo(mymap)
var marker6 = L.marker([44.799846, 20.436177]).addTo(mymap)
var marker7 = L.marker([44.790364, 20.409937]).addTo(mymap)
var marker8 = L.marker([44.802545, 20.440793]).addTo(mymap)
var marker9 = L.marker([44.810918, 20.44767]).addTo(mymap)
var marker10 = L.marker([44.828376, 20.491916]).addTo(mymap)
var marker11 = L.marker([44.801346, 20.439154]).addTo(mymap)
var marker12 = L.marker([44.8083, 20.488526]).addTo(mymap)
var marker13 = L.marker([44.741856, 20.319353]).addTo(mymap)
var marker14 = L.marker([44.864379, 20.381114]).addTo(mymap)



/*var circle = L.circle([44.8160478,20.4594765,17.71], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.3,
    radius: 1000
}).addTo(mymap);*/




marker.bindPopup("<br><b><a href='https://en.wikipedia.org/wiki/Republic_Square_(Belgrade)' target='_blank'>Republic Square</a></b>")
marker1.bindPopup('<b><a href="https://en.wikipedia.org/wiki/Great_War_Island" target="_blank">Great War Island</a></b>')
marker2.bindPopup("<b><a href='https://en.wikipedia.org/wiki/Belgrade_Fortress' target='_blank'>Belgrade Fortress</a></b>")
marker3.bindPopup("<b><a href='https://en.wikipedia.org/wiki/Belgrade_Nikola_Tesla_Airport' target='_blank'>Belgrade Nikola Tesla Airport</a></b>")
marker4.bindPopup("<b><a href='https://en.wikipedia.org/wiki/Branko%27s_Bridge' target='_blank'>Branko's bridge</a></b>")
marker5.bindPopup("<b><a href='https://en.wikipedia.org/wiki/Ada_Bridge' target='_blank'>Ada Bridge</a></b>")
marker6.bindPopup("<b><a href='https://en.wikipedia.org/wiki/New_Railway_Bridge' target='_blank'>New Railway Bridge</a></b>")
marker7.bindPopup("<b><a href='https://en.wikipedia.org/wiki/Ada_Ciganlija' target='_blank'>Ada Ciganlija</a></b>")
marker8.bindPopup("<b><a href='https://en.wikipedia.org/wiki/Gazela_Bridge' target='_blank'>Gazela Bridge</a></b>")
marker9.bindPopup("<b><a href='https://en.wikipedia.org/wiki/Old_Sava_Bridge' target='_blank'>Old Sava Bridge</a></b>")
marker10.bindPopup("<b><a href='https://en.wikipedia.org/wiki/Pan%C4%8Devo_Bridge' target='_blank'>Pančevo Bridge</a></b>")
marker11.bindPopup("<b><a href='https://en.wikipedia.org/wiki/Old_Railway_Bridge' target='_blank'>Old Railway Bridge</a></b>")
marker12.bindPopup("<b><a href='https://en.wikipedia.org/wiki/Belgrade_New_Cemetery' target='_blank'>Belgrade New Cemetery</a></b>")
marker13.bindPopup("<b><a href='https://en.wikipedia.org/wiki/Ostru%C5%BEnica_Bridge' target='_blank'>Ostružnica Bridge</a></b>")
marker14.bindPopup("<b><a href='https://en.wikipedia.org/wiki/Pupin_Bridge' target='_blank'>Pupin Bridge</a></b>")

//circle.bindPopup("<b>City epicenter</b>");




console.log('sam kod njihov:', L); 
console.log('sta je marker:', marker);
console.log('mymap je:', mymap)

