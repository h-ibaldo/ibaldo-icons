import type { DefineComponent } from 'vue';

export interface BookmarkStackCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkStackCheck: DefineComponent<BookmarkStackCheckProps>;

export default BookmarkStackCheck;
export { BookmarkStackCheck };
