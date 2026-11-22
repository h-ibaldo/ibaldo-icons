import type { DefineComponent } from 'vue';

export interface BookArrowLeftProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookArrowLeft: DefineComponent<BookArrowLeftProps>;

export default BookArrowLeft;
export { BookArrowLeft };
