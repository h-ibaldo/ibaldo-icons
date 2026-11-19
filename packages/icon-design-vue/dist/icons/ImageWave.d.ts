import type { DefineComponent } from 'vue';

export interface ImageWaveProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ImageWave: DefineComponent<ImageWaveProps>;

export default ImageWave;
export { ImageWave };
