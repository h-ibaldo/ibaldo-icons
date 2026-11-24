import type { DefineComponent } from 'vue';

export interface LayoutLargeImageProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LayoutLargeImage: DefineComponent<LayoutLargeImageProps>;

export default LayoutLargeImage;
export { LayoutLargeImage };
