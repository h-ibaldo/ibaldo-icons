import type { DefineComponent } from 'vue';

export interface BookOpenCurvedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookOpenCurved: DefineComponent<BookOpenCurvedProps>;

export default BookOpenCurved;
export { BookOpenCurved };
