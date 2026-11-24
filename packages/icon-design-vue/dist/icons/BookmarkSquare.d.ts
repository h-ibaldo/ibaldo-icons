import type { DefineComponent } from 'vue';

export interface BookmarkSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkSquare: DefineComponent<BookmarkSquareProps>;

export default BookmarkSquare;
export { BookmarkSquare };
