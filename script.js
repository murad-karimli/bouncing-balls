
document.addEventListener('DOMContentLoaded', () => {    
    const container = document.querySelector('.container');

    function createCircle(x, y) {
        //create and add a circe inside of the container when users clicks
      const circle = document.createElement('div');
      circle.classList.add('circle');
      container.appendChild(circle);
    
      let posX = x; // starting horizontal position
      let posY = y; // starting vertical position
      let dx = (Math.random() - 0.5) * 4; // Random horizontal speed
      let dy = (Math.random() - 0.5) * 4; // Random vertical speed
    
      const containerRect = container.getBoundingClientRect();
    
      function moveElement() {
        const circleRect = circle.getBoundingClientRect();
    
        // Update the positions
        posX += dx;
        posY += dy;
    
        // Calculate the circle's boundaries
        const circleLeft = posX;
        const circleRight = posX + circleRect.width;
        const circleTop = posY;
        const circleBottom = posY + circleRect.height;
    
        // Check if the circle reaches the container boundaries if yes,Reverse the horizontal and vertical directions
        if (circleLeft <= containerRect.left || circleRight >= containerRect.right) {
          dx *= -1; // Reverse the horizontal direction
        }
    
        if (circleTop <= containerRect.top || circleBottom >= containerRect.bottom) {
          dy *= -1; // Reverse the vertical direction
        }
    
        // Apply the new position to the circle
        circle.style.left = posX + 'px';
        circle.style.top = posY + 'px';""
      }
    
      setInterval(moveElement, 10);
    }
    
    container.addEventListener('click', (event) => {
      const clickX = event.clientX - container.offsetLeft;
      const clickY = event.clientY - container.offsetTop;
      createCircle(clickX, clickY);
    });
    
  });
  