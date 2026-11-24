import type { DefineComponent } from 'vue';

export interface BookStackProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookStack: DefineComponent<BookStackProps>;

export default BookStack;
export { BookStack };
