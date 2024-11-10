import type { HttpContext } from '@adonisjs/core/http'
import Comment from '../models/comment.js'

export default class CommentsController {
    async commit({ request, response }: HttpContext){
        try {
            const data = request.only(['user_id', 'post_id', 'content', 'parent_id'])

            await Comment.create(data)
            return response.json({ message: 'Message write succesfully', data})
        } catch (error) {
            return response.json({error: 'fail to create te commit'})
        }
    }

    async remove({ request, response }:HttpContext){
        try {
            const user = request.input('user_id')
            const post = request.input('post_id')
            const commitId = request.input('commit_id')
            const commit = await Comment.query().where('user_id', user).andWhere('post_id', post).andWhere('id', commitId).first()
            if (!commit) {
                return response.badRequest({ message: 'Commit already removed' });
            }
            await commit.delete()

            return response.status(201).json({message: 'Removed commit'})
        } catch (error) {
            return response.status(500).json({error: 'Error'})
        }
    }
}