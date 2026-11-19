import type { DefineComponent } from 'vue';

export interface BookLabelCurvedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookLabelCurved: DefineComponent<BookLabelCurvedProps>;

export default BookLabelCurved;
export { BookLabelCurved };
