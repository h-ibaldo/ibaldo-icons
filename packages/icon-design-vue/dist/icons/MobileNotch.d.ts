import type { DefineComponent } from 'vue';

export interface MobileNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MobileNotch: DefineComponent<MobileNotchProps>;

export default MobileNotch;
export { MobileNotch };
