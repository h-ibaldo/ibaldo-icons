import type { DefineComponent } from 'vue';

export interface ImageSquareDashedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ImageSquareDashed: DefineComponent<ImageSquareDashedProps>;

export default ImageSquareDashed;
export { ImageSquareDashed };
