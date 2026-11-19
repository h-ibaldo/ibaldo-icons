import type { DefineComponent } from 'vue';

export interface MobileCartCenterProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MobileCartCenter: DefineComponent<MobileCartCenterProps>;

export default MobileCartCenter;
export { MobileCartCenter };
