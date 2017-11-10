# The Big Top Application

<img src="https://github.com/Robinyo/big-top/blob/master/screen-shots/electron-ionic-blank.png">

## Development

To clone the project:

    git clone https://github.com/Robinyo/big-top.git

To install the project's dependencies:

    cd big-top
    npm install

To build the project:

    ionic build

To launch the project:

In a terminal run the following command:

    ionic serve --no-open

In another terminal run the following command:

    electron .

**Note:** The commands must be run in separate terminal sessions as `ionic serve` is blocking.

## Production

To build the project:

    ionic build --prod
    
To package the application:

    npm run dist

If everything works as expected electron-builder will create a `/dist` directory.

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

### Electron Resources:
* Electron docs: [Quick Start](https://electron.atom.io/docs/tutorial/quick-start/)
* GitHub Pages: [Angular on Electron, part 1](https://sohlich.github.io/post/angular_electron/)
* GitHub Pages: [Angular on Electron, part 2](https://sohlich.github.io/post/angular_electron_2/)
* Medium: [How to build an Electron app using create-react-app](https://medium.freecodecamp.org/building-an-electron-application-with-create-react-app-97945861647c)

### Electron Boilerplates:
* GitHub: [electron-quick-start](https://github.com/electron/electron-quick-start)

### electron-builder:
* GitHub: [electron-builder](https://github.com/electron-userland/electron-builder)
* Electron docs: [Code Signing](https://www.electron.build/code-signing)

### Ionic Resources:
* Ionic Framework docs: [Get started with the Ionic Framework](https://ionicframework.com/getting-started/)
* Ionic Framework blog: [Ionic 3 has arrived](http://blog.ionic.io/ionic-3-0-has-arrived/)
* Ionic Framework blog: [Build Awesome Desktop Apps with Ionic’s NEW Responsive Grid](http://blog.ionic.io/build-awesome-desktop-apps-with-ionics-new-responsive-grid/)
* Ionic Framework blog: [New Split Pane and more](http://blog.ionic.io/ionic-2-2-0-is-out/)
* GitHub: [Ionic App Scripts](https://github.com/driftyco/ionic-app-scripts/)

### Ionic Boilerplates:
* GitHub: [Ionic Conference App](https://github.com/ionic-team/ionic-conference-app)
* GitHub: [Ionic Conference App with JWT authentication](https://github.com/ddellamico/ionic2-conference-app)
* GitHub: [Ionic Boilerplate](https://github.com/marcoturi/ionic-boilerplate)
