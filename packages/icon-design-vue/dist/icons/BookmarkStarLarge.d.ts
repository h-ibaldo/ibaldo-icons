import type { DefineComponent } from 'vue';

export interface BookmarkStarLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkStarLarge: DefineComponent<BookmarkStarLargeProps>;

export default BookmarkStarLarge;
export { BookmarkStarLarge };
