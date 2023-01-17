var animation = bodymovin.loadAnimation({
  container: document.getElementById('bm'),
  renderer: 'svg',
  loop: true,
  autoplay: false,
  getDuration: true,
  path: '../../plant5v3.json'
  //path: 'https://api.jsonbin.io/b/5f8c1cac7243cd7e82509e1d'
})

var flies = bodymovin.loadAnimation({
  container: document.getElementById('bm2'),
  renderer: 'svg',
  loop: true,
  autoplay: false,
  getDuration: true,
  path: '../../fliesv1.json',
  //path: 'https://api.jsonbin.io/b/5f8c1cd77243cd7e82509e26'
})

var flies2 = bodymovin.loadAnimation({
  container: document.getElementById('bm4'),
  renderer: 'svg',
  loop: true,
  autoplay: false,
  getDuration: true,
  path: '../../fliesv1.json',
  //path: 'https://api.jsonbin.io/b/5f8c1cd77243cd7e82509e26'
})

var web = bodymovin.loadAnimation({
  container: document.getElementById('bm3'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  getDuration: true,
  path: '../../web.json',
  //path: 'https://api.jsonbin.io/b/5f8c1cfa6c1d5c58fe846443'
})


var wordOne = "Excellent", wordTwo = "Good", wordThree = "Okay", wordFour = "Bad", wordFive = "Terrible";

var myRange = document.getElementById("myRange");

myRange.addEventListener('mousemove', function() {
	animation.goToAndStop(this.value*21);
	
	if (this.value > 90) {
		
		flies.play();
	} else {
		flies.stop();
		
	}
});

myRange.addEventListener('mouseup', function() {
	
	if (this.value > 99) {
		web.setSpeed(2)
		web.setDirection(1);
		web.goToAndPlay(1);
	} else if (this.value == 99) {
		web.Stop();
	}
});

myRange.addEventListener('mousemove', function() {
	
	if (this.value < 99) {
		web.setDirection(-1);
		web.setSpeed(7)
		web.play(0);
		
	}
});


myRange.addEventListener('mousemove', function() {
	
	if (this.value >80) {
		document.getElementById('word').innerHTML = wordFive;
	} else if (this.value >60) {
		document.getElementById('word').innerHTML = wordFour;
	} else if (this.value >40) {
		document.getElementById('word').innerHTML = wordThree;
	} else if (this.value >20) {
		document.getElementById('word').innerHTML = wordTwo;
	} else {
		document.getElementById('word').innerHTML = wordOne;
	}
});
