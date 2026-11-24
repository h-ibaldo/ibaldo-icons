import type { DefineComponent } from 'vue';

export interface BookmarkStripeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookmarkStripe: DefineComponent<BookmarkStripeProps>;

export default BookmarkStripe;
export { BookmarkStripe };
