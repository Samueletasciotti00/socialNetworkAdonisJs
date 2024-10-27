import type { HttpContext } from '@adonisjs/core/http'
import User from '../models/user.js'
// import { DateTime } from 'luxon'

export default class UsersController {
  /**
   * Display a list of resource
   */
  async index({ response }: HttpContext) {
    // Si passano i parametri di richiest e risposta
    try {
      // Save all database users in a variable
      const users = await User.all()
      return response.status(200).json({ data: users })
    } catch (error) {
      return response.status(500).json({ error: 'Fail index' })
    }
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    try {

      // Request all data params for new User
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

      // Create new User
      const user = await User.create(data)

      // Return for the response
      return response.status(201).json({ data: user, message: 'User created successfully' })

    } catch (error) {
      
      // Error state
      return response.status(400).json({ error: 'Failed to create a new User' })
    }
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    // Show an User details
    return await User.findOrFail(params.id)
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {
    // Declare the User to be edited in a variable
    const user = await User.findOrFail(params.id)

    user.user = request.input('user') // Callback userName
    user.email = request.input('email') // Callback email
    user.password = request.input('password') // Callback password

    // Save data
    await user.save()

    // Return response
    return user
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    // Declare the data to be deleted in a variable
    const user = await User.findByOrFail(params.id)

    // Delete data
    await user.delete()

    // Return
    return user
  }
}
