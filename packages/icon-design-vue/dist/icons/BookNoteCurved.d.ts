import type { DefineComponent } from 'vue';

export interface BookNoteCurvedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookNoteCurved: DefineComponent<BookNoteCurvedProps>;

export default BookNoteCurved;
export { BookNoteCurved };
