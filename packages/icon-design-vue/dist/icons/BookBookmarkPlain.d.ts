import type { DefineComponent } from 'vue';

export interface BookBookmarkPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookBookmarkPlain: DefineComponent<BookBookmarkPlainProps>;

export default BookBookmarkPlain;
export { BookBookmarkPlain };
