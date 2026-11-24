import type { DefineComponent } from 'vue';

export interface BookmarkStarCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkStarCorner: DefineComponent<BookmarkStarCornerProps>;

export default BookmarkStarCorner;
export { BookmarkStarCorner };
