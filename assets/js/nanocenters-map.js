var map;

    $(".nanocenters__item").click(function(){
      $(".nanocenters__item").removeClass('nanocenters__item--active');
      $(this).addClass('nanocenters__item--active');
      var destination = $("#maps").offset().top;
      $('body').animate({ scrollTop: destination }, 600);
      return false;
    })

  function initMap() {
    var LatLng = [{"lat":55.983698,"lng":37.203386, "title":"Зеленоградский нанотехнологический центр","id":"nanocenters__item-0"},
                  {"lat":55.708292,"lng":37.722648, "title":"Нанотехнологический центр Композитов","id":"nanocenters__item-1"},
                  {"lat":56.742500,"lng":37.221942, "title":"Нанотехнологический центр «Дубна»","id":"nanocenters__item-2"},
                  {"lat":59.931540,"lng":30.402362, "title":"Северо-Западный Нанотехнологический Центр","id":"nanocenters__item-3"},
                  {"lat":55.039444,"lng":82.926817, "title":"Нанотехнологический центр «СИГМА.Новосибирск»","id":"nanocenters__item-4"},
                  {"lat":54.370124,"lng":48.679229, "title":"Ульяновский Центр Трансфера Технологий","id":"nanocenters__item-5"},
                  {"lat":56.478567,"lng":85.063450, "title":"Нанотехнологический центр «СИГМА.Томск»","id":"nanocenters__item-6"},
                  {"lat":54.222411,"lng":45.159341, "title":"Центр нанотехнологий и наноматериалов Республики Мордовия","id":"nanocenters__item-7"},
                  {"lat":55.468793,"lng":37.296346, "title":"Нанотехнологический центр «ТехноСпарк»","id":"nanocenters__item-8"},
                  {"lat":55.781925,"lng":49.131814, "title":"Центр нанотехнологий Республики Татарстан","id":"nanocenters__item-9"},
                  {"lat":55.708447,"lng":37.522253, "title":"Нанотехнологический центр «Т-НАНО»","id":"nanocenters__item-10"},
                  {"lat":53.209614,"lng":50.122395, "title":"НО «Инновационный фонд Самарской области»","id":"nanocenters__item-11"},
                ];

    var image = 'assets/img/pin-small.png';
    var MY_MAPTYPE_ID = 'custom_style';

    var map = new google.maps.Map(document.getElementById('maps'), {
      zoom: 4,
      draggable: false,
      scaleControl: true,
      center: new google.maps.LatLng(54.369971, 48.679207),
      mapTypeId: MY_MAPTYPE_ID,
      mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
        },
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

    LatLng.forEach(function(item, i, LatLng) {
      var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(item.lat,item.lng),
        icon: image,
        title: item.title
      });

       marker.addListener('click', function() {
          infowindow.open(map, marker);
        });

        map.addListener('click', function() {
          infowindow.close(map, marker);
        });

        var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h3 id="firstHeading" class="firstHeading">'+item.title+'</h3>'+
            '<!-- <div id="bodyContent">'+
            '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
            'sandstone rock formation in the southern part of the '+
            'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
            'south west of the nearest large town, Alice Springs; 450&#160;km '+
            '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
            'features of the Uluru - Kata Tjuta National Park. Uluru is '+
            'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
            'Aboriginal people of the area. It has many springs, waterholes, '+
            'rock caves and ancient paintings. Uluru is listed as a World '+
            'Heritage Site.</p>'+
            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
            'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
            '(last visited June 22, 2009).</p>'+
            '</div>-->'+
            '</div>';

          var infowindow = new google.maps.InfoWindow({
            content: contentString
          });


      var nanocenters = $('#'+item.id).get(0);
      nanocenters.addEventListener('click', function() {
        var curId = parseFloat($('.nanocenters__item--active').data('id'));
        map.panTo(new google.maps.LatLng(LatLng[curId].lat, LatLng[curId].lng));
        infowindow.open(map, marker);
        map.setZoom(13);
      });

    });



  }
