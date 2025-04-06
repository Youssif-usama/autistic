const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Function to create a placeholder image
function createPlaceholder(width, height, text, filename) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Fill background
  ctx.fillStyle = '#F2F3F8';
  ctx.fillRect(0, 0, width, height);

  // Add text
  ctx.fillStyle = '#0054A5';
  ctx.font = 'bold 48px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width / 2, height / 2);

  // Save the image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(path.join(imagesDir, filename), buffer);
  console.log(`Created ${filename}`);
}

// Create placeholder images
const images = [
  { width: 1920, height: 1080, text: 'Hero Background', filename: 'hero-bg.jpg' },
  { width: 1920, height: 1080, text: 'Impact Background', filename: 'impact-bg.jpg' },
  { width: 1920, height: 1080, text: 'About Hero Background', filename: 'about-hero-bg.jpg' },
  { width: 1920, height: 1080, text: 'Contact Hero Background', filename: 'contact-hero-bg.jpg' },
  { width: 800, height: 600, text: 'Who We Are Image', filename: 'who-we-are.jpg' },
];

images.forEach(img => {
  createPlaceholder(img.width, img.height, img.text, img.filename);
}); 