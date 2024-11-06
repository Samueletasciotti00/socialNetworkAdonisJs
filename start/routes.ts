import router from '@adonisjs/core/services/router'

const UsersController = () => import('#controllers/users_controller')  // Users
const UserAvatarController = () => import('#controllers/user_avatars_controller') // Avatars

router.get('users', [UsersController, 'index']) // Show all data
router.get('users/:id', [UsersController, 'show']) // Show specific user detail
router.post('users', [UsersController, 'store']) // Update Database 
router.put('users/:id/edit' ,[UsersController, 'update']) // Update single data
router.delete('users/:id',[UsersController, 'destroy']) // Delete data

// Insert the routes for the UserAvatarsController
router.put('avatars/:id',[UserAvatarController, 'update']) 