import express from "express";
import exampleRouter from "../src/routes/exampleRouter";

const app = express();

// ROUTES
app.use("/api/v1/example", exampleRouter);

export default app;
