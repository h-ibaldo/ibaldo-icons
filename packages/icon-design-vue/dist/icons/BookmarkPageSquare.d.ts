import type { DefineComponent } from 'vue';

export interface BookmarkPageSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkPageSquare: DefineComponent<BookmarkPageSquareProps>;

export default BookmarkPageSquare;
export { BookmarkPageSquare };
