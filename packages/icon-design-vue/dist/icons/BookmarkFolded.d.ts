import type { DefineComponent } from 'vue';

export interface BookmarkFoldedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkFolded: DefineComponent<BookmarkFoldedProps>;

export default BookmarkFolded;
export { BookmarkFolded };
