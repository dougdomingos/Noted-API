import express from "express";
import { Request, Response } from "express";
import { database } from "./models/database";

import { CreateNoteService } from "./services/CreateNoteService";
import { GetNotesService } from "./services/GetNotesService";

export const routes = express.Router();

routes.get("/notes", (req: Request, res: Response): void => {
  const getNotesService = new GetNotesService(database);

  getNotesService
    .execute()
    .then((noteList) => {
      res.status(200).json(noteList);
    })
    .catch((error) => {
      res.status(503).json({ msg: error });
    });
});

routes.post("/notes/new", (req: Request, res: Response): void => {
  const createNoteService = new CreateNoteService(database);

  const { title, content } = req.body;

  try {
    createNoteService.execute({
      title,
      content,
    });
  } catch (error) {
    res.status(400).json({ msg: error });
  }

  res.status(201).json({ msg: "Operation sucessful!" });
});

routes.put("/notes/edit", (req: Request, res: Response): void => {
  res.send("Edit a note");
});

routes.delete("/notes/delete", (req: Request, res: Response): void => {
  res.send("Delete a note");
});
