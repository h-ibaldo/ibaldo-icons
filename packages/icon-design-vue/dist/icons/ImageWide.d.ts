import type { DefineComponent } from 'vue';

export interface ImageWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ImageWide: DefineComponent<ImageWideProps>;

export default ImageWide;
export { ImageWide };
