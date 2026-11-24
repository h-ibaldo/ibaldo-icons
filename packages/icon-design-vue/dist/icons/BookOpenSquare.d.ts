import type { DefineComponent } from 'vue';

export interface BookOpenSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookOpenSquare: DefineComponent<BookOpenSquareProps>;

export default BookOpenSquare;
export { BookOpenSquare };
