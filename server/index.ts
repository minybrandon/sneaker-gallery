import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

// this is registering a route handler
// Hey, Express app! Please perform the following function when root route is requested!

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server and hello world");
});

app.post("/customers", (req: Request, res: Response) => {
  res.send("Created a new customer");
});

app.get("/customers/:id", (req: Request, res: Response) => {
  res.send("Retrieved customer info");
});

app.post("/customers/:id", (req: Request, res: Response) => {
  res.send("Updated customer info");
});

app.delete("/customers/:id", (req: Request, res: Response) => {
  res.send("Deleted customer");
});

app.get("/customers", (req: Request, res: Response) => {
  res.send("Got all customers info");
});

app.get("/customers/:id/sneakers", (req: Request, res: Response) => {
  res.send("Got sneaker collection from specific customer");
});

app.post("/customers/:id/sneaker", (req: Request, res: Response) => {
  res.send("Added new sneaker to customer's collection");
});

// this is now telling Express app to start listening for requests
// Hey, Express app! I am done with registering my route handlers
// now start listening on the specified port! And call this function when you are now listening

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
