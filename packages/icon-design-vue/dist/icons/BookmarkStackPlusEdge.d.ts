import type { DefineComponent } from 'vue';

export interface BookmarkStackPlusEdgeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkStackPlusEdge: DefineComponent<BookmarkStackPlusEdgeProps>;

export default BookmarkStackPlusEdge;
export { BookmarkStackPlusEdge };
