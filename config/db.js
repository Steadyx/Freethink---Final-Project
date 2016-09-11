var dbURIs = {
  test: 'mongodb://localhost/api-test',
  development: 'mongodb://localhost/api-development',
  production: process.env.MONGOLAB_URI || 'mongodb://localhost/api'

}

module.exports = function(env){
  return dbURIs[env];
}
