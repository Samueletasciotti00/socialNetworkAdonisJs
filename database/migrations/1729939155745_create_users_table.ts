import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      
      // Login Data
      table.string('user',80).nullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password').notNullable()

      // Info 
      table.string('first_name')
      table.string('last_name')
      table.date('date_of_birth')
      table.enum('gender',['male', 'female', 'other'])
      table.string('location')

      // Profile User
      table.string('profile_img_url') // Inserire un img di default
      table.string('cover_image_url') // Inserire un img di default
      table.string('bio')
      table.enum('profile_visibility', ['public', 'private', 'friends']).defaultTo('public')
      table.integer('post').defaultTo(0)
      table.integer('like').defaultTo(0)

      // Detail of profile user
      table.string('theme').defaultTo('light')

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
      table.timestamp('deleted_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}