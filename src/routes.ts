import express from "express";
import { Request, Response } from "express";

export const routes = express.Router();

routes.get("/notes", (req: Request, res: Response): void => {
  res.send("See all notes");
});

routes.post("/notes/new", (req: Request, res: Response): void => {
  res.send("Create a new note");
});

routes.put("/notes/edit", (req: Request, res: Response): void => {
  res.send("Edit a note");
});

routes.delete("/notes/delete", (req: Request, res: Response): void => {
  res.send("Delete a note");
});
