# vue-calculator-pwa

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### steps
- create vue app
- add the PWA plugin
- install animate.css
- install the style-resources-loader plugin (https://dev.to/lynnewritescode/my-scss-setup-within-a-vue-cli-3-project-4jan), 
you'll get a vue.config.js file. Fill it with the right path to the global vars.
```
vue create vue-calculator-pwa
vue add @vue/pwa
npm install animcate.css
npm install node-sass sass-loader style-loader --save-dev 
vue add style-resources-loader
```


