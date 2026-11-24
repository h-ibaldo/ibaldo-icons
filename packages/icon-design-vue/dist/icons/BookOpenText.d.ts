import type { DefineComponent } from 'vue';

export interface BookOpenTextProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookOpenText: DefineComponent<BookOpenTextProps>;

export default BookOpenText;
export { BookOpenText };
