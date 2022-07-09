import express from "express";
import { Request, Response } from "express";

import { PrismaNotesRepository } from "./models/prisma/PrismaNotesRepository";

import { CreateNoteService } from "./services/CreateNoteService";

export const routes = express.Router();

routes.get("/notes", (req: Request, res: Response): void => {
  res.send("See all notes");
});

routes.post("/notes/new", (req: Request, res: Response): void => {
  const notesRepository = new PrismaNotesRepository();
  const createNoteService = new CreateNoteService(notesRepository);

  const { title, content } = req.body;

  try {
    createNoteService.execute({
      title,
      content,
    });
  } catch (error) {
    res.status(400).json({ msg: error });
  }

  res.status(201).json({msg: "Operation sucessful!"});
});

routes.put("/notes/edit", (req: Request, res: Response): void => {
  res.send("Edit a note");
});

routes.delete("/notes/delete", (req: Request, res: Response): void => {
  res.send("Delete a note");
});
