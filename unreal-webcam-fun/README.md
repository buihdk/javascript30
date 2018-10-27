# Unreal Webcam Fun
* To start your own server: `npm install` to install all dependencides that includes `browser-sync`
* Then `npm start` to start the local server
* Go to `localhost:3000`
* Play around with the pixels in `script.js` file:
  ```
  pixels = redEffect(pixels);
  ```
  ```
  pixels = rgbSplit(pixels);
  ctx.globalAlpha = 0.1;
  ```
  ```
  pixels = greenScreen(pixels);
  ```