# The Big Top App

A sample app that uses **one** codebase for Mobile (iOS, Android and Windows Phone) and Desktop (masOS, Linux 
and Windows) platforms.

If the screen's min-width is less than 992px ('xs', 'sm', 'md'):

<p align="center">
  <img src="https://github.com/Robinyo/big-top/blob/master/screen-shots/ios/introduction-page.png">
</p>

<p align="center">
  <img src="https://github.com/Robinyo/big-top/blob/master/screen-shots/ios/settings-page.png">
</p>

<p align="center">
  <img src="https://github.com/Robinyo/big-top/blob/master/screen-shots/ios/sign-in-page.png">
</p>

<p align="center">
  <img src="https://github.com/Robinyo/big-top/blob/master/screen-shots/ios/events-page.png">
</p>

If the screen's min-width is 992px ('lg'):

<p align="center">
  <img src="https://github.com/Robinyo/big-top/blob/master/screen-shots/tablet.png">
</p>

The **Big Top Desktop Edition** running on macOS Sierra:

<p align="center">
  <img src="https://github.com/Robinyo/big-top/blob/master/screen-shots/desktop.png">
</p>

The **Big Top Desktop Edition's installer** running on macOS Sierra:

<p align="center">
  <img src="https://github.com/Robinyo/big-top/blob/master/screen-shots/big-top-dmg.png">
</p>

## Development

To clone the project:

    git clone https://github.com/Robinyo/big-top.git

To install the project's dependencies:

    cd big-top
    npm install

To build the project:

    ionic build

To launch the project:

    ionic serve [--platform=ios | android] [--browser chrome | firefox | safari]

Some examples:
    
    ionic serve --platform=ios
    ionic serve --platform=android
    ionic serve --platform=windows
    
    ionic serve --platform=ios --browser safari
    ionic serve --platform=android --browser chrome
    ionic serve --platform=windows --browser firefox

You can preview all three supported Mobile platforms side by side:

    ionic serve --lab

For example, the 'Sign in' page:

<p align="center">
  <img src="https://github.com/Robinyo/big-top/blob/master/screen-shots/lab-sign-in-page.png">
</p>

and the 'Events' page:

<p align="center">
  <img src="https://github.com/Robinyo/big-top/blob/master/screen-shots/lab-events-page.png">
</p>
    
### Electron

To launch the project:

In a terminal run the following command:

    ionic serve --no-open
    
If you want to set the 'ELECTRON_START_URL' environment variable on macOS or Linux:
    
    ELECTRON_START_URL=http://localhost:8104 ionic serve --no-open --port 8104

On Windows use:

    set ELECTRON_START_URL=http://localhost:8104 ionic serve --no-open --port 8104

In another terminal run the following command:

    electron .

**Note:** The commands must be run in separate terminal sessions as `ionic serve` is blocking.

## Production

To build the project:

    ionic build --prod

### Electron
    
To package the application:

    npm run dist

If everything works as expected electron-builder will create a `/dist` directory.

## Build Management

### Environment Variables

I followed these steps to add support for environment variables.

Updated `compilerOptions` in `tsconfig.json`:
```json
  "compilerOptions": {
  
    ...
    
    "target": "es5",
    "typeRoots": [
      "../node_modules/@types"
    ],
    "baseUrl": "./src",
    "paths": {
      "@app/*": [ "app/*" ],
      "@assets/*": [ "assets/*" ],
      "@env": [ "environments/environment" ],
      "@pages/*": [ "pages/*" ],
      "@services/*": [ "services/*" ],
      "@theme/*": [ "theme/*" ]
    }
  }
  
  ...
```

