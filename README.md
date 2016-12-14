# joi-full

joi object schema validation with extensions as universal/isomorphic libarary for Node.js and bundled for the browser (babelified and bundled)

## Why?

There has been some difficulty in getting a reasonable version of Joi packaged for the browser both due to the size of bundling and with Joi 7.x.x switching to ES6 modules has added additional challenges.

I made a browser build of joi available at [joi-browser](https://github.com/jeffbski/joi-browser), but Joi@10 split date functionality into its own package `joi-date-extensions`, so I also created `joi-date-extensions-browser` but currently are having trouble when combining `joi-browser` and `joi-date-extensions` together.

In the meantime, this build was created which includes joi and joi-date-extensions and works on Node.js and provides a bundle for brower builds.


## Usage

Moment is a peer dependency so it needs to be installed as well.

```bash
npm install joi-full moment
```

```javascript
var Joi = require('joi-full'); // includes joi-date-extensions
```

Note: if you are using webpack with a babel loader you may need to exclude `joi-browser` from being run through babel again.

In your webpack.config.js loaders, add an `exclude: [ /joi-full/ ]`

### Isomorphic / Universal JS - using in browser and on server (Node.js)

The `joi-full` package.json includes the `browser` field which directs browser builds to use to the prebuilt `dist/joi-full.js`


#### Webpack

```bash
npm install joi-full moment
```

Add the following to your app's webpack.config.js to enable the package aliasing we configured in package.json

```javascript
  resolve: {
    packageAlias: 'browser'
  }
```

Note: if you are using webpack with a babel loader you may need to exclude `joi-full` from being run through babel again.

In your webpack.config.js loaders, add an `exclude: [ /joi-full/ ]`.


So in your code, you just require `joi-full`

```javascript
var Joi = require('joi-full'); // includes joi-date-extensions
```


## Development

```bash
# builds dist/joi-full.js and dist/joi-full.min.js
npm install
npm run prepublish # when you want to rebuild
```


## Discussion

The main discussion about these difficulties has been in this github issue.

https://github.com/hapijs/joi/issues/528#issuecomment-128532221

See [joi-browser](https://github.com/jeffbski/joi-browser) for more details on the bundling issues.