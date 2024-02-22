var optionsBoxLeft = document.getElementById('optionsBoxLeft');
var toggleButtonLeft = document.getElementById('toggleButtonLeft');

toggleButtonLeft.addEventListener('click', function() {
    optionsBoxLeft.style.display = (optionsBoxLeft.style.display === 'block') ? 'none' : 'block';
});

document.addEventListener('click', function(event) {
    if (!optionsBoxLeft.contains(event.target) && event.target !== toggleButtonLeft) {
        optionsBoxLeft.style.display = 'none';
    }
});

var optionsBoxLeft = document.getElementById('optionsBoxLeft');
var toggleButtonLeft = document.getElementById('toggleButtonLeft');
var optionsBoxQuery = document.getElementById('BoxQuery');
var theQueryBtn = document.getElementById('theQueryBtn');

theQueryBtn.addEventListener('click', function() {
    optionsBoxLeft.style.display = 'none'
    optionsBoxQuery.style.display = (optionsBoxQuery.style.display === 'block') ? 'none' : 'block';

});

document.addEventListener('click', function(event) {
    if (!optionsBoxQuery.contains(event.target) && event.target !== theQueryBtn) {
        optionsBoxQuery.style.display = 'none';
    }
});

var optionsBoxRight = document.getElementById('optionsBoxRight');
var toggleButtonRight = document.getElementById('toggleButtonRight');

toggleButtonRight.addEventListener('click', function() {
    optionsBoxRight.style.display = (optionsBoxRight.style.display === 'block') ? 'none' : 'block';
});

document.addEventListener('click', function(event) {
    if (!optionsBoxRight.contains(event.target) && event.target !== toggleButtonRight) {
        optionsBoxRight.style.display = 'none';
    }
});

document.getElementById('toggleButton1').addEventListener('click', function() {
    var myList = document.getElementById('List1');
    var concentration = document.getElementById('concentration')
    if (myList.style.display === 'none' || myList.style.display === '') {
      myList.style.display = 'block';
      concentration.innerText = 'v浓度（可展开）'
    } else {
      myList.style.display = 'none';
      concentration.innerText = '>浓度（可展开）'
    }
});

document.getElementById('toggleButton2').addEventListener('click', function() {
    var myList = document.getElementById('List2');
    var highValueZone = document.getElementById('highValueZone')
    if (myList.style.display === 'none' || myList.style.display === '') {
      myList.style.display = 'block';
      highValueZone.innerText ='v高值区（可展开）'
    } else {
      myList.style.display = 'none';
      highValueZone.innerText ='>高值区（可展开）'
    }
});

var TiandiMap_vec = new ol.layer.Tile({
    title: "天地图矢量图层",
    source: new ol.source.XYZ({
        url: "http://t0.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=59fb9733e8d5be4d296214500fb4a174", 
        wrapX: true
    }),
    zindex:1000
});
var TiandiMap_img = new ol.layer.Tile({
    title: "天地图卫星图层",
    source: new ol.source.XYZ({
        url: "http://t0.tianditu.com/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=59fb9733e8d5be4d296214500fb4a174", 
        wrapX: true
    }),
    visible:false
});
var TiandiMap_cva = new ol.layer.Tile({
    title: "天地图矢量注记图层",
    source: new ol.source.XYZ({
        url: "http://t0.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=59fb9733e8d5be4d296214500fb4a174" 
    })
});

var map = new ol.Map({
    target: 'map',
    layers: [TiandiMap_vec,TiandiMap_img,TiandiMap_cva],
    view: new ol.View({
        center: [11337194,3539140],
        zoom: 6.5,
        minZoom:3,
        projection: "EPSG:3857"
    })
});

function toggleLayer1() {
    TiandiMap_img.setVisible(true);
    TiandiMap_vec.setVisible(false);
}

function toggleLayer2() {
    TiandiMap_img.setVisible(false);
    TiandiMap_vec.setVisible(true);
}

const satellite = document.getElementById('satellite');
satellite.addEventListener('click', toggleLayer1);

const normalMap = document.getElementById('normalMap');
normalMap.addEventListener('click', toggleLayer2);





