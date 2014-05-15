$(function() {
	var size = 300;
	var num = 4;
	var two = new Two({
	  type: Two.Types.canvas,
	  width: size,
	  height: size
	});

	var a = two.makeLine(two.width / 2, 0, two.width / 2, two.height);
	var b = two.makeLine(0, two.height / 2, two.width, two.height / 2);
	a.linewidth = b.linewidth = 1;
	a.stroke = b.stroke = '#EAEAEA';
	for(var x = 0;x<num;x++)
	for(var y = 0;y<num;y++){
		var rect = two.makeRectangle(size/num*x+size/num *y-size/num, size/num *y+size/num-size/num*x+size/num,size/num*1.41421, size/num*1.41421);
		
		rect.fill = 'rgb('+((x+y)*5+215)+', '+((x+y)*5+215)+', '+((x+y)*5+215)+')';
		if(size/num*x+size/num *y-size/4 == size)
			rect.fill = 'rgb(220, 220, 220)';
		rect.opacity = 1;
		rect.noStroke();
		rect.rotation += .785398163;
		var cir = two.makeCircle(size/num*x+size/num *y-size/num, size/num *y+size/num-size/num*x+size/num,size/num/2);
		
		cir.fill = 'rgb('+(-(x+y)*5+240)+', '+(-(x+y)*5+240)+', '+(-(x+y)*5+240)+')';
		if(size/num*x+size/num *y-size/4 == size)
			cir.fill = 'rgb(235, 235, 235)';
		cir.noStroke();	
		cir.opacity = 1;
	}
	//	var rect = two.makeRectangle(15, 15,30, 30);
	//rect.fill = 'rgb(0, 22, 255)';
	//rect.opacity = 0.75;
	//rect.noStroke();
	two.update();

	
	  $(document.body).css({
		background: 'url(' + two.renderer.domElement.toDataURL('image/png') + ') 0 0 repeat',
		backgroundSize: size + 'px ' + size + 'px'
	  });
	

});