import { DeleteNoteService } from "./DeleteNoteService";

const deleteNoteSpy = jest.fn();

const deleteNote = new DeleteNoteService({ deleteNote: deleteNoteSpy });

describe("Delete a note", () => {
  it("should sucessfully delete a note", async () => {
    await expect(
      deleteNote.execute({
        id: 0,
      })
    ).resolves.not.toThrow();

    expect(deleteNoteSpy).toBeCalled();
  });

  it("should not validate a non-number ID value", async () => {
    await expect(
      deleteNote.execute({
        // @ts-ignore
        id: "note-1",
      })
    ).rejects.toThrow();
  });

  it("should not validate a negative ID value", async () => {
    await expect(
      deleteNote.execute({
        id: -12,
      })
    ).rejects.toThrow();
  });
});
