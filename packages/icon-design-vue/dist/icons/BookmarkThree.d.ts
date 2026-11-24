import type { DefineComponent } from 'vue';

export interface BookmarkThreeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkThree: DefineComponent<BookmarkThreeProps>;

export default BookmarkThree;
export { BookmarkThree };
