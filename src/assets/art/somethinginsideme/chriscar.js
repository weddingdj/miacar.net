
// block drag event
document.getElementById("canvas").ontouchstart = function (e) {
  return false;
};
document.getElementById("canvas").ontouchmove = function (e) {
  return false;
};

// this new layer is automatically activated
var layer = new Layer();   

var origWidth = 1200; // keep aspect ratio how the painting was drawn
var origHeight = 800; 

/**
 *
 */
function BsqtRectangles() {


  /* short line cluster */

  this.bsqt0 = new Path.Rectangle(new Point(280, 0), new Size(90, 100));
  this.bsqt0.name = 'bsqt0';
  this.bsqt0.fillColor = '#000000';
  this.bsqt0.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.bsqt0.firstSegment);

  this.bsqt1 = new Path.Rectangle(new Point(280, 100), new Size(90, 100));
  this.bsqt1.name = 'bsqt1';
  this.bsqt1.fillColor = '#000000';
  this.bsqt1.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.bsqt1.firstSegment);

  this.bsqt2 = new Path.Rectangle(new Point(280, 200), new Size(90, 100));
  this.bsqt2.name = 'bsqt2';
  this.bsqt2.fillColor = '#000000';
  this.bsqt2.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.bsqt2.firstSegment);

  this.bsqt3 = new Path.Rectangle(new Point(280, 300), new Size(90, 100));
  this.bsqt3.name = 'bsqt3';
  this.bsqt3.fillColor = '#000000';
  this.bsqt3.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.bsqt3.firstSegment);

  this.bsqt4 = new Path.Rectangle(new Point(280, 400), new Size(90, 100));
  this.bsqt4.name = 'bsqt4';
  this.bsqt4.fillColor = '#000000';
  this.bsqt4.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.bsqt4.firstSegment);

  this.bsqt5 = new Path.Rectangle(new Point(280, 500), new Size(90, 100));
  this.bsqt5.name = 'bsqt5';
  this.bsqt5.fillColor = '#000000';
  this.bsqt5.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.bsqt5.firstSegment);

  this.bsqt6 = new Path.Rectangle(new Point(280, 600), new Size(90, 100));
  this.bsqt6.name = 'bsqt6';
  this.bsqt6.fillColor = '#000000';
  this.bsqt6.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.bsqt6.firstSegment);

  this.bsqt7 = new Path.Rectangle(new Point(280, 700), new Size(90, 100));
  this.bsqt7.name = 'bsqt7';
  this.bsqt7.fillColor = '#000000';
  this.bsqt7.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.bsqt7.firstSegment);


  /* short line cluster */

  this.bsqt8 = new Path.Rectangle(new Point(540, 0), new Size(70, 150));
  this.bsqt8.name = 'bsqt8';
  this.bsqt8.fillColor = '#FF0000';
  this.bsqt8.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.bsqt8.firstSegment);

  this.bsqt9 = new Path.Rectangle(new Point(540, 100), new Size(70, 150));
  this.bsqt9.name = 'bsqt9';
  this.bsqt9.fillColor = '#FF0000';
  this.bsqt9.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.bsqt9.firstSegment);

  this.bsqt10 = new Path.Rectangle(new Point(540, 200), new Size(70, 150));
  this.bsqt10.name = 'bsqt10';
  this.bsqt10.fillColor = '#FF0000';
  this.bsqt10.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.bsqt10.firstSegment);

  this.bsqt11 = new Path.Rectangle(new Point(540, 300), new Size(70, 150));
  this.bsqt11.name = 'bsqt11';
  this.bsqt11.fillColor = '#FF0000';
  this.bsqt11.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.bsqt11.firstSegment);

  this.bsqt12 = new Path.Rectangle(new Point(540, 400), new Size(70, 150));
  this.bsqt12.name = 'bsqt12';
  this.bsqt12.fillColor = '#FF0000';
  this.bsqt12.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.bsqt12.firstSegment);

  this.bsqt13 = new Path.Rectangle(new Point(540, 500), new Size(70, 150));
  this.bsqt13.name = 'bsqt13';
  this.bsqt13.fillColor = '#FF0000';
  this.bsqt13.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.bsqt13.firstSegment);

  this.bsqt14 = new Path.Rectangle(new Point(540, 600), new Size(70, 150));
  this.bsqt14.name = 'bsqt14';
  this.bsqt14.fillColor = '#FF0000';
  this.bsqt14.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.bsqt14.firstSegment);


  /* short line cluster */

  this.bsqt15 = new Path.Rectangle(new Point(0, 0), new Size(70, 120));
  this.bsqt15.name = 'bsqt15';
  this.bsqt15.fillColor = '#0000FF';
  this.bsqt15.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.bsqt15.firstSegment);

  this.bsqt16 = new Path.Rectangle(new Point(0, 100), new Size(70, 120));
  this.bsqt16.name = 'bsqt16';
  this.bsqt16.fillColor = '#0000FF';
  this.bsqt16.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.bsqt16.firstSegment);

  this.bsqt17 = new Path.Rectangle(new Point(0, 200), new Size(70, 120));
  this.bsqt17.name = 'bsqt17';
  this.bsqt17.fillColor = '#0000FF';
  this.bsqt17.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.bsqt17.firstSegment);

  this.bsqt18 = new Path.Rectangle(new Point(0, 300), new Size(70, 120));
  this.bsqt18.name = 'bsqt18';
  this.bsqt18.fillColor = '#0000FF';
  this.bsqt18.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.bsqt18.firstSegment);

  this.bsqt19 = new Path.Rectangle(new Point(0, 400), new Size(70, 120));
  this.bsqt19.name = 'bsqt19';
  this.bsqt19.fillColor = '#0000FF';
  this.bsqt19.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.bsqt19.firstSegment);

  this.bsqt20 = new Path.Rectangle(new Point(0, 500), new Size(70, 120));
  this.bsqt20.name = 'bsqt20';
  this.bsqt20.fillColor = '#0000FF';
  this.bsqt20.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.bsqt20.firstSegment);

  this.bsqt21 = new Path.Rectangle(new Point(0, 600), new Size(70, 120));
  this.bsqt21.name = 'bsqt21';
  this.bsqt21.fillColor = '#0000FF';
  this.bsqt21.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.bsqt21.firstSegment);

  this.bsqt22 = new Path.Rectangle(new Point(0, 700), new Size(70, 120));
  this.bsqt22.name = 'bsqt22';
  this.bsqt22.fillColor = '#0000FF';
  this.bsqt22.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.bsqt22.firstSegment);


  /* short line cluster */

  this.bsqt23 = new Path.Rectangle(new Point(1000, 0), new Size(90, 200));
  this.bsqt23.name = 'bsqt23';
  this.bsqt23.fillColor = '#FFFF00';
  this.bsqt23.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.bsqt23.firstSegment);

  this.bsqt24 = new Path.Rectangle(new Point(1000, 100), new Size(90, 200));
  this.bsqt24.name = 'bsqt24';
  this.bsqt24.fillColor = '#FFFF00';
  this.bsqt24.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.bsqt24.firstSegment);

  this.bsqt25 = new Path.Rectangle(new Point(1000, 200), new Size(90, 200));
  this.bsqt25.name = 'bsqt25';
  this.bsqt25.fillColor = '#FFFF00';
  this.bsqt25.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.bsqt25.firstSegment);

  this.bsqt26 = new Path.Rectangle(new Point(1000, 300), new Size(90, 200));
  this.bsqt26.name = 'bsqt26';
  this.bsqt26.fillColor = '#FFFF00';
  this.bsqt26.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.bsqt26.firstSegment);

  this.bsqt27 = new Path.Rectangle(new Point(1000, 400), new Size(90, 200));
  this.bsqt27.name = 'bsqt27';
  this.bsqt27.fillColor = '#FFFF00';
  this.bsqt27.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.bsqt27.firstSegment);

  this.bsqt28 = new Path.Rectangle(new Point(1000, 500), new Size(90, 200));
  this.bsqt28.name = 'bsqt28';
  this.bsqt28.fillColor = '#FFFF00';
  this.bsqt28.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.bsqt28.firstSegment);

  this.bsqt29 = new Path.Rectangle(new Point(1000, 600), new Size(90, 200));
  this.bsqt29.name = 'bsqt29';
  this.bsqt29.fillColor = '#FFFF00';
  this.bsqt29.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.bsqt29.firstSegment);

  this.bsqt30 = new Path.Rectangle(new Point(1000, 700), new Size(90, 200));
  this.bsqt30.name = 'bsqt30';
  this.bsqt30.fillColor = '#FFFF00';
  this.bsqt30.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.bsqt30.firstSegment);

}


