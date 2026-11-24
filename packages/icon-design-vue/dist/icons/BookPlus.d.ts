import type { DefineComponent } from 'vue';

export interface BookPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookPlus: DefineComponent<BookPlusProps>;

export default BookPlus;
export { BookPlus };
