import type { DefineComponent } from 'vue';

export interface CursorProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Cursor: DefineComponent<CursorProps>;

export default Cursor;
export { Cursor };
