

// block drag event
document.getElementById("canvas").ontouchstart = function (e) {
  return false;
};
document.getElementById("canvas").ontouchmove = function (e) {
  return false;
};

// this new layer is automatically activated
var layer = new Layer();   

//var origWidth = view.size.getWidth();
var origWidth = 1200; // keep aspect ratio how the paiting was drawn
var origHeight = 800; //view.size.getHeight();

/**
 *
 */
function Wall() {

  this.wall = new Path.Rectangle(new Point(0, 0), new Size(origWidth, origHeight-150));
  
  this.wall.strokeColor = '#000000';
  this.wall.fillColor = '#ca2633';
  this.wall.strokeWidth = (view.size.getWidth() * 2) / origWidth; 
  this.wall.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.wall.firstSegment);
}


/**
 *
 */
function Girl() {

  this.body = new Path();
  this.body.add(new Point(220, 369));
  this.body.add(new Point(140, 375));
  this.body.add(new Point(140, 520));
  this.body.add(new Point(210, 520));
  this.body.closed = true;
  this.body.strokeColor = '#000000';
  this.body.fillColor = '#f0dd33';
  this.body.strokeWidth = (view.size.getWidth() * 2) / origWidth; 
  this.body.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.body.firstSegment);

  this.heart = new Path();
  this.heart.add(new Point(190, 460));
  this.heart.curveTo(new Point(170, 410), new Point(190, 420));
  this.heart.curveTo(new Point(208, 410), new Point(190, 460));
  //this.heart.closed = true;
  this.heart.strokeColor = '#000000';
  this.heart.fillColor = '#ca2633';
  this.heart.strokeWidth = (view.size.getWidth() * 2) / origWidth; 
  this.heart.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.heart.firstSegment);

  this.skirt = new Path();
  this.skirt.add(new Point(110, 580));
  this.skirt.add(new Point(240, 580)); 
  this.skirt.add(new Point(210, 520)); 
  this.skirt.add(new Point(140, 520)); 
  this.skirt.closed = true;
  this.skirt.strokeColor = '#000000';
  this.skirt.fillColor = '#FFFFFF';
  this.skirt.strokeWidth = (view.size.getWidth() * 2) / origWidth; 
  this.skirt.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.skirt.firstSegment);

  this.left_leg = new Path();
  this.left_leg.strokeColor = '#000000';
  this.left_leg.strokeWidth = (view.size.getWidth() * 2) / origWidth;
  this.left_leg.add(new Point(140, 580));
  this.left_leg.add(new Point(148, 780));
  this.left_leg.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.left_leg.firstSegment);

  this.right_leg = new Path();
  this.right_leg.strokeColor = '#000000';
  this.right_leg.strokeWidth = (view.size.getWidth() * 2) / origWidth;
  this.right_leg.add(new Point(210, 580));
  this.right_leg.add(new Point(203, 780));
  this.right_leg.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.right_leg.firstSegment);

  this.head = new Path();
  this.head.strokeColor = '#000000';
  this.head.fillColor = '#FFFFFF';
  this.head.strokeWidth = (view.size.getWidth() * 2) / origWidth; 
  this.head.add(new Point(120, 335));
  this.head.add(new Point(190, 285));
  this.head.add(new Point(260, 345));
  this.head.add(new Point(180, 385));
  this.head.closed = true;
  this.head.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.head.firstSegment);
  this.head.smooth();

  this.hair_0 = new Path.Arc(new Point(146, 300), new Point(137, 285), new Point(120, 275));
  this.hair_0.strokeColor = '#000000';
  this.hair_0.strokeWidth = (view.size.getWidth() * 2) / origWidth;
  this.hair_0.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.hair_0.firstSegment);

  this.hair_1 = new Path.Arc(new Point(176, 285), new Point(170, 265), new Point(160, 255));
  this.hair_1.strokeColor = '#000000';
  this.hair_1.strokeWidth = (view.size.getWidth() * 2) / origWidth;
  this.hair_1.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.hair_1.firstSegment);

  this.hair_2 = new Path.Arc(new Point(210, 290), new Point(202, 265), new Point(196, 260));
  this.hair_2.strokeColor = '#000000';
  this.hair_2.strokeWidth = (view.size.getWidth() * 2) / origWidth;
  this.hair_2.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.hair_2.firstSegment);

  this.hair_3 = new Path.Arc(new Point(230, 300), new Point(235, 285), new Point(246, 278));
  this.hair_3.strokeColor = '#000000';
  this.hair_3.strokeWidth = (view.size.getWidth() * 2) / origWidth;
  this.hair_3.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.hair_3.firstSegment);

  this.left_eye = new Path.Circle(new Point(155, 315), 2); 
  this.left_eye.strokeColor = '#000000';
  this.left_eye.strokeWidth = (view.size.getWidth() * 2) / origWidth; 
  this.left_eye.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.left_eye.firstSegment);

  this.right_eye = new Path.Circle(new Point(240, 325), 2); 
  this.right_eye.strokeColor = '#000000';
  this.right_eye.strokeWidth = (view.size.getWidth() * 2) / origWidth; 
  this.right_eye.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.right_eye.firstSegment);

  this.mouth = new Path.Arc(new Point(140, 355), new Point(190, 375), new Point(245, 355)); 
  this.mouth.strokeColor = '#000000';
  this.mouth.strokeWidth = (view.size.getWidth() * 2) / origWidth; 
  this.mouth.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.mouth.firstSegment);

  this.left_hand = new Path();
  this.left_hand.add(new Point(140, 375));
  this.left_hand.curveTo(new Point(150, 450), new Point(240, 510));
  this.left_hand.strokeColor = '#000000';
  this.left_hand.strokeWidth = (view.size.getWidth() * 2) / origWidth; 
  this.left_hand.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.left_hand.firstSegment);

  this.right_hand = new Path();
  this.right_hand.add(new Point(227, 378));
  this.right_hand.curveTo(new Point(250, 440), new Point(300, 480));
  this.right_hand.strokeColor = '#000000';
  this.right_hand.strokeWidth = (view.size.getWidth() * 2) / origWidth; 
  this.right_hand.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.right_hand.firstSegment);

  this.left_hand_finger_0 = new Path();
  this.left_hand_finger_0.add(new Point(240, 510));
  this.left_hand_finger_0.add(new Point(244, 530));
  this.left_hand_finger_0.strokeColor = '#000000';
  this.left_hand_finger_0.strokeWidth = (view.size.getWidth() * 2) / origWidth; 
  this.left_hand_finger_0.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.left_hand_finger_0.firstSegment);

  this.left_hand_finger_1 = new Path();
  this.left_hand_finger_1.add(new Point(240, 510));
  this.left_hand_finger_1.add(new Point(254, 520));
  this.left_hand_finger_1.strokeColor = '#000000';
  this.left_hand_finger_1.strokeWidth = (view.size.getWidth() * 2) / origWidth; 
  this.left_hand_finger_1.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.left_hand_finger_1.firstSegment);

  this.left_hand_finger_2 = new Path();
  this.left_hand_finger_2.add(new Point(240, 510));
  this.left_hand_finger_2.add(new Point(262, 510));
  this.left_hand_finger_2.strokeColor = '#000000';
  this.left_hand_finger_2.strokeWidth = (view.size.getWidth() * 2) / origWidth; 
  this.left_hand_finger_2.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.left_hand_finger_2.firstSegment);

  this.right_hand_finger_0 = new Path();
  this.right_hand_finger_0.add(new Point(300, 480));
  this.right_hand_finger_0.add(new Point(304, 500));
  this.right_hand_finger_0.strokeColor = '#000000';
  this.right_hand_finger_0.strokeWidth = (view.size.getWidth() * 2) / origWidth; 
  this.right_hand_finger_0.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.right_hand_finger_0.firstSegment);

  this.right_hand_finger_1 = new Path();
  this.right_hand_finger_1.add(new Point(300, 480));
  this.right_hand_finger_1.add(new Point(315, 490));
  this.right_hand_finger_1.strokeColor = '#000000';
  this.right_hand_finger_1.strokeWidth = (view.size.getWidth() * 2) / origWidth; 
  this.right_hand_finger_1.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.right_hand_finger_1.firstSegment);

  this.right_hand_finger_2 = new Path();
  this.right_hand_finger_2.add(new Point(300, 480));
  this.right_hand_finger_2.add(new Point(322, 480));
  this.right_hand_finger_2.strokeColor = '#000000';
  this.right_hand_finger_2.strokeWidth = (view.size.getWidth() * 2) / origWidth; 
  this.right_hand_finger_2.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.right_hand_finger_2.firstSegment);

}

