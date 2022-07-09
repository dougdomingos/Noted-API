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
});
