import { NotesRepository } from "../models/NotesRepository";

export class GetNotesService {
  constructor(private notesRepository: NotesRepository) {}

  async execute() {
    return await this.notesRepository.getNotes!();
  }
}
