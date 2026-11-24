import type { DefineComponent } from 'vue';

export interface DragCursorProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DragCursor: DefineComponent<DragCursorProps>;

export default DragCursor;
export { DragCursor };
