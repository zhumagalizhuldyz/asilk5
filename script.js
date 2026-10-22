let count = 0;
const counterValue = document.getElementById('counter-value');
function updateCounter() {            
  counterValue.textContent = count;
}
document.getElementById('btn-increase').addEventListener('click', () => { count++; updateCounter(); });
document.getElementById('btn-decrease').addEventListener('click', () => { if (count > 0) count--; updateCounter(); });
document.getElementById('btn-reset').addEventListener('click', () => { count = 0; updateCounter(); });
updateCounter();
const previewInput = document.getElementById('preview-input');
const previewText = document.getElementById('preview-text');
const charCount = document.getElementById('char-count');
const PLACEHOLDER = 'Your text will appear here';
function updatePreview() {
  const value = previewInput.value;
  previewText.textContent = value === '' ? PLACEHOLDER : value;
  previewText.classList.toggle('empty', value === '');
  charCount.textContent = value.length;
}
previewInput.addEventListener('input', updatePreview);
document.getElementById('btn-clear').addEventListener('click', () => {
  previewInput.value = '';
  updatePreview();
  previewInput.focus();
});
updatePreview();
const images = {
  mountains: { src: 'images/mountains.png', alt: 'Blue mountains under a bright sun', caption: 'Mountains' },
  sea:       { src: 'images/sea.png',       alt: 'Orange sunset over the sea with white waves', caption: 'Sea sunset' },
  forest:    { src: 'images/forest.png',    alt: 'Row of green pine trees in a forest', caption: 'Forest' }
};
const imageSelect = document.getElementById('image-select');
const landscapeImg = document.getElementById('landscape-img');
const landscapeCaption = document.getElementById('landscape-caption');

function showImage() {
  const item = images[imageSelect.value];
  landscapeImg.src = item.src;
  landscapeImg.alt = item.alt;
  landscapeCaption.textContent = item.caption;
}
imageSelect.addEventListener('change', showImage);
showImage();
const keyForm = document.getElementById('key-form');
const keyInput = document.getElementById('key-input');
const keyStatus = document.getElementById('key-status');
const keyResult = document.getElementById('key-result');
keyForm.addEventListener('submit', (e) => e.preventDefault());
keyInput.addEventListener('keydown', (event) => {
  keyStatus.textContent = event.key === ' ' ? 'Key pressed: Space' : 'Key pressed: ' + event.key;
  if (event.key === 'Enter') {
    event.preventDefault();
    keyResult.textContent = keyInput.value;
  } else if (event.key === 'Escape') {
    keyInput.value = '';
    keyResult.textContent = '';
  }
});
const card = document.getElementById('hover-card');
const hint = document.getElementById('card-hint');
const DEFAULT_HINT = 'Hover over the card or focus it with Tab.';

function activateCard(text) {
  card.classList.add('highlight');
  hint.textContent = text;
}
function deactivateCard() {
  card.classList.remove('highlight');
  hint.textContent = DEFAULT_HINT;
}
card.addEventListener('mouseenter', () => activateCard('Mouse is over the card!'));
card.addEventListener('mouseleave', deactivateCard);
card.addEventListener('focus', () => activateCard('Card is focused via keyboard!'));
card.addEventListener('blur', deactivateCard);
