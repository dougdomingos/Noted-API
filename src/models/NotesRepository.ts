export interface Note {
  id?: number;
  title: string;
  content: string;
}

export interface NotesRepository {
  getNotes?: () => Promise<Note[]>;
  createNote?: (data: Note) => Promise<void>;
  editNote?: (data: Note) => Promise<void>;
  deleteNote?: (id: number) => Promise<void>;
}
