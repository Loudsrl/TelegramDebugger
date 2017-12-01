//
//  TelegramDebugger.swift
//  TelegramDebugger
//
//  Created by Gianluca Cesari on 5/6/17.
//  Copyright © 2017 Loud srl. All rights reserved.
//

import Foundation
import Alamofire

typealias TDB = TelegramDebugger
class TelegramDebugger {
    static var Id = 0

    static var server = "http://127.0.0.1:1880/debug"
    
    init(id: Int) {
        TelegramDebugger.Id = id
        print("Telegram debugger initialized with chatId: \(id)")
    }
    
    static func getId() -> Int {
        return self.Id
    }

    static func getServer() -> String {
        return self.server
    }
    
    static func debugger(data: AnyObject) {
        print(data.debugDescription)
        let parameters = [
            "msg": data.debugDescription,
            "type": "message",
            "chatId": "\(getId())"
        ]
        Alamofire.request("\(getServer())", method: .post, parameters: parameters, encoding: JSONEncoding.default)
    }
}