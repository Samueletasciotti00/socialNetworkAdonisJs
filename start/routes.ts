/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

// Salvo in una const lo UserController;
const UsersController = () => import('#controllers/users_controller')

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

// Inserirco le rottw per lo UserController

router.get('users', [UsersController, 'index']) // Mostra tutti i dati
router.get('users/:id', [UsersController, 'show']) // Mostra i dati specifici
router.post('users',[UsersController, 'store']) // Aggiunge i dati nel db 
router.patch('user/:id',[UsersController, 'update']) // Aggiorna un dato specifico
router.delete('user/:id',[UsersController, 'destroy']) // Elimina il dato indicato
