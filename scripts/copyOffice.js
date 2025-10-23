const fs = require('fs-extra');

const src = 'node_modules/@microsoft/office-js/dist';
const dest = 'public/assets/office-js';

fs.copySync(src, dest);
console.log('Office.js files copied successfully.');
