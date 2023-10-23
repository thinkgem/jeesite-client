// Modules to control application life and create native browser window
const { app, BrowserWindow, Menu, shell, remote } = require('electron')
const path = require('node:path')
let mainWindow;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1366,
    height: 768,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  // mainWindow.loadFile('index.html');
  mainWindow.loadURL('https://vue.jeesite.com');

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

// Menu configs
const isMac = process.platform === 'darwin';
const menuTemplate = [
  {
    label: "文件",
    submenu: [
      { label: '退出', click: () => { app.quit() } }, { type: 'separator' },
      { label: '关于', click: () => { shell.openExternal('https://jeesite.com') } }
    ],
  },
  {
    label: "编辑",
    submenu: [
      { label: '重做', role: 'redo' },
      { label: '剪切', role: 'cut' },
      { label: '复制', role: 'copy' },
      { label: '粘贴', role: 'paste' },
      // {
      //   label: '查找',
      //   accelerator: isMac ? 'Command+F' : 'Ctrl+F',
      //   click: () => {
      //   }
      // },
    ],
  },
  {
    label: "窗口",
    submenu: [
      { label: '刷新', role: 'reload' },
      { 
        label: isMac ? '隐藏' : '最小化',
        accelerator: isMac ? 'Command+W' : 'Alt+F4',
        role: isMac ? 'hide' : 'minimize'
      },
      { type: 'separator' },
      { label: '放大', role: 'zoomin' },
      { label: '缩小', role: 'zoomout' },
      { label: '还原', role: 'resetZoom' },
      { type: 'separator' },
      {
        label: '开发者工具',
        accelerator: isMac ? 'Command+Option+I' : 'F12',
        role: 'toggledevtools'
      },
    ],
  },
]
const menuBuilder = Menu.buildFromTemplate(menuTemplate)
Menu.setApplicationMenu(menuBuilder)
