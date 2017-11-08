'use strict';

const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow() {

  mainWindow = new BrowserWindow({ width: 1200, height: 800 });

  // let pathname = path.join(__dirname, 'www', 'index.html');
  // var url = 'file://' + __dirname + '/../www/index.html';
  // let pathname = path.join(__dirname, '/../www/index.html');

  let pathname = path.join(__dirname, '/../www/', 'index.html');

  console.log('pathname: ' + pathname);

  // mainWindow.loadURL("http://localhost:8100");

  // /*
  mainWindow.loadURL(url.format({
    pathname: pathname,
    protocol: 'file:',
    slashes: true
  }));
  // */

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
