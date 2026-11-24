import type { DefineComponent } from 'vue';

export interface ImagePeaksProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ImagePeaks: DefineComponent<ImagePeaksProps>;

export default ImagePeaks;
export { ImagePeaks };
