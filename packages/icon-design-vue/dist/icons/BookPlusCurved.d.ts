import type { DefineComponent } from 'vue';

export interface BookPlusCurvedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookPlusCurved: DefineComponent<BookPlusCurvedProps>;

export default BookPlusCurved;
export { BookPlusCurved };
