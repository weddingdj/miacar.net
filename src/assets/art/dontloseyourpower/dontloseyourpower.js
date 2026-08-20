var urls_0 = [
    "images/${z}/${x}/${y}.png",
    "images/${z}/${x}/${y}.png",
    "images/${z}/${x}/${y}.png"
];
/*var urls_1 = [
    "http://dontloseyourpower.com/images_1/${z}/${x}/${y}.png",
    "http://dontloseyourpower.com/images_1/${z}/${x}/${y}.png",
    "http://dontloseyourpower.com/images_1/${z}/${x}/${y}.png"
];
var urls_2 = [
    "http://dontloseyourpower.com/images_2/${z}/${x}/${y}.png",
    "http://dontloseyourpower.com/images_2/${z}/${x}/${y}.png",
    "http://dontloseyourpower.com/images_2/${z}/${x}/${y}.png"
];
var urls_3 = [
    "http://dontloseyourpower.com/images_3/${z}/${x}/${y}.png",
    "http://dontloseyourpower.com/images_3/${z}/${x}/${y}.png",
    "http://dontloseyourpower.com/images_3/${z}/${x}/${y}.png"
];*/

var map = new OpenLayers.Map({
  div: "map",
  layers: [
     new OpenLayers.Layer.XYZ("dontloseyourpower", urls_0, {
       transitionEffect: "resize", buffer: 2, sphericalMercator: true 
     })
  ],
  controls: [
    new OpenLayers.Control.Navigation(
      {dragPanOptions: {enableKinetic: true}}
    )
  ],
  eventListeners: {
    //"moveend": mapEvent,
    //"zoomend": mapEvent,
    //"changelayer": mapLayerChanged,
    //"changebaselayer": mapBaseLayerChanged
  },
  center: [0, 0],
  zoom: 0
});

map.addControl(new OpenLayers.Control.Zoom());

map.getNumZoomLevels = function() {
        return 5;
};

/**
 * marker related code
 */
var ogg_sounds = new Array();
var mp3_sounds = new Array();
ogg_sounds[0] = new buzz.sound('audio/ogg/bullshit.ogg', { loop:false, preload:true, autoplay:false } );
ogg_sounds[1] = new buzz.sound('audio/ogg/dont_do_enough_2.ogg', { loop:false, preload:true, autoplay:false } );
ogg_sounds[2] = new buzz.sound('audio/ogg/dont_do_enough.ogg', { loop:false, preload:true, autoplay:false } );
ogg_sounds[3] = new buzz.sound('audio/ogg/dont_try_hard_enough.ogg', { loop:false, preload:true, autoplay:false } );
ogg_sounds[4] = new buzz.sound('audio/ogg/not_art.ogg', { loop:false, preload:true, autoplay:false } );
ogg_sounds[5] = new buzz.sound('audio/ogg/not_make_sense_2.ogg', { loop:false, preload:true, autoplay:false } );
ogg_sounds[6] = new buzz.sound('audio/ogg/not_make_sense.ogg', { loop:false, preload:true, autoplay:false } );
ogg_sounds[7] = new buzz.sound('audio/ogg/shit.ogg', { loop:false, preload:true, autoplay:false } );
ogg_sounds[8] = new buzz.sound('audio/ogg/starving_artist_2.ogg', { loop:false, preload:true, autoplay:false } );
ogg_sounds[9] = new buzz.sound('audio/ogg/starving_artist.ogg', { loop:false, preload:true, autoplay:false } );
ogg_sounds[10] = new buzz.sound('audio/ogg/this_is_bullshit.ogg', { loop:false, preload:true, autoplay:false } );
ogg_sounds[11] = new buzz.sound('audio/ogg/this_is_not_art.ogg', { loop:false, preload:true, autoplay:false } );
ogg_sounds[12] = new buzz.sound('audio/ogg/this_is_shit.ogg', { loop:false, preload:true, autoplay:false } );
ogg_sounds[13] = new buzz.sound('audio/ogg/this_is_worthless.ogg', { loop:false, preload:true, autoplay:false } );
ogg_sounds[14] = new buzz.sound('audio/ogg/worthless_2.ogg', { loop:false, preload:true, autoplay:false } );
ogg_sounds[15] = new buzz.sound('audio/ogg/worthless.ogg', { loop:false, preload:true, autoplay:false } );
ogg_sounds[16] = new buzz.sound('audio/ogg/you_should_better_work_and_make_money_2.ogg', { loop:false, preload:true, autoplay:false } );

