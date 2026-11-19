import type { DefineComponent } from 'vue';

export interface BookmarkStackPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkStackPlus: DefineComponent<BookmarkStackPlusProps>;

export default BookmarkStackPlus;
export { BookmarkStackPlus };
