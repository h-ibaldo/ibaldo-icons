import type { DefineComponent } from 'vue';

export interface ImageDashedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ImageDashed: DefineComponent<ImageDashedProps>;

export default ImageDashed;
export { ImageDashed };
