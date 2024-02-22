// select all containers that have data-equalize-height attribute, and for each of them obtain the values of data-equalize-head and data-equalize-body(classes)
// and run updateHeight on each element with these classes
function equalizeHeight() {
  const containers = document.querySelectorAll('[data-equalize-height]');
  
  containers.forEach(container => {
    const headSelector = container.getAttribute('data-equalize-head');
    const bodySelector = container.getAttribute('data-equalize-body');
    
    const heads = container.querySelectorAll(headSelector);
    const bodies = container.querySelectorAll(bodySelector);
    
    updateHeight(heads);
    updateHeight(bodies);
  });
}

// checking the height of each element, getting the biggest height of all and setting it as style height to each one
function updateHeight(elements) {
  let maxHeight = 0;
  
  elements.forEach(element => {
    element.style.height = '';
    maxHeight = Math.max(maxHeight, element.offsetHeight);
  });
  
  elements.forEach(element => {
    element.style.height = `${maxHeight}px`;
  });
}

window.addEventListener('resize', equalizeHeight);
equalizeHeight();