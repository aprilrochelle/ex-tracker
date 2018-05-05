let locations = [];

const setLocations = (locationsArray) => {
  locations = locationsArray;
};

const getLocations = () => {
  return locations;
};

module.exports = {
  setLocations,
  getLocations,
};
