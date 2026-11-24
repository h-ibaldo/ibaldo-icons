import type { DefineComponent } from 'vue';

export interface ImageMountainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ImageMountain: DefineComponent<ImageMountainProps>;

export default ImageMountain;
export { ImageMountain };
