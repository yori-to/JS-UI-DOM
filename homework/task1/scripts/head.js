(function() {
	var canvas = document.getElementById('canvas'),
		ctx = canvas.getContext('2d');


	ctx.fillStyle = '#90cad7';
	ctx.strokeStyle = '#22545f';
	ctx.lineWidth = 3;
	//face
	ctx.save();
	ctx.scale(1, 0.9);
	// ctx.beginPath();
	ctx.arc(300, 400, 112, 0, 2 * Math.PI);
	ctx.fill();
	ctx.stroke();
	ctx.restore();
	//eyes
	ctx.save();
	ctx.beginPath();
	ctx.scale(1, 0.6);
	ctx.arc(240, 575, 20, 0, 2 * Math.PI);
	ctx.stroke();
	ctx.restore();

	ctx.save();
	ctx.beginPath();
	ctx.scale(1, 0.6);
	ctx.arc(320, 575, 20, 0, 2 * Math.PI);
	ctx.stroke();
	ctx.restore();

	//zenici
	ctx.fillStyle = '#22545f';
	ctx.save();
	ctx.beginPath();
	ctx.scale(0.6, 1);
	ctx.arc(390, 345, 10, 0, 2 * Math.PI);
	ctx.fill();
	ctx.stroke();
	ctx.restore();

	ctx.fillStyle = '#22545f';
	ctx.save();
	ctx.beginPath();
	ctx.scale(0.6, 1);
	ctx.arc(525, 345, 10, 0, 2 * Math.PI);
	ctx.fill();
	ctx.stroke();
	ctx.restore();

	//nose
	ctx.save();
	ctx.beginPath();
	// ctx.moveTo(300, 345);
	ctx.lineTo(280, 345);
	ctx.lineTo(260, 380);
	ctx.lineTo(280, 380);
	ctx.stroke();
	ctx.restore();

	//mouth
	ctx.save();
	ctx.rotate(10 * Math.PI / 180);
	ctx.scale(1, 0.3);
	ctx.beginPath();
	ctx.arc(350, 1200, 40, 0, 2 * Math.PI);
	ctx.stroke();
	ctx.restore();

	//hat
	ctx.save();
	ctx.fillStyle = '#396693';
	ctx.strokeStyle = '#333333';
	ctx.lineWidth = 3;

	ctx.save();
	ctx.beginPath();
	ctx.scale(1, 0.3);
	ctx.arc(300, 900, 126, 0, 2 * Math.PI);
	ctx.fill();
	ctx.stroke();
	ctx.restore();

	//cyllynder
	ctx.beginPath();
	ctx.moveTo(240, 240);
	ctx.lineTo(240, 120);
	ctx.lineTo(360, 120);
	ctx.lineTo(360, 240);
	ctx.fill();
	ctx.stroke();
	

	ctx.save();
	ctx.scale(1, 0.3);
	ctx.moveTo(360, 120);
	ctx.beginPath();
	ctx.arc(300, 400, 60, 0, 2 * Math.PI);
	ctx.fill();
	ctx.stroke();
	ctx.restore();

	
	ctx.scale(1, 0.3);
	ctx.beginPath();
	ctx.arc(300, 800, 60, 0, Math.PI);
	ctx.fill();
	ctx.stroke();

}());