// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

// Frameless Custom Toolbar 
const remote = require('electron').remote;
const win = remote.getCurrentWindow();

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }

  handleWindowControls();
})

// 최소화, 최대화, 닫기 버튼을 위한 이벤트 정의
function handleWindowControls() {
  document.getElementById('min-button').addEventListener("click", event => {
    win.minimize();
  });

  document.getElementById('max-button').addEventListener("click", event => {
    win.maximize();
  });

  document.getElementById('restore-button').addEventListener("click", event => {
    win.unmaximize();
  });

  document.getElementById('close-button').addEventListener("click", event => {
    if(confirm("정말로 종료하시겠습니까?")){
      win.close();
    }
  });

  toggleMaxRestoreButtons();
  win.on('maximize', toggleMaxRestoreButtons);
  win.on('unmaximize', toggleMaxRestoreButtons);

  function toggleMaxRestoreButtons() {
      if (win.isMaximized()) {
          document.body.classList.add('maximized');
      } else {
          document.body.classList.remove('maximized');
      }
  }
}