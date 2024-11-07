import type { HttpContext } from '@adonisjs/core/http'
import Like from '../models/like.js'

export default class LikesController {
 async like({ request, response }: HttpContext){
    try{
        const userId = request.input('user_id')
        const postId = request.input('post_id')
        // Select like if have an UserId,PostId
        const existingLike = await Like.query().where('user_id', userId).andWhere('post_id', postId).first()
        if (existingLike) {
            return response.badRequest({ message: 'Like already exist' });
        }
        await Like.create({userId: userId, postId: postId})

        return response.json({existingLike, message: 'Post Liked!'})
    } catch (error) {
        return response.json({error: 'Error to put the like'})
    }
 }

 async unLike({ request, response }: HttpContext){
    try{
        const userId = request.input('user_id')
        const postId = request.input('post_id')
        console.log(postId, userId);
        
        // Select like if have an UserId,PostId
        const existingLike = await Like.query().where('user_id', userId).andWhere('post_id', postId).first()
        console.log('Existing Like:', existingLike)
        if (!existingLike) {
            return response.badRequest({ message: 'Like already removed' });
        }
        await existingLike.delete()
        return response.json({message: 'Removed like from the post'})

    } catch (error) {
        return response.json({error: 'Error to remove the like'})
    }
 }
}