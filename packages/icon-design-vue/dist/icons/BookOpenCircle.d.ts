import type { DefineComponent } from 'vue';

export interface BookOpenCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookOpenCircle: DefineComponent<BookOpenCircleProps>;

export default BookOpenCircle;
export { BookOpenCircle };
