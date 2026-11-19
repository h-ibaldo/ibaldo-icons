import type { DefineComponent } from 'vue';

export interface ImageFrameOrnateProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ImageFrameOrnate: DefineComponent<ImageFrameOrnateProps>;

export default ImageFrameOrnate;
export { ImageFrameOrnate };
