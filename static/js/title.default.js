$(function() {

          var type = 'svg';
          var two = new Two({
            type: Two.Types[type],
			width : 1600,
			height : 400,
            autostart: true
          }).appendTo(contentheaderbackground);
		  
		  var rec1 = two.makeRectangle(425, 70, 310,420);
		  rec1.noStroke().fill = 'rgba(126, 62, 152, 1)';
		  
		  rec1.rotation += .785398163;
		  var rec1 = two.makeRectangle(200, 237, 120,120);
		  
		  rec1.noStroke().fill = 'rgba(173, 0, 0, 1)';
		  rec1.rotation += .785398163;
		  var rec1 = two.makeRectangle(648, 160, 120,120);
		  rec1.noStroke().fill = 'rgba(0, 147, 208, 1)';
		  rec1.rotation += .785398163;
		  var rec1 = two.makeRectangle(738, 113, 60,60);
		  rec1.noStroke().fill = 'rgba(111, 206, 244, 1)';
		  rec1.rotation += .785398163;
});