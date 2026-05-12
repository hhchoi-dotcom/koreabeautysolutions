// PREMIUM UI/UX SCRIPTS

document.addEventListener('DOMContentLoaded', () => {
  // 1. Custom Cursor Logic
  const cursor = document.getElementById('custom-cursor');
  if (cursor) {
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    // Smooth following
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    const renderCursor = () => {
      // Easing for smooth follow effect
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
      requestAnimationFrame(renderCursor);
    };
    requestAnimationFrame(renderCursor);

    // Hover effect on links and buttons
    const interactables = document.querySelectorAll('a, button, .brand-img-panel, .hover-target');
    interactables.forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
    });
  }

});
