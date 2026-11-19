import type { DefineComponent } from 'vue';

export interface BookmarkStripeDoubleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkStripeDouble: DefineComponent<BookmarkStripeDoubleProps>;

export default BookmarkStripeDouble;
export { BookmarkStripeDouble };
