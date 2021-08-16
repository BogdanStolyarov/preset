const clc = document.querySelector('.cancel');
const arr = document.querySelector('.arr_container');
const left = document.querySelector('.left-container');

arr.addEventListener('click', () => {
	arr.classList.add('active_arr');
	if (left.classList.contains('off')) {
		left.classList.remove('off');
		left.classList.add('active');
	}
});

clc.addEventListener('click', () => {
	arr.classList.remove('active_arr');
	if (left.classList.contains('active')) {
		left.classList.remove('active');
		left.classList.add('off');
	}
});