/**
 *
 */
function Areas() {

  /* areas */

  this.bsqt31 = new Path.Rectangle(new Point(630, 0), new Size(500, 900));
  this.bsqt31.name = 'bsqt31';
  this.bsqt31.fillColor = '#FFFF00';
  this.bsqt31.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.bsqt31.firstSegment);

  this.bsqt32 = new Path.Rectangle(new Point(830, 0), new Size(400, 900));
  this.bsqt32.name = 'bsqt32';
  this.bsqt32.fillColor = '#000000';
  this.bsqt32.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.bsqt32.firstSegment);

  this.bsqt33 = new Path.Rectangle(new Point(1000, 0), new Size(700, 900));
  this.bsqt33.name = 'bsqt33';
  this.bsqt33.fillColor = '#FF0000';
  this.bsqt33.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.bsqt33.firstSegment);

  this.bsqt34 = new Path.Rectangle(new Point(0, 0), new Size(400, 900));
  this.bsqt34.name = 'bsqt34';
  this.bsqt34.fillColor = '#000000';
  this.bsqt34.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.bsqt34.firstSegment);

 
  /* thin lines */

  this.bsqt35 = new Path.Rectangle(new Point(150, 200), new Size(700, 50));
  this.bsqt35.name = 'bsqt35';
  this.bsqt35.fillColor = '#FF0000';
  this.bsqt35.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.bsqt35.firstSegment);

  this.bsqt36 = new Path.Rectangle(new Point(200, 400), new Size(600, 20));
  this.bsqt36.name = 'bsqt36';
  this.bsqt36.fillColor = '#00FF00';
  this.bsqt36.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.bsqt36.firstSegment);

  this.bsqt37 = new Path.Rectangle(new Point(750, 500), new Size(800, 20));
  this.bsqt37.name = 'bsqt37';
  this.bsqt37.fillColor = '#000000';
  this.bsqt37.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.bsqt37.firstSegment);

  this.bsqt38 = new Path.Rectangle(new Point(850, 300), new Size(900, 30));
  this.bsqt38.name = 'bsqt38';
  this.bsqt38.fillColor = '#000000';
  this.bsqt38.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.bsqt38.firstSegment);
}

