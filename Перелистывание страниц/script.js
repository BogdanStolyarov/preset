const progress = document.getElementById('progress');
const prew = document.getElementById('btnPrev');
const next = document.getElementById('btnNext');
const circles = document.querySelectorAll('.circle');

let currentValue = 1;

next.addEventListener('click', function () {
	currentValue++;
	if (currentValue > circles.length) {
		currentValue = circles.length;
	}
	update();
});
prew.addEventListener('click', function () {
	currentValue--;
	if (currentValue < 1) {
		currentValue = 1;
	}
	update();
});

function update() {
	circles.forEach((circle, index) => {
		if (index < currentValue) {
			circle.classList.add('active');
		} else {
			circle.classList.remove('active');
		}
	});
	const actives = document.querySelectorAll('.active');
	progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

	if (currentValue === circles.length) {
		next.disabled = true;
	} else if (currentValue <= 1) {
		prew.disabled = true;
	} else {
		next.disabled = false;
		prew.disabled = false;
	}

}