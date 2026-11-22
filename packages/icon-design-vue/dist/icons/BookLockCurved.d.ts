import type { DefineComponent } from 'vue';

export interface BookLockCurvedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookLockCurved: DefineComponent<BookLockCurvedProps>;

export default BookLockCurved;
export { BookLockCurved };
