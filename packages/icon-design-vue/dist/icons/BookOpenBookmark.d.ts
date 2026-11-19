import type { DefineComponent } from 'vue';

export interface BookOpenBookmarkProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookOpenBookmark: DefineComponent<BookOpenBookmarkProps>;

export default BookOpenBookmark;
export { BookOpenBookmark };
