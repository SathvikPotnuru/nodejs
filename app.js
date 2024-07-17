// npm - global command, comes with node
// npm --version

// local dependecy - use it only in this particular project
// npm i <packageName>

//global dependency - use it in any project
// npm install -g <packageName>

// package.json - manifest file (store imp info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init
// npm init -y


const _ = require('lodash');
const items = [1,[2, [3,[4]]]]
const newItems = _.flatMapDeep(items)
console.log(newItems)