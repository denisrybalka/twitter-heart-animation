const heart = document.querySelector('.heart');

heart.addEventListener('click', () => {
	heart.className += ' animation';
	if (heart.className === 'heart animation') {
		setTimeout(() => heart.className = 'heart', 1000);
	}
});