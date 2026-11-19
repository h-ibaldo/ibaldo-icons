import type { DefineComponent } from 'vue';

export interface BookmarkStackEdgeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkStackEdge: DefineComponent<BookmarkStackEdgeProps>;

export default BookmarkStackEdge;
export { BookmarkStackEdge };
