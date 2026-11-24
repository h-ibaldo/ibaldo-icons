import type { DefineComponent } from 'vue';

export interface BookNoteProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookNote: DefineComponent<BookNoteProps>;

export default BookNote;
export { BookNote };
