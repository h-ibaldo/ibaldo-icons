import type { DefineComponent } from 'vue';

export interface BookmarkOffProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkOff: DefineComponent<BookmarkOffProps>;

export default BookmarkOff;
export { BookmarkOff };
