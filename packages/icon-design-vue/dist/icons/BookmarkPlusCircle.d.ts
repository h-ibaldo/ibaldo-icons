import type { DefineComponent } from 'vue';

export interface BookmarkPlusCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkPlusCircle: DefineComponent<BookmarkPlusCircleProps>;

export default BookmarkPlusCircle;
export { BookmarkPlusCircle };
