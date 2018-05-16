const exString = (exes) => {
  exes.forEach((ex) => {
    let domString = '';
    domString += `<div class="container-fluid">`;
    domString +=  `<div class="row">`;
    domString +=    `<div class="col-sm-4 col-sm-offset-2 text-center">`;
    domString +=      `<img class="ex-pic" src="${ex.image}">`;
    domString +=    `</div>`;
    domString +=    `<div class="col-sm-4">`;
    domString +=      `<h3>Name: ${ex.name}</h3>`;
    domString +=      `<h3>Age: ${ex.age}</h3>`;
    domString +=      `<h3>Flaws: </h3>`;
    domString +=      `<p>${ex.flaws}</p>`;
    domString +=    `</div>`;
    domString +=  `</div>`;
    domString += `</div>`;
    printExesToDom(domString);
  });
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
    locString +=  `<h3 class="location">${location.name}</h3>`;
    locString +=  `<p class="address">${location.address}</p>`;
    locString +=  `<p>${location.timeOfDay}</p>`;
    locString += `</div>`;
  });
  locString += `</div>`;
  locString += `</div>`;
  printLocationsToDom(locString);
};

const printExesToDom = (array) => {
  $('#ex-box').append(array);
};

const printLocationsToDom = (array) => {
  $('#location-div').append(array);
};

module.exports = {
  exString,
  printLocations,
};
