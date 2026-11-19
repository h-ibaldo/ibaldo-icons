import type { DefineComponent } from 'vue';

export interface ImageFrameBrokenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ImageFrameBroken: DefineComponent<ImageFrameBrokenProps>;

export default ImageFrameBroken;
export { ImageFrameBroken };
