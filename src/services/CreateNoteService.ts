import { NotesRepository, NotesRequestData } from "../models/NotesRepository";

export class CreateNoteService {
  constructor(private notesRepository: NotesRepository) {}

  async execute(request: NotesRequestData) {
    const { title, content } = request;

    if (!title) {
      throw new Error("No title was provided!");
    }

    if (!content) {
      throw new Error("Content is required to create a note!");
    }

    await this.notesRepository.createNote!({
      title,
      content,
    });
  }
}
