const exString = (exes) => {
  let domString = '';
  domString += `<div class="container-fluid">`;
  domString +=  `<div class="row">`;
  exes.forEach((ex) => {
    domString +=    `<div id="${ex.exId}" class="col-sm-4 text-center ex-card">`;
    domString +=      `<img class="ex-pic" src="${ex.image}">`;
    domString +=      `<h3>Name: ${ex.name}</h3>`;
    domString +=      `<h3>Age: ${ex.age}</h3>`;
    domString +=      `<h3>Flaws: </h3>`;
    domString +=      `<p>${ex.flaws}</p>`;
    domString +=    `</div>`;
  });
  domString +=  `</div>`;
  domString += `</div>`;
  printToDom(domString);
};

const printLocations = (locations, exes) => {
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
    exes.forEach((ex) => {
      ex.placeNums.forEach((placeNum) => {
        if (placeNum === location.locationId) {
          locString +=  `<p>${ex.name}</p>`;
        }
      });
    });
    locString += `</div>`;
  });
  locString += `</div>`;
  locString += `</div>`;
  printToDom(locString);
};

const singleExString = (ex, locations) => {
  let singleEx = '';
  singleEx += `<div class="container-fluid">`;
  singleEx +=   `<div class="col-md-8 col-md-offset-2 single-ex text-center">`;
  singleEx +=     `<img class="ex-pic" src="${ex.image}">`;
  singleEx +=      `<h3>Name: ${ex.name}</h3>`;
  singleEx +=      `<h3>Age: ${ex.age}</h3>`;
  singleEx +=      `<h3>Flaws: </h3>`;
  singleEx +=      `<p>${ex.flaws}</p>`;
  singleEx +=     `</div>`;
  singleEx +=   `</div>`;
  singleEx +=  `<div class="row">`;
  ex.placeNums.forEach((placeNum) => {
    locations.forEach((location) => {
      if (placeNum === location.locationId) {
        singleEx +=   `<div class="col-sm-4 single-location-card">`;
        singleEx +=     `<img class="loc-pic" src="${location.image}">`;
        singleEx +=     `<h3 class="location">${location.name}</h3>`;
        singleEx +=     `<p class="address">${location.address}</p>`;
        singleEx +=   `</div>`;
      }
    });
  });
  singleEx +=    `</div>`;
  printSingleEx(singleEx);
};

const printToDom = (array) => {
  $('#ex-box').append(array);
};

const printSingleEx = (exString) => {
  $('#ex-box').html(exString);
};

module.exports = {
  exString,
  printLocations,
  singleExString,
};
