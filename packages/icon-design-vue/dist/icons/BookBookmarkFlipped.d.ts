import type { DefineComponent } from 'vue';

export interface BookBookmarkFlippedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookBookmarkFlipped: DefineComponent<BookBookmarkFlippedProps>;

export default BookBookmarkFlipped;
export { BookBookmarkFlipped };
