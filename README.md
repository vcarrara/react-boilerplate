# Introduction

react-boilerplate comporte l'essentiel pour démarrer un projet web **React**. Il s'agit d'une alternative basique à create-react-app qui laisse une part plus importante à la simplicité.
react-boilerplate utilise Webpack, Babel et PostCSS. Il fournit un support pour les fichiers **html**, **js**, **jsx** et **css**.

# Getting started

react-boilerplate nécessite **Node.js** et **npm** (ou yarn) afin de fonctionner. Les fichiers sources sont situés dans le dossier **src** et le dossier de build dans le dossier **dist** par défaut.

## Installation des dépendances.

Lancer la commande `npm install` pour installer les dépendances nécessaires.

## En développement

Lancer la commande `npm start` pour démarrer le serveur de développement.

## En production

Lancer la commande `npm run build` afin de créer les fichiers de sortie.

# Modification du fichier de sortie

Par défaut, le fichier de sortie est appelé `react-boilerplate` et est localisé dans le dossier `dist/`. Ces paramètres peuvent être modifiés dans le fichier `webpack.config.js`.

```javascript
module.exports = {
    entry: {
        'react-boilerplate': './src/index.js',
    },
    output: {
        filename: '[name].js',
        path: `${__dirname}/dist`,
    },
    // ...
}
```
