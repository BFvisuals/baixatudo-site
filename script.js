
// Simulação de envio com barra de progresso
document.getElementById('uploadBtn').addEventListener('click', () => {
  const fileInput = document.getElementById('fileInput');
  const category = document.getElementById('category').value;
  const progressBar = document.getElementById('progressBar');

  if (fileInput.files.length === 0) return alert("Seleciona pelo menos um ficheiro.");

  let progress = 0;
  progressBar.style.width = '0%';

  const interval = setInterval(() => {
    progress += 10;
    progressBar.style.width = progress + '%';
    if (progress >= 100) {
      clearInterval(interval);
      alert("Ficheiros enviados com sucesso!");
    }
  }, 200);
});
