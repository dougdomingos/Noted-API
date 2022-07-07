export interface NotesRequestData {
  noteID?: number;
  title: string;
  content: string;
}

export interface NoteRepository {
  getNotes: () => Promise<void>;
  createNote: (data: NotesRequestData) => Promise<void>;
  editNote: (data: NotesRequestData) => Promise<void>;
  deleteNote: (noteID: number) => Promise<void>;
}
