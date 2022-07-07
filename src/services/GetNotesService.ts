import { NotesRepository } from "../models/NotesRepository";

export class GetNotesService {
  constructor(private notesRepository: NotesRepository) {}

  async execute() {
    const notes = await this.notesRepository.getNotes!();
  }
}
