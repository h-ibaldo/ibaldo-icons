import type { DefineComponent } from 'vue';

export interface PointerCardStraightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PointerCardStraight: DefineComponent<PointerCardStraightProps>;

export default PointerCardStraight;
export { PointerCardStraight };
