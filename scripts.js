/**
 * Created by fpeyret on 25/01/17.
 */


$(document).ready(function () {

	// TweenMax.set($('#LUMIERE'), {
	// 	opacity: 0,
	// 	scaleX: 0.25,
	// 	scaleY: 0.25,
	// 	transformOrigin: "50% 100%",
	// 	ease:Power2.easeInOut
	// });

	TweenMax.from($('#bettoniere'), 1,{
		opacity:0,
		y:-50,
		ease:Bounce.easeOut
	});
	TweenMax.from($('#cone'), 1,{
		opacity:0,
		y:-50,
		ease:Bounce.easeOut,
		delay:0.6
	});
	TweenMax.from($('#echelle'), 1,{
		opacity:0,
		y:-50,
		ease:Bounce.easeOut,
		delay:0.3
	});
	TweenMax.from($('#barierre'), 1,{
		opacity:0,
		y:-50,
		ease:Bounce.easeOut,
		delay:0.9
	});
	TweenMax.from($('#rouleau'), 1,{
		opacity:0,
		y:-50,
		ease:Bounce.easeOut,
		delay:1.3
	});
	TweenMax.from($('#pot'), 1,{
		opacity:0,
		y:-50,
		ease:Bounce.easeOut,
		delay:1.6
	});

	TweenMax.from($('#LUMIERE .st1'), 2, {
		opacity: 0.2,
		scaleX: 0.25,
		scaleY: 0.25,
		transformOrigin: "50% 100%",
		delay: 2,
		ease:Power2.easeInOut
	});

	TweenMax.from($('#svg-sleigh'), 1.5, {
		opacity: 0,
		y:250,
		delay: 1.6,
		ease:Power2.easeInOut
	});

	TweenMax.to($('#tag-sleigh'), 2, {
		y: -20,
		repeat: -1,
		yoyo: true
	});

	$('html').on('mousemove',function(e){
		//console.log((e.pageX*100)/$(this).width());
		var x = (e.pageX*100)/$(this).width()-50;
		var y = (e.pageY*100)/$(this).height();

		//console.log(x);

		//console.log(e.pageY);
		TweenMax.set($('#LUMIERE,#svg-sleigh'), {
			x: x*0.2,
			//y: y-50,
		});
		TweenMax.set($('#bettoniere,#echelle'), {
			x: x*0.5,
			//y: y-50,
		});
		TweenMax.set($('#bettoniere,#barierre,#pot'), {
			x: x*0.6,
			//y: y-50,
		});
		TweenMax.set($('#rouleau'), {
			x: x*0.8,
			//y: y-50,
		});
		TweenMax.set($('#cone'), {
			x: x*1,
			//y: y-50,
		});
	});


});