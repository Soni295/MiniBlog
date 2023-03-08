import { Router } from 'express';
import { login, register } from '../controllers/auth';

const router = Router().post('/register', register).post('/login', login);

export { router };
