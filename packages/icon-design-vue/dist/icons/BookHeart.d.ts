import type { DefineComponent } from 'vue';

export interface BookHeartProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookHeart: DefineComponent<BookHeartProps>;

export default BookHeart;
export { BookHeart };
