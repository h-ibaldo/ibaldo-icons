import type { DefineComponent } from 'vue';

export interface BookKeyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookKey: DefineComponent<BookKeyProps>;

export default BookKey;
export { BookKey };
