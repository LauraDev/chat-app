# Project Title

Realtime chat application using Pusher, Ionic and the Sentiment library for emoji suggestions

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
NodeJS : v8.12.0
npm : 6.4.1

Ionic CLI : 4.2.1
Cordova CLI : 8.1.2
ios-deploy : 2.0.0
```

### Installing

To get a development env running

```
git clone https://github.com/LauraDev/chat-app.git
npm install
node server.js
ionic serve
```

Tips: you can use ngrok for exposing your local web server.
Download ngrok https://ngrok.com/download and head to the folder where you installed it

```
./ngrok http 4000
```

Copy the forwarding URL and paste it in chat.ts => sendMessage() => this.http.post() (l.47)

## Android Deployment


```
ionic cordova build android
ionic cordova run android
```

## iOS Deployment


```
ionic cordova build ios
ionic cordova run ios // or use xcode
```

## Author

* **Laura Dev** - *Initial work*


## Acknowledgments

This app uses:
* Ionic https://ionicframework.com/
* Pusher https://pusher.com 
* Sentiment library for emoji suggestions https://github.com/thisandagain/sentiment
* Ngrok https://ngrok.com/ 
