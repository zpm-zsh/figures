const changeCase = require('change-case');
const figures = require('figures');


Object.entries(figures)
  .map(([key, value]) => {
    console.log(`export ${changeCase.constantCase(key)}='${value}'`);
  });
