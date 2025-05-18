let map = L.map('mapA').setView([51.230430, 4.419496], 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 16,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let circle = L.circle([51.230430, 4.419496], {
    color: '#060826',
    weight: '1',
    fillColor: '#060826',
    fillOpacity: 0.4,
    radius: 500
}).addTo(map);