Created `config/webpack.config.js`:
```javascript
const chalk = require("chalk");
const fs = require('fs');
const path = require('path');
const useDefaultConfig = require('@ionic/app-scripts/config/webpack.config.js');

const env = process.env.IONIC_ENV;

if (env === 'prod' || env === 'dev') {

  useDefaultConfig[env].resolve.alias = {
    "@app": path.resolve('./src/app/'),
    "@assets": path.resolve('./src/assets/'),
    "@env": path.resolve(environmentPath()),
    "@pages": path.resolve('./src/pages/'),
    "@services": path.resolve('./src/services/'),
    "@theme": path.resolve('./src/theme/')
  };

} else {

  // Default to dev config
  useDefaultConfig[env] = useDefaultConfig.dev;
  useDefaultConfig[env].resolve.alias = {
    "@app": path.resolve('./src/app/'),
    "@assets": path.resolve('./src/assets/'),
    "@env": path.resolve(environmentPath()),
    "@pages": path.resolve('./src/pages/'),
    "@services": path.resolve('./src/services/'),
    "@theme": path.resolve('./src/theme/')
  };

}

function environmentPath() {

  let filePath = './src/environments/environment' + (env === 'prod' ? '' : '.' + env) + '.ts';

  if (!fs.existsSync(filePath)) {
    console.log(chalk.red('\n' + filePath + ' does not exist!'));
  } else {
    return filePath;
  }
}

module.exports = function () {
  return useDefaultConfig;
};
```

Created `src/environments/environment.ts` that will be used for the **Production** environment:
```typescript
export const ENV = {
  production: true,
  isDebugMode: false
};
```

Created `src/environments/environment.dev.ts` that will be used for the **Development** environment:
```typescript
export const ENV = {
  production: false,
  isDebugMode: true
};
```

Update `package.json`:
```json
"config": {
  "ionic_source_map_type": "source-map",
  "ionic_webpack": "./config/webpack.config.js"
}
```

Import your environment variables:
```typescript
import { ENV } from '@env'
```
**Note:** Remember to ignore your environment files in your `.gitignore`
```
# Environment Variables
**/environment.*
!**/environment.model.ts
```

## Unit Testing and End-to-End (E2E) Testing

