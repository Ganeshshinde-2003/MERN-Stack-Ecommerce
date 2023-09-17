import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRouter from "./routes/authRoute.js";
import cors from "cors";
import categoryRouter from "./routes/categoryRoute.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/category", categoryRouter);

app.get("/", (req, res) => {
  res.send({
    message: "welcome to my sitee",
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server running ${PORT}`.bgCyan.white);
});
