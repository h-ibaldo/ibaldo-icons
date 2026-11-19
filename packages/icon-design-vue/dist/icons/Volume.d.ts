import type { DefineComponent } from 'vue';

export interface VolumeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Volume: DefineComponent<VolumeProps>;

export default Volume;
export { Volume };
