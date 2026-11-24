import type { DefineComponent } from 'vue';

export interface BookmarkStackTopProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkStackTop: DefineComponent<BookmarkStackTopProps>;

export default BookmarkStackTop;
export { BookmarkStackTop };
