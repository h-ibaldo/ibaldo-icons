import type { DefineComponent } from 'vue';

export interface BookmarkPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkPlus: DefineComponent<BookmarkPlusProps>;

export default BookmarkPlus;
export { BookmarkPlus };
