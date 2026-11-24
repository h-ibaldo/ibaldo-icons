import type { DefineComponent } from 'vue';

export interface VolumeOffProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const VolumeOff: DefineComponent<VolumeOffProps>;

export default VolumeOff;
export { VolumeOff };
