import type { DefineComponent } from 'vue';

export interface BookmarkDottedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkDotted: DefineComponent<BookmarkDottedProps>;

export default BookmarkDotted;
export { BookmarkDotted };
