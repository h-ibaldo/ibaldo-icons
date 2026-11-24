import type { DefineComponent } from 'vue';

export interface BookmarkMinusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkMinus: DefineComponent<BookmarkMinusProps>;

export default BookmarkMinus;
export { BookmarkMinus };
