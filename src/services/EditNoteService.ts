import { NotesRepository, Note } from "../models/NotesRepository";

export class EditNoteService {
  constructor(private notesRepository: NotesRepository) {}

  async execute(request: Note) {
    const { id, title, content } = request;

    if (id == null) {
      throw new Error("Note ID must be provided!");
    }

    if (isNaN(id) || id < 0) {
      throw new Error("Note ID must be a non-negative number!")
    }

    if (!title && !content) {
      throw new Error("Nothing to edit, since no values were provided.");
    }

    await this.notesRepository.editNote!({
      id: Number(id),
      title,
      content,
    });
  }
}
