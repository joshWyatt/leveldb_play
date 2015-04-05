var obj = [
  {
    name: 'josh',
    cohort: '14'
  },
  {
    name: 'bonnie',
    cohort: '1'
  }
];

require('fs').writeFileSync(__dirname + '/init.json', JSON.stringify(obj));