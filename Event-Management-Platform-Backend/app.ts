import express, { Application } from "express";
import dotenv from "dotenv";
import authRouter from "./src/router/authRouter.ts";
import cors from "cors";
import eventRouter from "./src/router/eventRouter.ts";
import orderRouter from "./src/router/orderRouter.ts";
import reviewRouter from "./src/router/reviewRouter.ts";

dotenv.config();
const app: Application = express();
const PORT = process.env.PORT || 8000;

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api", eventRouter);
app.use("/api", orderRouter);
app.use("/api", reviewRouter);

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
