import type { DefineComponent } from 'vue';

export interface MobilePowerNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MobilePowerNotch: DefineComponent<MobilePowerNotchProps>;

export default MobilePowerNotch;
export { MobilePowerNotch };
