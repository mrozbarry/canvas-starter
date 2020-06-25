# HTML5 Canvas Starter Template

> ✨ Bootstrapped with Create Snowpack App (CSA).

## Details

### Installing packages

With snowpack, you can `npm|yarn` install packages, and import using es6 syntax:

```sh
$ yarn add some-package
```

```js
import defaultExport from 'some-package';
```

### Where to start

Check out [index.js](./src/index.js), there are some comments to get you started.
If you want some interactivity, think about adding state:

```js
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const state = {
};

const draw = () => {
  // Do something with state

  // ...canvas setup/save

  /// Draw using data from your state

  // ...canvas restore/requestAnimationFrame
};

document.addEventListener('keypress', (event) => {
  // Do something with state, it'll get used next render
});
```

### Files

You can add images/other files into your `src` directory, and use import to load them.
Import will return a file path for non-javascript files.

## Available Scripts

### npm start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

