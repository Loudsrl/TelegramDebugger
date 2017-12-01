//
//  TelegramDebugger.js
//  TelegramDebugger
//
//  Created by Gianluca Cesari on 5/6/17.
//  Copyright © 2017 Loud srl. All rights reserved.
//


var TelegramDebugger = function(id, server) {
    this.id = id || 0;
    this.server = server || "https://tdb.loudsrl.com/debug";
    this.ajaxRequest = function(p) {
        var xmlhttp;
        xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", this.server);
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send(JSON.stringify(p));
    };
    this.log = function(data) {
        console.log(data);
        var parameters = {
            msg: (typeof data == "object") ? JSON.stringify(data) : data,
            type: "message",
            chatId: this.id
        };
        this.ajaxRequest(parameters);
    }
}
