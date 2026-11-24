import type { DefineComponent } from 'vue';

export interface BookmarkStarRolledProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkStarRolled: DefineComponent<BookmarkStarRolledProps>;

export default BookmarkStarRolled;
export { BookmarkStarRolled };
