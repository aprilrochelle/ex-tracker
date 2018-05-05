const loadEx = require('./ex');
const loadLocations = require('./locations');
const printStuff = require('./dom');

const whenExLoads = (data) => {
  $('#ex-box').append(printStuff.printEx(data));
};

const whenLocationsLoad = (data) => {
  $('#location-div').append(printStuff.printLocations(data.locations));
};

const ifError = (error) => {
  console.error('Whoops!');
};

const initializer = () => {
  loadEx(whenExLoads, ifError);
  loadLocations(whenLocationsLoad, ifError);
};

module.exports = initializer;