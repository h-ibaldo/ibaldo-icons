import type { DefineComponent } from 'vue';

export interface VolumeXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const VolumeX: DefineComponent<VolumeXProps>;

export default VolumeX;
export { VolumeX };
