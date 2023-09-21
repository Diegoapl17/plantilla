const toggleButton = document.getElementById('toggleButton');
const toggleStatus = document.getElementById('toggleStatus');

let isToggled = false;

toggleButton.addEventListener('click', () => {
  isToggled = !isToggled;
  updateToggleButton();
});

function updateToggleButton() {
  if (isToggled) {
    toggleStatus.textContent = 'Encendido';
  } else {
    toggleStatus.textContent = 'Apagado';
  }
}
