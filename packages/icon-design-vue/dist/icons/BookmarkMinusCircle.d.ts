import type { DefineComponent } from 'vue';

export interface BookmarkMinusCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkMinusCircle: DefineComponent<BookmarkMinusCircleProps>;

export default BookmarkMinusCircle;
export { BookmarkMinusCircle };
