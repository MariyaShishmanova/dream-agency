import Splitting from 'splitting';
import './src/style/main.scss';
import './src/script/slider';
import './src/script/equalizeHeight';
import './src/script/headerMobileNav';
import './src/script/smoothScroll';
import './src/script/intersectionObserver';
import './src/script/parallax';

Splitting();

ScrollOut({
  treshold:   .6,
  once:true
})

const rellax = new Rellax('.rellax');