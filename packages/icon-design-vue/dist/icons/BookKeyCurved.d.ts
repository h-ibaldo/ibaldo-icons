import type { DefineComponent } from 'vue';

export interface BookKeyCurvedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookKeyCurved: DefineComponent<BookKeyCurvedProps>;

export default BookKeyCurved;
export { BookKeyCurved };
