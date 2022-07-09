import express from "express";
import { Request, Response } from "express";

import { database } from "./models/database";

import { CreateNoteService } from "./services/CreateNoteService";
import { DeleteNoteService } from "./services/DeleteNoteService";
import { EditNoteService } from "./services/EditNoteService";
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

routes.put("/notes/edit/:id", (req: Request, res: Response): void => {
  const editNoteService = new EditNoteService(database);

  const id = req.params.id;
  const { title, content } = req.body;

  try {
    editNoteService.execute({
      // @ts-ignore
      id: id,
      title,
      content,
    });
  } catch (error) {
    res.status(400).json({ msg: error });
  }

  res.status(200).json({ msg: "Note sucessfully updated!" });
});

routes.delete("/notes/delete/:id", (req: Request, res: Response): void => {
  const deleteNoteService = new DeleteNoteService(database);

  const id = req.params.id;

  try {
    // @ts-ignore
    deleteNoteService.execute({ id: id });
  } catch (error) {
    res.status(400).json({ msg: error });
  }

  res.status(200).json({ msg: "Note sucessfully deleted!" });
});
