import type { DefineComponent } from 'vue';

export interface BookmarkXCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkXCorner: DefineComponent<BookmarkXCornerProps>;

export default BookmarkXCorner;
export { BookmarkXCorner };
