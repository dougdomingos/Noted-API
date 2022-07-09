import { EditNoteService } from "./EditNoteService";

const editNoteSpy = jest.fn();

const editNote = new EditNoteService({ editNote: editNoteSpy });

describe("Edit a note", () => {
  it("should sucessfully edit a note", async () => {
    await expect(
      editNote.execute({
        id: 0,
        title: "New title",
        content: "I'm an edited note!",
      })
    ).resolves.not.toThrow();

    expect(editNoteSpy).toHaveBeenCalled();
  });

  it("should be able to edit the title of a note", async () => {
    await expect(
      editNote.execute({
        id: 1,
        title: "Editing only the title!",
        content: "",
      })
    ).resolves.not.toThrow();

    expect(editNoteSpy).toHaveBeenCalled();
  });

  it("should be able to edit the content of a note", async () => {
    await expect(
      editNote.execute({
        id: 2,
        title: "",
        content: "Now only the content!",
      })
    ).resolves.not.toThrow();

    expect(editNoteSpy).toHaveBeenCalled();
  });

  it("should not validate a non-number ID value", async () => {
    await expect(
      editNote.execute({
        // @ts-ignore
        id: "note-1",
        title: "Sample title",
        content: "Sample content",
      })
    ).rejects.toThrow();
  });

  it("should not validate a negative ID value", async () => {
    await expect(
      editNote.execute({
        id: -1,
        title: "Sample title",
        content: "Sample content",
      })
    ).rejects.toThrow();
  });

  it("should not be able to edit a note when no values are provided", async () => {
    await expect(
      editNote.execute({
        id: 14,
        title: "Sample title",
        content: "Sample content",
      })
    ).rejects.toThrow();
  });
});
