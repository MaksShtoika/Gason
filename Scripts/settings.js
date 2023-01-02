
function initMap() {
    var map = new google.maps.Map(document.getElementById('theMap'), {
        zoom: 16,
        center: { lat: lat, lng: long }
    });

    var marker = new google.maps.Marker({
        map: map,
        position: { lat: lat, lng: long },
        title: 'gason.com.ua'
    });

    var geocoder = new google.maps.Geocoder();
    //var address = $('#address').val();
    //geocodeAddress(geocoder, map, address);

    map.addListener('click', function (e) {
        marker.setPosition(e.latLng);
        $('#MapLat').val(e.latLng.lat());
        $('#MapLong').val(e.latLng.lng());
    });

    $('#address').change(function() {
        geocodeAddress(geocoder, map, $(this).val());
    });


}

function geocodeAddress(geocoder, resultsMap, address) {
    geocoder.geocode({ 'address': address }, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            resultsMap.setCenter(results[0].geometry.location);
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}