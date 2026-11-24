import type { DefineComponent } from 'vue';

export interface BookOpenRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookOpenRound: DefineComponent<BookOpenRoundProps>;

export default BookOpenRound;
export { BookOpenRound };
