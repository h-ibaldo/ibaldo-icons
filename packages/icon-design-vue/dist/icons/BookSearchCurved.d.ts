import type { DefineComponent } from 'vue';

export interface BookSearchCurvedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookSearchCurved: DefineComponent<BookSearchCurvedProps>;

export default BookSearchCurved;
export { BookSearchCurved };
