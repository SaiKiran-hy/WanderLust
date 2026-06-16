console.log("MAP FILE LOADED");
console.log("L =", typeof L);
console.log("coordinates =", coordinates);

const map = L.map('map').setView(
    [coordinates[1], coordinates[0]],
    13
);

L.tileLayer(
  'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  {
    attribution:
      '&copy; OpenStreetMap contributors &copy; CARTO',
    subdomains: 'abcd'
  }
).addTo(map);

const redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',

    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

L.marker(
    [coordinates[1], coordinates[0]],
    { icon: redIcon }
)
.addTo(map)
.bindPopup("<b>Exact Location</b>")
.openPopup();