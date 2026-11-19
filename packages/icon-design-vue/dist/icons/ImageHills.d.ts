import type { DefineComponent } from 'vue';

export interface ImageHillsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ImageHills: DefineComponent<ImageHillsProps>;

export default ImageHills;
export { ImageHills };
