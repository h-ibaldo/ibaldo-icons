import type { DefineComponent } from 'vue';

export interface BookBookmarkSpineProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookBookmarkSpine: DefineComponent<BookBookmarkSpineProps>;

export default BookBookmarkSpine;
export { BookBookmarkSpine };
