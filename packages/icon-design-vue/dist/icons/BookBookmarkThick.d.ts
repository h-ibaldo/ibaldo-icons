import type { DefineComponent } from 'vue';

export interface BookBookmarkThickProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookBookmarkThick: DefineComponent<BookBookmarkThickProps>;

export default BookBookmarkThick;
export { BookBookmarkThick };
