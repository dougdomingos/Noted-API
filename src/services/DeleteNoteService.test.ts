import { DeleteNoteService } from "./DeleteNoteService";

const deleteNoteSpy = jest.fn();

const deleteNote = new DeleteNoteService({ deleteNote: deleteNoteSpy });

describe("Delete a note", () => {
  it("should sucessfully delete a note", async () => {
    await expect(
      deleteNote.execute({
        noteID: 0,
      })
    ).resolves.not.toThrow();

    expect(deleteNoteSpy).toBeCalled();
  });
});
