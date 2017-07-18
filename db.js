
module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getProfiles: getProfiles
}

function getUsers (connection) {
  return connection('users').select()
}

function getProfiles (connection) {
  return connection('profiles').select()
}

function getUser (id, connection) {
  return connection('users').where('id', id)
}
