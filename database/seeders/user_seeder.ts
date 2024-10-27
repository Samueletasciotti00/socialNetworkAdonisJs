import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '../../app/models/user.js'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await User.createMany([
      {
        user: 'rlanz',
        email: 'romain@adonisjs.com',
        password: 'password123',
        firstName: 'Romain',
        lastName: 'Lanz',
        dateOfBirth: DateTime.local(1995, 5, 15),
        gender: 'other',
        location: 'France',
        bio: 'Developer at AdonisJS',
        theme: 'dark',
        profileImgUrl: 'https://example.com/profile.png',
        coverImgUrl: 'https://example.com/cover.png',
        profileVisibility: 'public',
      },
      {
        user: 'test',
        email: 'romain@adonisjs.com',
        password: 'password-nuova',
        firstName: 'Luca',
        lastName: 'Rossi',
        dateOfBirth: DateTime.local(1995, 5, 15),
        gender: 'other',
        location: 'Italy',
        bio: 'Developer at NodeJs',
        theme: 'light',
        profileImgUrl: 'https://example.com/profile.png',
        coverImgUrl: 'https://example.com/cover.png',
        profileVisibility: 'public',
      },
    ])
  }
}
