'use strict';

function initMap() {
    let map, coords, styles, marker, info, content;

    coords = {
        lat: 40.75297,
        lng: -73.98463
    }
    content = '<h1 class="info-title">I\'m here</h1>';

    styles = [
        {
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f5f5f5"
                }
            ]
        },
        {
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#616161"
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#f5f5f5"
                }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#bdbdbd"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#eeeeee"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#757575"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#e5e5e5"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#9e9e9e"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#757575"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#dadada"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#616161"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#9e9e9e"
                }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#e5e5e5"
                }
            ]
        },
        {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#eeeeee"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#c9c9c9"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#9e9e9e"
                }
            ]
        }
    ]



    map = new google.maps.Map(document.getElementById('map'), {
        center: coords,
        zoom: 18,
        styles: styles,
        disableDefaultUI: true,
        zoomControl: true,
        streetViewControl: true
    });

    marker = new google.maps.Marker({
        position: coords,
        map: map,
        icon: 'images/marker.png',
        draggble: true
    });

    info = new google.maps.InfoWindow({
        content: content
    });

    marker.addListener('click', function () {
        info.open(map, marker);
    });
}

(function ($) {
    $(document).ready(function () {

        $('.slider').slick({
            dots: true,
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: true,
            fade: true,
            speed: 5000
        });

        let sections = {
            header: $('#header').offset().top,
            about: $('#about').offset().top,
            services: $('#projects').offset().top,
            gallery: $('#news').offset().top,
            contact: $('#contact').offset().top
        };


        $(window).scroll(function () {
            let scrTop = $(document).scrollTop() + ($(window).height() / 3),
                pos;

            if (scrTop < sections.about) {
                pos = 'header';
            } else if (scrTop >= sections.about && scrTop < sections.services) {
                pos = 'about';
            } else if (scrTop >= sections.services && scrTop < sections.gallery) {
                pos = 'services';
            } else if (scrTop >= sections.gallery && scrTop < sections.blog) {
                pos = 'gallery';
            } else if (scrTop >= sections.blog && scrTop < sections.contact) {
                pos = ' blog';
            } else if (scrTop >= sections.contact) {
                pos = 'contact';
            }

            $('.fixed-nav').find('.active').removeClass('active');
            $('.fixed-nav').find(`a[data-menu=${pos}]`).addClass('active');


        });


        $('.photo').fancybox({
            buttons: [
                "slideShow",
                "fullScreen",
                "download",
                "thumbs",
                "close"
            ],
            animationEffect: "zoom-in-out",
            animationDuration: 800,
            transitionEffect: "rotate",
            loop: "true"
        });
    });
})(jQuery);