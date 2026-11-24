import type { DefineComponent } from 'vue';

export interface BookmarkOffRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkOffRound: DefineComponent<BookmarkOffRoundProps>;

export default BookmarkOffRound;
export { BookmarkOffRound };
