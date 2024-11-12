import type { HttpContext } from '@adonisjs/core/http'
import Avatar from '../models/avatar.js'
import app from '@adonisjs/core/services/app'
export default class UserAvatarsController {
  async update({ params, request, response }: HttpContext) {
    const avt = request.file('img_avatar', {
      size: '10mb',
      extnames: ['jpg', 'png', 'jpeg'],
    })
    console.log(avt);

    if (!avt) {
      return response.badRequest('File non caricato correttamente')
    }
    
    const avatar = await Avatar.findOrFail(params.id)
    avatar.imgAvatar = avt.headers['filename']
    await avatar.save()
    await avatar.imgAvatar.move(app.makePath('public/upload'))

    
  }
  async destroy({ params, response }: HttpContext) {
    const avatar = await Avatar.findOrFail(params.id)
    await avatar.delete()
    return response.json({ avatar })
  }
}
