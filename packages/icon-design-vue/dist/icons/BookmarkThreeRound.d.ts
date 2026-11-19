import type { DefineComponent } from 'vue';

export interface BookmarkThreeRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkThreeRound: DefineComponent<BookmarkThreeRoundProps>;

export default BookmarkThreeRound;
export { BookmarkThreeRound };
