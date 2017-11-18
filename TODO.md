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


## Unit Testing and End-to-End (E2E) Testing

* [Testing an Angular project](https://angular.io/guide/testing)
* [Testing an Ionic project](http://lathonez.com/2017/ionic-2-unit-testing/)

Updated `tsconfig.ng-cli.json` in `compilerOptions`:
```json
"paths": {
  "@app/env": [
    "environments/environment"
  ]
}
```

### Jasmine

The [Jasmine test framework](https://jasmine.github.io/2.4/introduction.html) provides everything needed to write basic tests.

### Karma

The [Karma test runner](https://karma-runner.github.io/1.0/index.html) is ideal for writing and running unit tests while
developing an application. It can be an integral part of the project's development and continuous integration processes.

Run:
 
    npm test

### Protractor

Use protractor to write and run end-to-end (e2e) tests. End-to-end tests explore the application as users experience it. 
In e2e testing, one process runs the real application and a second process runs protractor tests that simulate user 
behavior and assert that the application respond in the browser as expected.

Run:
    
    ionic serve [--platform=ios]

Then (in a second terminal session):

    npm e2e

### Test Coverage

Run:
    
    npm test-coverage

In the `./coverage` folder open `index.html`:

<p align="center">
  <img src="https://github.com/Robinyo/aus-id/blob/master/screen-shots/test-coverage.png">
</p>

## Documentation

To install Compodoc globally:

    npm install -g @compodoc/compodoc

To add Compodoc to your project:

    npm install --save-dev @compodoc/compodoc

Define script tasks for Compodoc in your `package.json`:

    "scripts": {
      "docs": "./node_modules/.bin/compodoc -d ./docs/ -p ./tsconfig.json --theme vagrant",
      "serve-docs": "./node_modules/.bin/compodoc -s -d ./docs"
    }
  
To generate documentation (using Compodoc):

    npm run docs

To serve the generated documentation:

    npm run serve-docs

Open your browser and navigate to:

    http://localhost:8080

**Note:** You can exclude files from the generated documentation via `tsconfig.json`:

```
  "exclude": [
    "./node_modules",
    "./temp/**/*.ts",
    "./src/environments/*.ts",
    "./src/services/**/*.ts",
    "**/*.spec.ts"
  ]

--

<img src="https://github.com/Robinyo/big-top/blob/master/screen-shots/electron-ionic-blank.png">

<p align="center">
  <img src="https://github.com/Robinyo/big-top/blob/master/screen-shots/home-page.png">
</p>

/*

/// @prop - Text color of the active tab button
$tabs-ios-tab-text-color-active:    $tabs-ios-tab-color-active !default;

/// @prop - Icon color of the inactive tab button
$tabs-ios-tab-icon-color:           $tabs-ios-tab-color-inactive !default;

/// @prop - Icon color of the active tab button
$tabs-ios-tab-icon-color-active:    $tabs-ios-tab-color-active !default;

  //
  // iOS
  //

  .tabs-ios .tabbar {
    // background: white;
    background-color: transparent;
  }

  .tabs-ios .tab-button-icon {
    color: #8c8c8c;
  }

  .tabs-ios .tab-button[aria-selected=true] .tab-button-icon {
    // color: #488aff;
    color: white;
  }

  .tabs-ios .tab-button {
    color: #8c8c8c;
  }

  .tabs-ios .tab-button:hover:not(.disable-hover),
  .tabs-ios .tab-button[aria-selected=true] {
    // color: #488aff;
    color: white;
  }

*/


/*

page-events {

  .toolbar {
    // background-color: white;
    // background: white;
    background-color: transparent;
  }

  .content {
    color: black;
  }

  .month {
    font-size: 1.8rem;
    color: red;
  }

  .day {
    font-size: 1.6rem;
    color: black;
  }

  .fab-container {
    position: relative;
  }

  .event-name {
    padding-top: 8px;
  }

  .event-location {
    padding-top: 6px;
  }

}

*/

/*


  .toolbar-title {
    font-size: 2.0rem;
    font-weight: bold;
  }

  .button-ios {
    font-size: 2.0rem;
  }

  ion-content {
    div.scroll-content {
      background-color: lightgray;
    }
  }

  .bar-buttons {
    // color: black;
    color: white;
  }

*/

