var rm3TagControlPackageJson = require('../../package.json');

module.exports = {

  appConfig: require('./environments')({
    'name': rm3TagControlPackageJson.name,
    'author': rm3TagControlPackageJson.author,
    'version': rm3TagControlPackageJson.version,
    'repository': rm3TagControlPackageJson.repository,
    'description': rm3TagControlPackageJson.description,

    baseHref: '/',
  }),

  eslint: true,

  serverPort: 9000,

  mockServerPort: 9090,

  vendorDependencies: Object.keys(rm3TagControlPackageJson.dependencies || {}),

};
