import type { DefineComponent } from 'vue';

export interface BookmarkStripedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkStriped: DefineComponent<BookmarkStripedProps>;

export default BookmarkStriped;
export { BookmarkStriped };
