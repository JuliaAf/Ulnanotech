/*маршрут в контактах*/
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
    //   scrollwheel: false,
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
  }
