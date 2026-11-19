import type { DefineComponent } from 'vue';

export interface BookmarkCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkCircle: DefineComponent<BookmarkCircleProps>;

export default BookmarkCircle;
export { BookmarkCircle };
