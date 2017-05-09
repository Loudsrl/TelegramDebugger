# TelegramDebugger
A simple yet effective way to debug apps, receive a message to your personal telegram bot instead of the boring, old console in xcode. 
This way you can debug even when you are not in front of the computer.

## Requirements

TelegramDebugger requires:

- A [Node-RED](https://nodered.org/) server to run.
- [CocoaPods](https://cocoapods.org/) installed on your machine.
- An xcode project with [AlamoFire](https://cocoapods.org/pods/Alamofire) installed

## Installation

Have you downloaded everything? Sure? Good.

First thing first. 

Run the node-red instance with:

```sh
node-red
```
And go to [http://127.0.0.1:1880/](http://127.0.0.1:1880/#) to access the development console.

Copy the json file included in [/server](https://github.com/Loudsrl/TelegramDebugger/tree/master/server) and click import on the top-right menu. 
Import the json and you should be ready to deploy your server.

After you completed this step you can now proceed to import the swift class inside your xcode project.
(Just copy the file inside the project folder, it's that easy).

To use the plugin you dont need to import anything. 

<del>import Telegram Debugger<del>

The only thing you need to do is go to your telegram and search for [TelegramDebugger](t.me/tdebugger_bot).

Send a message with the command /debug and it will answer with your chatId (you will need it soon).

Go back to xcode and write :

```swift
TDB.init(id: <place here your chatId>, server: "http://127.0.0.1:1880/debug")
```

You can even change server if you decide to host your Node-RED somewhere else.

Aaand, you're pretty much done. 

To use the debugger just write :

```swift
TDB.debugger(data: <here goes the thing you need to debug>)
```



 
