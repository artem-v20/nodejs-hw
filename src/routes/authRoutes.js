import { celebrate } from 'celebrate';
import { Router } from 'express';
import {
  loginUserSchema,
  registerUserSchema,
  requestResetEmailSchema,
  resetPasswordSchema,
} from '../validations/authValidation.js';
import {
  loginUser,
  logoutUser,
  refreshUserSession,
  registerUser,
  requestResetEmail,
  resetPassword,
} from '../controllers/authController.js';

const authRouter = Router();

authRouter.post('/register', celebrate(registerUserSchema), registerUser);

authRouter.post('/login', celebrate(loginUserSchema), loginUser);

authRouter.post('/refresh', refreshUserSession);

authRouter.post('/logout', logoutUser);

authRouter.post(
  '/request-reset-email',
  celebrate(requestResetEmailSchema),
  requestResetEmail,
);

authRouter.post(
  '/reset-password',
  celebrate(resetPasswordSchema),
  resetPassword,
);

export default authRouter;
