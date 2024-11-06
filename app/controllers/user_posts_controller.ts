import type { HttpContext } from '@adonisjs/core/http'
import Post from '../models/post.js'

export default class UserPostsController {
  async index({ response }: HttpContext) {
    try{
      const posts = await Post.all()
      return response.status(200).json({data: posts})
    } catch (error) {
      return response.status(500).json({error: 'Fail to return posts'})
    }
  }

  
  async create({}: HttpContext) {}

  
  async store({ request }: HttpContext) {}

  
  async show({ params }: HttpContext) {}

  
  async edit({ params }: HttpContext) {}

  
  async update({ params, request }: HttpContext) {}

  
  async destroy({ params }: HttpContext) {}
}