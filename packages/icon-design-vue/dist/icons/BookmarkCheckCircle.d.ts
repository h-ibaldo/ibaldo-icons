import type { DefineComponent } from 'vue';

export interface BookmarkCheckCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkCheckCircle: DefineComponent<BookmarkCheckCircleProps>;

export default BookmarkCheckCircle;
export { BookmarkCheckCircle };
