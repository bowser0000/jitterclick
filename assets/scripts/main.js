(function (d) {
	d.addEventListener('DOMContentLoaded', function () {
		d.getElementsByClassName('container')[0].style['display'] = 'block';
		var button = d.getElementsByTagName('button')[0],
			clicker = d.getElementsByClassName('clicker')[0],
			time = d.getElementsByClassName('time')[0],
			clicks = d.getElementsByClassName('clicks')[0],
			best = d.getElementsByClassName('best')[0];
		var timer,
			remain = 60,
			clicked = 0,
			mostClicks = 0;
			if (Cookies.get('best')) {
				mostClicks = parseInt(Cookies.get('best'), 10);
				best.innerText = mostClicks;
			}
		button.addEventListener('click', function () {
			clicker.style['display'] = 'block';
			this.style['background-color'] = '#e00';
			this.innerText = 'Click anywhere';
			remain = 60;
			time.innerText = remain;
			clicked = 0;
			clicks.innerText = clicked;
			timer = setInterval(function () {
				remain--;
				time.innerText = remain;
				if (remain === 0) {
					clearInterval(timer);
					clicker.style['display'] = 'none';
					button.style['background-color'] = '#75C54F';
					button.innerText = 'Press to Start Again';
					if (clicked > mostClicks) {
						Cookies.set('best', clicked);
						best.innerText = clicked;
					}
				}
			}, 1000);
		});
		clicker.addEventListener('click', function () {
			clicked++;
			clicks.innerText = clicked;
		});
	});
})(document);