/*Girl.prototype.getBodyPath = function() {
  return this.body;
}
 
Girl.prototype.getHeartPath = function() {
  return this.heart;
}

Girl.prototype.getSkirtPath = function() {
  return this.skirt;
}*/

/*paper.Path.inject({
  getOrigPosition: function() {
    return orig_position;
  },
  setOrigPosition: function(pos) {
    orig_position = pos;
  }
});*/

/**
 *
 */
function Devil() {
 
  this.body = new Path();
  this.body.strokeColor = '#000000';
  this.body.fillColor = '#000000';
  this.body.strokeWidth = (view.size.getWidth() * 2) / origWidth;       
  this.body.add(new Point(740, 190));
  this.body.add(new Point(845, 188));
  this.body.add(new Point(835, 530));
  this.body.add(new Point(750, 530));
  this.body.closed = true;
  this.body.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.body.firstSegment);

  this.left_leg = new Path();
  this.left_leg.strokeColor = '#000000';
  this.left_leg.strokeWidth = (view.size.getWidth() * 2) / origWidth;       
  this.left_leg.add(new Point(750, 530));
  this.left_leg.add(new Point(754, 800));
  this.left_leg.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.left_leg.firstSegment);

  this.right_leg = new Path();
  this.right_leg.strokeColor = '#000000';
  this.right_leg.strokeWidth = (view.size.getWidth() * 2) / origWidth;       
  this.right_leg.add(new Point(835, 530));
  this.right_leg.add(new Point(830, 800));
  this.right_leg.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.right_leg.firstSegment);

  this.head = new Path();
  this.head.strokeColor = '#000000';
  this.head.fillColor = '#FFFFFF';
  this.head.strokeWidth = (view.size.getWidth() * 2) / origWidth;
  this.head.add(new Point(760, 100));
  this.head.add(new Point(840, 120));
  this.head.add(new Point(850, 190));
  this.head.add(new Point(800, 210)); 
  this.head.add(new Point(790, 295)); // chin
  this.head.add(new Point(740, 300)); // chin
  this.head.add(new Point(730, 220)); // chin
  this.head.add(new Point(670, 200));
  this.head.add(new Point(680, 135));
  this.head.closed = true;
  this.head.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.head.firstSegment);

  this.left_eye = new Path();
  this.left_eye.strokeColor = '#000000';
  this.left_eye.fillColor = '#000000';
  this.left_eye.strokeWidth = (view.size.getWidth() * 2) / origWidth;
  this.left_eye.add(new Point(712, 138));
  this.left_eye.add(new Point(729, 176));
  this.left_eye.add(new Point(712, 192));
  this.left_eye.add(new Point(692, 176));
  this.left_eye.closed = true;
  this.left_eye.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.left_eye.firstSegment);
  this.left_eye.smooth();

  this.right_eye = new Path();
  this.right_eye.strokeColor = '#000000';
  this.right_eye.fillColor = '#000000';
  this.right_eye.strokeWidth = (view.size.getWidth() * 2) / origWidth;
  this.right_eye.add(new Point(825, 130));
  this.right_eye.add(new Point(833, 150));
  this.right_eye.add(new Point(820, 150));
  this.right_eye.closed = true;
  this.right_eye.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.right_eye.firstSegment);
  this.right_eye.smooth();

  this.nose = new Path();
  this.nose.strokeColor = '#000000';
  this.nose.fillColor = '#000000';
  this.nose.strokeWidth = (view.size.getWidth() * 2) / origWidth;
  this.nose.add(new Point(780, 185));
  this.nose.add(new Point(785, 200));
  this.nose.add(new Point(776, 200));
  this.nose.closed = true;
  this.nose.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.nose.firstSegment);

  this.mouth = new Path();
  this.mouth.strokeColor = '#000000';
  this.mouth.fillColor = '#000000';
  this.mouth.strokeWidth = (view.size.getWidth() * 2) / origWidth;
  this.mouth.add(new Point(745, 265));
  this.mouth.add(new Point(792, 268));
  this.mouth.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.mouth.firstSegment);

  this.mouth_cross_0 = new Path();
  this.mouth_cross_0.strokeColor = '#000000';
  this.mouth_cross_0.strokeWidth = (view.size.getWidth() * 2) / origWidth;
  this.mouth_cross_0.add(new Point(745, 255));
  this.mouth_cross_0.add(new Point(745, 275));
  this.mouth_cross_0.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.mouth_cross_0.firstSegment);

  this.mouth_cross_1 = new Path();
  this.mouth_cross_1.strokeColor = '#000000';
  this.mouth_cross_1.strokeWidth = (view.size.getWidth() * 2) / origWidth;
  this.mouth_cross_1.add(new Point(755, 255));
  this.mouth_cross_1.add(new Point(754, 275));
  this.mouth_cross_1.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.mouth_cross_1.firstSegment);

  this.mouth_cross_2 = new Path();
  this.mouth_cross_2.strokeColor = '#000000';
  this.mouth_cross_2.strokeWidth = (view.size.getWidth() * 2) / origWidth;
  this.mouth_cross_2.add(new Point(765, 255));
  this.mouth_cross_2.add(new Point(764, 275));
  this.mouth_cross_2.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.mouth_cross_2.firstSegment);

  this.mouth_cross_3 = new Path();
  this.mouth_cross_3.strokeColor = '#000000';
  this.mouth_cross_3.strokeWidth = (view.size.getWidth() * 2) / origWidth;
  this.mouth_cross_3.add(new Point(775, 257));
  this.mouth_cross_3.add(new Point(774, 277));
  this.mouth_cross_3.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.mouth_cross_3.firstSegment);

  this.mouth_cross_4 = new Path();
  this.mouth_cross_4.strokeColor = '#000000';
  this.mouth_cross_4.strokeWidth = (view.size.getWidth() * 2) / origWidth;
  this.mouth_cross_4.add(new Point(785, 257));
  this.mouth_cross_4.add(new Point(784, 277));
  this.mouth_cross_4.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.mouth_cross_4.firstSegment);

  this.left_hand = new Path();
  this.left_hand.add(new Point(700, 210));
  this.left_hand.curveTo(new Point(655, 310), new Point(660, 440));
  this.left_hand.strokeColor = '#000000';
  this.left_hand.strokeWidth = (view.size.getWidth() * 2) / origWidth; 
  this.left_hand.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.left_hand.firstSegment);

  this.left_hand_finger_0 = new Path();
  this.left_hand_finger_0.add(new Point(660, 440));
  this.left_hand_finger_0.add(new Point(645, 470));
  this.left_hand_finger_0.strokeColor = '#000000';
  this.left_hand_finger_0.strokeWidth = (view.size.getWidth() * 2) / origWidth; 
  this.left_hand_finger_0.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.left_hand_finger_0.firstSegment);

  this.left_hand_finger_1 = new Path();
  this.left_hand_finger_1.add(new Point(660, 440));
  this.left_hand_finger_1.add(new Point(665, 470));
  this.left_hand_finger_1.strokeColor = '#000000';
  this.left_hand_finger_1.strokeWidth = (view.size.getWidth() * 2) / origWidth; 
  this.left_hand_finger_1.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.left_hand_finger_1.firstSegment);

  this.left_hand_finger_2 = new Path();
  this.left_hand_finger_2.add(new Point(660, 440));
  this.left_hand_finger_2.add(new Point(685, 467));
  this.left_hand_finger_2.strokeColor = '#000000';
  this.left_hand_finger_2.strokeWidth = (view.size.getWidth() * 2) / origWidth; 
  this.left_hand_finger_2.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.left_hand_finger_2.firstSegment);


  this.right_hand = new Path();
  this.right_hand.add(new Point(848, 190));
  this.right_hand.curveTo(new Point(872, 360), new Point(860, 500));
  this.right_hand.strokeColor = '#000000';
  this.right_hand.strokeWidth = (view.size.getWidth() * 2) / origWidth; 
  this.right_hand.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.right_hand.firstSegment);

  this.right_hand_finger_0 = new Path();
  this.right_hand_finger_0.add(new Point(860, 500));
  this.right_hand_finger_0.add(new Point(850, 520));
  this.right_hand_finger_0.strokeColor = '#000000';
  this.right_hand_finger_0.strokeWidth = (view.size.getWidth() * 2) / origWidth; 
  this.right_hand_finger_0.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.right_hand_finger_0.firstSegment);

  this.right_hand_finger_1 = new Path();
  this.right_hand_finger_1.add(new Point(860, 500));
  this.right_hand_finger_1.add(new Point(860, 538));
  this.right_hand_finger_1.strokeColor = '#000000';
  this.right_hand_finger_1.strokeWidth = (view.size.getWidth() * 2) / origWidth; 
  this.right_hand_finger_1.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.right_hand_finger_1.firstSegment);

  this.right_hand_finger_2 = new Path();
  this.right_hand_finger_2.add(new Point(860, 500));
  this.right_hand_finger_2.add(new Point(870, 535));
  this.right_hand_finger_2.strokeColor = '#000000';
  this.right_hand_finger_2.strokeWidth = (view.size.getWidth() * 2) / origWidth; 
  this.right_hand_finger_2.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.right_hand_finger_2.firstSegment);
}

