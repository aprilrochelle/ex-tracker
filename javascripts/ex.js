const loadEx = (successFx, errorFx) => {
  $.get('../db/ex.json')
    .done(successFx)
    .fail(errorFx);
};

module.exports = loadEx;
