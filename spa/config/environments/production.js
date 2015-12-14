var _ = require('lodash');

function productionConfig(config) {

  return _.assign({}, config, {
    environment: 'production',

    baseHref: '/rm3-tag-control/',
  });

}

module.exports = productionConfig;
