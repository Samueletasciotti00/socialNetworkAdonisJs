import router from '@adonisjs/core/services/router'

const UsersController = () => import('#controllers/users_controller') 
const UserAvatarController = () => import('#controllers/user_avatars_controller') 
const UserPostsController = () => import('#controllers/user_posts_controller')
const LikesController = () => import('#controllers/likes_controller')
const CommentsController = () => import('#controllers/comments_controller')

router.get('users', [UsersController, 'index']) // Show all data
router.post('users', [UsersController, 'store']) // Update Database 
router.get('users/:id', [UsersController, 'show']) // Show specific user detail
router.put('users/:id/' ,[UsersController, 'update']) // Update single data
router.delete('users/:id',[UsersController, 'destroy']) // Delete data


router.put('avatars/:id',[UserAvatarController, 'update']) 
router.delete('avatars/:id',[UserAvatarController, 'destroy'])

router.get('posts', [UserPostsController, 'index'])
router.post('posts', [UserPostsController, 'store'])
router.get('posts/:id', [UserPostsController, 'show'])
router.patch('posts/:id', [UserPostsController, 'update'])
router.delete('posts/:id', [UserPostsController, 'destroy'])

router.post('like', [LikesController, 'like'])
router.delete('like',[ LikesController, 'unLike'])

router.post('comments', [CommentsController, 'commit'])
router.delete('comments', [CommentsController, 'remove'])