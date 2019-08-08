const {app, BrowserWindow, Menu, Tray} = require("electron");

let tray = null;
app.on("ready", () => {
    tray = new Tray("assets/icons/icon.png");
    const contextMenu = Menu.buildFromTemplate([
        {label: "speedy", type: "normal", enabled: false},
        {label: "", type: "separator"},
        {label: "Run speed test", type: "normal", click: function() { speedtest(); }},
        {label: "About", type: "normal", click: function() { about(); }},
        {label: "", type: "separator"},
        {label: "Close", type: "normal", click: function() { close(); }}
    ]);

    tray.setToolTip("speedy: a speed-test taskbar applet");
    tray.setContextMenu(contextMenu);

    tray.on("click", () => {
        tray.popUpContextMenu();
    });

});

// ------
// Click events
// ------

// Runs the speed-test
// Opens speedtest_window.html
function speedtest() {
    let speedtestWindow = new BrowserWindow({ width: 450, height: 250, maximizable: false, icon: "assets/icons/icon.png" });
    //speedtestWindow.webContents.openDevTools();
    speedtestWindow.setMenu(null);
    speedtestWindow.loadFile("speedtest_window.html");
    app.on("window-all-closed", e => e.preventDefault());
}

// Shows about info
function about() {
    let aboutWindow = new BrowserWindow({ width: 500, height: 400, maximizable: false, icon: "assets/icons/icon.png" });
    aboutWindow.setMenu(null);
    aboutWindow.loadFile("about_window.html");
    app.on('window-all-closed', e => e.preventDefault());
}

// Closes the app
function close() {
    app.quit();
}