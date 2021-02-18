var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Checa_Piensa_1PIENSA_1 = new ol.format.GeoJSON();
var features_Checa_Piensa_1PIENSA_1 = format_Checa_Piensa_1PIENSA_1.readFeatures(json_Checa_Piensa_1PIENSA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Checa_Piensa_1PIENSA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Checa_Piensa_1PIENSA_1.addFeatures(features_Checa_Piensa_1PIENSA_1);
var lyr_Checa_Piensa_1PIENSA_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Checa_Piensa_1PIENSA_1, 
                style: style_Checa_Piensa_1PIENSA_1,
                interactive: true,
                title: '<img src="styles/legend/Checa_Piensa_1PIENSA_1.png" /> Checa_Piensa_1 PIENSA'
            });
var format_Checa_Piensa_1rutamatriz_2 = new ol.format.GeoJSON();
var features_Checa_Piensa_1rutamatriz_2 = format_Checa_Piensa_1rutamatriz_2.readFeatures(json_Checa_Piensa_1rutamatriz_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Checa_Piensa_1rutamatriz_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Checa_Piensa_1rutamatriz_2.addFeatures(features_Checa_Piensa_1rutamatriz_2);
var lyr_Checa_Piensa_1rutamatriz_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Checa_Piensa_1rutamatriz_2, 
                style: style_Checa_Piensa_1rutamatriz_2,
                interactive: true,
                title: '<img src="styles/legend/Checa_Piensa_1rutamatriz_2.png" /> Checa_Piensa_1 ruta matriz'
            });
var format_Checa_Piensa_1Valvulasytanques_3 = new ol.format.GeoJSON();
var features_Checa_Piensa_1Valvulasytanques_3 = format_Checa_Piensa_1Valvulasytanques_3.readFeatures(json_Checa_Piensa_1Valvulasytanques_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Checa_Piensa_1Valvulasytanques_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Checa_Piensa_1Valvulasytanques_3.addFeatures(features_Checa_Piensa_1Valvulasytanques_3);
var lyr_Checa_Piensa_1Valvulasytanques_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Checa_Piensa_1Valvulasytanques_3, 
                style: style_Checa_Piensa_1Valvulasytanques_3,
                interactive: true,
                title: '<img src="styles/legend/Checa_Piensa_1Valvulasytanques_3.png" /> Checa_Piensa_1 Valvulas y tanques'
            });
var format_Checa_Piensa_1Medidores_4 = new ol.format.GeoJSON();
var features_Checa_Piensa_1Medidores_4 = format_Checa_Piensa_1Medidores_4.readFeatures(json_Checa_Piensa_1Medidores_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Checa_Piensa_1Medidores_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Checa_Piensa_1Medidores_4.addFeatures(features_Checa_Piensa_1Medidores_4);
var lyr_Checa_Piensa_1Medidores_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Checa_Piensa_1Medidores_4, 
                style: style_Checa_Piensa_1Medidores_4,
                interactive: true,
                title: '<img src="styles/legend/Checa_Piensa_1Medidores_4.png" /> Checa_Piensa_1 Medidores'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Checa_Piensa_1PIENSA_1.setVisible(true);lyr_Checa_Piensa_1rutamatriz_2.setVisible(true);lyr_Checa_Piensa_1Valvulasytanques_3.setVisible(true);lyr_Checa_Piensa_1Medidores_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Checa_Piensa_1PIENSA_1,lyr_Checa_Piensa_1rutamatriz_2,lyr_Checa_Piensa_1Valvulasytanques_3,lyr_Checa_Piensa_1Medidores_4];
lyr_Checa_Piensa_1PIENSA_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Checa_Piensa_1rutamatriz_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Checa_Piensa_1Valvulasytanques_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Checa_Piensa_1Medidores_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Checa_Piensa_1PIENSA_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Checa_Piensa_1rutamatriz_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Checa_Piensa_1Valvulasytanques_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Checa_Piensa_1Medidores_4.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Checa_Piensa_1PIENSA_1.set('fieldLabels', {'Name': 'inline label', 'description': 'inline label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Checa_Piensa_1rutamatriz_2.set('fieldLabels', {'Name': 'header label', 'description': 'header label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Checa_Piensa_1Valvulasytanques_3.set('fieldLabels', {'Name': 'inline label', 'description': 'header label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Checa_Piensa_1Medidores_4.set('fieldLabels', {'Name': 'inline label', 'description': 'header label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Checa_Piensa_1Medidores_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});