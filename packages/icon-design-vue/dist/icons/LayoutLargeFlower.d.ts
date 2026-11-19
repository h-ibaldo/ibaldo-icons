import type { DefineComponent } from 'vue';

export interface LayoutLargeFlowerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LayoutLargeFlower: DefineComponent<LayoutLargeFlowerProps>;

export default LayoutLargeFlower;
export { LayoutLargeFlower };
