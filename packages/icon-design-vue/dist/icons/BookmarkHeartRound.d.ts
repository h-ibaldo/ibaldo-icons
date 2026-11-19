import type { DefineComponent } from 'vue';

export interface BookmarkHeartRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkHeartRound: DefineComponent<BookmarkHeartRoundProps>;

export default BookmarkHeartRound;
export { BookmarkHeartRound };
