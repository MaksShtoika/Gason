
$("#calc-show").click(function () {
    $("#calculate").removeClass("hidden");
    $("#calc-exit").removeClass("hidden");
    $("#calc-show").addClass("hidden");
    $("#slogo-title").addClass("hidden");
    $("#calculate").addClass("show");
    $("#calc-exit").addClass("show");
});
$("#calc-exit").click(function () {
    $("#calc-show").removeClass("hidden");
    $("#slogo-title").removeClass("hidden");
    $("#calc-exit").addClass("hidden");
    $("#calculate").addClass("hidden");
});



//map
function initMap() {
    var center = { lat: lat, lng: long };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: center
    });

    var marker = new google.maps.Marker({
        map: map,
        position: center,
        title: 'gason.com.ua'
    });
}


function geocodeAddress(geocoder, resultsMap, address) {
    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            resultsMap.setCenter(results[0].geometry.location);

        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });

    // Create a marker and set its position.

}

$(document).ready(function() {
    $('.feedbackForm').submit(function(e) {
        e.preventDefault();
        var form = this;
        var url = $(this).attr('action');
        var formData = $(this).serialize();

        $.ajax({
            method: "POST",
            url: url,
            data: formData,
            success: function() {
                form.reset();
                alert("Дякуємо за запитання!");
                    
            }
        });
    });



    jQuery("#toplivo").change(function () {
        var tprice = jQuery("#toplivo").val();
        if (tprice > '0') {
            jQuery("#t_price").val(tprice);
        }
        else {
            jQuery("#t_price").val("0.00");
        }
    });

    jQuery("#submit-ras").click(function (e) {
        e.preventDefault();
        var fuel = jQuery("#toplivo").val();
        var g_price = jQuery("#g_price").val();
        var length = parseFloat(jQuery("#probeg").val());
        var consumption = parseFloat(jQuery("#rashod").val());
        var dop = parseFloat(jQuery("#dop").val());
        var priceGbo = parseFloat(jQuery("#price_gbo").val());
        eco = Math.ceil(((fuel * consumption / 100) - (g_price * consumption * 1.1 / 100)) * length * 12);
        okkm = Math.ceil(((priceGbo + dop) / (fuel * consumption / 100) - (g_price * consumption * 1.1 / 100)));
        okmo = Math.ceil(okkm / length);
        if (fuel == "0") {
            jQuery("#message").html("<p>Виберіть паливо!</p>");
        }
        else {
            jQuery('#message').html('<table><tr><td>Економія в рік:</td><td>' + eco + ' грн</td></tr><tr><td>Гбо окупиться за:</td><td>' + okkm + ' км </td></tr><tr><td>Гбо окупиться за:</td><td>' + okmo + ' місяців</td></tr></table>');
        }
    });

});



