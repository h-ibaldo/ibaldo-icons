import type { DefineComponent } from 'vue';

export interface BookmarkDotsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkDots: DefineComponent<BookmarkDotsProps>;

export default BookmarkDots;
export { BookmarkDots };
