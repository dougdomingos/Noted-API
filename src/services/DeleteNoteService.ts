import { NotesRepository } from "../models/NotesRepository";

export class DeleteNoteService {
  constructor(private notesRepository: NotesRepository) {}

  async execute({ id }: { id: number }) {
    if (id == null) {
      throw new Error("Note ID must be provided!");
    }

    await this.notesRepository.deleteNote!(id);
  }
}