Devil.prototype.getBody = function() {
  return this.body;
}

/**
 *
 */
function Picture() {

  //this.frame_hanger = new Path();
  //this.frame_hanger.add(new Point(110, 70));
  //this.frame_hanger.add(new Point(190, 30));
  //this.frame_hanger.add(new Point(270, 70));
  //this.frame_hanger.strokeColor = '#000000';
  //this.frame_hanger.strokeWidth = (view.size.getWidth() * 2) / origWidth;
  //this.frame_hanger.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.frame_hanger.firstSegment);
 
  this.frame = new Path.Rectangle(new Point(80, 70), new Size(220, 150));
  this.frame.strokeColor = '#000000';
  this.frame.fillColor = '#FFFFFF';
  this.frame.strokeWidth = (view.size.getWidth() * 2) / origWidth;
  this.frame.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.frame.firstSegment);

}


/**
 *
 */
function Flower() {

  this.flower_leaf_0 = new Path();
  this.flower_leaf_0.add(new Point(690, 350));
  this.flower_leaf_0.curveTo(new Point(700, 320), new Point(706, 353));
  this.flower_leaf_0.closed = true;
  this.flower_leaf_0.strokeColor = '#000000';
  this.flower_leaf_0.fillColor = '#FFFFFF';
  this.flower_leaf_0.strokeWidth = (view.size.getWidth() * 2) / origWidth; 
  this.flower_leaf_0.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.flower_leaf_0.firstSegment);

  this.flower_leaf_1 = new Path();
  this.flower_leaf_1.add(new Point(705, 350));
  this.flower_leaf_1.curveTo(new Point(735, 355), new Point(708, 363));
  this.flower_leaf_1.closed = true;
  this.flower_leaf_1.strokeColor = '#000000';
  this.flower_leaf_1.fillColor = '#FFFFFF';
  this.flower_leaf_1.strokeWidth = (view.size.getWidth() * 2) / origWidth; 
  this.flower_leaf_1.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.flower_leaf_1.firstSegment);

  this.flower_leaf_2 = new Path();
  this.flower_leaf_2.add(new Point(706, 365));
  this.flower_leaf_2.curveTo(new Point(730, 395), new Point(698, 370));
  this.flower_leaf_2.closed = true;
  this.flower_leaf_2.strokeColor = '#000000';
  this.flower_leaf_2.fillColor = '#FFFFFF';
  this.flower_leaf_2.strokeWidth = (view.size.getWidth() * 2) / origWidth; 
  this.flower_leaf_2.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.flower_leaf_2.firstSegment);

  this.flower_leaf_3 = new Path();
  this.flower_leaf_3.add(new Point(703, 372));
  this.flower_leaf_3.curveTo(new Point(678, 395), new Point(692, 363));
  this.flower_leaf_3.closed = true;
  this.flower_leaf_3.strokeColor = '#000000';
  this.flower_leaf_3.fillColor = '#FFFFFF';
  this.flower_leaf_3.strokeWidth = (view.size.getWidth() * 2) / origWidth; 
  this.flower_leaf_3.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.flower_leaf_3.firstSegment);

  this.flower_leaf_4 = new Path();
  this.flower_leaf_4.add(new Point(689, 365));
  this.flower_leaf_4.curveTo(new Point(665, 350), new Point(693, 350));
  this.flower_leaf_4.closed = true;
  this.flower_leaf_4.strokeColor = '#000000';
  this.flower_leaf_4.fillColor = '#FFFFFF';
  this.flower_leaf_4.strokeWidth = (view.size.getWidth() * 2) / origWidth; 
  this.flower_leaf_4.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.flower_leaf_4.firstSegment);

  this.flower_circle = new Path.Circle(new Point(700, 360), 9);
  this.flower_circle.strokeColor = '#000000';
  this.flower_circle.fillColor = '#f0dd33';
  this.flower_circle.strokeWidth = (view.size.getWidth() * 2) / origWidth; 
  this.flower_circle.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.flower_circle.firstSegment);

  this.flower_stem = new Path();
  this.flower_stem.add(new Point(692, 385));
  this.flower_stem.curveTo(new Point(670, 430), new Point(650, 500));
  this.flower_stem.strokeColor = '#000000';
  this.flower_stem.strokeWidth = (view.size.getWidth() * 2) / origWidth; 
  this.flower_stem.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.flower_stem.firstSegment);


}

