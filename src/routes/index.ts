import { Router } from "express";

const router = Router();

router.get("/", (request, response) =>
  response.json({ message: "Server running! 👌" }).send()
);

export { router };
