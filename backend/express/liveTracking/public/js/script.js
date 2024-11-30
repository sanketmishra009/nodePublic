const socket = io();
console.log("script working.");
//check if the browser supports geolocation.
// set options for high accuracy, a 5-sec setTimeout, no caching

// use watchPosition to track users location continuesly

// Emit the coordinates via socket with 'send-location', log any errors to console.

if (navigator.geolocation) {
  navigator.geolocation.watchPosition((position) => {
    const { latitude, longitude } = position.coords;
    socket.emit(
      "send-location",
      {
        latitude,
        longitude,
      },
      (err) => {
        console.error(err);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  });
}

const map = L.map("map").setView([0, 0], 10);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}{r}.png", {
  attribution: "open Street Map",
}).addTo(map);

const markers = {};
ids = [];

socket.on("received-location", (data) => {
  //   console.log("received-location from server: ", data);
  const { id, latitude, longitude } = data;
  if (!ids.includes(id)) ids.push(id);
  map.setView([latitude, longitude], 15);
  console.log("ids: ", ids);
  if (markers[id]) {
    markers[id].setLatLng([latitude, longitude]);
  } else {
    console.log(markers);
    markers[id] = L.marker([latitude, longitude]).addTo(map);
  }
});

socket.on("disconnect", () => {
  if (markers[id]) {
    map.removeLayer(markers[id]);
    delete markers[id];
  }
});
