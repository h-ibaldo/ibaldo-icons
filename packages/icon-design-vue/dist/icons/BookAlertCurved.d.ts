import type { DefineComponent } from 'vue';

export interface BookAlertCurvedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookAlertCurved: DefineComponent<BookAlertCurvedProps>;

export default BookAlertCurved;
export { BookAlertCurved };
