import type { DefineComponent } from 'vue';

export interface BookLabelBlockProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookLabelBlock: DefineComponent<BookLabelBlockProps>;

export default BookLabelBlock;
export { BookLabelBlock };
