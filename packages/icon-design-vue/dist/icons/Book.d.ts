import type { DefineComponent } from 'vue';

export interface BookProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Book: DefineComponent<BookProps>;

export default Book;
export { Book };
