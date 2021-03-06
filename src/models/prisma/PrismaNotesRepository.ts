import { prisma } from "../../prisma";
import { NotesRepository, Note } from "../NotesRepository";

export class PrismaNotesRepository implements NotesRepository {
  async getNotes() {
    const noteArray = await prisma.notes.findMany();
    return noteArray;
  }

  async createNote({ title, content }: Note) {
    await prisma.notes.create({
      data: {
        title,
        content,
      },
    });
  }

  async editNote({ id, title, content }: Note) {
    await prisma.notes.update({
      data: {
        title,
        content,
      },

      where: {
        id: id,
      },
    });
  }

  async deleteNote(id: number) {
    await prisma.notes.delete({
      where: { id: id },
    });
  }
}
