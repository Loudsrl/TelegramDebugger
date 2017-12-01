const express = require('express')
const app = express()

var bodyParser = require('body-parser')
var telegramBot = require('node-telegram-bot-api');

var token = '489510605:AAHY-ppoDXl40T6VfTJsXW11Ss2D_ZdcY5c';
var bot = new telegramBot(token, {
    polling: true
});

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use(function(req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

bot.onText(/\/start/, (msg) => {
    var chatId = msg.chat.id;
    console.log(msg);
    var responseMsg = "Hi " + msg.from.first_name + "!\nHere's your chatId :"+ chatId +"\nYou will need it soon ;)\nList of commands:\n\n\/start - Start the bot.\n\nDesigned and developed by LOUD - Digital Agency\nloudsrl.com\n © 2017 LOUD S.r.l.";
    bot.sendMessage(chatId, responseMsg);
});

bot.on('message', (msg) => {
  const chatIdMessage = msg.chat.id;

  console.log(msg)

  if (msg.text != '/start' && msg.text != '/start ') {
    bot.sendMessage(chatIdMessage, 'Hey there, I can\'t receive messages yet, why don\'t you try with /start?');
  }
});

bot.sendMessage(126896731, "Server avviato");





app.get('/debug', (req, res) => res.send('Hello World!'));
app.post('/debug', function (req, res) {
    console.log(req.body);
    console.log(req.headers);
    var body = req.body;
    if (body.msg) {
      var date = new Date()
      var msgToSend = req.headers.host + '\n' + date.toLocaleTimeString()+ ' ' + date.toLocaleDateString() + '\n' + body.msg;
      bot.sendMessage(body.chatId, msgToSend);
    }
    res.json(200,{"status": "OK"});
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))






