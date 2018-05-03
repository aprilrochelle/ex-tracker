const loadLocations = (successFx, errorFx) => {
  $.get('../db/locations.json')
    .done(successFx)
    .fail(errorFx);
};

module.exports = loadLocations;
