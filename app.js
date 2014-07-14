(function() {

	var logo = document.getElementById('logo'),
		audio = document.getElementById('audio'),
		body = document.body;

	function play() {
		if (audio.paused) {
			audio.play();
		} else {
			audio.currentTime = 0;
		}
	}

	logo.addEventListener('click', function() {
		logo.classList.add('pulsate');
		play();
	}, false);

	audio.addEventListener('ended', function() {
		logo.classList.remove('pulsate');
	}, false);

}());