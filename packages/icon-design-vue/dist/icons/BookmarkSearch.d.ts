import type { DefineComponent } from 'vue';

export interface BookmarkSearchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkSearch: DefineComponent<BookmarkSearchProps>;

export default BookmarkSearch;
export { BookmarkSearch };
