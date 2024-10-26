import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '../../app/models/user.js'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await User.createMany([
      {
        user: 'user1',
        email: 'virk@adonisjs.com',
        password: 'secret',
      },
      {
        user: 'user2',
        email: 'romain@adonisjs.com',
        password: 'supersecret',
      },
    ])

  }
}