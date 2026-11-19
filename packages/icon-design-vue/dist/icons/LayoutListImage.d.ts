import type { DefineComponent } from 'vue';

export interface LayoutListImageProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LayoutListImage: DefineComponent<LayoutListImageProps>;

export default LayoutListImage;
export { LayoutListImage };
