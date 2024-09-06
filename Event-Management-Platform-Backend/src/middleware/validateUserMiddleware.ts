import { body } from "express-validator";

export const validateUser = [
  body("email").isEmail().withMessage("Enter a valid email address"),
  body("password")
    .not()
    .isEmpty()
    .withMessage("Password is required")
    .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    .withMessage(
      "Password must contain at least one uppercase letter, one lowercase letter, one number, one symbol and be at least 8 characters"
    ),
];