const dom = require('./dom');

let exesData = [];
let locationData = [];

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

const getAllData = () => {
  return Promise.all([exesJSON(), locationsJSON(),])
    .then((results) => {
      exesData = results[0];
      locationData = results[1];
      dom.exString(exesData);
      dom.printLocations(locationData, exesData);
    })
    .catch((err) => {
      console.error('oops!', err);
    });
};

const getExes = () => {
  return exesData;
};

const getLocations = () => {
  return locationData;
};

const initializer = () => {
  getAllData();
};

module.exports = {
  initializer,
  getExes,
  getLocations,
};
