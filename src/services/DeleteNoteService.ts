import { NotesRepository } from "../models/NotesRepository";

export class DeleteNoteService {
  constructor(private notesRepository: NotesRepository) {}

  async execute({ id }: { id: number }) {
    if (id == null) {
      throw new Error("Note ID must be provided!");
    }

    if (isNaN(id) || id < 0) {
      throw new Error("Note ID must be a non-negative number!")
    }

    await this.notesRepository.deleteNote!(Number(id));
  }
}
