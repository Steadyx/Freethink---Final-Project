var dbURIs = {
  test: 'mongodb://localhost/api-test',
  development: 'mongodb://localhost/api-development',
  production: process.env.MONGODB_URI || 'mongodb://localhost/api'

}

module.exports = function(env){
  return dbURIs[env];
}
