const canvas = document.getElementById('generated-image-canvas');
const ctx = canvas.getContext('2d');
const textInput = document.getElementById('text-input');
const imageSelector = document.getElementById('image-selector');
const downloadButton = document.getElementById('download-button');

let textX = 540;
let textY = 610;

// Load original image
const img = new Image();
img.src = imageSelector.value;
img.onload = function () {
  canvas.width = 1080;
  canvas.height = 1080;
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  drawImage();
}

// Event listener for text input
textInput.addEventListener('input', () => {
  drawImage();
});

// Event listener for image selection
imageSelector.addEventListener('change', () => {
  img.src = imageSelector.value;
  img.onload = function () {
    drawImage();
  };
});

// Function to draw image with text overlay
function drawImage() {
  // Clear
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw original image
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  // Add text overlay
  ctx.font = '28px "Readex Pro"';
  ctx.fillStyle = '#195aa4';
  ctx.textAlign = 'center';
  ctx.fillText(textInput.value || "شركة مساعد محمد بن عجلان ", textX, textY);

  // Update download link
  let dataURL = canvas.toDataURL();
  downloadButton.href = dataURL;
  downloadButton.download = 'Alajlan-Eid-Aladha-Greeting-2024.png';
}
const arrowButtons = document.getElementById('arrow-buttons');
arrowButtons.addEventListener('click', (event) => {
  switch (event.target.id) {
    case 'up-button':
textY -= 10;
break;
case 'down-button':
textY += 10;
break;
case 'left-button':
textX -= 10;
break;
case 'right-button':
textX += 10;
break;
}
drawImage();
});