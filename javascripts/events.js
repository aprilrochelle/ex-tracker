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
  };
};

const bindEvents = () => {
  $('.btn').on('click', filterLocations);
};

module.exports = bindEvents;
