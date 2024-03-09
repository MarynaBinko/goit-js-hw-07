function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.getElementById('controls');
    const boxesContainer = document.getElementById('boxes');
    const input = controls.querySelector('input');
    const createButton = controls.querySelector('button[data-create]');
    const destroyButton = controls.querySelector('button[data-destroy]');

    function createBoxes(amount) {
      boxesContainer.innerHTML = ''; // Clear previous boxes

      const boxSize = 30;
      for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.width = `${boxSize + i * 10}px`;
        box.style.height = `${boxSize + i * 10}px`;
        box.style.backgroundColor = getRandomHexColor();
        box.classList.add('box');
        boxesContainer.appendChild(box);
      }
    }

    function destroyBoxes() {
      boxesContainer.innerHTML = '';
    }

    createButton.addEventListener('click', () => {
      const amount = parseInt(input.value);
      if (amount >= 1 && amount <= 100) {
        createBoxes(amount);
        input.value = '';
      }
    });

    destroyButton.addEventListener('click', destroyBoxes);