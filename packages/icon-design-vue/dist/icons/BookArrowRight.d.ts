import type { DefineComponent } from 'vue';

export interface BookArrowRightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookArrowRight: DefineComponent<BookArrowRightProps>;

export default BookArrowRight;
export { BookArrowRight };
