import type { DefineComponent } from 'vue';

export interface BookmarkStackProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkStack: DefineComponent<BookmarkStackProps>;

export default BookmarkStack;
export { BookmarkStack };
