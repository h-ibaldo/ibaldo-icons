import type { DefineComponent } from 'vue';

export interface BookMinusCurvedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookMinusCurved: DefineComponent<BookMinusCurvedProps>;

export default BookMinusCurved;
export { BookMinusCurved };
