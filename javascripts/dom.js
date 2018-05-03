const printEx = (exData) => {
  let domString = '';
  domString += `<img src="${exData.image}">`;
  domString += `<h3>Name: ${exData.name}</h3>`;
  domString += `<h3>Age: ${exData.age}</h3>`;
  domString += `<p>${exData.flaws}</p>`;
  return domString;
};

const printLocations = (locations) => {
  let locString = '';
  locString += `<div class="container-fluid">`;
  locString +=  `<div class="row">`;
  locations.forEach((location) => {
    locString += `<div class="col-sm-4 location-card">`;
    locString +=  `<img src="${location.image}">`;
    locString +=  `<h4>${location.name}</h4>`;
    locString +=  `<p>${location.address}</p>`;
    locString +=  `<p>${location.timeOfDay}</p>`;
    locString += `</div>`;
  });
  locString += `</div>`;
  locString += `</div>`;
  return locString;
};

module.exports = {
  printEx,
  printLocations,
};
