import type { DefineComponent } from 'vue';

export interface BookmarkDotsCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkDotsCircle: DefineComponent<BookmarkDotsCircleProps>;

export default BookmarkDotsCircle;
export { BookmarkDotsCircle };
