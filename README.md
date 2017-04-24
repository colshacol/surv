# surv
### surv is the result impatience, dealing with a Docker build that took three minutes for every minor change, even to UI and CSS.

1. `git clone`
2. `yarn`
3. Open `surv.json`.

```javascript
{
  // specify a port
  "port": 4567,
  // specify api-route / absolute file path pairs
  "files": {
    "/css0": "/Users/colclco/path/to/index.css",
    "/js0": "/Users/colclco/path/to/index.js"
  }
}
```

4. `npm start`
5. The console will alert you as to how to access your files.

![Preview](https://s28.postimg.org/oehsxal71/surv.png)
