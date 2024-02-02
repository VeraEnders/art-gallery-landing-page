// Map
var map = L.map('map', {
  center: [41.479736, -71.311124],
  zoom: 16,
  zoomControl: false,
  fadeAnimation: false
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
}).addTo(map);

// Add the grayscale layer
L.tileLayer.grayscale('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Add the marker
var myIcon = L.icon({
  iconUrl: './assets/icons/icon-location.svg',
  iconSize: [45, 55],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
  className: 'blinking'
});

var marker = L.marker([41.479736, -71.311124], {icon: myIcon}).addTo(map);
