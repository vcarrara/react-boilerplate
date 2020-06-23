# Introduction


[![Build Status](https://travis-ci.org/vcarrara/react-boilerplate.svg?branch=master)](https://travis-ci.org/vcarrara/react-boilerplate)
[![dependencies Status](https://david-dm.org/vcarrara/react-boilerplate/status.svg)](https://david-dm.org/vcarrara/react-boilerplate)
[![devDependencies Status](https://david-dm.org/vcarrara/react-boilerplate/dev-status.svg)](https://david-dm.org/vcarrara/react-boilerplate?type=dev)

react-boilerplate comporte l'essentiel pour démarrer un projet web **React**. Il s'agit d'une alternative basique à create-react-app qui laisse une part plus importante à la simplicité.
react-boilerplate utilise Webpack, Babel et PostCSS. Il fournit un support pour les fichiers **html**, **js**, **jsx**, **css** et bien d'autres.

# Getting started

react-boilerplate nécessite **Node.js** et **npm** (ou yarn) afin de fonctionner. Les fichiers sources sont situés dans le dossier **src** et le dossier de build dans le dossier **dist** par défaut.

## How to use

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

#### Changement de remote (optionnel)

```
git remote rename origin react-boilerplate
git remote add origin <repo>
```
ou
```
git remote set-url origin <repo>
```

## Installation des dépendances.

Lancer la commande `npm install` pour installer les dépendances nécessaires.

### En développement

Lancer la commande `npm start` pour démarrer le serveur de développement.

### En production

Lancer la commande `npm run build` afin de créer les fichiers de sortie.

# Paramétrage

## Modification des fichiers d'entrée et de sortie

Par défaut, le fichier de sortie est appelé `react-boilerplate` et est localisé dans le dossier `dist/`. Ces paramètres peuvent être modifiés dans le fichier `webpack.config.js`.

```javascript
module.exports = {
    entry: {
        // '<nom du fichier de sortie>': '<chemin vers le fichier d'entrée>'
        'react-boilerplate': './src/index.js',
    },
    output: {
        filename: '[name].js',
        path: `${__dirname}/dist`,
    },
    // ...
}
```

## Modification du port du serveur de développement

Le port peut être modifié dans le fichier `webpack.config.js`

```javascript
    devServer: {
        port: <port-number>,
    },
```
