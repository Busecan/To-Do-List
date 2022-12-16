const { app, BrowserWindow } = require('electron')
const path = require('path')
//const db =require("./baglanti").db;

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
    /*index.webContents.once("dom-ready", ()  =>{
      db.query("SELECT * FROM yapilacaklar_listesi", (error, results, fields) => {
        index.webContents.send("init", results);
  
      })
  })*/
  })
  
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
