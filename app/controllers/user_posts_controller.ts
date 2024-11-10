import type { HttpContext } from '@adonisjs/core/http'
import Post from '../models/post.js'

export default class UserPostsController {
  async index({ response }: HttpContext) {
    try {
      const posts = await Post.all()
      return response.status(200).json({ data: posts })
    } catch (error) {
      return response.status(500).json({ error: 'Fail to return posts' })
    }
  }

  async store({ request, response }: HttpContext) {
    try {
      const data = request.only(['title', 'content','user_id'])
      if(data.user_id > 0) {
        const post = await Post.create(data)
        return response.status(201).json({data: post, message: 'Post created successfully'})
      }
      
    } catch (error) {
      return response.status(500).json({ error: 'Fail to create a new post'})
    }
  }

  async show({ params }: HttpContext) {
    return await Post.findOrFail(params.id)
  }

  async update({ params, request, response }: HttpContext) {
    try {
      const data = request.only(['title', 'content'])
      const post = await Post.findOrFail(params.id)
      post.merge(data)
      await post.save()
      return response.status(201).json({ data: post, message: 'Post updated succesfully'})
    } catch (error) {
      return response.status(500).json({ error: 'fail to update the post'})
    }
  }

  async destroy({ params, response }: HttpContext) {
    try {
      const post = await Post.findOrFail(params.id)
      await post.delete()
      return response.json({ message: 'Post deleted succesfully' })
    } catch ( error ) {
      return Response.json({ error: 'Fail to delete the post' })
    }
  }
}
