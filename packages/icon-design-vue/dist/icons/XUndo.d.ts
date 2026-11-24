import type { DefineComponent } from 'vue';

export interface XUndoProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const XUndo: DefineComponent<XUndoProps>;

export default XUndo;
export { XUndo };
