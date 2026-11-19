import type { DefineComponent } from 'vue';

export interface VolumeHighOffProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const VolumeHighOff: DefineComponent<VolumeHighOffProps>;

export default VolumeHighOff;
export { VolumeHighOff };