/**
 *
 */
function PictureSceneZero() {

  this.scene0 = new Path.Rectangle(new Point(80, 190), new Size(220, 30));
  this.scene0.strokeColor = '#000000';
  this.scene0.fillColor = '#000000';
  this.scene0.strokeWidth = (view.size.getWidth() * 2) / origWidth;
  this.scene0.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.scene0.firstSegment);

  this.cross00 = new Path();
  this.cross00.add(new Point(120, 190)); 
  this.cross00.add(new Point(110, 130)); 
  this.cross00.strokeColor = '#000000';
  this.cross00.strokeWidth = (view.size.getWidth() * 2) / origWidth;
  this.cross00.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.cross00.firstSegment);

  this.cross01 = new Path();
  this.cross01.add(new Point(100, 150)); 
  this.cross01.add(new Point(127, 140)); 
  this.cross01.strokeColor = '#000000';
  this.cross01.strokeWidth = (view.size.getWidth() * 2) / origWidth;
  this.cross01.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.cross01.firstSegment);

  this.cross10 = new Path();
  this.cross10.add(new Point(140, 190)); 
  this.cross10.add(new Point(145, 90)); 
  this.cross10.strokeColor = '#000000';
  this.cross10.strokeWidth = (view.size.getWidth() * 2) / origWidth;
  this.cross10.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.cross10.firstSegment);

  this.cross11 = new Path();
  this.cross11.add(new Point(125, 110)); 
  this.cross11.add(new Point(165, 115)); 
  this.cross11.strokeColor = '#000000';
  this.cross11.strokeWidth = (view.size.getWidth() * 2) / origWidth;
  this.cross11.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.cross11.firstSegment);

  this.cross20 = new Path();
  this.cross20.add(new Point(155, 190)); 
  this.cross20.add(new Point(170, 150)); 
  this.cross20.strokeColor = '#000000';
  this.cross20.strokeWidth = (view.size.getWidth() * 2) / origWidth;
  this.cross20.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.cross20.firstSegment);

  this.cross21 = new Path();
  this.cross21.add(new Point(150, 160)); 
  this.cross21.add(new Point(182, 165)); 
  this.cross21.strokeColor = '#000000';
  this.cross21.strokeWidth = (view.size.getWidth() * 2) / origWidth;
  this.cross21.scale(((view.size.getWidth() * 100) / origWidth) / 100, /*((view.size.getHeight() * 100) / origHeight) / 100,*/ this.cross21.firstSegment);

}

