import type { DefineComponent } from 'vue';

export interface BookBookmarkUnderlineProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookBookmarkUnderline: DefineComponent<BookBookmarkUnderlineProps>;

export default BookBookmarkUnderline;
export { BookBookmarkUnderline };
