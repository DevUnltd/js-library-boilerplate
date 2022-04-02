 <div align="center">
 <img align="center" width="230" src="https://i.imgur.com/62VsVXD.png" />
  <h2>Javascript Library Boilerplate</h2>
  <blockquote>Library Starter Kit for your Javascript projects</blockquote>
 
  <a href="https://www.npmjs.com/package/@hodgef/js-library-boilerplate"><img src="https://badgen.net/npm/v/@hodgef/js-library-boilerplate?color=blue" alt="npm version"></a> <a href="https://github.com/hodgef/js-library-boilerplate"><img src="https://img.shields.io/github/last-commit/hodgef/js-library-boilerplate" alt="latest commit"></a> <a href="https://github.com/hodgef/js-library-boilerplate/actions"><img alt="Build Status" src="https://github.com/hodgef/js-library-boilerplate/workflows/Build/badge.svg?color=green" /></a> <a href="https://github.com/hodgef/js-library-boilerplate/actions"> <img alt="Publish Status" src="https://github.com/hodgef/js-library-boilerplate/workflows/Publish/badge.svg?color=green" /></a>

<strong>This is a more robust library boilerplate. For a minimal alternative, check out [js-library-boilerplate-basic](https://github.com/hodgef/js-library-boilerplate-basic).</strong>

</div>

## ⭐️ Features

- Webpack 5
- Babel 7
- Hot Reloading (`npm start`)
- CSS Autoprefixer
- SASS/SCSS support
- UMD exports, so your library works everywhere.
- Based on [CRA v5.0.0](https://github.com/facebook/create-react-app/releases/tag/v5.0.0) (For Vanilla JS libs or React libs)
- Jest unit testing
- `npm run demo` To build a ready-for-deployment demo [(Example)](https://github.com/hodgef/js-library-boilerplate/tree/master/demo)
- Customizable file headers for your build [(Example 1)](https://github.com/hodgef/js-library-boilerplate/blob/master/build/index.js) [(Example2)](https://github.com/hodgef/js-library-boilerplate/blob/master/build/index.css)
- Configurable `postinstall` message [(Example)](https://github.com/hodgef/js-library-boilerplate/blob/master/bin/postinstall)
- Daily [dependabot](https://dependabot.com) dependency updates

## 📦 Getting Started

```
git clone https://github.com/hodgef/js-library-boilerplate.git myLibrary
npm install
```

## 💎 Customization

> Before shipping, make sure to:

1. Edit `LICENSE` file
2. Edit `package.json` information (These will be used to generate the headers for your built files)
3. Edit `library: "MyLibrary"` with your library's export name in `./config/webpack.config.js`
4. Edit `./bin/postinstall` (If you would like to display a message on package install)

## 🚀 Deployment

1. `npm publish`
2. Your users can include your library as usual

### npm

```
import MyLibrary from 'my-library';
import 'my-library/build/index.css' // If you import a css file in your library

let libraryInstance = new MyLibrary();
...
```

### self-host/cdn

```
<link href="build/index.css" rel="stylesheet">
<script src="build/index.js"></script>

let MyLibrary = window.MyLibrary.default;
let libraryInstance = new MyLibrary();
...
```

## ✅ Libraries built with this boilerplate

> Made a library using this starter kit? Share it here by [submitting a pull request](https://github.com/hodgef/js-library-boilerplate/pulls)!

- [hovercard](https://github.com/AnandChowdhary/hovercard) - Wikipedia summary cards for the web
- [perfect-immutable](https://github.com/Lukasz-pluszczewski/perfect-immutable) - Library to provide immutable methods
- [react-simple-keyboard](https://github.com/hodgef/react-simple-keyboard) - React Virtual Keyboard
- [redux-better-promise](https://github.com/Lukasz-pluszczewski/redux-better-promise) - Simple and powerful redux middleware
- [redux-breeze](https://github.com/Lukasz-pluszczewski/reduxBreeze) - Powerful redux wrapper
- [regex-colorizer](https://github.com/geongeorge/regex-colorizer) - Highlighter for Javascript regex syntax
- [simple-keyboard](https://github.com/hodgef/simple-keyboard) - Javascript Virtual Keyboard
- [simple-keyboard-layouts](https://github.com/hodgef/simple-keyboard-layouts) - Layout kit for simple-keyboard
