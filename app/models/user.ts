import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare user: string | null

  @column()
  declare email: string

  @column({ serializeAs: null })
  declare password: string

  @column()
  declare firstName: string

  @column()
  declare lastName: string

  @column()
  declare dateOfBirth: DateTime

  @column()
  declare gender: 'male' | 'female' | 'other'

  @column()
  declare location: string

  @column()
  declare profileImgUrl: string

  @column()
  declare coverImgUrl: string

  @column()
  declare bio: string

  @column()
  declare profileVisibility: 'public' | 'private' | 'friends'

  @column()
  declare post: number

  @column()
  declare like: number

  @column()
  declare theme: 'light' | 'dark'

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  @column()
  declare deletedAt: DateTime | null
}
