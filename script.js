
const uploadType = document.getElementById('uploadType');
const fileInput = document.getElementById('fileInput');
const textInput = document.getElementById('textInput');
const progressBar = document.getElementById('progressBar');

uploadType.addEventListener('change', () => {
  if (uploadType.value === 'file' || uploadType.value === 'torrent') {
    fileInput.style.display = 'block';
    textInput.style.display = 'none';
  } else {
    fileInput.style.display = 'none';
    textInput.style.display = 'block';
  }
});

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
  }, 200);
});

document.getElementById('clearBtn').addEventListener('click', () => {
  fileInput.value = '';
  textInput.value = '';
  progressBar.style.width = '0%';
});
