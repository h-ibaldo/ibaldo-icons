import type { DefineComponent } from 'vue';

export interface BookmarkOneRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkOneRound: DefineComponent<BookmarkOneRoundProps>;

export default BookmarkOneRound;
export { BookmarkOneRound };
