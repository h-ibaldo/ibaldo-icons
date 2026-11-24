import type { DefineComponent } from 'vue';

export interface BookAlertProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BookAlert: DefineComponent<BookAlertProps>;

export default BookAlert;
export { BookAlert };
