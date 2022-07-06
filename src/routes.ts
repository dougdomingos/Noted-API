import express from "express";

export const routes = express.Router();

routes.get("/notes", (req, res) => {
  res.send("See all notes");
});

routes.post("/notes/new", (req, res) => {
  res.send("Create a new note");
});

routes.put("/notes/edit", (req, res) => {
  res.send("Edit a note");
});

routes.delete("/notes/delete", (req, res) => {
  res.send("Delete a note")
})
