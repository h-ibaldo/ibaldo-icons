import type { DefineComponent } from 'vue';

export interface BookmarkRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkRound: DefineComponent<BookmarkRoundProps>;

export default BookmarkRound;
export { BookmarkRound };
