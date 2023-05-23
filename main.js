window.onscroll = function() {myFunction()};

workingHostTemp = "hospital is working "

// Get the header
var header = document.getElementById("headermain");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


// connect the mapbox throug mapbox  and show the map with defined style in the html page 
const apiKey = 'pk.eyJ1IjoiYWhtZWQtaXNhbSIsImEiOiJjbGhtOXc2a3MwdjZkM2xvZDkwa3dzYW9mIn0.7BHKfPZNhk_qYJ7bg57BPQ';

const map = L.map('map').setView([15.609705, 32.530528], 13);


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 20,
    id: 'ahmed-isam/clhos6n5v01ml01qt6cqgcmnr',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
}).addTo(map);

// hospital section 

// hospital locations

var hosLocations = [
  ["Royal Scare", 15.598876,32.570644],
  ["Haj Alsafi", 15.650982,32.531898],
  ["Khartoum Hospital", 15.597838243365723, 32.53498665644436],
  ["East Nile hospital", 15.598180, 32.604627],
  ["Yastbshroon", 15.575573,32.55818],
  ["Bashair Hospitals ", 15.49018,32.55237],
  ["bahri teaching hospital", 15.625413,32.52959],
  ["Jawda Hospital ", 15.576127,32.534306],
  ["Albarha hospital", 15.673365, 32.544333],
  ["Fedail Hospital", 15.599371, 32.532373],
  ["Alnau Hospitals", 15.688268, 32.491883],
  ["Yastbshroon", 15.580329, 32.548122],
  ["Yastbshroon", 15.575573,32.55818],
  ["Yastbshroon", 15.575573,32.55818],

];



var hosIcon  = L.icon({
  iconUrl: '/hospital.png',
  shadowUrl: '/marker-shadow.png',

  iconSize:     [30, 30], // size of the icon
  shadowSize:   [30, 30], // size of the shadow
  iconAnchor:   [12, 55], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

function reply_click(hos)
{
    for (var i = 0; i < hosLocations.length; i++) {
    marker = new L.marker([hosLocations[i][1],hosLocations[i][2]] ,{icon: hosIcon})
      .bindPopup(hosLocations[i][0])
      .addTo(map);}
  

   //hosmarker.bindPopup('<h1> مستشفي حاج الصافي</h1>');
   //hosmarker.bindPopup(workingHostTemp);
   

}










