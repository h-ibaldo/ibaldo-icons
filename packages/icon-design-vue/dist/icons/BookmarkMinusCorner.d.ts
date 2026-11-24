import type { DefineComponent } from 'vue';

export interface BookmarkMinusCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkMinusCorner: DefineComponent<BookmarkMinusCornerProps>;

export default BookmarkMinusCorner;
export { BookmarkMinusCorner };
