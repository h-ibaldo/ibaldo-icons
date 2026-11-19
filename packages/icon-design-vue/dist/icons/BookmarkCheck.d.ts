import type { DefineComponent } from 'vue';

export interface BookmarkCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkCheck: DefineComponent<BookmarkCheckProps>;

export default BookmarkCheck;
export { BookmarkCheck };
