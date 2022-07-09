import { NotesRepository, Note } from "../models/NotesRepository";

export class EditNoteService {
  constructor(private notesRepository: NotesRepository) {}

  async execute(request: Note) {
    const { noteID, title, content } = request;

    if (noteID == null) {
      throw new Error("Note ID must be provided!");
    }

    if (!title && !content) {
      throw new Error("Nothing to edit, since no values were provided.");
    }

    await this.notesRepository.editNote!({
      noteID,
      title,
      content,
    });
  }
}
