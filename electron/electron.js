'use strict';

const { app, BrowserWindow } = require('electron');

function createWindow() {

  let mainWindow = new BrowserWindow({ width: 1200, height: 800 });

  mainWindow.loadURL("http://localhost:8100");

  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {

    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;

  });
}

// This method will be called when Electron has finished
// initialisation and is ready to create browser windows.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {

  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }

});

app.on('activate', () => {

  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }

});
