import type { DefineComponent } from 'vue';

export interface BookInfoRoundedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookInfoRounded: DefineComponent<BookInfoRoundedProps>;

export default BookInfoRounded;
export { BookInfoRounded };
