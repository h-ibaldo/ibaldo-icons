import type { DefineComponent } from 'vue';

export interface LayoutGridImageProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LayoutGridImage: DefineComponent<LayoutGridImageProps>;

export default LayoutGridImage;
export { LayoutGridImage };
