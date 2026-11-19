import type { DefineComponent } from 'vue';

export interface VolumeTranslateProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const VolumeTranslate: DefineComponent<VolumeTranslateProps>;

export default VolumeTranslate;
export { VolumeTranslate };
