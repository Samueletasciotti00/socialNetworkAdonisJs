import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Avatar extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare userId: number

  @column()
  declare theme: 'light' | 'dark'

  @column()
  declare imgAvatar: File

  @column()
  declare coverImg: string

  @column()
  declare profileVisibility: 'public' | 'private' | 'friends'

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
