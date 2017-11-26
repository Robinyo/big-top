
https://github.com/Microsoft/vscode-cordova

https://forum.ionicframework.com/t/source-maps-not-appearing-in-chrome-dev-tools-on-ionic-serve/86855/2

## config.xml:

Update the package name:

    <widget id="org.robferguson.BigTop" version="1.0.0"
         xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">

Then add and remove (supported) platforms:

    ionic cordova platform rm android
    ionic cordova platform add android

## Run in Emulator

Run:

    ionic cordova emulate [<platform>] [options]

Print out console logs to terminal:

    ionic cordova emulate android --consolelogs
    ionic cordova emulate android --consolelogs --address=192.168.1.115

## Run on Device

* [Apache Cordova - Android Platform Support - Installing the Requirements](https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html#installing-the-requirements)
* [Apache Cordova - iOS Platform Support - Installing the Requirements](https://cordova.apache.org/docs/en/latest/guide/platforms/ios/#installing-the-requirements)

Build:

    ionic cordova build [<platform>] [options]

Run:

    ionic cordova run [<platform>] [options]
    
Build and run on Android:

    ionic cordova build android
    ionic cordova run android --consolelogs

Build and run on iOS:

    ionic cordova build ios
    ionic cordova run ios --consolelogs --address=192.168.1.115
