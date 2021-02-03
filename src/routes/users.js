import express from 'express';

// import { getUsers, createUsers, getUser, deleteUser, updateUser } from '../controllers/users.js';
import { getUsers, createUsers } from '../controllers/users.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/', createUsers);
// router.get('/:id', getUser);
// router.delete('/:id', deleteUser);
// router.patch('/:id', updateUser);

export default router;