var wall;
var picture;
var pictureScene0;
var girl;
var devil;
var flower;

/**
 *
 */
function onResize(event) {
 
  layer.removeChildren();

  wall = new Wall();
  picture = new Picture();
  pictureScene0 = new PictureSceneZero();

  girl = new Girl();
  devil = new Devil();

  flower = new Flower();

}


var right_dir = true;
var run_once = true;
var bounds_width = Array();
var stop = true;
setTimeout(function() {stop = false;}, 3000);

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
    for (var i = 0; i < 58; i++) {
      var itm = project.activeLayer.children[i];
      bounds_width[i] = itm.bounds.width;
    }
    run_once = false;
  }

  if (right_dir == true) {

    // background
    var bkg_item = project.activeLayer.children[0]; 
    bkg_item.position.x += 0.1;
    if (bkg_item.position.x-view.size.width > view.size.width) {
      bkg_item.position.x = -view.size.width;
    }
    bkg_item.rotate(0.02);

    // items
    for (var i = 1; i < 58; i++) {
      var item = project.activeLayer.children[i];
      item.position.x += bounds_width[i] / 300;

      if (item.position.x-view.size.width > view.size.width) {
        item.position.x = -view.size.width;
      }
      item.rotate(bounds_width[i]/1000);
    }

  } else {

    // background
    var bkg_item = project.activeLayer.children[0]; 
    bkg_item.position.x -= 0.1;
    if (bkg_item.position.x < -view.size.width) {
      bkg_item.position.x = view.size.width + view.size.width;
    }
    bkg_item.rotate(-0.02);

    // items
    for (var i = 1; i < 58; i++) {
      var item = project.activeLayer.children[i];
      item.position.x -= bounds_width[i] / 300;

      if (item.position.x < -view.size.width) {
        item.position.x = view.size.width + view.size.width;
      }
      item.rotate(-bounds_width[i]/1000);
    }
  }
}

onResize();



