(function (d) {
	d.addEventListener('DOMContentLoaded', function () {
		d.getElementsByClassName('container')[0].style['display'] = 'block';
		var button = d.getElementsByTagName('button')[0],
			clicker = d.getElementsByClassName('clicker')[0];
			time = d.getElementsByClassName('time')[0],
			clicks = d.getElementsByClassName('clicks')[0];
		button.addEventListener('click', function () {
			clicker.style['display'] = 'block';
			this.style['background-color'] = '#e00';
			this.innerText = 'Click anywhere on the screen';
			this.className = 'after';
		});
		clicker.addEventListener('click', function () {
			alert('It works!');
		});
	});
})(document);
