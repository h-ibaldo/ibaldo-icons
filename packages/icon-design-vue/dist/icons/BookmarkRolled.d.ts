import type { DefineComponent } from 'vue';

export interface BookmarkRolledProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkRolled: DefineComponent<BookmarkRolledProps>;

export default BookmarkRolled;
export { BookmarkRolled };
