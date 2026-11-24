import type { DefineComponent } from 'vue';

export interface BookMinusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookMinus: DefineComponent<BookMinusProps>;

export default BookMinus;
export { BookMinus };
