import type { DefineComponent } from 'vue';

export interface BookArrowUpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookArrowUp: DefineComponent<BookArrowUpProps>;

export default BookArrowUp;
export { BookArrowUp };
