import type { DefineComponent } from 'vue';

export interface BookLabelProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookLabel: DefineComponent<BookLabelProps>;

export default BookLabel;
export { BookLabel };
