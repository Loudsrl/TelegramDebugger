# TelegramDebugger
A simple yet effective way to debug apps, receive a message to your personal telegram bot instead of the boring, old console in xcode. 
This way you can debug even when you are not in front of the computer.

## Requirements

TelegramDebugger requires:

- Telegram 
- One of the libraries included in this repo (for now only available JS/SWIFT).
- FOR IOS: An xcode project with [AlamoFire](https://cocoapods.org/pods/Alamofire) imported 

## Telegram bot

The only thing you need to do is go to your telegram and search for [Telegram Debugger 🥇](t.me/loud_debugger_bot) (Make sure it's the one with the medal ✌️).

Send a message with the command /start and it will answer with your chatId (you will need it soon).

You can even add it to your Dev group on telegram to maximise the fun 😂

## Installation - iOS

Have you checked everything? Sure? Good.

First thing first. 
You have to copy the swift class inside your xcode project.
(Just copy the file inside the project folder, it's that easy).

To use the plugin you dont need to import anything in the project. 

<del>import Telegram Debugger<del>

In your swift class write :

```swift
TDB.init(id: <place here your chatId>, server: "http://127.0.0.1:1880/debug")
```

You can even change server if you decide to host your server somewhere else.

Aaand, you're pretty much done. 

To use the debugger just write :

```swift
TDB.debugger(data: <here goes the thing you need to debug>)
```

## Installation - iOS

Have you checked everything? Sure? Good.
First thing first. 

Download the library and import it in your html like this : 

```html
<script type="text/javascript" src="<path>/<to>/TelegramDebugger.js"></script>
```

And then in your js : 

```js
var TDB = new TelegramDebugger(<yourChatId>,[<serverUrl>]);
	TDB.log("Hello");
 TDB.log(obj);
```
And you are pretty much done! 

This acts as a Telegram debug as well as a simple console log (how convenient 😁)


 ## Roadmap
 
 The project is under development but we cannot do it all by ourselves, so feel free to contribute in any way via:
 
 - Pull requests
 - Issues
 - Write to us to hello@loudsrl.com with suggestion, questions or simply to say hi (we don't bite 😁)
 
 
 
 
