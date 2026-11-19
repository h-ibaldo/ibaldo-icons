import type { DefineComponent } from 'vue';

export interface BookCurvedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookCurved: DefineComponent<BookCurvedProps>;

export default BookCurved;
export { BookCurved };
