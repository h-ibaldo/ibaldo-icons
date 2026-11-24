import type { DefineComponent } from 'vue';

export interface BookOpenCoverProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookOpenCover: DefineComponent<BookOpenCoverProps>;

export default BookOpenCover;
export { BookOpenCover };
