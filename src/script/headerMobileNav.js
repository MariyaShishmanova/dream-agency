const elements = {
  header: document.querySelector('.header'),
  btnNav: document.querySelector('.btn-nav')
};

const classes = {
  active: 'active',
  mobileNavVisible: 'mobile-nav-visible'
};

// handle btnNav

function handleBtnNav() {
  elements.btnNav.classList.toggle(classes.active);
  elements.header.classList.toggle(classes.mobileNavVisible);
}

document.addEventListener('DOMContentLoaded', () => {
  if (elements.btnNav) {
    elements.btnNav.addEventListener('click', handleBtnNav);
  }
});

// set css property
function setCssProperty(property, value, unit = 'px') {
  if (!property || !value) {
    throw new Error('Both property and value parameters are required.');
  }
  document.documentElement.style.setProperty(property, `${value}${unit}`);
}

// set --viewport-height property and update when resizing the viewport height
setCssProperty('--viewport-height', window.innerHeight);

window.addEventListener('resize', () => {
  setCssProperty('--viewport-height', window.innerHeight);

  // check if the mobile menu is open and the screen is bigger then 960px
  if (
    window.innerWidth > 960 &&
    elements.header.classList.contains(classes.mobileNavVisible)
  ) {
    elements.header.classList.remove(classes.mobileNavVisible);
    elements.btnNav.classList.remove(classes.active);
  }
});

// set and update --header-height property

let currentHeaderHeight = 0;

function getAndUpdateHeaderHeight() {
  if (elements.header) {
    let headerHeight = elements.header.offsetHeight;

    if (headerHeight !== currentHeaderHeight) {
      currentHeaderHeight = headerHeight;
      setCssProperty('--header-height', currentHeaderHeight);
    }
  }
}

document.addEventListener('DOMContentLoaded', getAndUpdateHeaderHeight);
window.addEventListener('resize', getAndUpdateHeaderHeight);