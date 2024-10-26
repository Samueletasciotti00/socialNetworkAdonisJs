import type { HttpContext } from '@adonisjs/core/http'
import User from '../models/user.js'

export default class UsersController {
  /**
   * Display a list of resource
   */
  async index({ response }: HttpContext) { // Si passano i parametri di richiest e risposta
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
      
      // Save in a variable the new User
      const user = new User()

      // Save all data for create new user
      user.user = request.input('user')
      user.email = request.input('email')
      user.password = request.input('password')

      // Save data
      await user.save();

      // Return for the response
      return response.status(201).json({ data: user, message: 'Utente creato correttamente'})
    } catch (error) {
      return response.status(400).json({ error: 'Failed store' })
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
   * Edit individual record
   */
  // async edit({ params }: HttpContext) {}

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
