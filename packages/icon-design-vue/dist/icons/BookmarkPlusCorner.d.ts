import type { DefineComponent } from 'vue';

export interface BookmarkPlusCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkPlusCorner: DefineComponent<BookmarkPlusCornerProps>;

export default BookmarkPlusCorner;
export { BookmarkPlusCorner };
