import type { DefineComponent } from 'vue';

export interface CursorStraightSlimProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CursorStraightSlim: DefineComponent<CursorStraightSlimProps>;

export default CursorStraightSlim;
export { CursorStraightSlim };
