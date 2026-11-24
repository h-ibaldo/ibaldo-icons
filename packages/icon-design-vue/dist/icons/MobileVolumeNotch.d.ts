import type { DefineComponent } from 'vue';

export interface MobileVolumeNotchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MobileVolumeNotch: DefineComponent<MobileVolumeNotchProps>;

export default MobileVolumeNotch;
export { MobileVolumeNotch };
