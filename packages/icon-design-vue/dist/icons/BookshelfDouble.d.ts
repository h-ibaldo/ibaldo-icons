import type { DefineComponent } from 'vue';

export interface BookshelfDoubleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookshelfDouble: DefineComponent<BookshelfDoubleProps>;

export default BookshelfDouble;
export { BookshelfDouble };
