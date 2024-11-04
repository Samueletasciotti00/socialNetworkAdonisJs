import type { HttpContext } from '@adonisjs/core/http'
import User from '../models/user.js'
import Avatar from '../models/avatar.js'

export default class UsersController {
  // Show all data from User()
  async index({ response }: HttpContext) {
    try {
      // Save all database users in a variable
      const users = await User.all()
      return response.status(200).json({ data: users })
    } catch (error) {
      return response.status(500).json({ error: 'Fail to return all data from USER' })
    }
  }

  async store({ request, response }: HttpContext) {
    try {
      // Request all data params for new User
      const data = request.only([
        'user',
        'email',
        'password',
        'first_name',
        'last_name',
        'date_of_birth',
        'gender',
        'location',
        'profile_img_url',
        'cover_img_url',
        'bio',
        'profile_visibility',
        'post',
        'like',
        'theme',
        'created_at'
      ])
      
      // Create new User
      const user = await User.create(data)
      const avatar = await Avatar.create({ userId: user.id }) // Create an Avatar automaticaly when create a new User

      // Return for the response
      return response.status(201).json({ data: [user , avatar], message: 'User created successfully' })
    } catch (error) {
      console.log(error);
      return response.status(400).json({ error: 'Failed to create a new User', details: error.message })
    }
  }

  async show({ params }: HttpContext) {
    // Show an User details
    return await User.findOrFail(params.id)
  }

  async update({ params, request, response }: HttpContext) {
    try {
      // Request all data params for update specific User
      const data = request.only([
        'user',
        'email',
        'password',
        'firstName',
        'lastName',
        'dateOfBirth',
        'gender',
        'location',
        'profileImgUrl',
        'coverImgUrl',
        'bio',
        'profileVisibility',
        'post',
        'like',
        'theme',
      ])

      // Declare the User to be edited in a variable
      const user = await User.findOrFail(params.id)
      user.merge(data) // Merge all data in user

      await user.save()

      // Return response
      return response.status(201).json({ data: user, message: 'User updated successfully' })
    } catch (error) {
      return response.status(400).json({ error: 'Failed to update the User' })
    }
  }

  async destroy({ params, response }: HttpContext) {
    // Declare the data to be deleted in a variable
    const user = await User.findOrFail(params.id)

    // Delete data
    await user.delete()
    return response.json({ user })
  }
}
