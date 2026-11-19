import type { DefineComponent } from 'vue';

export interface CardTextCursorProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CardTextCursor: DefineComponent<CardTextCursorProps>;

export default CardTextCursor;
export { CardTextCursor };
