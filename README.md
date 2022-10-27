# Projet Mario

Projet réalisé par Thomas Pierson et Anthony Dragun.

Le projet est séparé en deux branches:

- Console: Affichage direct dans la console, sans possibilité de mouvement.
- Navigateur: Fonctionne uniquement dans un navigateur, permet les mouvements de base: gauche/droite/sauter.

Nous avons crées deux branches car il y avait un problème avec l'option module du TSCONFIG.JSON. Lors du build, les imports JS n'étaient pas correctement fait (manque du .js), et du coup les scripts ne fonctionnait pas sur navigateur. Ce problème pourrait également être résolu à l'aide de Webpack.

## Spécifications techniques

`node -v`

ex : v.18.10.0

### Exécution des commandes NPM

_Les commandes npm ci-dessous doivent toutes être exécutées depuis le répertoire où se situe le fichier package.json_

### Installation des dépendances NPM (avant la première utilisation)

`npm install`

### Installation globale de Nodemon pour le Hot Reloading (avant la première utilisation)

`npm install -g nodemon`

ou

`sudo npm install -g nodemon` (sur systèmes Unix)

### Exécution du programme (code JS déjà transpilé)

`npm start`

### Transpilation du code TypeScript vers JavaScript

`npm run build`

### Transpilation TypeScript vers JavaScript et exécution du programme

`npm run dev`

### Transpilation TypeScript vers JavaScript et exécution du programme avec activation du Hot Reloading (nodemon doit être installé)

`npm run watch`

### Exécution des tests unitaires avec Jest.js

`npm test`

### Emplacement du code TypeScript transpilé en JavaScript

`./dist`

---
