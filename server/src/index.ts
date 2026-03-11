import express, { Request, Response, Application } from "express";
import "dotenv/config";
const app: Application = express();
const PORT = process.env.PORT || 5001;

app.get("/", (req: Request, res: Response) => {
  return res.json({ status: 200, message: "app is running for graphql" });
});



app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
