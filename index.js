const db = require("./config/config.js");
const menu = require("./lib/menu/mainMenu.js");

db.connect((err) => {
    if(err){
        console.log(err);
    }else{
        console.log("connected");
    }
})

global.db = db;

menu.mainMenu();
