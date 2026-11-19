import type { DefineComponent } from 'vue';

export interface LayoutLargeFlowerFramedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LayoutLargeFlowerFramed: DefineComponent<LayoutLargeFlowerFramedProps>;

export default LayoutLargeFlowerFramed;
export { LayoutLargeFlowerFramed };
