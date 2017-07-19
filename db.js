
module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getProfiles: getProfiles,
  createUser: createUser
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

function createUser(newUser, newProfile, connection){
  var x = newProfile
  console.log(x)
  return connection('users')
  .insert(newUser)
  .then(function(ids) {
    var id = ids[0]
    return createProfile(x, id, connection)
 })

}

function createProfile(newProfile, userId, connection) {
  var profile = {
      bio: newProfile.bio,
      img: newProfile.img,
      user_id: userId
    }
    console.log(profile)
    return connection('profiles')
      .insert(profile)
}
