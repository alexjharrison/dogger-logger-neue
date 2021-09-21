import { Router } from "express";
import { login } from "./auth/login";
import { register } from "./auth/register";

export const webhookRoutes = Router();

const allRoutes = {
  login,
  register,
};

webhookRoutes.post("/", (req, res, next) => {
  const { name } = req.body.action;

  if (Object.keys(allRoutes).includes(name)) {
    // @ts-ignore   Hey ts compiler, i know this will always work
    allRoutes[name](req, res, next);
  } else {
    res.status(404).json({ message: "Webhook not found" });
  }
});
