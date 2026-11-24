import type { DefineComponent } from 'vue';

export interface BookCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookCheck: DefineComponent<BookCheckProps>;

export default BookCheck;
export { BookCheck };
