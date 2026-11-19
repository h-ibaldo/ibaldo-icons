import type { DefineComponent } from 'vue';

export interface CursorStraightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CursorStraight: DefineComponent<CursorStraightProps>;

export default CursorStraight;
export { CursorStraight };
