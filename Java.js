document.getElementById("rollBtn").addEventListener("click", rollAll);

function rollAll() {
  const container = document.getElementById("mergedContainer");
  container.innerHTML = "";

  const images = [];

  // Add 20 random number images
  for (let i = 0; i < 20; i++) {
    const roll = Math.floor(Math.random() * 10);
    images.push({
      src: `numbers/${roll}.jfif`,
      alt: `Number ${roll}`
    });
  }

  // Add 5 random sign images
  const signs = ["minus", "multiplication", "plus", "divide"];
  for (let i = 0; i < 5; i++) {
    const randomSign = signs[Math.floor(Math.random() * signs.length)];
    images.push({
      src: `signs/${randomSign}.jfif`,
      alt: `Sign ${randomSign}`
    });
  }

  // Shuffle the combined array
  shuffleArray(images);

  // Display all images
  images.forEach(imgData => {
    const img = document.createElement("img");
    img.src = imgData.src;
    img.alt = imgData.alt;
    container.appendChild(img);
  });
}

// Fisher-Yates shuffle
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
