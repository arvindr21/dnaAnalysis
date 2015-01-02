var gql = require('gql');

module.exports = function() {
  var query = gql.query();
  query.needs(0);
  query.or(query.exact('rs334', 'TT'), query.exact('i3003137', 'AA'));
  return query;
};
