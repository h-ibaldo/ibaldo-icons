import type { DefineComponent } from 'vue';

export interface ImageFramelessProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ImageFrameless: DefineComponent<ImageFramelessProps>;

export default ImageFrameless;
export { ImageFrameless };
