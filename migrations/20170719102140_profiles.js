exports.up = function (knex, Promise) {
  return knex.schema.createTable('profiles', function (table) {
    table.increments('profile_id').primary()
    table.integer('user_id')
    table.string('bio')
    table.string('url')
    table.string('img')

  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users')
}
