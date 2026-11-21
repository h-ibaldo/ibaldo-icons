import type { DefineComponent } from 'vue';

export interface MobileBoltNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MobileBoltNotch: DefineComponent<MobileBoltNotchProps>;

export default MobileBoltNotch;
export { MobileBoltNotch };
