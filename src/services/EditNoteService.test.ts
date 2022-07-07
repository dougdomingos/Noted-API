import { EditNoteService } from "./EditNoteService";

const editNoteSpy = jest.fn();

const editNote = new EditNoteService({ editNote: editNoteSpy });

describe("Edit a note", () => {
  it("should sucessfully edit a note", async () => {
    await expect(
      editNote.execute({
        noteID: 0,
        title: "New title",
        content: "I'm an edited note!",
      })
    ).resolves.not.toThrow();

    expect(editNoteSpy).toHaveBeenCalled();
  });

  it("should be able to edit the title of a note", async () => {
    await expect(
      editNote.execute({
        noteID: 1,
        title: "Editing only the title!",
        content: "",
      })
    ).resolves.not.toThrow();

    expect(editNoteSpy).toHaveBeenCalled();
  });

  it("should be able to edit the content of a note", async () => {
    await expect(
      editNote.execute({
        noteID: 2,
        title: "",
        content: "Now only the content!",
      })
    ).resolves.not.toThrow();

    expect(editNoteSpy).toHaveBeenCalled();
  });

  it("should not be able to edit a note when no values are provided", async () => {
    await expect(
      editNote.execute({
        noteID: 14,
        title: "",
        content: "",
      })
    ).rejects.toThrow();
  });
});
