    ymaps.ready(init);
    async function init(){

        const response = await fetch('/bd', {
            method: 'GET',
            });
        const bd = await response.json();
        console.log(bd);

        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.76, 67.64],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 2,
            controls: [] 
        });

    // Ищем координаты указанного адреса
    // Добавляем всю инфу в один массив
    // https://tech.yandex.ru/maps/doc/jsapi/2.1/ref/reference/geocode-docpage/
    let geocoder = [];
    let i = 0;
    bd.forEach(tea => {
        geocoder[i] = [];
        geocoder[i].push(ymaps.geocode(tea.origin_country));
        geocoder[i].push(tea.origin_country);
        geocoder[i].push(tea.name_tea);
        geocoder[i].push(tea.img);
        geocoder[i].push(tea.id);
        i++;
    });


    let count = 0;
    // После того, как поиск вернул результат, вызывается callback-функция
    geocoder.forEach(geo => {
        geo[0].then(
            function (res) {
     
                // координаты объекта
                let coordinates = res.geoObjects.get(0).geometry.getCoordinates();
     
                // Добавление метки (Placemark) на карту
                let placemark = new ymaps.Placemark(
                    coordinates, {
                        'hintContent': `${geo[1]}`,
                        'balloonContent': `<a href="/tea/${geo[4]}" class="map-href">${geo[2]}</a>`
                    }, {
                        'preset': 'islands#redDotIcon',
                        // Необходимо указать данный тип макета.
                        "iconLayout": 'default#image',
                
                        // Своё изображение иконки метки.
                        "iconImageHref": `${geo[3]}`,
                        // Размеры метки.
                        "iconImageSize": [32, 32],
                        // Смещение левого верхнего угла иконки относительно
                        // её "ножки" (точки привязки).
                        "iconImageOffset": [-16, -16],   
                        "href": `/tea/${geo[4]}`                  
                    }
                );
                count++;
                myMap.geoObjects.add(placemark);
            }
        );
    });
}