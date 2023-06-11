import cors from "cors";
import express, { Express, Request, Response } from "express";
import router from "./routes";
import mongoose, { ConnectOptions } from "mongoose";

const app: Express = express();
const PORT: string | number = process.env.PORT || 5000;

app.use(cors());
app.use(router);

const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_DB}.j5bl6o5.mongodb.net/?retryWrites=true&w=majority`;

const options = {
  useNewURLParser: true,
  useUnifiedTopology: true,
} as ConnectOptions;

mongoose
  .connect(uri, options)
  .then(() => {
    app.get("/", (req: Request, res: Response) => {
      res.send(`API RUNNING`);
    });
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    throw error;
  });
