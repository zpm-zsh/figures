const changeCase = require('change-case');
const figures = require('figures');


Object.entries(figures)
  .map(([key, value]) => {
    console.log(`export ZSH_${changeCase.constantCase(key)}='${value}'`);
  });
