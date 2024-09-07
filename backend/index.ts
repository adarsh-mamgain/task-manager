import express from "express";
import { PrismaClient } from "@prisma/client";
// import swaggerUi from "swagger-ui-express";
// import swaggerDocument from "./swagger.json";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.post("/users", async (req, res) => {
  const { email, name } = req.body;
  const user = await prisma.user.create({
    data: { email, name },
  });
  res.json(user);
});

app.get("/tasks", async (req, res) => {
  const tasks = await prisma.task.findMany();
  res.json(tasks);
});

app.post("/tasks", async (req, res) => {
  const { title, column, userId } = req.body;
  const task = await prisma.task.create({
    data: { title, column, userId },
  });
  res.json(task);
});

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
