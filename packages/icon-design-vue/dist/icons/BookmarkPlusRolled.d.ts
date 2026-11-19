import type { DefineComponent } from 'vue';

export interface BookmarkPlusRolledProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkPlusRolled: DefineComponent<BookmarkPlusRolledProps>;

export default BookmarkPlusRolled;
export { BookmarkPlusRolled };
