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
    if (location.timeOfDay === 'Morning') {
      locString += `<div class="col-sm-4 location-card morning">`;
    } else if (location.timeOfDay === 'Afternoon') {
      locString += `<div class="col-sm-4 location-card afternoon">`;
    } else if (location.timeOfDay === 'Evening') {
      locString += `<div class="col-sm-4 location-card evening">`;
    } else if (location.timeOfDay === 'After Dark') {
      locString += `<div class="col-sm-4 location-card after-dark">`;
    }
    locString +=  `<img class="loc-pic" src="${location.image}">`;
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
