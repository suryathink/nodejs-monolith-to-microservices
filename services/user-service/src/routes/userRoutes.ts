import express from 'express';
import {
  registerUser,
  loginUser,
  getCurrentUser,
  updateUser,
  changePassword,
  deleteUser,
  getAllUsers,
  getUserById,
  adminUpdateUser,
} from '../controller/user.controller';
import { protect, restrictTo } from '../middleware/authMiddleware';
import { userValidationRules, validate } from '../middleware/validationMiddleware';

const router = express.Router();

// Public routes
router.post('/register', userValidationRules.register, validate, registerUser);
router.post('/login', userValidationRules.login, validate, loginUser);

router.post('/current',  getCurrentUser);
router.post('/update',  updateUser);
router.post('/change-password',  changePassword);
router.delete('/delete',  deleteUser);


// todo LATER
// only admin routes
// todo add admin protection
router.get('/users',  getAllUsers);
router.get('/users/:id',  getUserById);
router.post('/users/:id',  adminUpdateUser);




// Protected routes (require authentication)
router.use(protect);

router.get('/current', getCurrentUser);
router.patch('/update', userValidationRules.updateUser, validate, updateUser);
router.post('/change-password', userValidationRules.changePassword, validate, changePassword);
router.delete('/delete', deleteUser);

// Admin routes
router.use(restrictTo('admin'));

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.patch('/:id', userValidationRules.updateUser, validate, adminUpdateUser);

export default router;