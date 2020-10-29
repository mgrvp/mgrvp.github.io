function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: -7.874608105470263, lng: 112.00204051653574};
    // -7.874608105470263, 112.00204051653574

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