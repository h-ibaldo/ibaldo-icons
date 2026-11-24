import type { DefineComponent } from 'vue';

export interface PointerXStraightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PointerXStraight: DefineComponent<PointerXStraightProps>;

export default PointerXStraight;
export { PointerXStraight };
