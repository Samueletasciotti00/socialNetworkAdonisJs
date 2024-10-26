/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

// Save the UserController in a const
const UsersController = () => import('#controllers/users_controller')

// Iznsert the routes for the UserController

router.get('users', [UsersController, 'index']) // Show all data
router.get('users/:id', [UsersController, 'show']) // Show specific user detail
router.post('users', [UsersController, 'store']) // Update Database 
router.patch('user/:id',[UsersController, 'update']) // Update single data
router.delete('user/:id',[UsersController, 'destroy']) // Delete data
