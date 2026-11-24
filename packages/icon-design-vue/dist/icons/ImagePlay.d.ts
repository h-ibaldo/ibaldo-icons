import type { DefineComponent } from 'vue';

export interface ImagePlayProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ImagePlay: DefineComponent<ImagePlayProps>;

export default ImagePlay;
export { ImagePlay };
