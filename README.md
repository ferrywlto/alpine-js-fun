# Alpine.js playground

This repo used to try out [Alpine.js](https://alpinejs.dev/essentials/installation)

Used [webpack](https://webpack.js.org/guides/getting-started) as js bundler. 

## Setup
Shell commands used to setup. 
```shell
mkdir alpine-js-fun
cd alpine-js-fun
git init
touch .gitignore
echo "# alpine-js-fun" >> README.md
yarn init
yarn add -D webpack webpack-cli html-webpack-plugin
yarn add alpinejs 
yarn install
touch webpack.config.js
touch index.html
mkdir src
touch src/index.js
git add .
git commit -m "init"
git branch -M main
git remote add origin https://github.com/{{user}}/{{repo_name}}.git
git push -u origin main
```
