import type { DefineComponent } from 'vue';

export interface BookmarkStarRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkStarRound: DefineComponent<BookmarkStarRoundProps>;

export default BookmarkStarRound;
export { BookmarkStarRound };
