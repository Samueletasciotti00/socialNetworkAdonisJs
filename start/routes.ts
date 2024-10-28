// IMPORTS
import router from '@adonisjs/core/services/router'

// Save the UserController in a const
const UsersController = () => import('#controllers/users_controller')  

// Insert the routes for the UserController
router.get('users', [UsersController, 'index']) // Show all data
router.get('users/:id', [UsersController, 'show']) // Show specific user detail
router.post('users', [UsersController, 'store']) // Update Database 
router.put('users/:id/edit' ,[UsersController, 'update']) // Update single data
router.delete('users/:id/delete',[UsersController, 'destroy']) // Delete data
