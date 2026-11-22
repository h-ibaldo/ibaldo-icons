import type { DefineComponent } from 'vue';

export interface ImagePlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ImagePlus: DefineComponent<ImagePlusProps>;

export default ImagePlus;
export { ImagePlus };
