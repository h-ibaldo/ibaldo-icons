import type { DefineComponent } from 'vue';

export interface BookmarkMinusRolledProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkMinusRolled: DefineComponent<BookmarkMinusRolledProps>;

export default BookmarkMinusRolled;
export { BookmarkMinusRolled };
