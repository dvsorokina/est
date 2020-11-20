ymaps.ready(init);
var myMap;

function init () {
    myMap = new ymaps.Map("map", {
        center: [55.753215, 37.622504],
        zoom: 11
    }, {
        searchControlProvider: 'yandex#search',
    });


    myMap.events.add('click', function (e) {
            var coords = e.get('coords');
            alert(coords[0]+"  "+coords[1]);

    });

}
