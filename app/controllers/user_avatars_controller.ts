import type { HttpContext } from '@adonisjs/core/http'

export default class UserAvatarsController {
    update({ request }: HttpContext) {
        const avatar = request.file('avatar')
        console.log(avatar)
    }    
}