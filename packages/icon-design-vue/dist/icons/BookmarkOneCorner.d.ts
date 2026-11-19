import type { DefineComponent } from 'vue';

export interface BookmarkOneCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkOneCorner: DefineComponent<BookmarkOneCornerProps>;

export default BookmarkOneCorner;
export { BookmarkOneCorner };
