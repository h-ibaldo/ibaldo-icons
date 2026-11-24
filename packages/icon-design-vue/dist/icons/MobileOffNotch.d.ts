import type { DefineComponent } from 'vue';

export interface MobileOffNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MobileOffNotch: DefineComponent<MobileOffNotchProps>;

export default MobileOffNotch;
export { MobileOffNotch };
