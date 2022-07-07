import { NotesRepository } from "../models/NotesRepository";

export class DeleteNoteService {
  constructor(private notesRepository: NotesRepository) {}

  async execute({ noteID }: { noteID: number }) {
    if (noteID == null) {
      throw new Error("Note ID must be provided!");
    }

    await this.notesRepository.deleteNote!(noteID);
  }
}
