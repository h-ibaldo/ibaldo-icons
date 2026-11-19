import type { DefineComponent } from 'vue';

export interface BookmarkPageProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkPage: DefineComponent<BookmarkPageProps>;

export default BookmarkPage;
export { BookmarkPage };
