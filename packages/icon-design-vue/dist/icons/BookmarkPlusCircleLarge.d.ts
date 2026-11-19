import type { DefineComponent } from 'vue';

export interface BookmarkPlusCircleLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkPlusCircleLarge: DefineComponent<BookmarkPlusCircleLargeProps>;

export default BookmarkPlusCircleLarge;
export { BookmarkPlusCircleLarge };