mp3_sounds[0] = new buzz.sound('audio/mp3/bullshit.mp3', { loop:false, preload:true, autoplay:false } );
mp3_sounds[1] = new buzz.sound('audio/mp3/dont_do_enough_2.mp3', { loop:false, preload:true, autoplay:false } );
mp3_sounds[2] = new buzz.sound('audio/mp3/dont_do_enough.mp3', { loop:false, preload:true, autoplay:false } );
mp3_sounds[3] = new buzz.sound('audio/mp3/dont_try_hard_enough.mp3', { loop:false, preload:true, autoplay:false } );
mp3_sounds[4] = new buzz.sound('audio/mp3/not_art.mp3', { loop:false, preload:true, autoplay:false } );
mp3_sounds[5] = new buzz.sound('audio/mp3/not_make_sense_2.mp3', { loop:false, preload:true, autoplay:false } );
mp3_sounds[6] = new buzz.sound('audio/mp3/not_make_sense.mp3', { loop:false, preload:true, autoplay:false } );
mp3_sounds[7] = new buzz.sound('audio/mp3/shit.mp3', { loop:false, preload:true, autoplay:false } );
mp3_sounds[8] = new buzz.sound('audio/mp3/starving_artist_2.mp3', { loop:false, preload:true, autoplay:false } );
mp3_sounds[9] = new buzz.sound('audio/mp3/starving_artist.mp3', { loop:false, preload:true, autoplay:false } );
mp3_sounds[10] = new buzz.sound('audio/mp3/this_is_bullshit.mp3', { loop:false, preload:true, autoplay:false } );
mp3_sounds[11] = new buzz.sound('audio/mp3/this_is_not_art.mp3', { loop:false, preload:true, autoplay:false } );
mp3_sounds[12] = new buzz.sound('audio/mp3/this_is_shit.mp3', { loop:false, preload:true, autoplay:false } );
mp3_sounds[13] = new buzz.sound('audio/mp3/this_is_worthless.mp3', { loop:false, preload:true, autoplay:false } );
mp3_sounds[14] = new buzz.sound('audio/mp3/worthless_2.mp3', { loop:false, preload:true, autoplay:false } );
mp3_sounds[15] = new buzz.sound('audio/mp3/worthless.mp3', { loop:false, preload:true, autoplay:false } );
mp3_sounds[16] = new buzz.sound('audio/mp3/you_should_better_work_and_make_money_2.mp3', { loop:false, preload:true, autoplay:false } );

markers = new OpenLayers.Layer.Markers('Markers');
markers.id = 'Markers';
map.addLayer(markers);

OpenLayers.Control.Click = OpenLayers.Class(OpenLayers.Control, {                
  defaultHandlerOptions: {
    'single': true,
    'double': false,
    'pixelTolerance': 0,
    'stopSingle': false,
    'stopDouble': false
  },
  initialize: function(options) {
    this.handlerOptions = OpenLayers.Util.extend(
      {}, this.defaultHandlerOptions
    );
    OpenLayers.Control.prototype.initialize.apply(
      this, arguments
    ); 
    this.handler = new OpenLayers.Handler.Click(
      this, {
        'click': this.trigger
      }, this.handlerOptions
    );
  }, 
  trigger: function(e) {
    var position = map.getLonLatFromPixel(e.xy);
    var size = new OpenLayers.Size(21,25);
    var offset = new OpenLayers.Pixel(-(size.w/2), -size.h);
    var icon = new OpenLayers.Icon('marker_images/marker.png', size, offset);   
    // marker.setUrl('image icon');
    var markerslayer = map.getLayer('Markers');
    markerslayer.addMarker(new OpenLayers.Marker(position,icon));

    var number = Math.floor((Math.random()*16)); 
    if (buzz.isOGGSupported()) {
      ogg_sounds[number].play();
    } else if (buzz.isMP3Supported()) {
      mp3_sounds[number].play();
    }
  }
});

var click = new OpenLayers.Control.Click();
map.addControl(click);
click.activate();

