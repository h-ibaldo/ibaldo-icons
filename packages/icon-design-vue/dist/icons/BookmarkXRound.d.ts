import type { DefineComponent } from 'vue';

export interface BookmarkXRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkXRound: DefineComponent<BookmarkXRoundProps>;

export default BookmarkXRound;
export { BookmarkXRound };
