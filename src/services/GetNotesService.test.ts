import { GetNotesService } from "./GetNotesService";

const getNotesSpy = jest.fn();

const getNotes = new GetNotesService({ getNotes: getNotesSpy });

describe("Get notes from database", () => {
  it("should sucessfully get notes from database", async () => {
    await expect(getNotes.execute()).resolves.not.toThrow();

    expect(getNotesSpy).toBeCalled();
  });
});
