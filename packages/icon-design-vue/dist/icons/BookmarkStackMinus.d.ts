import type { DefineComponent } from 'vue';

export interface BookmarkStackMinusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkStackMinus: DefineComponent<BookmarkStackMinusProps>;

export default BookmarkStackMinus;
export { BookmarkStackMinus };
