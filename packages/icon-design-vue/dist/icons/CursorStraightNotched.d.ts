import type { DefineComponent } from 'vue';

export interface CursorStraightNotchedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CursorStraightNotched: DefineComponent<CursorStraightNotchedProps>;

export default CursorStraightNotched;
export { CursorStraightNotched };
