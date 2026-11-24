import type { DefineComponent } from 'vue';

export interface BookXCurvedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookXCurved: DefineComponent<BookXCurvedProps>;

export default BookXCurved;
export { BookXCurved };
