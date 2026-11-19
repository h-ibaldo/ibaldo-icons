import type { DefineComponent } from 'vue';

export interface ImageCornersProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ImageCorners: DefineComponent<ImageCornersProps>;

export default ImageCorners;
export { ImageCorners };
