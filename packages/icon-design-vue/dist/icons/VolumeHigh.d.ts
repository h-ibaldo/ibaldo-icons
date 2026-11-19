import type { DefineComponent } from 'vue';

export interface VolumeHighProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const VolumeHigh: DefineComponent<VolumeHighProps>;

export default VolumeHigh;
export { VolumeHigh };
