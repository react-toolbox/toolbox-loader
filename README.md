# React Toolbox Loader

A webpack loader to add custom theming variables to your React Toolbox Components build process. You can install it as an npm package:

```
npm install --save-dev toolbox-loader
```

## The configuration file

You just need to create a config file holding the variables you want to modify for your build and tell webpack to include it in the building process. For example you can create a little `theme.scss` file in your project context folder:

```scss
$color-primary: $palette-indigo-500 !default;
$color-primary-dark: $palette-indigo-700 !default;
$color-accent: $palette-pink-a200 !default;
$color-accent-dark: $palette-pink-700 !default;
$color-primary-contrast: $color-dark-contrast !default;
$color-accent-contrast: $color-dark-contrast !default;
```

## Add the file to your css loader

In your webpack configuration you can add an option to webpack specifying the name of the configuration file. By default it's `theme.scss` so if you call it that way you just need to add the loader:

```javascript
module: {
    loaders: [{
        test: /(\.scss|\.css)$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass!toolbox')
    }]
},
toolboxTheme: 'theme.scss',
....
```

With this configuration your SASS files will be loaded with the context provided by your configuration file.
