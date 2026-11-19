import type { DefineComponent } from 'vue';

export interface ImageProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Image: DefineComponent<ImageProps>;

export default Image;
export { Image };
