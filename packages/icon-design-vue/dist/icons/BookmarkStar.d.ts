import type { DefineComponent } from 'vue';

export interface BookmarkStarProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkStar: DefineComponent<BookmarkStarProps>;

export default BookmarkStar;
export { BookmarkStar };
