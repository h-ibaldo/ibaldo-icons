import type { DefineComponent } from 'vue';

export interface BookmarkMinusRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkMinusRound: DefineComponent<BookmarkMinusRoundProps>;

export default BookmarkMinusRound;
export { BookmarkMinusRound };
