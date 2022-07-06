import { prisma } from "../../prisma";
import { NoteRepository, NotesRequestData } from "../NotesRepository";

export class PrismaNotesRepository implements NoteRepository {
  async getNotes() {
    await prisma.notes.findMany();
  }

  async createNote({ title, content }: NotesRequestData) {
    await prisma.notes.create({
      data: {
        title,
        content,
      },
    });
  }

  async editNote({ noteID, title, content }: NotesRequestData) {
    await prisma.notes.update({
      data: {
        title,
        content,
      },

      where: {
        id: noteID,
      },
    });
  }
  async deleteNote(noteID: number) {
    await prisma.notes.delete({
      where: { id: noteID }
    })
  }
}
