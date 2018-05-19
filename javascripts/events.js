const data = require('./data');
const dom = require('./dom');

jQuery.expr[':'].icontains = function (a, i, m) {
  return jQuery(a).text().toUpperCase()
    .indexOf(m[3].toUpperCase()) >= 0;
};

const filterLocations = (e) => {
  const button = $(e.target).html();
  $('#ex-box .location-card').show();
  if (button === 'Morning') {
    $('#ex-box .location-card').not('.morning').toggle();
  } else if (button === 'Afternoon') {
    $('#ex-box .location-card').not('.afternoon').toggle();
  } else if (button === 'Evening') {
    $('#ex-box .location-card').not('.evening').toggle();
  } else if (button === 'After Dark') {
    $('#ex-box .location-card').not('.after-dark').toggle();
  } else {
    $('#ex-box .location-card').show();
  };
};

const searchBar = (e) => {
  if (e.which === 13) {
    const userInput = $(e.target).val();
    $(`#ex-box .location-card:not(:icontains(${userInput}))`).hide();
    $(e.target).val('');
  };
};

const displayEx = (e) => {
  const exList = data.getExes();
  const locationList = data.getLocations();
  const exIndex = $(e.target).closest('.ex-card').prop('id') - 1;
  dom.singleExString(exList[exIndex], locationList);
};

const bindEvents = () => {
  $('.btn').on('click', filterLocations);
  $('#search').keypress(searchBar);
  $('#ex-box').click(displayEx);
};

module.exports = {
  bindEvents,
};
