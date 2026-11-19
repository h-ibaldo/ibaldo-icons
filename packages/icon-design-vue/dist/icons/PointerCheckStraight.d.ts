import type { DefineComponent } from 'vue';

export interface PointerCheckStraightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PointerCheckStraight: DefineComponent<PointerCheckStraightProps>;

export default PointerCheckStraight;
export { PointerCheckStraight };
