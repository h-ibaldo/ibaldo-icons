import type { DefineComponent } from 'vue';

export interface BookmarkTwoProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkTwo: DefineComponent<BookmarkTwoProps>;

export default BookmarkTwo;
export { BookmarkTwo };
