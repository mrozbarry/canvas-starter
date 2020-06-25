const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const draw = () => {
  // Canvas code

  // Save the state of the canvas (initial/clean state)
  context.save();

  // Clean any previous drawings
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);

  // Your drawing code here...
  // Check out https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D

  // Restore the state of the canvas (back to initial/clean state)
  context.restore();

  // Schedule next frame, v-synced
  requestAnimationFrame(draw);
};


requestAnimationFrame(draw);
