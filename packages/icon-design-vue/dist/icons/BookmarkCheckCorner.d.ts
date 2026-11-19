import type { DefineComponent } from 'vue';

export interface BookmarkCheckCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkCheckCorner: DefineComponent<BookmarkCheckCornerProps>;

export default BookmarkCheckCorner;
export { BookmarkCheckCorner };
