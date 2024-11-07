import type { HttpContext } from '@adonisjs/core/http'
// import app from '@adonisjs/core/services/app'
// import User from '../models/user.js'
import Avatar from '../models/avatar.js'

export default class UserAvatarsController {
    async update({ params, request, response }: HttpContext) {
      try {
        // Request param for avatarUser
        const data = request.only(['imgAvatar'])
        // Find the avatar by Id
        const avatar = await Avatar.findOrFail(params.id)
        avatar.merge(data)
        await avatar.save()
        //   Response
        return response.status(201).json({ data: avatar, message: 'Img updated successfully' })
      } catch (error) {
        return response.status(400).json({ message: 'img error' })
      }
    }
    async destroy({ params, response }: HttpContext) {
      const avatar = await Avatar.findOrFail(params.id)
      await avatar.delete()
      return response.json({ avatar })
    }

  // async update({ params, request, response }: HttpContext) {
  //   try {

  //       // Richiedere i dati prima
  //     const img = request.input('img_avatar')
  //   //   const imgAvatar = request.file(img, {
  //   //     size: '2mb',
  //   //     extnames: ['jpg', 'png', 'jpeg'],
  //   //   })

  //     if (!img.isValid) {
  //       return response.badRequest({
  //         errors: img.errors
  //       })
      

  //   // Trovare l'avatar 
  //     const avatar = await Avatar.findOrFail(params.id)

  //   //   Spostare i dati nuovi nel parametro interessato 
  //     avatar.merge(avatar)

  //   //   salvo l'avatar


  //     //   Response
  //     return response.status(201).json({ data: avatar, message: 'Img updated successfully' })
  //   } catch (error) {
  //     return response.status(400).json({ message: 'img error' })
  //   }
  // }
}
