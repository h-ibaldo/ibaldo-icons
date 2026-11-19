import type { DefineComponent } from 'vue';

export interface BookOpenBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookOpenBare: DefineComponent<BookOpenBareProps>;

export default BookOpenBare;
export { BookOpenBare };
