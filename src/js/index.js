'use strict';

// import
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { toggleBurgerMenu } from '../js/modules/burger.js';
import { initTabsMenu } from '../js/modules/tabs-menu.js';
import { initScrollToTop } from '../js/modules/scroll-top.js';

// selectors
const menuIcon = document.querySelector('.menu-icon');

// burger menu
menuIcon.addEventListener('click', () => {
	toggleBurgerMenu('.menu-icon', '.nav');
});

// init tabs
initTabsMenu('.filter__item', '.tabs-menu__card');

// init scroll
initScrollToTop();

// swiper
const swiper = new Swiper('.swiper-blog', {
	loop: true,
	spaceBetween: 32,
	slidesPerView: 1,
	breakpoints: {
		660: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 32,
		},
	},

	// autoplay: {
	// 	delay: 5000,
	// },
});
