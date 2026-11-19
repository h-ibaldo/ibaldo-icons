import type { DefineComponent } from 'vue';

export interface BookOpenCoverCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookOpenCoverCircle: DefineComponent<BookOpenCoverCircleProps>;

export default BookOpenCoverCircle;
export { BookOpenCoverCircle };
