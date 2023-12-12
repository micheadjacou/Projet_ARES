var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Limitesdeszonesprotges_1 = new ol.format.GeoJSON();
var features_Limitesdeszonesprotges_1 = format_Limitesdeszonesprotges_1.readFeatures(json_Limitesdeszonesprotges_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limitesdeszonesprotges_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitesdeszonesprotges_1.addFeatures(features_Limitesdeszonesprotges_1);
var lyr_Limitesdeszonesprotges_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limitesdeszonesprotges_1, 
                style: style_Limitesdeszonesprotges_1,
                interactive: true,
                title: '<img src="styles/legend/Limitesdeszonesprotges_1.png" /> Limites des zones protégées'
            });
var format_Phytodistricts_2 = new ol.format.GeoJSON();
var features_Phytodistricts_2 = format_Phytodistricts_2.readFeatures(json_Phytodistricts_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Phytodistricts_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Phytodistricts_2.addFeatures(features_Phytodistricts_2);
var lyr_Phytodistricts_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Phytodistricts_2, 
                style: style_Phytodistricts_2,
                interactive: true,
                title: '<img src="styles/legend/Phytodistricts_2.png" /> Phytodistricts'
            });
var format_Pointsdeprsence_3 = new ol.format.GeoJSON();
var features_Pointsdeprsence_3 = format_Pointsdeprsence_3.readFeatures(json_Pointsdeprsence_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pointsdeprsence_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pointsdeprsence_3.addFeatures(features_Pointsdeprsence_3);
var lyr_Pointsdeprsence_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pointsdeprsence_3, 
                style: style_Pointsdeprsence_3,
                interactive: true,
                title: '<img src="styles/legend/Pointsdeprsence_3.png" /> Points de présence'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Limitesdeszonesprotges_1.setVisible(true);lyr_Phytodistricts_2.setVisible(true);lyr_Pointsdeprsence_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Limitesdeszonesprotges_1,lyr_Phytodistricts_2,lyr_Pointsdeprsence_3];
lyr_Limitesdeszonesprotges_1.set('fieldAliases', {'Id': 'Id', 'CLASS': 'CLASS', 'Type': 'Type', 'Superficie': 'Superficie', });
lyr_Phytodistricts_2.set('fieldAliases', {'Id': 'Id', 'Nom': 'Nom', 'Nom_chif': 'Nom_chif', });
lyr_Pointsdeprsence_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Specie': 'Specie', 'X': 'X', 'Y': 'Y', 'bio_1': 'bio_1', 'bio_10': 'bio_10', 'bio_11': 'bio_11', 'bio_12': 'bio_12', 'bio_13': 'bio_13', 'bio_14': 'bio_14', 'bio_15': 'bio_15', 'bio_16': 'bio_16', 'bio_17': 'bio_17', 'bio_18': 'bio_18', 'bio_19': 'bio_19', 'bio_2': 'bio_2', 'bio_3': 'bio_3', 'bio_4': 'bio_4', 'bio_5': 'bio_5', 'bio_6': 'bio_6', 'bio_7': 'bio_7', 'bio_8': 'bio_8', 'bio_9': 'bio_9', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', });
lyr_Limitesdeszonesprotges_1.set('fieldImages', {'Id': 'Range', 'CLASS': 'TextEdit', 'Type': 'Range', 'Superficie': '', });
lyr_Phytodistricts_2.set('fieldImages', {'Id': 'TextEdit', 'Nom': 'TextEdit', 'Nom_chif': 'TextEdit', });
lyr_Pointsdeprsence_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Specie': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'bio_1': 'TextEdit', 'bio_10': 'TextEdit', 'bio_11': 'TextEdit', 'bio_12': 'TextEdit', 'bio_13': 'TextEdit', 'bio_14': 'TextEdit', 'bio_15': 'TextEdit', 'bio_16': 'TextEdit', 'bio_17': 'TextEdit', 'bio_18': 'TextEdit', 'bio_19': 'TextEdit', 'bio_2': 'TextEdit', 'bio_3': 'TextEdit', 'bio_4': 'TextEdit', 'bio_5': 'TextEdit', 'bio_6': 'TextEdit', 'bio_7': 'TextEdit', 'bio_8': 'TextEdit', 'bio_9': 'TextEdit', 'POINT_X': 'TextEdit', 'POINT_Y': 'TextEdit', });
lyr_Limitesdeszonesprotges_1.set('fieldLabels', {'Id': 'inline label', 'CLASS': 'inline label', 'Type': 'inline label', 'Superficie': 'inline label', });
lyr_Phytodistricts_2.set('fieldLabels', {'Id': 'inline label', 'Nom': 'inline label', 'Nom_chif': 'inline label', });
lyr_Pointsdeprsence_3.set('fieldLabels', {'OBJECTID': 'inline label', 'Specie': 'inline label', 'X': 'inline label', 'Y': 'inline label', 'bio_1': 'inline label', 'bio_10': 'inline label', 'bio_11': 'inline label', 'bio_12': 'inline label', 'bio_13': 'inline label', 'bio_14': 'inline label', 'bio_15': 'inline label', 'bio_16': 'inline label', 'bio_17': 'inline label', 'bio_18': 'inline label', 'bio_19': 'inline label', 'bio_2': 'inline label', 'bio_3': 'inline label', 'bio_4': 'inline label', 'bio_5': 'inline label', 'bio_6': 'inline label', 'bio_7': 'inline label', 'bio_8': 'inline label', 'bio_9': 'inline label', 'POINT_X': 'no label', 'POINT_Y': 'no label', });
lyr_Pointsdeprsence_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});