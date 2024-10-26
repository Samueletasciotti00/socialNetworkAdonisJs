import type { HttpContext } from '@adonisjs/core/http'
import User from '../models/user.js'

export default class UsersController {
  /**
   * Display a list of resource
   */
  async index({ response }: HttpContext) { // Si passano i parametri di richiest e risposta
    try {
      // Salvo in una variabile tutti gli utenti del database
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
      
      // Salvo in una variabile il nuovo utente
      const user = new User()

      // Salvo i dati per un nuovo utente
      user.user = request.input('user')
      user.email = request.input('email')
      user.password = request.input('password')

      // Salvo il dato
      await user.save();

      // Faccio il return per visualizzare la risposta
      return response.status(201).json({ data: user, message: 'Utente creato correttamente'})
    } catch (error) {
      return response.status(400).json({ error: 'Failed store' })
    }
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
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

    // Dichiaro in una variabile lo User da editare
    const user = await User.findOrFail(params.id)

    user.user = request.input('user') // Richiamo il nome utente da editare
    user.email = request.input('email') // Richiamo la mail da editare
    user.password = request.input('password') // Richiamo la password da editare
    
    // Salvo il dato
    await user.save()

    // Ritorno il dato da mostrare
    return user
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {

    // Dichiaro in una variabile il dato da eliminare
    const user = await User.findByOrFail(params.id)

    // Elimino il dato
    await user.delete()

    // Return
    return user
  }
}
