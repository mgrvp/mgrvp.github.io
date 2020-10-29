function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: -7.971364, lng: 112.614362};

    var map = new google.maps.Map(document.getElementById('myMap'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'South Jakarta, INA' // Title Location
    });
}