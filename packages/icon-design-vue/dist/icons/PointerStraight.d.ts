import type { DefineComponent } from 'vue';

export interface PointerStraightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PointerStraight: DefineComponent<PointerStraightProps>;

export default PointerStraight;
export { PointerStraight };
