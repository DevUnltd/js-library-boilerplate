 <div align="center">
 <img align="center" width="180" src="https://franciscohodge.com/project-pages/js-library-boilerplate/images/JSLB2.png" />
  <h2>Javascript Library Boilerplate</h2>
  <blockquote>Library Starter Kit for your Javascript projects</blockquote>
  <a href="https://travis-ci.org/hodgef/js-library-boilerplate"><img src="https://travis-ci.org/hodgef/js-library-boilerplate.svg?branch=master" /></a> <img src="https://img.shields.io/david/hodgef/js-library-boilerplate.svg" /> <a href="https://david-dm.org/hodgef/js-library-boilerplate?type=dev"><img src="https://img.shields.io/david/dev/hodgef/js-library-boilerplate.svg" /></a> <img src="https://api.dependabot.com/badges/status?host=github&repo=hodgef/js-library-boilerplate" />

</div>


## ⭐️ Features

- Webpack 4
- Babel 7
- Hot Reloading (`npm start`)
- CSS Autoprefixer
- UMD exports, so your library works everywhere.
- Based on [CRA v3.0.0](https://github.com/facebook/create-react-app/releases/tag/v3.0.0) (For Vanilla JS libs or React libs)
- Jest unit testing
- `npm run demo` To build a ready-for-deployment demo [(Example)](https://github.com/hodgef/js-library-boilerplate/tree/master/demo)
- Customizable file headers for your build [(Example 1)](https://github.com/hodgef/js-library-boilerplate/blob/master/build/index.js) [(Example2)](https://github.com/hodgef/js-library-boilerplate/blob/master/build/index.css)
- Configurable `postinstall` message [(Example)](https://github.com/hodgef/js-library-boilerplate/blob/master/bin/postinstall)
- Weekly [dependabot](https://dependabot.com) dependency updates

## 📦 Getting Started

```
git clone https://github.com/hodgef/js-library-boilerplate.git myLibrary
npm install
```

## 💎 Customization

> Before shipping, make sure to:
1. Edit `LICENSE` file
2. Edit `package.json` information (These will be used to generate the headers for your built files)
3. Edit `library: "MyLibrary"` with your library's export name in `./config/webpack.config.prod.js`
4. Edit `./bin/postinstall` (If you would like to display a message on package install)

## 🚀 Deployment
1. `npm publish`
2. Your users can include your library as usual

### npm
```
import MyLibrary from 'my-library';
import 'my-library/build/index.css' // If you import a css file in your library
...
```

### self-host/cdn
```
<link href="build/index.css" rel="stylesheet">
<script src="build/index.js"></script>

let MyLibrary = window.MyLibrary.default;
...
```

## ✅ Libraries built with this boilerplate

> Made a library using this starter kit? Share it here by [submitting a pull request](https://github.com/hodgef/js-library-boilerplate/pulls)!

- [hovercard](https://github.com/AnandChowdhary/hovercard) - Wikipedia summary cards for the web
- [perfect-immutable](https://github.com/Lukasz-pluszczewski/perfect-immutable) - Library to provide immutable methods
- [react-simple-keyboard](https://github.com/hodgef/react-simple-keyboard) - React Virtual Keyboard
- [redux-better-promise](https://github.com/Lukasz-pluszczewski/redux-better-promise) - Simple and powerful redux middleware
- [redux-breeze](https://github.com/Lukasz-pluszczewski/reduxBreeze) - Powerful redux wrapper
- [simple-keyboard](https://github.com/hodgef/simple-keyboard) - Javascript Virtual Keyboard
- [simple-keyboard-layouts](https://github.com/hodgef/simple-keyboard-layouts) - Layout kit for simple-keyboard