* [Testing an Angular project](https://angular.io/guide/testing)
* [Testing an Ionic project](http://lathonez.com/2017/ionic-2-unit-testing/)

Updated `tsconfig.ng-cli.json` in `compilerOptions`:
```json
"paths": {
  "@app/env"": [
    "environments/environment"
  ]
}
```

Updated `angular-cli.json` in `apps`:
```json
"environments": {
        "dev": "environments/environment.dev.ts",
        "prod": "environments/environment.ts"
      }
}
```

### Jasmine

The [Jasmine test framework](https://jasmine.github.io/2.4/introduction.html) provides everything needed to write basic tests.

### Karma

The [Karma test runner](https://karma-runner.github.io/1.0/index.html) is ideal for writing and running unit tests while
developing an application. It can be an integral part of the project's development and continuous integration processes.

Run:
 
    npm run test

### Protractor

Use protractor to write and run end-to-end (e2e) tests. End-to-end tests explore the application as users experience it. 
In e2e testing, one process runs the real application and a second process runs protractor tests that simulate user 
behavior and assert that the application respond in the browser as expected.

Run:
    
    ionic serve [--platform=ios]

Then (in a second terminal session):

    npm run e2e

### Test Coverage

Run:
    
    npm run test-coverage

In the `./coverage` folder open `index.html`

#### References:

* [Easy to use environment variables for Ionic 3](https://github.com/gshigeto/ionic-environment-variables)
* [Ionic CLI - Issue 1205 - Environment variable configuration](https://github.com/ionic-team/ionic-cli/issues/1205)

## Simple Logging Service

Take a look at the `.ts` files in the `src/services/log4ts` directory.

## uigradients

See: https://uigradients.com and https://github.com/subinsebastian/uigradients-scss

**Note:** `variables.scss` (in the /themes directory) includes `gradients.scss` and `gradient-mixins.scss`.

#### References: 

* [A simple logging service for Angular 4](https://robferguson.org/blog/2017/09/09/a-simple-logging-service-for-angular-4/)

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

**Note:** You can exclude files from the generated documentation by using `exclude` in `tsconfig.json`:

```
  "exclude": [
    "./node_modules",
    "./temp/**/*.ts",
    "./src/environments/*.ts",
    "./src/services/**/*.ts",
    "**/*.spec.ts"
  ]
```

## Scaffolding

The scaffolding for this project was generated using the [Ionic CLI](https://ionicframework.com/docs/cli/) 
(version 3.16.0) and the blank template:

    ionic start big-top --no-cordova blank

Run `ionic g page page-name` to generate a new page.

You can also use `ionic g [page|component|directive|pipe|provider|tabs] [element name]`.

## Resources 

## Blog Posts 
* Rob Ferguson's blog: [Build a Desktop Application with Ionic 3 and Electron](https://robferguson.org/blog/2017/11/09/build-a-desktop-application-with-ionic-3-and-electron/)
* Rob Ferguson's blog: [Build a Desktop Application with Ionic 3 and Electron - Part 2](https://robferguson.org/blog/2017/11/10/build-a-desktop-application-with-ionic-3-and-electron-part-2/)
* Rob Ferguson's blog: [Theming your Ionic 3 App](https://robferguson.org/blog/2017/11/12/theming-your-ionic-3-app/)
* Rob Ferguson's blog: [Theming your Ionic 3 App - Part 2](https://robferguson.org/blog/2017/11/13/theming-your-ionic-3-app-part-2/)
* Rob Ferguson's blog: [Ionic 3 and Forms](https://robferguson.org/blog/2017/11/19/ionic-3-and-forms/)
* Rob Ferguson's blog: [Ionic 3 and Forms - Part 2](https://robferguson.org/blog/2017/11/20/ionic-3-and-forms-part-2/)
* Rob Ferguson's blog: [Working with TypeScript, webpack and Ionic 3](https://robferguson.org/blog/2017/11/22/working-with-typescript-webpack-and-ionic-3/)

## Style Guides 
* Angular docs: [Angular Style Guide](https://angular.io/guide/styleguide)

### Electron Resources:
* Electron docs: [Quick Start](https://electron.atom.io/docs/tutorial/quick-start/)
* GitHub Pages: [Angular on Electron, part 1](https://sohlich.github.io/post/angular_electron/)
* GitHub Pages: [Angular on Electron, part 2](https://sohlich.github.io/post/angular_electron_2/)
* Medium: [How to build an Electron app using create-react-app](https://medium.freecodecamp.org/building-an-electron-application-with-create-react-app-97945861647c)

### Electron Boilerplates:
* GitHub: [electron-quick-start](https://github.com/electron/electron-quick-start)
* GitHub: [electron-react-boilerplate](https://github.com/chentsulin/electron-react-boilerplate)

### electron-builder:
* GitHub: [electron-builder](https://github.com/electron-userland/electron-builder)
* Electron docs: [Code Signing](https://www.electron.build/code-signing)

### Ionic Resources:
* Ionic Framework docs: [Get started with the Ionic Framework](https://ionicframework.com/getting-started/)
* Ionic Framework blog: [Ionic 3 has arrived](http://blog.ionic.io/ionic-3-0-has-arrived/)
* Ionic Framework blog: [Build Awesome Desktop Apps with Ionic’s NEW Responsive Grid](http://blog.ionic.io/build-awesome-desktop-apps-with-ionics-new-responsive-grid/)
* Ionic Framework blog: [New Split Pane and more](http://blog.ionic.io/ionic-2-2-0-is-out/)
* GitHub: [Ionic App Scripts](https://github.com/driftyco/ionic-app-scripts/)
* Ionic Framework docs: [iOS - UIWebView and WKWebView](https://ionicframework.com/docs/wkwebview/)

### Ionic Boilerplates that use the Ionic CLI
* GitHub: [Ionic Conference App](https://github.com/ionic-team/ionic-conference-app)
* GitHub: [Ionic Conference App with JWT authentication](https://github.com/ddellamico/ionic2-conference-app)
* GitHub: [Ionic Boilerplate](https://github.com/marcoturi/ionic-boilerplate)

### Ionic Boilerplates that use the Angular CLI
* GitHub: [generator-ngx-rocket](https://github.com/ngx-rocket/generator-ngx-rocket)

