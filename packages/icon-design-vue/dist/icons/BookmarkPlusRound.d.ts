import type { DefineComponent } from 'vue';

export interface BookmarkPlusRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkPlusRound: DefineComponent<BookmarkPlusRoundProps>;

export default BookmarkPlusRound;
export { BookmarkPlusRound };
