import type { DefineComponent } from 'vue';

export interface BookmarkCheckRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkCheckRound: DefineComponent<BookmarkCheckRoundProps>;

export default BookmarkCheckRound;
export { BookmarkCheckRound };
