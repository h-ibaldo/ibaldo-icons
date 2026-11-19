import type { DefineComponent } from 'vue';

export interface BookmarkStackXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkStackX: DefineComponent<BookmarkStackXProps>;

export default BookmarkStackX;
export { BookmarkStackX };
