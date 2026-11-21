import type { DefineComponent } from 'vue';

export interface MobileVolumeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MobileVolume: DefineComponent<MobileVolumeProps>;

export default MobileVolume;
export { MobileVolume };
