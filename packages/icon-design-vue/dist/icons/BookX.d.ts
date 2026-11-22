import type { DefineComponent } from 'vue';

export interface BookXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookX: DefineComponent<BookXProps>;

export default BookX;
export { BookX };
