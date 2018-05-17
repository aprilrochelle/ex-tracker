const dom = require('./dom');
const events = require('./events');

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

// const singleEx = () => {

// };

const initializer = () => {
  let exesData = [];
  let locationData = [];
  exesJSON().then((exes) => {
    exesData = exes;
    dom.exString(exesData);
    return locationsJSON();
  }).then((locations) => {
    locationData = locations;
    dom.printLocations(locationData, exesData);
    events.bindEvents();
    events.displayEx(locationData, exesData);
  });
};

module.exports = {
  initializer,
};
