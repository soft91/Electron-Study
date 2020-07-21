const {app, BrowserWindow} = require('electron')
const path = require('path')
const requestPromise = require('minimal-request-promise');

// Server Start
const jarPath = app.getAppPath() + '.jar/.war 파일 위치';
const process = require('child_process').spawn( 'java', ['-jar', jarPath, ''] );

// 서버 실행 로그
process.stdout.on('data', function(data) {
  console.log('stdout: ' + data);
});

// 실제 화면을 만들어 주는 부분
app.on('ready', function(){
  // Loading Start
  const splash = new BrowserWindow({
    width: 800,
    height: 600,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
    icon: path.join(__dirname, '로딩을 하면서 나오는 작업표시줄의 아이콘의 대한 위치')
  })

  splash.loadURL(`로딩파일 위치`);

  // Create the browser window.
  function createWindow () {
    const mainWindow = new BrowserWindow({
      width: 1280,
      height: 900,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        defaultEncoding: 'UTF-8'
      },
      icon: path.join(__dirname, '로고파일 위치'),
      frame: false,
      show: false
    })

    // Pind의 페이지를 열기
    mainWindow.loadURL(`서버 실행 시 사용할 URL`)

    // Loading이 끝난 뒤 처리
    mainWindow.once('ready-to-show', () => {
      splash.destroy();
      mainWindow.show();
    });
  }
  
  function startUp () {
    const apiURL = `서버 실행 시 사용할 URL`;

    requestPromise.get(apiURL).then(function (response) {
        createWindow();
    }, function (response) {
        setTimeout(()=>startUp(),200);
    });
  };

  // 서버 실행
  startUp();
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})