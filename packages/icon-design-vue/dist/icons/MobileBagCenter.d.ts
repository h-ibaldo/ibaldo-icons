import type { DefineComponent } from 'vue';

export interface MobileBagCenterProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MobileBagCenter: DefineComponent<MobileBagCenterProps>;

export default MobileBagCenter;
export { MobileBagCenter };
