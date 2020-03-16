const mapbox = require("mapbox-gl");

function markerBuilder(type, coord) {
    const markerDomElem = document.createElement("div");
    markerDomElem.style.width = "32px";
    markerDomElem.style.height = "39px";

    if (type == 'hotel') {
        markerDomElem.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)"
    }
    else if (type =='restaurant') {
        markerDomElem.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)"
    }
    else {
        markerDomElem.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)"
    }
    const marker = new mapbox.Marker(markerDomElem).setLngLat(coord);
    return marker;
}

module.exports = markerBuilder;