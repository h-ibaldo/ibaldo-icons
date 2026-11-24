import type { DefineComponent } from 'vue';

export interface PointerBanStraightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PointerBanStraight: DefineComponent<PointerBanStraightProps>;

export default PointerBanStraight;
export { PointerBanStraight };
