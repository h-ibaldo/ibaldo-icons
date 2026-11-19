import type { DefineComponent } from 'vue';

export interface BookmarkXCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkXCircle: DefineComponent<BookmarkXCircleProps>;

export default BookmarkXCircle;
export { BookmarkXCircle };
