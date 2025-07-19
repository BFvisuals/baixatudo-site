const uploadType = document.getElementById('uploadType');
const fileInput = document.getElementById('fileInput');
const textInput = document.getElementById('textInput');
const progressBar = document.getElementById('progressBar');

function updateInputs() {
  const type = uploadType.value;
  if (type === 'file' || type === 'torrent') {
    fileInput.style.display = 'block';
    textInput.style.display = 'none';
    textInput.value = '';
  } else {
    fileInput.style.display = 'none';
    fileInput.value = '';
    textInput.style.display = 'block';
  }
}

uploadType.addEventListener('change', updateInputs);
updateInputs(); // aplica na carga da página

document.getElementById('sendBtn').addEventListener('click', () => {
  progressBar.style.width = '0%';
  let progress = 0;
  const interval = setInterval(() => {
    progress += 10;
    progressBar.style.width = progress + '%';
    if (progress >= 100) {
      clearInterval(interval);
      alert('Enviado com sucesso!');
    }
  }, 150);
});

document.getElementById('clearBtn').addEventListener('click', () => {
  fileInput.value = '';
  textInput.value = '';
  progressBar.style.width = '0%';
});
