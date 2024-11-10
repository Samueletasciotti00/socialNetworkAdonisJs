import type { HttpContext } from '@adonisjs/core/http'
import CommentLike from '../models/comment_like.js'

export default class CommentsLikesController {
  async like({ request, response }: HttpContext) {
    try {
      const userId = request.input('user_id')
      const commentId = request.input('comment_id')
      // Select first data like if have an UserId,PostId
      const existingLike = await CommentLike.query()
        .where('user_id', userId)
        .andWhere('comment_id', commentId)
        .first()
      if (existingLike) {
        return response.badRequest({ message: 'Like already exist' })
      }
      await CommentLike.create({ userId: userId, commentId: commentId })

      return response.json({ existingLike, message: 'Post Liked!' })
    } catch (error) {
      console.log(CommentLike);
      
      return response.json({ error: 'Error to put the like' })
    }
  }

  async unLike({ request, response }: HttpContext) {
    try {
      const userId = request.input('user_id')
      const commentId = request.input('comment_id')
      console.log(commentId, userId)

      // Select first data like if have an UserId,commentId
      const existingLike = await CommentLike.query()
        .where('user_id', userId)
        .andWhere('comment_id', commentId)
        .first()
      if (!existingLike) {
        return response.badRequest({ message: 'Like already removed' })
      }
      await existingLike.delete()
      return response.json({ message: 'Removed like from the comment' })
    } catch (error) {
      return response.json({ error: 'Error to remove the like' })
    }
  }
}
