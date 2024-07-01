var x = document.body;
x.addEventListener("mousemove", getLocation);
var latitude;
var longitude;

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position, latitude, longitude) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  console.log(latitude);
  console.log(longitude);
}
