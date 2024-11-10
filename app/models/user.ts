import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Avatar from './avatar.js'
import Post from './post.js'
import Like from './like.js'
import Comment from './comment.js'
import CommentLike from './comment_like.js'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  // Hash methods for crypting password
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  @hasOne(() => Avatar)
  declare avatar: HasOne<typeof Avatar>

  @hasMany(() => Post)
  declare posts: HasMany<typeof Post>

  @hasMany(() => Like)
  declare likes: HasMany<typeof Like>

  @hasMany(() => Comment)
  declare comments: HasMany<typeof Comment>

  @hasMany(() => CommentLike)
  declare commentsLikes: HasMany<typeof CommentLike>

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare userName: string | null

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
  declare residence: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  @column()
  declare deletedAt: DateTime | null
}
