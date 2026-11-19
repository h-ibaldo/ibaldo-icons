import type { DefineComponent } from 'vue';

export interface BookmarkTwoCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkTwoCorner: DefineComponent<BookmarkTwoCornerProps>;

export default BookmarkTwoCorner;
export { BookmarkTwoCorner };
