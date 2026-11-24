import type { DefineComponent } from 'vue';

export interface ImageMinusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ImageMinus: DefineComponent<ImageMinusProps>;

export default ImageMinus;
export { ImageMinus };
