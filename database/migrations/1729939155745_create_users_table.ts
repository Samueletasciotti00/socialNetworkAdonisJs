import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      
      // Login Data
      table.string('user',21).notNullable().unique()
      table.string('email', 35).notNullable().unique()
      table.string('password', 21).notNullable()

      // Info 
      table.string('first_name').notNullable()
      table.string('last_name').notNullable()
      table.date('date_of_birth').notNullable()
      table.enum('gender',['male', 'female', 'other']).notNullable()
      table.string('location')

      // Profile User
      table.string('profile_img_url') // Insert a default image
      table.string('cover_image_url') // Insert a default image
      table.string('bio')
      table.enum('profile_visibility', ['public', 'private', 'friends']).defaultTo('public')
      table.integer('post').defaultTo(0)
      table.integer('like').defaultTo(0)

      // Detail of profile user
      table.string('theme').defaultTo('light').notNullable()

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at')
      table.timestamp('deleted_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}