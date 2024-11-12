import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'comment_likes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.integer('comment_id').unsigned().references('id').inTable('comments').onDelete('CASCADE')
      table.unique(['user_id', 'comment_id']) // Verify if an user allready put the like at the commit

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}