var BSQT_MAX_ITEMS_START = 0;
var BSQT_MAX_ITEMS_END = 38;

/**
 *
 */
function MovingBsqt() {

  /* tower of circles far left */

  this.mbsqt0 = new Path.Circle(new Point(origWidth, 50), 100); 
  this.mbsqt0.name = 'mbsqt0';
  this.mbsqt0.fillColor = '#FF0000';
  this.mbsqt0.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.mbsqt0.firstSegment);

  this.mbsqt1 = new Path.Circle(new Point(origWidth, 180), 30); 
  this.mbsqt1.name = 'mbsqt1';
  this.mbsqt1.fillColor = '#0000FF';
  this.mbsqt1.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.mbsqt1.firstSegment);

  this.mbsqt2 = new Path.Circle(new Point(origWidth, 260), 50); 
  this.mbsqt2.name = 'mbsqt2';
  this.mbsqt2.fillColor = '#00FF00';
  this.mbsqt2.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.mbsqt2.firstSegment);

  this.mbsqt3 = new Path.Circle(new Point(origWidth, 410), 100); 
  this.mbsqt3.name = 'mbsqt3';
  this.mbsqt3.fillColor = '#000000';
  this.mbsqt3.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.mbsqt3.firstSegment);

  this.mbsqt4 = new Path.Circle(new Point(origWidth, 570), 60); 
  this.mbsqt4.name = 'mbsqt4';
  this.mbsqt4.fillColor = '#FFFF00';
  this.mbsqt4.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.mbsqt4.firstSegment);


  /* tower of circles left */

  this.mbsqt5 = new Path.Circle(new Point(origWidth-200, 100), 100); 
  this.mbsqt5.name = 'mbsqt5';
  this.mbsqt5.fillColor = '#0000FF';
  this.mbsqt5.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.mbsqt5.firstSegment);

  this.mbsqt6 = new Path.Circle(new Point(origWidth-200, 310), 110); 
  this.mbsqt6.name = 'mbsqt6';
  this.mbsqt6.fillColor = '#FFFF00';
  this.mbsqt6.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.mbsqt6.firstSegment);

  this.mbsqt7 = new Path.Circle(new Point(origWidth-200, 500), 80); 
  this.mbsqt7.name = 'mbsqt7';
  this.mbsqt7.fillColor = '#0000FF';
  this.mbsqt7.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.mbsqt7.firstSegment);

  this.mbsqt8 = new Path.Circle(new Point(origWidth-200, 670), 90); 
  this.mbsqt8.name = 'mbsqt8';
  this.mbsqt8.fillColor = '#FF0000';
  this.mbsqt8.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.mbsqt8.firstSegment);


  /* tower of circles middle left */

  this.mbsqt9 = new Path.Circle(new Point(origWidth-400, 70), 70); 
  this.mbsqt9.name = 'mbsqt9';
  this.mbsqt9.fillColor = '#00FF00';
  this.mbsqt9.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.mbsqt9.firstSegment);

  this.mbsqt10 = new Path.Circle(new Point(origWidth-400, 240), 100); 
  this.mbsqt10.name = 'mbsqt10';
  this.mbsqt10.fillColor = '#0000FF';
  this.mbsqt10.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.mbsqt10.firstSegment);

  this.mbsqt11 = new Path.Circle(new Point(origWidth-400, 460), 120); 
  this.mbsqt11.name = 'mbsqt11';
  this.mbsqt11.fillColor = '#FFFF00';
  this.mbsqt11.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.mbsqt11.firstSegment);

  this.mbsqt12 = new Path.Circle(new Point(origWidth-400, 700), 120); 
  this.mbsqt12.name = 'mbsqt12';
  this.mbsqt12.fillColor = '#000000';
  this.mbsqt12.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.mbsqt12.firstSegment);


  /* tower of circles middle */

  this.mbsqt13 = new Path.Circle(new Point(origWidth-600, 0), 120); 
  this.mbsqt13.name = 'mbsqt13';
  this.mbsqt13.fillColor = '#000000';
  this.mbsqt13.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.mbsqt13.firstSegment);

  this.mbsqt14 = new Path.Circle(new Point(origWidth-600, 240), 120); 
  this.mbsqt14.name = 'mbsqt14';
  this.mbsqt14.fillColor = '#000000';
  this.mbsqt14.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.mbsqt14.firstSegment);

  this.mbsqt15 = new Path.Circle(new Point(origWidth-600, 440), 80); 
  this.mbsqt15.name = 'mbsqt15';
  this.mbsqt15.fillColor = '#000000';
  this.mbsqt15.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.mbsqt15.firstSegment);

  this.mbsqt16 = new Path.Circle(new Point(origWidth-600, 610), 90); 
  this.mbsqt16.name = 'mbsqt16';
  this.mbsqt16.fillColor = '#000000';
  this.mbsqt16.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.mbsqt16.firstSegment);

  this.mbsqt17 = new Path.Circle(new Point(origWidth-600, 810), 110); 
  this.mbsqt17.name = 'mbsqt17';
  this.mbsqt17.fillColor = '#FF0000';
  this.mbsqt17.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.mbsqt17.firstSegment);


  /* tower of circles middle right */

  this.mbsqt18 = new Path.Circle(new Point(origWidth-800, 120), 120); 
  this.mbsqt18.name = 'mbsqt18';
  this.mbsqt18.fillColor = '#FF0000';
  this.mbsqt18.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.mbsqt18.firstSegment);

  this.mbsqt19 = new Path.Circle(new Point(origWidth-800, 360), 120); 
  this.mbsqt19.name = 'mbsqt19';
  this.mbsqt19.fillColor = '#FFFF00';
  this.mbsqt19.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.mbsqt19.firstSegment);

  this.mbsqt20 = new Path.Circle(new Point(origWidth-800, 570), 90); 
  this.mbsqt20.name = 'mbsqt20';
  this.mbsqt20.fillColor = '#0000FF';
  this.mbsqt20.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.mbsqt20.firstSegment);

  this.mbsqt21 = new Path.Circle(new Point(origWidth-800, 730), 70); 
  this.mbsqt21.name = 'mbsqt21';
  this.mbsqt21.fillColor = '#000000';
  this.mbsqt21.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.mbsqt21.firstSegment);


  /* tower of circles right */

  this.mbsqt22 = new Path.Circle(new Point(origWidth-1000, 90), 90); 
  this.mbsqt22.name = 'mbsqt22';
  this.mbsqt22.fillColor = '#FFFF00';
  this.mbsqt22.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.mbsqt22.firstSegment);

  this.mbsqt23 = new Path.Circle(new Point(origWidth-1000, 270), 90); 
  this.mbsqt23.name = 'mbsqt23';
  this.mbsqt23.fillColor = '#FF0000';
  this.mbsqt23.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.mbsqt23.firstSegment);

  this.mbsqt24 = new Path.Circle(new Point(origWidth-1000, 450), 90); 
  this.mbsqt24.name = 'mbsqt24';
  this.mbsqt24.fillColor = '#0000FF';
  this.mbsqt24.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.mbsqt24.firstSegment);

  this.mbsqt25 = new Path.Circle(new Point(origWidth-1000, 630), 90); 
  this.mbsqt25.name = 'mbsqt25';
  this.mbsqt25.fillColor = '#000000';
  this.mbsqt25.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.mbsqt25.firstSegment);

  this.mbsqt26 = new Path.Circle(new Point(origWidth-1000, 780), 60); 
  this.mbsqt26.name = 'mbsqt26';
  this.mbsqt26.fillColor = '#FF0000';
  this.mbsqt26.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.mbsqt26.firstSegment);


  /* tower of circles right */

  this.mbsqt27 = new Path.Circle(new Point(origWidth-1200, 100), 100); 
  this.mbsqt27.name = 'mbsqt27';
  this.mbsqt27.fillColor = '#FF0000';
  this.mbsqt27.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.mbsqt27.firstSegment);

  this.mbsqt28 = new Path.Circle(new Point(origWidth-1200, 290), 90); 
  this.mbsqt28.name = 'mbsqt28';
  this.mbsqt28.fillColor = '#FFFF00';
  this.mbsqt28.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.mbsqt28.firstSegment);

  this.mbsqt29 = new Path.Circle(new Point(origWidth-1200, 490), 110); 
  this.mbsqt29.name = 'mbsqt29';
  this.mbsqt29.fillColor = '#000000';
  this.mbsqt29.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.mbsqt29.firstSegment);

  this.mbsqt30 = new Path.Circle(new Point(origWidth-1200, 710), 110); 
  this.mbsqt30.name = 'mbsqt30';
  this.mbsqt30.fillColor = '#000000';
  this.mbsqt30.scale(((view.size.getWidth() * 100) / origWidth) / 100, ((view.size.getHeight() * 100) / origHeight) / 100, this.mbsqt30.firstSegment);

}

