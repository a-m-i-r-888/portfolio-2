'use strict';

const map = L.map("map").setView([35.6892, 51.3890], 15);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
}).addTo(map);

L.marker([35.6892, 51.3890]).addTo(map);