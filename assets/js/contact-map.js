/*маршрут в контактах*/
var map;

    $(".btn-route").click(function(){
      $(".btn-route").removeClass('active-contact__route-item');
      $(this).addClass('active-contact__route-item');
    })


  function initMap() {
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var image = 'assets/img/pin.png';
    var MY_MAPTYPE_ID = 'custom_style';

    var map = new google.maps.Map(document.getElementById('maps'), {
      zoom: 15,
      minZoom: 10,
      draggable: false,
      scaleControl: true,
      center: new google.maps.LatLng(54.369971, 48.679207),
      mapTypeId: MY_MAPTYPE_ID,
      mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
        },
    });

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(54.369971, 48.679207),
        map: map,
        icon: image,
        zIndex: 1000
    });

    var styledMapOptions = {
        name: 'Custom Style'
    };
    var featureOpts = [
      {
        "stylers": [
          { "visibility": "on" },
          { "hue": "#ff7700" },
          { "saturation": 18 },
          { "gamma": 0.94 },
          { "lightness": 6 }
        ]
      },{
        "featureType": "road",
        "stylers": [
          { "hue": "#ffcc00" },
          { "visibility": "simplified" },
          { "saturation": 74 },
          { "lightness": -24 },
          { "gamma": 0.65 }
        ]
      },{
        "elementType": "labels.text.fill",
        "stylers": [
          { "color": "#000000" },
          { "lightness": 33 }
        ]
      },{
        "featureType": "water",
        "stylers": [
          { "hue": "#0008ff" },
          { "saturation": -78 },
          { "lightness": 48 }
        ]
      },{
      }
    ];

    var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
    map.mapTypes.set(MY_MAPTYPE_ID, customMapType);

    directionsDisplay.setMap(map);

    var onChangeHandler = function() {
      calculateAndDisplayRoute(directionsService, directionsDisplay);
      infowindow.open(map, marker);
    };


    var doom = $('#btn1').get(0);
    doom.addEventListener('click', onChangeHandler);
    var doom2 = $('#btn2').get(0);
    doom2.addEventListener('click', onChangeHandler);
    var doom3 = $('#btn3').get(0);
    doom3.addEventListener('click', onChangeHandler);
    var doom4 = $('#btn4').get(0);
    doom4.addEventListener('click', onChangeHandler);

    var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h3 id="firstHeading" class="firstHeading">Ульяновский Центр Трансфера Технологий</h3>'+
      '</div>';

    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
    map.addListener('click', function() {
      infowindow.close(map, marker);
    });


  }

  function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    directionsService.route({
      origin: new google.maps.LatLng(parseFloat($('.btn-route.active-contact__route-item').data('lat')),parseFloat($('.btn-route.active-contact__route-item').data('lng'))),
      destination: new google.maps.LatLng(54.369971, 48.679207),
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.METRIC,
      provideRouteAlternatives: true,
     avoidHighways: false,
     avoidTolls: true
    }, function(response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }
