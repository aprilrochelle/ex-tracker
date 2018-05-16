const dom = require('./dom');
// const loadEx = require('./ex');
// const loadLocations = require('./locations');
// const printStuff = require('./dom');
// const events = require('./events');

// const whenExLoads = (data) => {
//   $('#ex-box').append(printStuff.printEx(data));
// };

// const whenLocationsLoad = (data) => {
//   $('#location-div').append(printStuff.printLocations(data.locations));
//   events();
// };

// const ifError = (error) => {
//   console.error('Whoops!');
// };

// const initializer = () => {
//   loadEx(whenExLoads, ifError);
//   loadLocations(whenLocationsLoad, ifError);
// };

const exesJSON = () => {
  return new Promise((resolve, reject) => {
    $.get('../db/exes.json')
      .done((data) => {
        const exes = data.exes;
        resolve(exes);
      })
      .fail((err) => {
        reject(`I got an error!`, err);
      });
  });
};

const locationsJSON = () => {
  return new Promise((resolve, reject) => {
    $.get('../db/locations.json')
      .done((data) => {
        const locations = data.locations;
        resolve(locations);
      })
      .fail((err) => {
        reject(`I got an error!`, err);
      });
  });
};

const initializer = () => {
  exesJSON().then((exes) => {
    dom.exString(exes);
  });
  locationsJSON().then((locations) => {
    dom.printLocations(locations);
  });
};

module.exports = initializer;
