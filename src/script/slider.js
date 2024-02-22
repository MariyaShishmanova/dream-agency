import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 80
    }
  }
});