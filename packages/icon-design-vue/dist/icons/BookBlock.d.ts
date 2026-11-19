import type { DefineComponent } from 'vue';

export interface BookBlockProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookBlock: DefineComponent<BookBlockProps>;

export default BookBlock;
export { BookBlock };