var MBSQT_MAX_ITEMS_START = 0;
var MBSQT_MAX_ITEMS_END = 30;

var areas;
var bsqtrectangles;
var movingbsqt;
var cover;

/**
 *
 */
function onResize(event) {
 
  layer.removeChildren();

  areas = new Areas();
  movingbsqt = new MovingBsqt();
  bsqtrectangles = new BsqtRectangles();  
}

var right_dir = false;
var run_once = true;
var bsqt_bounds_width = Array();
var mbsqt_bounds_width = Array();
var stop = false;

/**
 *
 */
function onMouseDown(event) {
 
  if (right_dir == true) { 
    right_dir = false;
  } else {
    right_dir = true;
  }
  //onResize();
  //setTimeout(function() {stop = false;}, 3000);
}

/**
 *
 */
function onFrame(event) {

  if (stop == true) {
    return;
  }

  if (run_once == true) {
    // bsqt items
    for (var i = BSQT_MAX_ITEMS_START; i <= BSQT_MAX_ITEMS_END; i++) {
      var itm = project.activeLayer.children['bsqt' + i];
      bsqt_bounds_width[i] = itm.bounds.width;
    }
    // mbsqt items
    for (var i = MBSQT_MAX_ITEMS_START; i <= MBSQT_MAX_ITEMS_END; i++) {
      var itm = project.activeLayer.children['mbsqt' + i];
      mbsqt_bounds_width[i] = itm.bounds.width;
    }

    run_once = false;
  }

  if (right_dir == true) {

    // bsqt items
    for (var i = BSQT_MAX_ITEMS_START; i <= BSQT_MAX_ITEMS_END; i++) {
      var item = project.activeLayer.children['bsqt' + i];
      item.position.x += bsqt_bounds_width[i] / 3000;

      if (item.position.x-view.size.width > view.size.width) {
        item.position.x = -view.size.width;
      }
      item.rotate(bsqt_bounds_width[i]/10000);
    }

    // mbsqt items: moving in opposite direction
    for (var i = MBSQT_MAX_ITEMS_START; i <= MBSQT_MAX_ITEMS_END; i++) {
      var item = project.activeLayer.children['mbsqt' + i];
      item.position.x -= mbsqt_bounds_width[i] / 3000;

      if (item.position.x < -view.size.width) {
        item.position.x = view.size.width + view.size.width;
      }
    }

  } else {

    // bsqt items
    for (var i = BSQT_MAX_ITEMS_START; i <= BSQT_MAX_ITEMS_END; i++) {
      var item = project.activeLayer.children['bsqt' + i];
      item.position.x -= bsqt_bounds_width[i] / 3000;

      if (item.position.x < -view.size.width) {
        item.position.x = view.size.width + view.size.width;
      }
      item.rotate(-bsqt_bounds_width[i]/10000);
    }

    // mbsqt items: moving in opposite direction
    for (var i =  MBSQT_MAX_ITEMS_START; i <= MBSQT_MAX_ITEMS_END; i++) {
      var item = project.activeLayer.children['mbsqt' + i];
      item.position.x += mbsqt_bounds_width[i] / 3000;

      if (item.position.x-view.size.width > view.size.width) {
        item.position.x = -view.size.width;
      }
    }

  }
}

onResize();



