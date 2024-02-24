document.addEventListener('DOMContentLoaded', function() {
  const sectionCta = document.querySelector('.section-cta');
  const images = document.querySelectorAll('.section-cta__image');

  // Initialize array variables to store last offset values
  let lastOffsets = [];

  if (sectionCta) {
    sectionCta.addEventListener('mousemove', function(event) {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      if (images) {
        images.forEach((image, index) => {
          let intensity = index === 0 ? 20 : 15; // Adjust intensity for the images
          const offsetX =
            (image.offsetLeft + image.offsetWidth / 2 - mouseX) / intensity; // Adjust the division value for the desired parallax effect
          const offsetY =
            (image.offsetTop + image.offsetHeight / 2 - mouseY) / intensity; // Adjust the division value for the desired parallax effect

          image.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0px)`;

          // Store the last calculated offsets
          lastOffsets[index] = { offsetX, offsetY };
        });

        sectionCta.addEventListener('mouseleave', function() {
          images.forEach((image, index) => {
            // Apply the last stored offsets
            const { offsetX, offsetY } = lastOffsets[index];
            image.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0px)`;
          });
        });
      }
    });
  }
});
