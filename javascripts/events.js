const data = require('./data');
const dom = require('./dom');

jQuery.expr[':'].icontains = function (a, i, m) {
  return jQuery(a).text().toUpperCase()
    .indexOf(m[3].toUpperCase()) >= 0;
};

const filterLocations = (e) => {
  const button = $(e.target).html();
  $('#location-div .location-card').show();
  if (button === 'Morning') {
    $('#location-div .location-card').not('.morning').toggle();
  } else if (button === 'Afternoon') {
    $('#location-div .location-card').not('.afternoon').toggle();
  } else if (button === 'Evening') {
    $('#location-div .location-card').not('.evening').toggle();
  } else if (button === 'After Dark') {
    $('#location-div .location-card').not('.after-dark').toggle();
  } else {
    $('#location-div .location-card').show();
  };
};

const searchBar = (e) => {
  if (e.which === 13) {
    const userInput = $(e.target).val();
    $(`#location-div .location-card:not(:icontains(${userInput}))`).hide();
    $(e.target).val('');
  };
};

const displayEx = () => {
  const exList = data.getExes();
  const locationList = data.getLocations();
  $('#ex-box').click((e) => {
    const exId = $(e.target).closest('.ex-card').prop('id');
    dom.singleExString(exList[exId], locationList);
  });
};

const bindEvents = () => {
  $('.btn').on('click', filterLocations);
  $('#search').keypress(searchBar);
};

module.exports = {
  bindEvents,
  displayEx,
};
