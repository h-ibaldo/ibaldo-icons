import type { DefineComponent } from 'vue';

export interface BookBookmarkProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookBookmark: DefineComponent<BookBookmarkProps>;

export default BookBookmark;
export { BookBookmark };
