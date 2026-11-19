import type { DefineComponent } from 'vue';

export interface ImageCurveProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ImageCurve: DefineComponent<ImageCurveProps>;

export default ImageCurve;
export { ImageCurve };
