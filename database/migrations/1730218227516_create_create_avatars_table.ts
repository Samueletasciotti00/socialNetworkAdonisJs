import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'avatars'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      // ForeignKey for User relation
      table.integer('user_id').unsigned().references('users.id').onDelete('CASCADE')
      table.string('color').defaultTo('black')
      table.string('img_avatar').defaultTo('img')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}