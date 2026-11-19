import type { DefineComponent } from 'vue';

export interface BookBookmarkRoundedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookBookmarkRounded: DefineComponent<BookBookmarkRoundedProps>;

export default BookBookmarkRounded;
export { BookBookmarkRounded };
