import type { DefineComponent } from 'vue';

export interface MobileRingNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MobileRingNotch: DefineComponent<MobileRingNotchProps>;

export default MobileRingNotch;
export { MobileRingNotch };
