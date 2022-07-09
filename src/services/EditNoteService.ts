import { NotesRepository, Note } from "../models/NotesRepository";

export class EditNoteService {
  constructor(private notesRepository: NotesRepository) {}

  async execute(request: Note) {
    const { id, title, content } = request;

    if (id == null) {
      throw new Error("Note ID must be provided!");
    }

    if (!title && !content) {
      throw new Error("Nothing to edit, since no values were provided.");
    }

    await this.notesRepository.editNote!({
      id,
      title,
      content,
    });
  }
}
