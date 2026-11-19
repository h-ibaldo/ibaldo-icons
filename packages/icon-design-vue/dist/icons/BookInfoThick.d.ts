import type { DefineComponent } from 'vue';

export interface BookInfoThickProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookInfoThick: DefineComponent<BookInfoThickProps>;

export default BookInfoThick;
export { BookInfoThick };
