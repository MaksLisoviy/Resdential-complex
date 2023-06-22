

const iconMenu = document.querySelector('.menu__icon')
if (iconMenu) {
	const menuBody = document.querySelector('.menu__body')
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('lock');
		iconMenu.classList.toggle('active');
		menuBody.classList.toggle('active');
	})
}


const btnUp = {
	el: document.querySelector('.btn-up'),
	show() {

		this.el.classList.remove('btn-up_hide');
	},
	hide() {

		this.el.classList.add('btn-up_hide');
	},
	addEventListener() {

		window.addEventListener('scroll', () => {

			const scrollY = window.scrollY || document.documentElement.scrollTop;

			scrollY > 400 ? this.show() : this.hide();
		});

		document.querySelector('.btn-up').onclick = () => {

			window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth'
			});
		}
	}
}
btnUp.addEventListener();


const swiper = new Swiper('.swiper', {
	// Optional parameters

	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});

