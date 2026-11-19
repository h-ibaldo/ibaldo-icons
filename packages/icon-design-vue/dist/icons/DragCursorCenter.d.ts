import type { DefineComponent } from 'vue';

export interface DragCursorCenterProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DragCursorCenter: DefineComponent<DragCursorCenterProps>;

export default DragCursorCenter;
export { DragCursorCenter };
