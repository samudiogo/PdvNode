//modulos para controlar a ciclo de vida da aplicação 
// e criar uma janela nativa
const { app, BrowserWindow } = require('electron')

//variavel global
let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({ width: 830, height: 650, resizable: false })


    mainWindow.loadFile('Views/index.html')


    mainWindow.on('closed', () => mainWindow = null)

}

app.on('ready', createWindow)

