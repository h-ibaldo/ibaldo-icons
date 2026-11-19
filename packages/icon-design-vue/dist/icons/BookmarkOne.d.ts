import type { DefineComponent } from 'vue';

export interface BookmarkOneProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkOne: DefineComponent<BookmarkOneProps>;

export default BookmarkOne;
export { BookmarkOne };
