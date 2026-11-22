import type { DefineComponent } from 'vue';

export interface BookArrowDownProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookArrowDown: DefineComponent<BookArrowDownProps>;

export default BookArrowDown;
export { BookArrowDown };
