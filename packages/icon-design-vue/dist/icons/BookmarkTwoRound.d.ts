import type { DefineComponent } from 'vue';

export interface BookmarkTwoRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkTwoRound: DefineComponent<BookmarkTwoRoundProps>;

export default BookmarkTwoRound;
export { BookmarkTwoRound };
