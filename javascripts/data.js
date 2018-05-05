const loadEx = require('./ex');
const loadLocations = require('./locations');
const printStuff = require('./dom');
const events = require('./events');
// const dataGatekeeper = require('./dataGatekeeper');

const whenExLoads = (data) => {
  $('#ex-box').append(printStuff.printEx(data));
};

const whenLocationsLoad = (data) => {
  // const locations = dataGatekeeper.setLocations(data.locations);
  $('#location-div').append(printStuff.printLocations(data.locations));
  events();
};

const ifError = (error) => {
  console.error('Whoops!');
};

const initializer = () => {
  loadEx(whenExLoads, ifError);
  loadLocations(whenLocationsLoad, ifError);
};

module.exports = initializer;
