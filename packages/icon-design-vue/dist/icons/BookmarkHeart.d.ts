import type { DefineComponent } from 'vue';

export interface BookmarkHeartProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkHeart: DefineComponent<BookmarkHeartProps>;

export default BookmarkHeart;
export { BookmarkHeart };
