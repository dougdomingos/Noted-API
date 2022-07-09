import { prisma } from "../../prisma";
import { NotesRepository, Note } from "../NotesRepository";

export class PrismaNotesRepository implements NotesRepository {
  async getNotes() {
    await prisma.notes.findMany();
  }

  async createNote({ title, content }: Note) {
    await prisma.notes.create({
      data: {
        title,
        content,
      },
    });
  }

  async editNote({ noteID, title, content }: Note) {
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
      where: { id: noteID },
    });
  }
}
