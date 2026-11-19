import type { DefineComponent } from 'vue';

export interface BookmarkXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkX: DefineComponent<BookmarkXProps>;

export default BookmarkX;
export { BookmarkX };
