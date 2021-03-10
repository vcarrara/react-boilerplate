# Introduction


[![Build Status](https://travis-ci.org/vcarrara/react-boilerplate.svg?branch=master)](https://travis-ci.org/vcarrara/react-boilerplate)
[![dependencies Status](https://david-dm.org/vcarrara/react-boilerplate/status.svg)](https://david-dm.org/vcarrara/react-boilerplate)
[![devDependencies Status](https://david-dm.org/vcarrara/react-boilerplate/dev-status.svg)](https://david-dm.org/vcarrara/react-boilerplate?type=dev)

react-boilerplate is a **React** starter pack. It is a simple alternative to create-react-app. react-boilerplate uses Webpack, Babel and PostCSS. Il has support for many formats **html**, **js**, **jsx**, **css** and others.

# :rocket: Getting started

react-boilerplate needs **Node.js** and **npm** (or yarn) to work. Source files are located in the **src** directory and the build files in **dist** by default.

## How to use

### With sao (recommended)

```
npm install -g sao
sao vcarrara/react-boilerplate [directory]
```

### With npx

See [https://github.com/vcarrara/create-react-boilerplate](https://github.com/vcarrara/create-react-boilerplate)
```
npx github:vcarrara/create-react-boilerplate [directory]
```

### With git

```
git clone https://github.com/vcarrara/react-boilerplate.git <my-package-name>
cd <my-package-name>
```

#### Update remote (optional)

```
git remote rename origin react-boilerplate
git remote add origin <repo>
```
ou
```
git remote set-url origin <repo>
```

## Install dependencies

Run `npm install` to install required dependencies.

### Development

Run `npm start` to start the development server.

### Production

Run `npm run build` to build output files.

# Paramétrage

## Setting up entry and ouput

By default, output file is named `react-boilerplate` and is located in `dist/`. These parameters can be updated in file `webpack.config.js`.

```javascript
module.exports = {
    entry: {
        // '<output file>': '<entry file path>'
        'react-boilerplate': './src/index.js',
    },
    output: {
        filename: '[name].js',
        path: `${__dirname}/dist`,
    },
}
```

## Setting up development server port

Port can be updated in file `webpack.config.js`

```javascript
    devServer: {
        port: <port-number>,
    },
```
