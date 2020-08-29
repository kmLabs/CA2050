

var timeSeriesStops =
  [
    0,
    7,
    14,
    21,
    28
  ];

var timeSeriesColors =
  [
  "rgba(254,240,217,0)",
  "#fef0d9",
  "#fdcc8a",
  "#fc8d59",
  "#e34a33",
  "#b30000"
  ];

//Colors don't matter, its the 0 at the end which indicate opacity
var outlineColors =
["rgba(254,240,217,0)",
 "rgba(253,204,138,0)",
 "rgba(252,141,89,0)",
 "rgba(227,74,51,0)",
 "rgba(179,0,0,0)"];


const dataPaint = {
  /*'fill-outline-color': [
     "step",
    ["get", "temp"],
    outlineColors[0], timeSeriesStops[0],
    outlineColors[1], timeSeriesStops[1],
    outlineColors[2], timeSeriesStops[2],
    outlineColors[3], timeSeriesStops[3],
    outlineColors[4]
  ],*/
  'fill-outline-color': 'rgba(001,001,001,0)', //Colors don't matter, its the 0 at the end which indicate opacity

  'fill-color': [
      "step",
      ["get", "temp"],

      timeSeriesColors[0], timeSeriesStops[0],
      timeSeriesColors[1], timeSeriesStops[1],
      timeSeriesColors[2], timeSeriesStops[2],
      timeSeriesColors[3], timeSeriesStops[3],
      timeSeriesColors[4], timeSeriesStops[4],
      timeSeriesColors[5]

  ],

/*
'fill-opacity':
 ["case",
      ["boolean", ["feature-state", "hover"], false],
      1,
      0
    ] //need to set everything to 0 at start or add a third case
*/

  'fill-opacity': 0
};



const mapLayers = [

  [{
    'id': 'Current-v5',
    'type': 'fill',
    'source': 'Current_v5',
    'source-layer': 'current_WRFOUT_airtemp_v5-4oufal',
    'paint': dataPaint,
    'layout': {}
  }],

  [{
    'id': 'Midcentury-rcp45-v5',
    'type': 'fill',
    'source': 'Midcentury_rcp45_v5',
    'source-layer': 'rcp45_WRFOUT_airtemp_v5_midce-0e2j75',
    'paint': dataPaint,

    'layout': {}
  }],

  [{
    'id': 'Midcentury-rcp45-coolroof-v5',
    'type': 'fill',
    'source': 'Midcentury_rcp45_coolroof_v5',
    'source-layer': 'rcp45_coolroof_WRFOUT_airtemp-25nvxo',
    'paint': dataPaint,

    'layout': {}
  }],

  [{
    'id': 'Midcentury-rcp85-v5',
    'type': 'fill',
    'source': 'Midcentury_rcp85_v5',
    'source-layer': 'rcp85_WRFOUT_airtemp_v5_midce-5a3iio',
    'paint': dataPaint,

    'layout': {}
  }],

  [{
    'id': 'Midcentury-rcp85-coolroof-v5',
    'type': 'fill',
    'source': 'Midcentury_rcp85_coolroof_v5',
    'source-layer': 'rcp85_coolroof_WRFOUT_airtemp-07423a',
    'paint': dataPaint,

    'layout': {}
  }]


];


const mapLayersRight = [
  [{
    'id': 'Current-v5-RightMap',
    'type': 'fill',
    'source': 'Current_v5_RightMap',
    'source-layer': 'current_WRFOUT_airtemp_v5-6tm981',
    'paint': dataPaint,

    'layout': {}
  }],

  [{
    'id': 'Midcentury-rcp45-v5-RightMap',
    'type': 'fill',
    'source': 'Midcentury_rcp45_v5_RightMap',
    'source-layer': 'rcp45_WRFOUT_airtemp_v5_midce-3ecsz4',
    'paint': dataPaint,

    'layout': {}
  }],

  [{
    'id': 'Midcentury-rcp45-coolroof-v5-RightMap',
    'type': 'fill',
    'source': 'Midcentury_rcp45_coolroof_v5_RightMap',
    'source-layer': 'rcp45_coolroof_WRFOUT_airtemp-6izygx',
    'paint': dataPaint,

    'layout': {}
  }],

  [{
    'id': 'Midcentury-rcp85-v5-RightMap',
    'type': 'fill',
    'source': 'Midcentury_rcp85_v5_RightMap',
    'source-layer': 'rcp85_WRFOUT_airtemp_v5_midce-5rwwcv',
    'paint': dataPaint,

    'layout': {}
  }],

  [{
    'id': 'Midcentury-rcp85-coolroof-v5-RightMap',
    'type': 'fill',
    'source': 'Midcentury_rcp85_coolroof_v5_RightMap',
    'source-layer': 'rcp85_coolroof_WRFOUT_airtemp-5togqx',
    'paint': dataPaint,

    'layout': {}
  }]



];
