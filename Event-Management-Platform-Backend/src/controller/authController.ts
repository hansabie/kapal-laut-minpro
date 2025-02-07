import { Request, Response } from "express";
import * as authService from "../services/authService.ts";
import { generateToken } from "../utils/jwt.ts";

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password, phonenumber, image } = req.body;
    const bodyRequest: authService.User = {
      name: name,
      email: email,
      password: password,
      phonenumber: phonenumber,
      image: image,
    };
    await authService.register(bodyRequest);
    res.status(201).send({
      message: "User registered successfully",
    });
  } catch (error: any) {
    res.status(400).send({
      error: error.message,
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { name, email, password, phonenumber, image } = req.body;
    const bodyRequest: authService.User = {
      name: name,
      email: email,
      password: password,
      phonenumber: phonenumber,
      image: image,
    };
    const user = await authService.login(bodyRequest);
    const token = generateToken(user.id);
    res.status(200).send({
      message: "User logged in",
      token: token,
    });
  } catch (error: any) {
    res.status(400).send({
      error: error.message,
    });
  }
};
