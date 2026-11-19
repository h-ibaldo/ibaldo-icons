import type { DefineComponent } from 'vue';

export interface BookmarkThreeCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkThreeCorner: DefineComponent<BookmarkThreeCornerProps>;

export default BookmarkThreeCorner;
export { BookmarkThreeCorner };
