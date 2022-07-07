import { NotesRepository, NotesRequestData } from "../models/NotesRepository";

export class DeleteNoteService {
  constructor(private notesRepository: NotesRepository) {}

  async execute(request: NotesRequestData) {
    const { noteID } = request;

    if (noteID == null) {
      throw new Error("Note ID must be provided!")
    }

    await this.notesRepository.deleteNote!(noteID);
  }
}
