import { CreateNoteService } from "./CreateNoteService";

const createNoteSpy = jest.fn();

const createNote = new CreateNoteService({ createNote: createNoteSpy });

describe("Create new note", () => {
  it("should sucessfully create a note", async () => {
    await expect(
      createNote.execute({
        title: "Hello!",
        content: "I'm the testing note!",
      })
    ).resolves.not.toThrow();

    // checks if the database function was called
    expect(createNoteSpy).toHaveBeenCalled();
  });

  it("should not be able to create a note without title", async () => {
    await expect(
      createNote.execute({
        title: "",
        content: "I have no title!",
      })
    ).rejects.toThrow();
  });

  it("should not be able to create a note without content", async () => {
    await expect(
      createNote.execute({
        title: "I am empty :(",
        content: "",
      })
    ).rejects.toThrow();
  });
});
