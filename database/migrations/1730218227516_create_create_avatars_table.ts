import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'avatars'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('users.id').onDelete('CASCADE')

      table.enum('theme',['light', 'dark']).defaultTo('light').notNullable()
      table.string('img_avatar')
      table.string('cover_img').defaultTo('img_cover').nullable()
      table.enum('profile_visibility', ['public', 'private', 'friends']).defaultTo('public')
      
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}