import type { DefineComponent } from 'vue';

export interface BookLockProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookLock: DefineComponent<BookLockProps>;

export default BookLock;
export { BookLock };
