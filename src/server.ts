// import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app";

dotenv.config({ path: "./config.env" });

const port: number = Number(process.env.PORT) || 3000;

const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
