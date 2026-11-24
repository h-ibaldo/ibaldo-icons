import type { DefineComponent } from 'vue';

export interface BookSearchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookSearch: DefineComponent<BookSearchProps>;

export default BookSearch;
export { BookSearch };
