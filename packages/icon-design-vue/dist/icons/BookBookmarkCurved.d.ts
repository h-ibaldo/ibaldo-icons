import type { DefineComponent } from 'vue';

export interface BookBookmarkCurvedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookBookmarkCurved: DefineComponent<BookBookmarkCurvedProps>;

export default BookBookmarkCurved;
export { BookBookmarkCurved };
