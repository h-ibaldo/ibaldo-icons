import type { DefineComponent } from 'vue';

export interface BookCheckCurvedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookCheckCurved: DefineComponent<BookCheckCurvedProps>;

export default BookCheckCurved;
export { BookCheckCurved };
