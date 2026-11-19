import type { DefineComponent } from 'vue';

export interface BookStackOffsetProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookStackOffset: DefineComponent<BookStackOffsetProps>;

export default BookStackOffset;
export { BookStackOffset };
