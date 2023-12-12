var wms_layers = [];


        var lyr_BingMap_0 = new ol.layer.Tile({
            'title': 'Bing Map',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://ecn.dynamic.t0.tiles.virtualearth.net/comp/CompositionHandler/{q}?mkt=en-us&it=G,VE,BX,L,LA&shading=hill'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_regions_be_2 = new ol.format.GeoJSON();
var features_regions_be_2 = format_regions_be_2.readFeatures(json_regions_be_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_regions_be_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_regions_be_2.addFeatures(features_regions_be_2);
var lyr_regions_be_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_regions_be_2, 
                style: style_regions_be_2,
                interactive: true,
    title: 'regions_be<br />\
    <img src="styles/legend/regions_be_2_0.png" /> Bruxelles-Capitale<br />\
    <img src="styles/legend/regions_be_2_1.png" /> Flandre<br />\
    <img src="styles/legend/regions_be_2_2.png" /> Wallonie<br />\
    <img src="styles/legend/regions_be_2_3.png" /> <br />'
        });
var format_Buildings_3 = new ol.format.GeoJSON();
var jsonSource_Buildings_3 = new ol.source.Vector({
    attributions: ' ',
    format: format_Buildings_3
});var lyr_Buildings_3 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_Buildings_3, 
    style: style_Buildings_3,
    interactive: true,
    title: "Buildings"
});

function getBuildings_3Json(geojson) {
    var features_Buildings_3 = format_Buildings_3.readFeatures(geojson);
    jsonSource_Buildings_3.addFeatures(features_Buildings_3);
}
var lyr_Bruitferroviaireindicateurlden2016_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.environnement.brussels/be_wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "bruenvi_noise_rail_lden_16",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: " Bruit ferroviaire indicateur lden 2016",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Bruitferroviaireindicateurlden2016_4, 1]);

lyr_BingMap_0.setVisible(false);lyr_OSMStandard_1.setVisible(true);lyr_regions_be_2.setVisible(true);lyr_Buildings_3.setVisible(false);lyr_Bruitferroviaireindicateurlden2016_4.setVisible(true);
var layersList = [lyr_BingMap_0,lyr_OSMStandard_1,lyr_regions_be_2,lyr_Buildings_3,lyr_Bruitferroviaireindicateurlden2016_4];
lyr_regions_be_2.set('fieldAliases', {'fid': 'fid', 'REGION_NAM': 'REGION_NAM', });
lyr_Buildings_3.set('fieldAliases', {'BU_INSPIRE_ID': 'BU_INSPIRE_ID', 'BU_CAPAKEY': 'BU_CAPAKEY', 'BU_STATUS': 'BU_STATUS', 'BU_CATEGORY': 'BU_CATEGORY', 'BU_ID': 'BU_ID', });
lyr_regions_be_2.set('fieldImages', {'fid': '', 'REGION_NAM': '', });
lyr_Buildings_3.set('fieldImages', {'BU_INSPIRE_ID': '', 'BU_CAPAKEY': '', 'BU_STATUS': '', 'BU_CATEGORY': '', 'BU_ID': '', });
lyr_regions_be_2.set('fieldLabels', {'fid': 'no label', 'REGION_NAM': 'no label', });
lyr_Buildings_3.set('fieldLabels', {'BU_INSPIRE_ID': 'no label', 'BU_CAPAKEY': 'no label', 'BU_STATUS': 'no label', 'BU_CATEGORY': 'no label', 'BU_ID': 'no label', });
lyr_Buildings_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});