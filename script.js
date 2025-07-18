const token = '8071739217:AAEvB00Ux-YK3bjr7jvLBLX14Xvv61eDxDM';
const channel = 'baixatudo';
const apiUrl = `https://api.telegram.org/bot${token}/getUpdates`;

async function loadFiles() {
  const resp = await fetch(apiUrl);
  const data = await resp.json();
  if (!data.ok) return console.error('Erro API', data);

  const files = [];

  data.result.forEach(msgObj => {
    const msg = msgObj.channel_post || msgObj.message;
    if (!msg) return;
    msg.document && files.push({ name: msg.document.file_name, fileId: msg.document.file_id });
    msg.caption && msg.caption.match(/\bmagnet:\?xt=urn:btih:[A-Za-z0-9]+\b/) &&
      files.push({ name: msg.caption, fileId: msg.document?.file_id || null, magnet: msg.caption });
  });

  render(files);
}

function render(files) {
  const list = document.getElementById('fileList');
  const search = document.getElementById('search');
  search.addEventListener('input', () => filterFiles(files, search.value));
  filterFiles(files, '');
}

function filterFiles(files, term) {
  const list = document.getElementById('fileList');
  list.innerHTML = '';
  const termLc = term.toLowerCase();
  files.filter(f => f.name.toLowerCase().includes(termLc)).forEach(f => {
    const li = document.createElement('li');
    const a = document.createElement('a');

    if (f.fileId) {
      a.href = `https://t.me/${channel}/${f.fileId}`;
      a.textContent = f.name;
    } else if (f.magnet) {
      a.href = f.magnet;
      a.textContent = f.magnet;
    }

    a.target = '_blank';
    li.appendChild(a);
    list.appendChild(li);
  });
}

loadFiles();