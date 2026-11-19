import type { DefineComponent } from 'vue';

export interface BookTextRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookTextRound: DefineComponent<BookTextRoundProps>;

export default BookTextRound;
export { BookTextRound };
