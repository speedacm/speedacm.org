$(function() {

          var type = 'svg';
          var two = new Two({
            type: Two.Types[type],
			width : 1600,
			height : 400,
            autostart: true
          }).appendTo(test);
		 
		  createGrid();
          var SX =  two.width / 2-5;
		  var SY =  two.height / 2-5;
		  var PX =  two.width / 2;
		  var PY =  two.height / 2;
		  var AY = -100;
		  
		  var line1 = two.makeLine(130, 200, 330, 200);
		  line1.noStroke().stroke = 'rgba(210, 210, 210, 1)';
		  line1.linewidth = 4;
		  var line2 = two.makeLine(330, 200, 330, 50);	
		  line2.noStroke().stroke = 'rgba(210, 210, 210, 1)';
		  line2.linewidth = 4;
		  var line3 = two.makeLine(350, 370, 350, 50);	
		  line3.noStroke().stroke = 'rgba(210, 210, 210, 1)';
		  line3.linewidth = 4;
		   var line4 = two.makeLine(630, 390, 920, 390);	
		  line4.noStroke().stroke = 'rgba(210, 210, 210, 1)';
		  line4.linewidth = 4;
		   var line4 = two.makeLine(920, 390, 920, 0);	
		  line4.noStroke().stroke = 'rgba(210, 210, 210, 1)';
		  line4.linewidth = 4;
		  var line4 = two.makeLine(1070, 300, 960, 300);	
		  line4.noStroke().stroke = 'rgba(210, 210, 210, 1)';
		  line4.linewidth = 4;
		   var line4 = two.makeLine(960, 300, 960, 0);	
		  line4.noStroke().stroke = 'rgba(210, 210, 210, 1)';
		  line4.linewidth = 4;
		  var line4 = two.makeLine(1460, 330, 1300, 330);	
		  line4.noStroke().stroke = 'rgba(210, 210, 210, 1)';
		  line4.linewidth = 4;
		   var line4 = two.makeLine(1300, 330, 1300, 80);	
		  line4.noStroke().stroke = 'rgba(210, 210, 210, 1)';
		  line4.linewidth = 4;
		  var line4 = two.makeLine(1070, 350, 1260, 350);	
		  line4.noStroke().stroke = 'rgba(210, 210, 210, 1)';
		  line4.linewidth = 4;
		   var line4 = two.makeLine(1260, 350, 1260, 80);	
		  line4.noStroke().stroke = 'rgba(210, 210, 210, 1)';
		  line4.linewidth = 4;
		  var line4 = two.makeLine(940, 90, 680, 90);	
		  line4.noStroke().stroke = 'rgba(210, 210, 210, 1)';
		  line4.linewidth = 4;
		  
		  var line4 = two.makeLine(680, 150, 530, 150);	
		  line4.noStroke().stroke = 'rgba(210, 210, 210, 1)';
		  line4.linewidth = 4;
		  var line4 = two.makeLine(530, 150, 530, 0);	
		  line4.noStroke().stroke = 'rgba(210, 210, 210, 1)';
		  line4.linewidth = 4;
		  
		  var triangle = two.makePolygon(740, 90, 755, 80, 755, 100);
		  triangle.noStroke().fill = 'rgba(210, 210, 210, 1)';
		  
		  var triangle = two.makePolygon(960, 145, 970, 160, 950, 160);
		  triangle.noStroke().fill = 'rgba(210, 210, 210, 1)';
		  var triangle = two.makePolygon(920, 145, 930, 160, 910, 160);
		  triangle.noStroke().fill = 'rgba(210, 210, 210, 1)';
		  var triangle = two.makePolygon(350, 320, 360, 305, 340, 305);
		  triangle.noStroke().fill = 'rgba(210, 210, 210, 1)';
		  var triangle = two.makePolygon(1125, 350, 1140, 340, 1140, 360);
		  triangle.noStroke().fill = 'rgba(210, 210, 210, 1)';
		  var triangle = two.makePolygon(1400, 330, 1385, 340, 1385, 320);
		  triangle.noStroke().fill = 'rgba(210, 210, 210, 1)';
		  var triangle = two.makePolygon(180, 200, 195, 210, 195, 190);
		  triangle.noStroke().fill = 'rgba(210, 210, 210, 1)';
		  
          var back1 = two.makeRectangle(PX/2, PY/2-AY/2, SX,SY-AY);
		  var back2 = two.makeRectangle(PX/2, PY+PY/2-AY/2, SX,SY+AY);
		  var back3 = two.makeRectangle(PX+PX/2, PY/2, SX,SY);
		  var back4 = two.makeRectangle(PX+PX/2, PY+PY/2, SX,SY);
          back1.noStroke().fill = 'rgba(120, 210, 255, 0.33)';
		  back2.noStroke().fill = 'rgba(210, 120, 255, 0.33)';
		  back3.noStroke().fill = 'rgba(255, 210, 120, 0.33)';
		  back4.noStroke().fill = 'rgba(120, 120, 255, 0.33)';
		  
		  createData(130, 200, 100,170,"l","m","h"); 
		  createData(350, 50, 100,170,"l","m","h"); 
		  createData(680, 150, 120,180,"l","m","h"); 
		  
		  createData(370, 370, 120,100,"m","l","h"); 
		  createData(630, 390, 110,100,"m","l","h"); 
		  
		  createData(1070, 330, 110,170,"l","l","h"); 
		  createData(1460, 330, 120,200,"l","l","h"); 
		  
		  createData(940, 60, 110,170,"h","m","l"); 
		  createData(1280, 80, 120,190,"h","m","l"); 

		  function createData(x,y,w,h,r,g,b) {
				var fr =0, fg = 0, fb =0;
				var sr =0, sg = 0, sb =0;
				if(r=="l"){fr = 190;sr=120;}
				if(r=="m"){fr = 232;sr=210;}
				if(r=="h"){fr = 253;sr=255;}
				if(b=="l"){fb = 190;sb=120;}
				if(b=="m"){fb = 232;sb=210;}
				if(b=="h"){fb = 253;sb=255;}
				if(g=="l"){fg = 190;sg=120;}
				if(g=="m"){fg = 232;sg=210;}
				if(g=="h"){fg = 253;sg=255;}
				var data = two.makeRectangle(x,y,w,h);
				data.noStroke().fill = 'rgba('+fr+', '+fg+', '+fb+', 1)';
				data.noStroke().stroke = 'rgba('+sr+', '+sg+', '+sb+', 1)';
				data.linewidth = 3;
				data = two.makeRectangle(x,y-(h/2-19),w-18,23);
				data.noStroke().fill = 'rgba('+sr+', '+sg+', '+sb+', .2)';
				data = two.makeRectangle(x,y+15,w-18,h-48);
				data.noStroke().fill = 'rgba('+sr+', '+sg+', '+sb+', .2)';
		  }		   
	      function createGrid() {

            var size = 30;
            var two = new Two({
              type: Two.Types.canvas,
              width: size,
              height: size
            });

            var a = two.makeLine(two.width / 2, 0, two.width / 2, two.height);
            var b = two.makeLine(0, two.height / 2, two.width, two.height / 2);
			a.linewidth = b.linewidth = 1;
            a.stroke = b.stroke = '#EAEAEA';

            two.update();

            _.defer(function() {
              $(document.body).css({
                background: 'url(' + two.renderer.domElement.toDataURL('image/png') + ') 0 0 repeat',
                backgroundSize: size + 'px ' + size + 'px'
              });
            });

          }
      });