import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, hasMany, hasOne } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import User from './user.js'
import Post from './post.js'
import CommentLike from './comment_like.js'

export default class Comment extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @hasMany(() => CommentLike)
  declare likes: HasMany<typeof CommentLike>

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @belongsTo(() => Post)
  declare post: BelongsTo<typeof Post>

  @column()
  declare userId: number

  @column()
  declare postId: number

  @column()
  declare parentId: number | null

  @column()
  declare content: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}